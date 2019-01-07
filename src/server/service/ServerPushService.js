import * as apis from '../constants/serverApis'
import Axios from 'axios'

class ServerPushService {
  constructor(key) {
    this.key = key
  }

  /**
   *
   * @param {*} text 标题，最初256，必需
   * @param {*} desp 消息内容，最长64kb，可空
   */
  sendMessageToWechat(text, desp) {
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
