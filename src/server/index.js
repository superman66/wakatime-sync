import moment from 'moment'
const schedule = require('node-schedule')
import GithubService from './service/GithubService'
import WakatimeService from './service/WakatimeService'
const config = require('../config.json')

const wakatimeInstance = new WakatimeService(config.wakatimeApiKey)
const githubInstance = new GithubService(config.gistToken)

const syncWakaTimeToGist = function(gistId) {
  wakatimeInstance
    .fetchSummaries(date)
    .then(response => {
      return githubInstance.updateGist(gistId, date, response)
    })
    .then(response => console.log(`${date}: 数据更新成功！`))
    .catch(error => {
      if (error.response) {
        const { data } = error.response
        console.log(`${date}: 糟糕....请求出了点小差错。错误原因：${JSON.stringify(data)}`)
      }
    })
}

const syncWakaTimeToGistwithDate = function(gistId, date) {
  console.log(`Start to Sync Date: ${date}`)

  new WakatimeService(config.wakatimeApiKey)
    .fetchSummaries(date)
    .then(response => {
      return new GithubService(config.gistToken).updateGist(gistId, date, response)
    })
    .then(response => {
      console.log(`${date}: Data updated!`)
    })
    .catch(error => {
      if (error.response) {
        const { data } = error.response
        console.log(`${date}: Ops....ERROR. Reason：${JSON.stringify(data)}`)
      }
    })
}

// 每次重跑 job 手动执行一次同步
syncWakaTimeToGistwithDate(
  config.syncGistId,
  moment()
    .subtract(1, 'days')
    .format('YYYY-MM-DD')
)

// 每天1点30分30秒执行该job
const job = schedule.scheduleJob('0 30 18 * * *', function() {
  const date = moment()
    .subtract(1, 'days')
    .format('YYYY-MM-DD')
  syncWakaTimeToGistwithDate(config.syncGistId, date)
})

const sync7Days = function() {
  var weekOfDate = []
  for (var i = 0; i < 7; i++) {
    weekOfDate.push(
      moment()
        .subtract(i, 'days')
        .format('YYYY-MM-DD')
    )
  }
  const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay))
  for (var idx in weekOfDate) {
    ;(function(idx) {
      setTimeout(function() {
        syncWakaTimeToGistwithDate(config.syncGistId, weekOfDate[idx])
      }, idx * 2000)
    })(idx)
  }
}

//sync7Days()
