import Axios from 'axios'
import * as wakatimeApis from '../constants/wakatimeApis'

class WakaTimeService {
  constructor(apiKey) {
    this.apiKey = apiKey
  }

  fetchSummaries(date) {
    const self = this
    return Axios.get(wakatimeApis.summaries, {
      params: {
        start: date,
        end: date,
        api_key: self.apiKey //  eslint-disable-line
      }
    }).then(response => response.data)
  }
}

export default WakaTimeService
