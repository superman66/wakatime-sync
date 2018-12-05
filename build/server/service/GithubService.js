'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _gistApis = require('../constants/gistApis');

var gistApis = _interopRequireWildcard(_gistApis);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubService = function () {
  function GithubService(token) {
    (0, _classCallCheck3.default)(this, GithubService);

    this.token = token;
    this.GIST_JSON_EMPTY = {
      description: 'WakaTime Data Sync Gist',
      public: false,
      files: {
        'wakaTime Sync': {
          content: '// Empty'
        }
      }
    };
  }

  (0, _createClass3.default)(GithubService, [{
    key: 'createGist',
    value: function createGist(date, content) {
      var self = this;
      var gistJson = self.GIST_JSON_EMPTY;
      gistJson.files['wakaTime Sync'].content = 'Last Update ' + new Date();
      gistJson.files['summaries_' + date + '.json'] = {
        content: (0, _stringify2.default)(content)
      };
      return _axios2.default.request({
        method: 'POST',
        url: gistApis.gist,
        headers: { Authorization: 'token ' + self.token },
        data: gistJson
      });
    }
  }, {
    key: 'updateGist',
    value: function updateGist(gistId, date, content) {
      var self = this;
      var gistJson = {
        files: (0, _defineProperty3.default)({}, 'summaries_' + date + '.json', {
          content: (0, _stringify2.default)(content)
        })
      };
      return _axios2.default.request({
        method: 'PATCH',
        url: gistApis.gist + '/' + gistId,
        headers: { Authorization: 'token ' + self.token },
        data: gistJson
      });
    }
  }]);
  return GithubService;
}();

exports.default = GithubService;
module.exports = exports['default'];