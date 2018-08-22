import Axios from 'axios'
import * as gistApis from '../constants/gistApis'

class GithubService {
  constructor(token) {
    this.token = token
    this.GIST_JSON_EMPTY = {
      description: 'WakaTime Data Sync Gist',
      public: false,
      files: {
        'wakaTime Sync': {
          content: '// Empty'
        }
      }
    }
  }

  createGist(date, content) {
    const self = this
    const gistJson = self.GIST_JSON_EMPTY
    gistJson.files['wakaTime Sync'].content = `Last Update ${new Date()}`
    gistJson.files[`summaries_${date}.json`] = {
      content: JSON.stringify(content)
    }
    Axios.request({
      method: 'POST',
      url: gistApis.gist,
      headers: { Authorization: `token ${self.token}` },
      data: gistJson
    })
  }

  updateGist(gistId, date, content) {
    const self = this
    const gistJson = {
      files: {
        [`summaries_${date}.json`]: {
          content: JSON.stringify(content)
        }
      }
    }
    Axios.request({
      method: 'PATCH',
      url: `${gistApis.gist}/${gistId}`,
      headers: { Authorization: `token ${self.token}` },
      data: gistJson
    })
  }
}

export default GithubService
