import GithubService from './service/GithubService'
import WakatimeService from './service/WakatimeService'

const wakatimeInstance = new WakatimeService()
const githubInstance = new GithubService()

const date = '2018-08-19'
const gistId = 'ec394723eae95cd864f978927bae305d'
wakatimeInstance
  .fetchSummaries(date)
  .then(response => {
    return githubInstance.updateGist(gistId, date, response)
  })
  .then(response => console.log('success'))
  .catch(error => console.log(error))
