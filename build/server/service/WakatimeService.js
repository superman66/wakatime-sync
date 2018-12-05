'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _wakatimeApis = require('../constants/wakatimeApis');

var wakatimeApis = _interopRequireWildcard(_wakatimeApis);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WakaTimeService = function () {
  function WakaTimeService(apiKey) {
    (0, _classCallCheck3.default)(this, WakaTimeService);

    this.apiKey = apiKey;
  }

  (0, _createClass3.default)(WakaTimeService, [{
    key: 'fetchSummaries',
    value: function fetchSummaries(date) {
      var self = this;
      return _axios2.default.get(wakatimeApis.summaries, {
        params: {
          start: date,
          end: date,
          api_key: self.apiKey //  eslint-disable-line
        }
      }).then(function (response) {
        return response.data;
      });
    }
  }]);
  return WakaTimeService;
}();

exports.default = WakaTimeService;
module.exports = exports['default'];