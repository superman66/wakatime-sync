import Axios from 'axios'
import * as wakatimeApis from '../constants/wakatimeApis'
import { WAKATIME_API_KEY } from '../../../key.config'

class WakaTimeService {
  constructor() {}

  fetchSummaries(date) {
    const self = this
    return Axios.get(wakatimeApis.summaries, {
      params: {
        start: date,
        end: date,
        api_key: WAKATIME_API_KEY //  eslint-disable-line
      }
    }).then(response => response.data)
  }
}

export default WakaTimeService
