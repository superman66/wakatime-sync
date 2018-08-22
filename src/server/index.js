import moment from 'moment'
const schedule = require('node-schedule')
import GithubService from './service/GithubService'
import WakatimeService from './service/WakatimeService'
const config = require('../../config.json')

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
    .then(response => console.log('success'))
    .catch(error => console.log(error))
}

// 每天12点30分30秒执行该job
const job = schedule.scheduleJob('30 * * * * *', function() {
  syncWakaTimeToGist(config.syncGistId)
})
