require('dotenv').config()
const { WakaTimeClient, RANGE } = require('wakatime-client')
const dayjs = require('dayjs')
const { Octokit } = require('@octokit/rest')
const Axios = require('axios')

const { WAKATIME_API_KEY, GH_TOKEN, GIST_ID, SCU_KEY } = process.env
const BASE_URL = 'https://wakatime.com/api/v1'
const summariesApi = `${BASE_URL}/users/current/summaries`
const scuPushApi = `https://sctapi.ftqq.com`

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

const fetchSummaryWithRetry = async times => {
  const yesterday = dayjs()
    .subtract(1, 'day')
    .format('YYYY-MM-DD')
  try {
    const mySummary = await getMySummary(yesterday)
    await updateGist(yesterday, mySummary.data)
    await sendMessageToWechat(
      `${yesterday} update successfully!`,
      getMessageContent(yesterday, mySummary.data)
    )
  } catch (error) {
    if (times === 1) {
      console.error(`Unable to fetch wakatime summary\n ${error} `)
      return await sendMessageToWechat(`[${yesterday}]failed to update wakatime data!`)
    }
    console.log(`retry fetch summary data: ${times - 1} time`)
    fetchSummaryWithRetry(times - 1)
  }
}

async function main() {
  fetchSummaryWithRetry(3)
}

main()
