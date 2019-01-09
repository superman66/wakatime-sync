import Axios from 'axios'
import * as apis from '../constants/serverApis'

class ServerPushService {
  key: string
  constructor(key: string) {
    this.key = key
  }

  /**
   *
   * @param {*} text 标题，最初256，必需
   * @param {*} desp 消息内容，最长64kb，可空
   */
  sendMessageToWechat(text: string, desp?: string) {
    if (typeof this.key !== 'undefined') {
      Axios.get(apis.push, {
        params: {
          text,
          desp
        }
      }).then(response => console.log(JSON.stringify(response.data)))
    }
  }
}

export default ServerPushService
