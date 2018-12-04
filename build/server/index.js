'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _GithubService = require('./service/GithubService');

var _GithubService2 = _interopRequireDefault(_GithubService);

var _WakatimeService = require('./service/WakatimeService');

var _WakatimeService2 = _interopRequireDefault(_WakatimeService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schedule = require('node-schedule');

var config = require('../config.json');

if (process.env.NODE_ENV === 'prodcution') {
  // in production env, config read from heroku config vars.
  config = {
    wakatimeApiKey: wakatimeApiKey,
    gistToken: gistToken,
    syncGistId: syncGistId
  };
}
var wakatimeInstance = new _WakatimeService2.default(config.wakatimeApiKey);
var githubInstance = new _GithubService2.default(config.gistToken);

var syncWakaTimeToGist = function syncWakaTimeToGist(gistId) {
  var date = (0, _moment2.default)().subtract(1, 'days').format('YYYY-MM-DD');
  wakatimeInstance.fetchSummaries(date).then(function (response) {
    return githubInstance.updateGist(gistId, date, response);
  }).then(function (response) {
    return console.log(date + ': \u6570\u636E\u66F4\u65B0\u6210\u529F\uFF01');
  }).catch(function (error) {
    if (error.response) {
      var data = error.response.data;

      console.log(date + ': \u7CDF\u7CD5....\u8BF7\u6C42\u51FA\u4E86\u70B9\u5C0F\u5DEE\u9519\u3002\u9519\u8BEF\u539F\u56E0\uFF1A' + (0, _stringify2.default)(data));
    }
  });
};

// 每次重跑 job 手动执行一次同步
syncWakaTimeToGist(config.syncGistId);

// 每天1点30分30秒执行该job
var job = schedule.scheduleJob('30 30 1 * * *', function () {
  syncWakaTimeToGist(config.syncGistId);
});