require('dotenv').config()
const { WakaTimeClient, RANGE } = require('wakatime-client')
const dayjs = require('dayjs')
const { Octokit } = require('@octokit/rest')
const Axios = require('axios')

const {
  WAKATIME_API_KEY,
  GH_TOKEN,
  GIST_ID,
  SCU_KEY,
  TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHAT_ID
} = process.env
const BASE_URL = 'https://wakatime.com/api/v1'
const summariesApi = `${BASE_URL}/users/current/summaries`
const scuPushApi = `https://sctapi.ftqq.com`

// default telegram api endpoint for sending message
const telegramApi =
  TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID
    ? `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
    : null

const wakatime = new WakaTimeClient(WAKATIME_API_KEY)
const octokit = new Octokit({
  auth: `token ${GH_TOKEN}`
})

function getItemContent(title, content) {
  let itemContent = `#### ${title} \n`
  content.forEach(item => {
    itemContent += `* ${item.name}: ${item.text} \n`
  })
  return itemContent
}

// Original formatting for WeChat/ServerChan
function getMessageContent(date, summary) {
  if (summary.length > 0) {
    const { projects, grand_total, languages, categories, editors } = summary[0]
    return `## Wakatime Daily Report\nTotal: ${grand_total.text}\n${getItemContent(
      'Projects',
      projects
    )}\n${getItemContent('Languages', languages)}\n${getItemContent(
      'Editors',
      editors
    )}\n${getItemContent('Categories', categories)}\n`
  }
}

// Telegram-specific makrdown flabored formatting
function getTelegramMessageContent(date, summary) {
  if (summary.length > 0) {
    const { projects, grand_total, languages, categories, editors } = summary[0]
    function mdBlock(title, content) {
      let itemContent = `*${title}*\n`
      content.forEach(item => {
        // • unicode styled dot for simulating list in markdown as there's no native/official support of this format
        itemContent += `• *${item.name}*: ${item.text}\n`
      })
      return itemContent
    }
    return (
      `*Wakatime Report Breakdown of ${date}*\n*Total:* ${grand_total.text}\n\n` +
      mdBlock('Projects', projects) +
      '\n' +
      mdBlock('Languages', languages) +
      '\n' +
      mdBlock('Editors', editors) +
      '\n' +
      mdBlock('Categories', categories)
    )
  }
}

function getMySummary(date) {
  return Axios.get(summariesApi, {
    params: {
      start: date,
      end: date,
      api_key: WAKATIME_API_KEY
    }
  }).then(response => response.data)
}

/**
 * update wakatime content to gist
 * @param {*} date - update date
 * @param {*} content update content
 */
async function updateGist(date, content) {
  const file = ''
  try {
    await octokit.gists.update({
      gist_id: GIST_ID,
      files: {
        [`summaries_${date}.json`]: {
          content: JSON.stringify(content)
        }
      }
    })
  } catch (error) {
    console.error(`Unable to update gist \n ${error}`)
  }
}

/**
 * 推送消息到 Server酱
 * @param {*} text 标题，最初256，必需
 * @param {*} desp 消息内容，最长64kb，可空
 */
async function sendMessageToWechat(text, desp) {
  if (typeof SCU_KEY !== 'undefined') {
    return Axios.get(`${scuPushApi}/${SCU_KEY}.send`, {
      params: {
        text,
        desp
      }
    }).then(response => response.data)
  }
}

/**
 * Send message to Telegram
 * @param {string} text - Title or subject
 * @param {string} desp - Message content
 */
async function sendMessageToTelegram(text, desp) {
  if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
    return Axios.post(telegramApi, {
      chat_id: TELEGRAM_CHAT_ID,
      text: `*${text}*\n${desp}`,
      parse_mode: 'Markdown'
    }).then(response => response.data)
  }
}

const fetchSummaryWithRetry = async times => {
  const yesterday = dayjs()
    .subtract(1, 'day')
    .format('YYYY-MM-DD')
  try {
    const mySummary = await getMySummary(yesterday)
    await updateGist(yesterday, mySummary.data)

    // message title
    const messageTitle = `${yesterday} update successfully!`

    // message contents
    const messageContent = getMessageContent(yesterday, mySummary.data)
    const telegramMessageContent = getTelegramMessageContent(yesterday, mySummary.data)

    // modular send components for both wechat & telegram by parts
    await sendMessageToWechat(messageTitle, messageContent)
    await sendMessageToTelegram(messageTitle, telegramMessageContent)
  } catch (error) {
    // catch and output immediate error message if wakatime fails to fetch data
    if (times === 1) {
      console.error(`Unable to fetch wakatime summary\n ${error} `)

      await sendMessageToWechat(`[${yesterday}]failed to update wakatime data!`)
      await sendMessageToTelegram(`[${yesterday}]failed to update wakatime data!`, '')
      return
    }
    // retry logic log
    console.log(`retry fetch summary data: ${times - 1} time`)
    fetchSummaryWithRetry(times - 1)
  }
}

async function main() {
  fetchSummaryWithRetry(3)
}

main()
