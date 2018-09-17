import moment from 'moment'
const schedule = require('node-schedule')
import GithubService from './service/GithubService'
import WakatimeService from './service/WakatimeService'
const config = require('../config.json')

const wakatimeInstance = new WakatimeService(config.wakatimeApiKey)
const githubInstance = new GithubService(config.gistToken)

const syncWakaTimeToGist = function(gistId) {
  const date = moment()
    .subtract(1, 'days')
    .format('YYYY-MM-DD')
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

// 每次重跑 job 手动执行一次同步
syncWakaTimeToGist(config.syncGistId)

// 每天1点30分30秒执行该job
const job = schedule.scheduleJob('30 30 1 * * *', function() {
  syncWakaTimeToGist(config.syncGistId)
})
