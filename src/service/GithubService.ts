import Axios from 'axios'
import * as gistApis from '../constants/gistApis'

type GistData = {
  description: string
  public: boolean
  files: any
}
class GithubService {
  token: string
  GIST_JSON_EMPTY: GistData
  constructor(token: string) {
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

  updateGist(gistId: string, date: string, content: string) {
    const self = this
    const gistJson = {
      files: {
        [`summaries_${date}.json`]: {
          content: JSON.stringify(content)
        }
      }
    }
    return Axios.request({
      method: 'PATCH',
      url: `${gistApis.gist}/${gistId}`,
      headers: { Authorization: `token ${self.token}` },
      data: gistJson
    })
  }
}

export default GithubService
