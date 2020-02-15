module.exports = (function(e, t) {
  'use strict'
  var r = {}
  function __webpack_require__(t) {
    if (r[t]) {
      return r[t].exports
    }
    var n = (r[t] = { i: t, l: false, exports: {} })
    e[t].call(n.exports, n, n.exports, __webpack_require__)
    n.l = true
    return n.exports
  }
  __webpack_require__.ab = __dirname + '/'
  function startup() {
    return __webpack_require__(104)
  }
  return startup()
})({
  0: function(e, t, r) {
    const { requestLog: n } = r(916)
    const { restEndpointMethods: i } = r(842)
    const s = r(316)
    const o = [r(190), r(19), n, r(148), i, r(430), r(850)]
    const a = s.plugin(o)
    function DeprecatedOctokit(e) {
      const t = e && e.log && e.log.warn ? e.log.warn : console.warn
      t(
        '[@octokit/rest] `const Octokit = require("@octokit/rest")` is deprecated. Use `const { Octokit } = require("@octokit/rest")` instead'
      )
      return new a(e)
    }
    const u = Object.assign(DeprecatedOctokit, { Octokit: a })
    Object.keys(a).forEach(e => {
      if (a.hasOwnProperty(e)) {
        u[e] = a[e]
      }
    })
    e.exports = u
  },
  2: function(e, t, r) {
    'use strict'
    const n = r(87)
    const i = r(118)
    const s = r(49)
    const o = (e, t) => {
      if (!e && t) {
        throw new Error("You can't specify a `release` without specifying `platform`")
      }
      e = e || n.platform()
      let r
      if (e === 'darwin') {
        if (!t && n.platform() === 'darwin') {
          t = n.release()
        }
        const e = t ? (Number(t.split('.')[0]) > 15 ? 'macOS' : 'OS X') : 'macOS'
        r = t ? i(t).name : ''
        return e + (r ? ' ' + r : '')
      }
      if (e === 'linux') {
        if (!t && n.platform() === 'linux') {
          t = n.release()
        }
        r = t ? t.replace(/^(\d+\.\d+).*/, '$1') : ''
        return 'Linux' + (r ? ' ' + r : '')
      }
      if (e === 'win32') {
        if (!t && n.platform() === 'win32') {
          t = n.release()
        }
        r = t ? s(t) : ''
        return 'Windows' + (r ? ' ' + r : '')
      }
      return e
    }
    e.exports = o
  },
  9: function(e, t, r) {
    var n = r(969)
    var i = function() {}
    var s = function(e) {
      return e.setHeader && typeof e.abort === 'function'
    }
    var o = function(e) {
      return e.stdio && Array.isArray(e.stdio) && e.stdio.length === 3
    }
    var a = function(e, t, r) {
      if (typeof t === 'function') return a(e, null, t)
      if (!t) t = {}
      r = n(r || i)
      var u = e._writableState
      var p = e._readableState
      var c = t.readable || (t.readable !== false && e.readable)
      var d = t.writable || (t.writable !== false && e.writable)
      var l = false
      var m = function() {
        if (!e.writable) g()
      }
      var g = function() {
        d = false
        if (!c) r.call(e)
      }
      var h = function() {
        c = false
        if (!d) r.call(e)
      }
      var y = function(t) {
        r.call(e, t ? new Error('exited with error code: ' + t) : null)
      }
      var f = function(t) {
        r.call(e, t)
      }
      var b = function() {
        process.nextTick(_)
      }
      var _ = function() {
        if (l) return
        if (c && !(p && p.ended && !p.destroyed)) return r.call(e, new Error('premature close'))
        if (d && !(u && u.ended && !u.destroyed)) return r.call(e, new Error('premature close'))
      }
      var v = function() {
        e.req.on('finish', g)
      }
      if (s(e)) {
        e.on('complete', g)
        e.on('abort', b)
        if (e.req) v()
        else e.on('request', v)
      } else if (d && !u) {
        e.on('end', m)
        e.on('close', m)
      }
      if (o(e)) e.on('exit', y)
      e.on('end', h)
      e.on('finish', g)
      if (t.error !== false) e.on('error', f)
      e.on('close', b)
      return function() {
        l = true
        e.removeListener('complete', g)
        e.removeListener('abort', b)
        e.removeListener('request', v)
        if (e.req) e.req.removeListener('finish', g)
        e.removeListener('end', m)
        e.removeListener('close', m)
        e.removeListener('finish', g)
        e.removeListener('exit', y)
        e.removeListener('end', h)
        e.removeListener('error', f)
        e.removeListener('close', b)
      }
    }
    e.exports = a
  },
  11: function(e) {
    e.exports = wrappy
    function wrappy(e, t) {
      if (e && t) return wrappy(e)(t)
      if (typeof e !== 'function') throw new TypeError('need wrapper function')
      Object.keys(e).forEach(function(t) {
        wrapper[t] = e[t]
      })
      return wrapper
      function wrapper() {
        var t = new Array(arguments.length)
        for (var r = 0; r < t.length; r++) {
          t[r] = arguments[r]
        }
        var n = e.apply(this, t)
        var i = t[t.length - 1]
        if (typeof n === 'function' && n !== i) {
          Object.keys(i).forEach(function(e) {
            n[e] = i[e]
          })
        }
        return n
      }
    }
  },
  18: function() {
    eval('require')('encoding')
  },
  19: function(e, t, r) {
    e.exports = authenticationPlugin
    const { Deprecation: n } = r(692)
    const i = r(969)
    const s = i((e, t) => e.warn(t))
    const o = r(674)
    const a = r(471)
    const u = r(349)
    function authenticationPlugin(e, t) {
      if (t.auth) {
        e.authenticate = () => {
          s(
            e.log,
            new n(
              '[@octokit/rest] octokit.authenticate() is deprecated and has no effect when "auth" option is set on Octokit constructor'
            )
          )
        }
        return
      }
      const r = { octokit: e, auth: false }
      e.authenticate = o.bind(null, r)
      e.hook.before('request', a.bind(null, r))
      e.hook.error('request', u.bind(null, r))
    }
  },
  20: function(e, t, r) {
    'use strict'
    const n = r(129)
    const i = r(568)
    const s = r(881)
    function spawn(e, t, r) {
      const o = i(e, t, r)
      const a = n.spawn(o.command, o.args, o.options)
      s.hookChildProcess(a, o)
      return a
    }
    function spawnSync(e, t, r) {
      const o = i(e, t, r)
      const a = n.spawnSync(o.command, o.args, o.options)
      a.error = a.error || s.verifyENOENTSync(a.status, o)
      return a
    }
    e.exports = spawn
    e.exports.spawn = spawn
    e.exports.sync = spawnSync
    e.exports._parse = i
    e.exports._enoent = s
  },
  25: function(e, t, r) {
    t = e.exports = createDebug.debug = createDebug['default'] = createDebug
    t.coerce = coerce
    t.disable = disable
    t.enable = enable
    t.enabled = enabled
    t.humanize = r(761)
    t.instances = []
    t.names = []
    t.skips = []
    t.formatters = {}
    function selectColor(e) {
      var r = 0,
        n
      for (n in e) {
        r = (r << 5) - r + e.charCodeAt(n)
        r |= 0
      }
      return t.colors[Math.abs(r) % t.colors.length]
    }
    function createDebug(e) {
      var r
      function debug() {
        if (!debug.enabled) return
        var e = debug
        var n = +new Date()
        var i = n - (r || n)
        e.diff = i
        e.prev = r
        e.curr = n
        r = n
        var s = new Array(arguments.length)
        for (var o = 0; o < s.length; o++) {
          s[o] = arguments[o]
        }
        s[0] = t.coerce(s[0])
        if ('string' !== typeof s[0]) {
          s.unshift('%O')
        }
        var a = 0
        s[0] = s[0].replace(/%([a-zA-Z%])/g, function(r, n) {
          if (r === '%%') return r
          a++
          var i = t.formatters[n]
          if ('function' === typeof i) {
            var o = s[a]
            r = i.call(e, o)
            s.splice(a, 1)
            a--
          }
          return r
        })
        t.formatArgs.call(e, s)
        var u = debug.log || t.log || console.log.bind(console)
        u.apply(e, s)
      }
      debug.namespace = e
      debug.enabled = t.enabled(e)
      debug.useColors = t.useColors()
      debug.color = selectColor(e)
      debug.destroy = destroy
      if ('function' === typeof t.init) {
        t.init(debug)
      }
      t.instances.push(debug)
      return debug
    }
    function destroy() {
      var e = t.instances.indexOf(this)
      if (e !== -1) {
        t.instances.splice(e, 1)
        return true
      } else {
        return false
      }
    }
    function enable(e) {
      t.save(e)
      t.names = []
      t.skips = []
      var r
      var n = (typeof e === 'string' ? e : '').split(/[\s,]+/)
      var i = n.length
      for (r = 0; r < i; r++) {
        if (!n[r]) continue
        e = n[r].replace(/\*/g, '.*?')
        if (e[0] === '-') {
          t.skips.push(new RegExp('^' + e.substr(1) + '$'))
        } else {
          t.names.push(new RegExp('^' + e + '$'))
        }
      }
      for (r = 0; r < t.instances.length; r++) {
        var s = t.instances[r]
        s.enabled = t.enabled(s.namespace)
      }
    }
    function disable() {
      t.enable('')
    }
    function enabled(e) {
      if (e[e.length - 1] === '*') {
        return true
      }
      var r, n
      for (r = 0, n = t.skips.length; r < n; r++) {
        if (t.skips[r].test(e)) {
          return false
        }
      }
      for (r = 0, n = t.names.length; r < n; r++) {
        if (t.names[r].test(e)) {
          return true
        }
      }
      return false
    }
    function coerce(e) {
      if (e instanceof Error) return e.stack || e.message
      return e
    }
  },
  26: function(e, t, r) {
    'use strict'
    var n = r(369)
    e.exports = function createError(e, t, r, i, s) {
      var o = new Error(e)
      return n(o, t, r, i, s)
    }
  },
  35: function(e, t, r) {
    'use strict'
    var n = r(727)
    var i = r(812)
    var s = Object.prototype.toString
    function isArray(e) {
      return s.call(e) === '[object Array]'
    }
    function isArrayBuffer(e) {
      return s.call(e) === '[object ArrayBuffer]'
    }
    function isFormData(e) {
      return typeof FormData !== 'undefined' && e instanceof FormData
    }
    function isArrayBufferView(e) {
      var t
      if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
        t = ArrayBuffer.isView(e)
      } else {
        t = e && e.buffer && e.buffer instanceof ArrayBuffer
      }
      return t
    }
    function isString(e) {
      return typeof e === 'string'
    }
    function isNumber(e) {
      return typeof e === 'number'
    }
    function isUndefined(e) {
      return typeof e === 'undefined'
    }
    function isObject(e) {
      return e !== null && typeof e === 'object'
    }
    function isDate(e) {
      return s.call(e) === '[object Date]'
    }
    function isFile(e) {
      return s.call(e) === '[object File]'
    }
    function isBlob(e) {
      return s.call(e) === '[object Blob]'
    }
    function isFunction(e) {
      return s.call(e) === '[object Function]'
    }
    function isStream(e) {
      return isObject(e) && isFunction(e.pipe)
    }
    function isURLSearchParams(e) {
      return typeof URLSearchParams !== 'undefined' && e instanceof URLSearchParams
    }
    function trim(e) {
      return e.replace(/^\s*/, '').replace(/\s*$/, '')
    }
    function isStandardBrowserEnv() {
      if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
        return false
      }
      return typeof window !== 'undefined' && typeof document !== 'undefined'
    }
    function forEach(e, t) {
      if (e === null || typeof e === 'undefined') {
        return
      }
      if (typeof e !== 'object') {
        e = [e]
      }
      if (isArray(e)) {
        for (var r = 0, n = e.length; r < n; r++) {
          t.call(null, e[r], r, e)
        }
      } else {
        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            t.call(null, e[i], i, e)
          }
        }
      }
    }
    function merge() {
      var e = {}
      function assignValue(t, r) {
        if (typeof e[r] === 'object' && typeof t === 'object') {
          e[r] = merge(e[r], t)
        } else {
          e[r] = t
        }
      }
      for (var t = 0, r = arguments.length; t < r; t++) {
        forEach(arguments[t], assignValue)
      }
      return e
    }
    function extend(e, t, r) {
      forEach(t, function assignValue(t, i) {
        if (r && typeof t === 'function') {
          e[i] = n(t, r)
        } else {
          e[i] = t
        }
      })
      return e
    }
    e.exports = {
      isArray: isArray,
      isArrayBuffer: isArrayBuffer,
      isBuffer: i,
      isFormData: isFormData,
      isArrayBufferView: isArrayBufferView,
      isString: isString,
      isNumber: isNumber,
      isObject: isObject,
      isUndefined: isUndefined,
      isDate: isDate,
      isFile: isFile,
      isBlob: isBlob,
      isFunction: isFunction,
      isStream: isStream,
      isURLSearchParams: isURLSearchParams,
      isStandardBrowserEnv: isStandardBrowserEnv,
      forEach: forEach,
      merge: merge,
      extend: extend,
      trim: trim
    }
  },
  39: function(e) {
    'use strict'
    e.exports = e => {
      e = e || {}
      const t = e.env || process.env
      const r = e.platform || process.platform
      if (r !== 'win32') {
        return 'PATH'
      }
      return Object.keys(t).find(e => e.toUpperCase() === 'PATH') || 'Path'
    }
  },
  47: function(e, t, r) {
    e.exports = factory
    const n = r(402)
    const i = r(855)
    function factory(e) {
      const t = n.bind(null, e || [])
      t.plugin = i.bind(null, e || [])
      return t
    }
  },
  49: function(e, t, r) {
    'use strict'
    const n = r(87)
    const i = r(955)
    const s = new Map([
      ['10.0', '10'],
      ['6.3', '8.1'],
      ['6.2', '8'],
      ['6.1', '7'],
      ['6.0', 'Vista'],
      ['5.2', 'Server 2003'],
      ['5.1', 'XP'],
      ['5.0', '2000'],
      ['4.9', 'ME'],
      ['4.1', '98'],
      ['4.0', '95']
    ])
    const o = e => {
      const t = /\d+\.\d/.exec(e || n.release())
      if (e && !t) {
        throw new Error("`release` argument doesn't match `n.n`")
      }
      const r = (t || [])[0]
      if ((!e || e === n.release()) && ['6.1', '6.2', '6.3', '10.0'].includes(r)) {
        const e = i.sync('wmic', ['os', 'get', 'Caption']).stdout || ''
        const t = (e.match(/2008|2012|2016/) || [])[0]
        if (t) {
          return `Server ${t}`
        }
      }
      return s.get(r)
    }
    e.exports = o
  },
  53: function(e, t, r) {
    e.exports = r(352)
  },
  63: function(e, t, r) {
    const n = r(747)
    const i = r(622)
    function log(e) {
      console.log(`[dotenv][DEBUG] ${e}`)
    }
    const s = '\n'
    const o = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/
    const a = /\\n/g
    function parse(e, t) {
      const r = Boolean(t && t.debug)
      const n = {}
      e.toString()
        .split(s)
        .forEach(function(e, t) {
          const i = e.match(o)
          if (i != null) {
            const e = i[1]
            let t = i[2] || ''
            const r = t.length - 1
            const o = t[0] === '"' && t[r] === '"'
            const u = t[0] === "'" && t[r] === "'"
            if (u || o) {
              t = t.substring(1, r)
              if (o) {
                t = t.replace(a, s)
              }
            } else {
              t = t.trim()
            }
            n[e] = t
          } else if (r) {
            log(`did not match key and value when parsing line ${t + 1}: ${e}`)
          }
        })
      return n
    }
    function config(e) {
      let t = i.resolve(process.cwd(), '.env')
      let r = 'utf8'
      let s = false
      if (e) {
        if (e.path != null) {
          t = e.path
        }
        if (e.encoding != null) {
          r = e.encoding
        }
        if (e.debug != null) {
          s = true
        }
      }
      try {
        const e = parse(n.readFileSync(t, { encoding: r }), { debug: s })
        Object.keys(e).forEach(function(t) {
          if (!process.env.hasOwnProperty(t)) {
            process.env[t] = e[t]
          } else if (s) {
            log(`"${t}" is already defined in \`process.env\` and will not be overwritten`)
          }
        })
        return { parsed: e }
      } catch (e) {
        return { error: e }
      }
    }
    e.exports.config = config
    e.exports.parse = parse
  },
  81: function(e, t, r) {
    var n = r(867)
    var i = r(669)
    t = e.exports = r(25)
    t.init = init
    t.log = log
    t.formatArgs = formatArgs
    t.save = save
    t.load = load
    t.useColors = useColors
    t.colors = [6, 2, 3, 4, 5, 1]
    try {
      var s = r(247)
      if (s && s.level >= 2) {
        t.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ]
      }
    } catch (e) {}
    t.inspectOpts = Object.keys(process.env)
      .filter(function(e) {
        return /^debug_/i.test(e)
      })
      .reduce(function(e, t) {
        var r = t
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, function(e, t) {
            return t.toUpperCase()
          })
        var n = process.env[t]
        if (/^(yes|on|true|enabled)$/i.test(n)) n = true
        else if (/^(no|off|false|disabled)$/i.test(n)) n = false
        else if (n === 'null') n = null
        else n = Number(n)
        e[r] = n
        return e
      }, {})
    function useColors() {
      return 'colors' in t.inspectOpts ? Boolean(t.inspectOpts.colors) : n.isatty(process.stderr.fd)
    }
    t.formatters.o = function(e) {
      this.inspectOpts.colors = this.useColors
      return i
        .inspect(e, this.inspectOpts)
        .split('\n')
        .map(function(e) {
          return e.trim()
        })
        .join(' ')
    }
    t.formatters.O = function(e) {
      this.inspectOpts.colors = this.useColors
      return i.inspect(e, this.inspectOpts)
    }
    function formatArgs(e) {
      var r = this.namespace
      var n = this.useColors
      if (n) {
        var i = this.color
        var s = '[3' + (i < 8 ? i : '8;5;' + i)
        var o = '  ' + s + ';1m' + r + ' ' + '[0m'
        e[0] = o + e[0].split('\n').join('\n' + o)
        e.push(s + 'm+' + t.humanize(this.diff) + '[0m')
      } else {
        e[0] = getDate() + r + ' ' + e[0]
      }
    }
    function getDate() {
      if (t.inspectOpts.hideDate) {
        return ''
      } else {
        return new Date().toISOString() + ' '
      }
    }
    function log() {
      return process.stderr.write(i.format.apply(i, arguments) + '\n')
    }
    function save(e) {
      if (null == e) {
        delete process.env.DEBUG
      } else {
        process.env.DEBUG = e
      }
    }
    function load() {
      return process.env.DEBUG
    }
    function init(e) {
      e.inspectOpts = {}
      var r = Object.keys(t.inspectOpts)
      for (var n = 0; n < r.length; n++) {
        e.inspectOpts[r[n]] = t.inspectOpts[r[n]]
      }
    }
    t.enable(load())
  },
  87: function(e) {
    e.exports = require('os')
  },
  104: function(e, t, r) {
    r(63).config()
    const { WakaTimeClient: n, RANGE: i } = r(650)
    const s = r(629)
    const { Octokit: o } = r(0)
    const a = r(53)
    const { WAKATIME_API_KEY: u, GH_TOKEN: p, GIST_ID: c, SCU_KEY: d } = process.env
    const l = 'https://wakatime.com/api/v1'
    const m = `${l}/users/current/summaries`
    const g = `https://sc.ftqq.com/`
    const h = new n(u)
    const y = new o({ auth: `token ${p}` })
    async function main() {
      const e = s()
        .subtract(1, 'day')
        .format('YYYY-MM-DD')
      try {
        const t = await getMySummary(e)
        await updateGist(e, t.data)
        await sendMessageToWechat(`[${e}]wakatime data update successfully!`)
      } catch (t) {
        console.error(`Unable to fetch wakatime summary\n ${t} `)
        await sendMessageToWechat(`[${e}]failed to update wakatime data!`)
      }
    }
    function getMySummary(e) {
      return a.get(m, { params: { start: e, end: e, api_key: u } }).then(e => e.data)
    }
    async function updateGist(e, t) {
      const r = ''
      try {
        await y.gists.update({
          gist_id: c,
          files: { [`summaries_${e}.json`]: { content: JSON.stringify(t) } }
        })
      } catch (e) {
        console.error(`Unable to update gist \n ${e}`)
      }
    }
    async function sendMessageToWechat(e, t) {
      if (typeof d !== 'undefined') {
        return a.get(`${g}${d}.send`, { params: { text: e, desp: t } }).then(e => e.data)
      }
    }
    main()
  },
  118: function(e, t, r) {
    'use strict'
    const n = r(87)
    const i = new Map([
      [19, 'Catalina'],
      [18, 'Mojave'],
      [17, 'High Sierra'],
      [16, 'Sierra'],
      [15, 'El Capitan'],
      [14, 'Yosemite'],
      [13, 'Mavericks'],
      [12, 'Mountain Lion'],
      [11, 'Lion'],
      [10, 'Snow Leopard'],
      [9, 'Leopard'],
      [8, 'Tiger'],
      [7, 'Panther'],
      [6, 'Jaguar'],
      [5, 'Puma']
    ])
    const s = e => {
      e = Number((e || n.release()).split('.')[0])
      return { name: i.get(e), version: '10.' + (e - 4) }
    }
    e.exports = s
    e.exports.default = s
  },
  126: function(e) {
    var t = 200
    var r = '__lodash_hash_undefined__'
    var n = 1 / 0
    var i = '[object Function]',
      s = '[object GeneratorFunction]'
    var o = /[\\^$.*+?()[\]{}|]/g
    var a = /^\[object .+?Constructor\]$/
    var u = typeof global == 'object' && global && global.Object === Object && global
    var p = typeof self == 'object' && self && self.Object === Object && self
    var c = u || p || Function('return this')()
    function arrayIncludes(e, t) {
      var r = e ? e.length : 0
      return !!r && baseIndexOf(e, t, 0) > -1
    }
    function arrayIncludesWith(e, t, r) {
      var n = -1,
        i = e ? e.length : 0
      while (++n < i) {
        if (r(t, e[n])) {
          return true
        }
      }
      return false
    }
    function baseFindIndex(e, t, r, n) {
      var i = e.length,
        s = r + (n ? 1 : -1)
      while (n ? s-- : ++s < i) {
        if (t(e[s], s, e)) {
          return s
        }
      }
      return -1
    }
    function baseIndexOf(e, t, r) {
      if (t !== t) {
        return baseFindIndex(e, baseIsNaN, r)
      }
      var n = r - 1,
        i = e.length
      while (++n < i) {
        if (e[n] === t) {
          return n
        }
      }
      return -1
    }
    function baseIsNaN(e) {
      return e !== e
    }
    function cacheHas(e, t) {
      return e.has(t)
    }
    function getValue(e, t) {
      return e == null ? undefined : e[t]
    }
    function isHostObject(e) {
      var t = false
      if (e != null && typeof e.toString != 'function') {
        try {
          t = !!(e + '')
        } catch (e) {}
      }
      return t
    }
    function setToArray(e) {
      var t = -1,
        r = Array(e.size)
      e.forEach(function(e) {
        r[++t] = e
      })
      return r
    }
    var d = Array.prototype,
      l = Function.prototype,
      m = Object.prototype
    var g = c['__core-js_shared__']
    var h = (function() {
      var e = /[^.]+$/.exec((g && g.keys && g.keys.IE_PROTO) || '')
      return e ? 'Symbol(src)_1.' + e : ''
    })()
    var y = l.toString
    var f = m.hasOwnProperty
    var b = m.toString
    var _ = RegExp(
      '^' +
        y
          .call(f)
          .replace(o, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    )
    var v = d.splice
    var q = getNative(c, 'Map'),
      w = getNative(c, 'Set'),
      E = getNative(Object, 'create')
    function Hash(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    function hashClear() {
      this.__data__ = E ? E(null) : {}
    }
    function hashDelete(e) {
      return this.has(e) && delete this.__data__[e]
    }
    function hashGet(e) {
      var t = this.__data__
      if (E) {
        var n = t[e]
        return n === r ? undefined : n
      }
      return f.call(t, e) ? t[e] : undefined
    }
    function hashHas(e) {
      var t = this.__data__
      return E ? t[e] !== undefined : f.call(t, e)
    }
    function hashSet(e, t) {
      var n = this.__data__
      n[e] = E && t === undefined ? r : t
      return this
    }
    Hash.prototype.clear = hashClear
    Hash.prototype['delete'] = hashDelete
    Hash.prototype.get = hashGet
    Hash.prototype.has = hashHas
    Hash.prototype.set = hashSet
    function ListCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    function listCacheClear() {
      this.__data__ = []
    }
    function listCacheDelete(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      if (r < 0) {
        return false
      }
      var n = t.length - 1
      if (r == n) {
        t.pop()
      } else {
        v.call(t, r, 1)
      }
      return true
    }
    function listCacheGet(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      return r < 0 ? undefined : t[r][1]
    }
    function listCacheHas(e) {
      return assocIndexOf(this.__data__, e) > -1
    }
    function listCacheSet(e, t) {
      var r = this.__data__,
        n = assocIndexOf(r, e)
      if (n < 0) {
        r.push([e, t])
      } else {
        r[n][1] = t
      }
      return this
    }
    ListCache.prototype.clear = listCacheClear
    ListCache.prototype['delete'] = listCacheDelete
    ListCache.prototype.get = listCacheGet
    ListCache.prototype.has = listCacheHas
    ListCache.prototype.set = listCacheSet
    function MapCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    function mapCacheClear() {
      this.__data__ = { hash: new Hash(), map: new (q || ListCache)(), string: new Hash() }
    }
    function mapCacheDelete(e) {
      return getMapData(this, e)['delete'](e)
    }
    function mapCacheGet(e) {
      return getMapData(this, e).get(e)
    }
    function mapCacheHas(e) {
      return getMapData(this, e).has(e)
    }
    function mapCacheSet(e, t) {
      getMapData(this, e).set(e, t)
      return this
    }
    MapCache.prototype.clear = mapCacheClear
    MapCache.prototype['delete'] = mapCacheDelete
    MapCache.prototype.get = mapCacheGet
    MapCache.prototype.has = mapCacheHas
    MapCache.prototype.set = mapCacheSet
    function SetCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.__data__ = new MapCache()
      while (++t < r) {
        this.add(e[t])
      }
    }
    function setCacheAdd(e) {
      this.__data__.set(e, r)
      return this
    }
    function setCacheHas(e) {
      return this.__data__.has(e)
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd
    SetCache.prototype.has = setCacheHas
    function assocIndexOf(e, t) {
      var r = e.length
      while (r--) {
        if (eq(e[r][0], t)) {
          return r
        }
      }
      return -1
    }
    function baseIsNative(e) {
      if (!isObject(e) || isMasked(e)) {
        return false
      }
      var t = isFunction(e) || isHostObject(e) ? _ : a
      return t.test(toSource(e))
    }
    function baseUniq(e, r, n) {
      var i = -1,
        s = arrayIncludes,
        o = e.length,
        a = true,
        u = [],
        p = u
      if (n) {
        a = false
        s = arrayIncludesWith
      } else if (o >= t) {
        var c = r ? null : T(e)
        if (c) {
          return setToArray(c)
        }
        a = false
        s = cacheHas
        p = new SetCache()
      } else {
        p = r ? [] : u
      }
      e: while (++i < o) {
        var d = e[i],
          l = r ? r(d) : d
        d = n || d !== 0 ? d : 0
        if (a && l === l) {
          var m = p.length
          while (m--) {
            if (p[m] === l) {
              continue e
            }
          }
          if (r) {
            p.push(l)
          }
          u.push(d)
        } else if (!s(p, l, n)) {
          if (p !== u) {
            p.push(l)
          }
          u.push(d)
        }
      }
      return u
    }
    var T = !(w && 1 / setToArray(new w([, -0]))[1] == n)
      ? noop
      : function(e) {
          return new w(e)
        }
    function getMapData(e, t) {
      var r = e.__data__
      return isKeyable(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
    }
    function getNative(e, t) {
      var r = getValue(e, t)
      return baseIsNative(r) ? r : undefined
    }
    function isKeyable(e) {
      var t = typeof e
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null
    }
    function isMasked(e) {
      return !!h && h in e
    }
    function toSource(e) {
      if (e != null) {
        try {
          return y.call(e)
        } catch (e) {}
        try {
          return e + ''
        } catch (e) {}
      }
      return ''
    }
    function uniq(e) {
      return e && e.length ? baseUniq(e) : []
    }
    function eq(e, t) {
      return e === t || (e !== e && t !== t)
    }
    function isFunction(e) {
      var t = isObject(e) ? b.call(e) : ''
      return t == i || t == s
    }
    function isObject(e) {
      var t = typeof e
      return !!e && (t == 'object' || t == 'function')
    }
    function noop() {}
    e.exports = uniq
  },
  129: function(e) {
    e.exports = require('child_process')
  },
  133: function(e, t, r) {
    'use strict'
    var n = r(35)
    function encode(e) {
      return encodeURIComponent(e)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')
    }
    e.exports = function buildURL(e, t, r) {
      if (!t) {
        return e
      }
      var i
      if (r) {
        i = r(t)
      } else if (n.isURLSearchParams(t)) {
        i = t.toString()
      } else {
        var s = []
        n.forEach(t, function serialize(e, t) {
          if (e === null || typeof e === 'undefined') {
            return
          }
          if (n.isArray(e)) {
            t = t + '[]'
          } else {
            e = [e]
          }
          n.forEach(e, function parseValue(e) {
            if (n.isDate(e)) {
              e = e.toISOString()
            } else if (n.isObject(e)) {
              e = JSON.stringify(e)
            }
            s.push(encode(t) + '=' + encode(e))
          })
        })
        i = s.join('&')
      }
      if (i) {
        e += (e.indexOf('?') === -1 ? '?' : '&') + i
      }
      return e
    }
  },
  137: function(e, t, r) {
    'use strict'
    var n = r(826)
    function CancelToken(e) {
      if (typeof e !== 'function') {
        throw new TypeError('executor must be a function.')
      }
      var t
      this.promise = new Promise(function promiseExecutor(e) {
        t = e
      })
      var r = this
      e(function cancel(e) {
        if (r.reason) {
          return
        }
        r.reason = new n(e)
        t(r.reason)
      })
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason
      }
    }
    CancelToken.source = function source() {
      var e
      var t = new CancelToken(function executor(t) {
        e = t
      })
      return { token: t, cancel: e }
    }
    e.exports = CancelToken
  },
  143: function(e, t, r) {
    e.exports = withAuthorizationPrefix
    const n = r(368)
    const i = /^[\w-]+:/
    function withAuthorizationPrefix(e) {
      if (/^(basic|bearer|token) /i.test(e)) {
        return e
      }
      try {
        if (i.test(n(e))) {
          return `basic ${e}`
        }
      } catch (e) {}
      if (e.split(/\./).length === 3) {
        return `bearer ${e}`
      }
      return `token ${e}`
    }
  },
  145: function(e, t, r) {
    'use strict'
    const n = r(453)
    const i = r(966)
    class MaxBufferError extends Error {
      constructor() {
        super('maxBuffer exceeded')
        this.name = 'MaxBufferError'
      }
    }
    function getStream(e, t) {
      if (!e) {
        return Promise.reject(new Error('Expected a stream'))
      }
      t = Object.assign({ maxBuffer: Infinity }, t)
      const { maxBuffer: r } = t
      let s
      return new Promise((o, a) => {
        const u = e => {
          if (e) {
            e.bufferedData = s.getBufferedValue()
          }
          a(e)
        }
        s = n(e, i(t), e => {
          if (e) {
            u(e)
            return
          }
          o()
        })
        s.on('data', () => {
          if (s.getBufferedLength() > r) {
            u(new MaxBufferError())
          }
        })
      }).then(() => s.getBufferedValue())
    }
    e.exports = getStream
    e.exports.buffer = (e, t) => getStream(e, Object.assign({}, t, { encoding: 'buffer' }))
    e.exports.array = (e, t) => getStream(e, Object.assign({}, t, { array: true }))
    e.exports.MaxBufferError = MaxBufferError
  },
  148: function(e, t, r) {
    e.exports = paginatePlugin
    const { paginateRest: n } = r(299)
    function paginatePlugin(e) {
      Object.assign(e, n(e))
    }
  },
  168: function(e) {
    'use strict'
    const t = ['stdin', 'stdout', 'stderr']
    const r = e => t.some(t => Boolean(e[t]))
    e.exports = e => {
      if (!e) {
        return null
      }
      if (e.stdio && r(e)) {
        throw new Error(
          `It's not possible to provide \`stdio\` in combination with one of ${t
            .map(e => `\`${e}\``)
            .join(', ')}`
        )
      }
      if (typeof e.stdio === 'string') {
        return e.stdio
      }
      const n = e.stdio || []
      if (!Array.isArray(n)) {
        throw new TypeError(
          `Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``
        )
      }
      const i = []
      const s = Math.max(n.length, t.length)
      for (let r = 0; r < s; r++) {
        let s = null
        if (n[r] !== undefined) {
          s = n[r]
        } else if (e[t[r]] !== undefined) {
          s = e[t[r]]
        }
        i[r] = s
      }
      return i
    }
  },
  190: function(e, t, r) {
    e.exports = authenticationPlugin
    const { createTokenAuth: n } = r(813)
    const { Deprecation: i } = r(692)
    const s = r(969)
    const o = r(863)
    const a = r(293)
    const u = r(954)
    const p = r(143)
    const c = s((e, t) => e.warn(t))
    const d = s((e, t) => e.warn(t))
    function authenticationPlugin(e, t) {
      if (t.authStrategy) {
        const r = t.authStrategy(t.auth)
        e.hook.wrap('request', r.hook)
        e.auth = r
        return
      }
      if (!t.auth) {
        e.auth = () => Promise.resolve({ type: 'unauthenticated' })
        return
      }
      const r = typeof t.auth === 'string' && /^basic/.test(p(t.auth))
      if (typeof t.auth === 'string' && !r) {
        const r = n(t.auth)
        e.hook.wrap('request', r.hook)
        e.auth = r
        return
      }
      const [s, l] = r
        ? [
            c,
            'Setting the "new Octokit({ auth })" option to a Basic Auth string is deprecated. Use https://github.com/octokit/auth-basic.js instead. See (https://octokit.github.io/rest.js/#authentication)'
          ]
        : [
            d,
            'Setting the "new Octokit({ auth })" option to an object without also setting the "authStrategy" option is deprecated and will be removed in v17. See (https://octokit.github.io/rest.js/#authentication)'
          ]
      s(e.log, new i('[@octokit/rest] ' + l))
      e.auth = () => Promise.resolve({ type: 'deprecated', message: l })
      u(t.auth)
      const m = { octokit: e, auth: t.auth }
      e.hook.before('request', o.bind(null, m))
      e.hook.error('request', a.bind(null, m))
    }
  },
  197: function(e, t, r) {
    e.exports = isexe
    isexe.sync = sync
    var n = r(747)
    function isexe(e, t, r) {
      n.stat(e, function(e, n) {
        r(e, e ? false : checkStat(n, t))
      })
    }
    function sync(e, t) {
      return checkStat(n.statSync(e), t)
    }
    function checkStat(e, t) {
      return e.isFile() && checkMode(e, t)
    }
    function checkMode(e, t) {
      var r = e.mode
      var n = e.uid
      var i = e.gid
      var s = t.uid !== undefined ? t.uid : process.getuid && process.getuid()
      var o = t.gid !== undefined ? t.gid : process.getgid && process.getgid()
      var a = parseInt('100', 8)
      var u = parseInt('010', 8)
      var p = parseInt('001', 8)
      var c = a | u
      var d = r & p || (r & u && i === o) || (r & a && n === s) || (r & c && s === 0)
      return d
    }
  },
  211: function(e) {
    e.exports = require('https')
  },
  215: function(e) {
    e.exports = {
      _from: '@octokit/rest@16.43.1',
      _id: '@octokit/rest@16.43.1',
      _inBundle: false,
      _integrity:
        'sha512-gfFKwRT/wFxq5qlNjnW2dh+qh74XgTQ2B179UX5K1HYCluioWj8Ndbgqw2PVqa1NnVJkGHp2ovMpVn/DImlmkw==',
      _location: '/@octokit/rest',
      _phantomChildren: {},
      _requested: {
        type: 'version',
        registry: true,
        raw: '@octokit/rest@16.43.1',
        name: '@octokit/rest',
        escapedName: '@octokit%2frest',
        scope: '@octokit',
        rawSpec: '16.43.1',
        saveSpec: null,
        fetchSpec: '16.43.1'
      },
      _requiredBy: ['/'],
      _resolved: 'https://npm.hypers.cc/@octokit%2frest/-/rest-16.43.1.tgz',
      _shasum: '3b11e7d1b1ac2bbeeb23b08a17df0b20947eda6b',
      _spec: '@octokit/rest@16.43.1',
      _where: '/Users/yons/Developer/projects/wakatime-sync',
      author: { name: 'Gregor Martynus', url: 'https://github.com/gr2m' },
      bugs: { url: 'https://github.com/octokit/rest.js/issues' },
      bundleDependencies: false,
      bundlesize: [{ path: './dist/octokit-rest.min.js.gz', maxSize: '33 kB' }],
      contributors: [
        { name: 'Mike de Boer', email: 'info@mikedeboer.nl' },
        { name: 'Fabian Jakobs', email: 'fabian@c9.io' },
        { name: 'Joe Gallo', email: 'joe@brassafrax.com' },
        { name: 'Gregor Martynus', url: 'https://github.com/gr2m' }
      ],
      dependencies: {
        '@octokit/auth-token': '^2.4.0',
        '@octokit/plugin-paginate-rest': '^1.1.1',
        '@octokit/plugin-request-log': '^1.0.0',
        '@octokit/plugin-rest-endpoint-methods': '2.4.0',
        '@octokit/request': '^5.2.0',
        '@octokit/request-error': '^1.0.2',
        'atob-lite': '^2.0.0',
        'before-after-hook': '^2.0.0',
        'btoa-lite': '^1.0.0',
        deprecation: '^2.0.0',
        'lodash.get': '^4.4.2',
        'lodash.set': '^4.3.2',
        'lodash.uniq': '^4.5.0',
        'octokit-pagination-methods': '^1.1.0',
        once: '^1.4.0',
        'universal-user-agent': '^4.0.0'
      },
      deprecated: false,
      description: 'GitHub REST API client for Node.js',
      devDependencies: {
        '@gimenete/type-writer': '^0.1.3',
        '@octokit/auth': '^1.1.1',
        '@octokit/fixtures-server': '^5.0.6',
        '@octokit/graphql': '^4.2.0',
        '@types/node': '^13.1.0',
        bundlesize: '^0.18.0',
        chai: '^4.1.2',
        'compression-webpack-plugin': '^3.1.0',
        cypress: '^3.0.0',
        glob: '^7.1.2',
        'http-proxy-agent': '^4.0.0',
        'lodash.camelcase': '^4.3.0',
        'lodash.merge': '^4.6.1',
        'lodash.upperfirst': '^4.3.1',
        lolex: '^5.1.2',
        mkdirp: '^1.0.0',
        mocha: '^7.0.1',
        mustache: '^4.0.0',
        nock: '^11.3.3',
        'npm-run-all': '^4.1.2',
        nyc: '^15.0.0',
        prettier: '^1.14.2',
        proxy: '^1.0.0',
        'semantic-release': '^17.0.0',
        sinon: '^8.0.0',
        'sinon-chai': '^3.0.0',
        'sort-keys': '^4.0.0',
        'string-to-arraybuffer': '^1.0.0',
        'string-to-jsdoc-comment': '^1.0.0',
        typescript: '^3.3.1',
        webpack: '^4.0.0',
        'webpack-bundle-analyzer': '^3.0.0',
        'webpack-cli': '^3.0.0'
      },
      files: ['index.js', 'index.d.ts', 'lib', 'plugins'],
      homepage: 'https://github.com/octokit/rest.js#readme',
      keywords: ['octokit', 'github', 'rest', 'api-client'],
      license: 'MIT',
      name: '@octokit/rest',
      nyc: { ignore: ['test'] },
      publishConfig: { access: 'public' },
      release: {
        publish: [
          '@semantic-release/npm',
          { path: '@semantic-release/github', assets: ['dist/*', '!dist/*.map.gz'] }
        ]
      },
      repository: { type: 'git', url: 'git+https://github.com/octokit/rest.js.git' },
      scripts: {
        build: 'npm-run-all build:*',
        'build:browser': 'npm-run-all build:browser:*',
        'build:browser:development':
          'webpack --mode development --entry . --output-library=Octokit --output=./dist/octokit-rest.js --profile --json > dist/bundle-stats.json',
        'build:browser:production':
          'webpack --mode production --entry . --plugin=compression-webpack-plugin --output-library=Octokit --output-path=./dist --output-filename=octokit-rest.min.js --devtool source-map',
        'build:ts': 'npm run -s update-endpoints:typescript',
        coverage: 'nyc report --reporter=html && open coverage/index.html',
        'generate-bundle-report':
          'webpack-bundle-analyzer dist/bundle-stats.json --mode=static --no-open --report dist/bundle-report.html',
        lint:
          "prettier --check '{lib,plugins,scripts,test}/**/*.{js,json,ts}' 'docs/*.{js,json}' 'docs/src/**/*' index.js README.md package.json",
        'lint:fix':
          "prettier --write '{lib,plugins,scripts,test}/**/*.{js,json,ts}' 'docs/*.{js,json}' 'docs/src/**/*' index.js README.md package.json",
        'postvalidate:ts': 'tsc --noEmit --target es6 test/typescript-validate.ts',
        'prebuild:browser': 'mkdirp dist/',
        pretest: 'npm run -s lint',
        'prevalidate:ts': 'npm run -s build:ts',
        'start-fixtures-server': 'octokit-fixtures-server',
        test: 'nyc mocha test/mocha-node-setup.js "test/*/**/*-test.js"',
        'test:browser': 'cypress run --browser chrome',
        'update-endpoints': 'npm-run-all update-endpoints:*',
        'update-endpoints:fetch-json': 'node scripts/update-endpoints/fetch-json',
        'update-endpoints:typescript': 'node scripts/update-endpoints/typescript',
        'validate:ts': 'tsc --target es6 --noImplicitAny index.d.ts'
      },
      types: 'index.d.ts',
      version: '16.43.1'
    }
  },
  219: function(e, t, r) {
    'use strict'
    var n = r(35)
    var i = r(564)
    var s = r(133)
    var o = r(631)
    var a = r(688)
    var u = r(26)
    e.exports = function xhrAdapter(e) {
      return new Promise(function dispatchXhrRequest(t, p) {
        var c = e.data
        var d = e.headers
        if (n.isFormData(c)) {
          delete d['Content-Type']
        }
        var l = new XMLHttpRequest()
        if (e.auth) {
          var m = e.auth.username || ''
          var g = e.auth.password || ''
          d.Authorization = 'Basic ' + btoa(m + ':' + g)
        }
        l.open(e.method.toUpperCase(), s(e.url, e.params, e.paramsSerializer), true)
        l.timeout = e.timeout
        l.onreadystatechange = function handleLoad() {
          if (!l || l.readyState !== 4) {
            return
          }
          if (l.status === 0 && !(l.responseURL && l.responseURL.indexOf('file:') === 0)) {
            return
          }
          var r = 'getAllResponseHeaders' in l ? o(l.getAllResponseHeaders()) : null
          var n = !e.responseType || e.responseType === 'text' ? l.responseText : l.response
          var s = {
            data: n,
            status: l.status,
            statusText: l.statusText,
            headers: r,
            config: e,
            request: l
          }
          i(t, p, s)
          l = null
        }
        l.onerror = function handleError() {
          p(u('Network Error', e, null, l))
          l = null
        }
        l.ontimeout = function handleTimeout() {
          p(u('timeout of ' + e.timeout + 'ms exceeded', e, 'ECONNABORTED', l))
          l = null
        }
        if (n.isStandardBrowserEnv()) {
          var h = r(864)
          var y =
            (e.withCredentials || a(e.url)) && e.xsrfCookieName
              ? h.read(e.xsrfCookieName)
              : undefined
          if (y) {
            d[e.xsrfHeaderName] = y
          }
        }
        if ('setRequestHeader' in l) {
          n.forEach(d, function setRequestHeader(e, t) {
            if (typeof c === 'undefined' && t.toLowerCase() === 'content-type') {
              delete d[t]
            } else {
              l.setRequestHeader(t, e)
            }
          })
        }
        if (e.withCredentials) {
          l.withCredentials = true
        }
        if (e.responseType) {
          try {
            l.responseType = e.responseType
          } catch (t) {
            if (e.responseType !== 'json') {
              throw t
            }
          }
        }
        if (typeof e.onDownloadProgress === 'function') {
          l.addEventListener('progress', e.onDownloadProgress)
        }
        if (typeof e.onUploadProgress === 'function' && l.upload) {
          l.upload.addEventListener('progress', e.onUploadProgress)
        }
        if (e.cancelToken) {
          e.cancelToken.promise.then(function onCanceled(e) {
            if (!l) {
              return
            }
            l.abort()
            p(e)
            l = null
          })
        }
        if (c === undefined) {
          c = null
        }
        l.send(c)
      })
    }
  },
  247: function(e, t, r) {
    'use strict'
    const n = r(87)
    const i = r(364)
    const s = process.env
    let o
    if (i('no-color') || i('no-colors') || i('color=false')) {
      o = false
    } else if (i('color') || i('colors') || i('color=true') || i('color=always')) {
      o = true
    }
    if ('FORCE_COLOR' in s) {
      o = s.FORCE_COLOR.length === 0 || parseInt(s.FORCE_COLOR, 10) !== 0
    }
    function translateLevel(e) {
      if (e === 0) {
        return false
      }
      return { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 }
    }
    function supportsColor(e) {
      if (o === false) {
        return 0
      }
      if (i('color=16m') || i('color=full') || i('color=truecolor')) {
        return 3
      }
      if (i('color=256')) {
        return 2
      }
      if (e && !e.isTTY && o !== true) {
        return 0
      }
      const t = o ? 1 : 0
      if (process.platform === 'win32') {
        const e = n.release().split('.')
        if (
          Number(process.versions.node.split('.')[0]) >= 8 &&
          Number(e[0]) >= 10 &&
          Number(e[2]) >= 10586
        ) {
          return Number(e[2]) >= 14931 ? 3 : 2
        }
        return 1
      }
      if ('CI' in s) {
        if (
          ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(e => e in s) ||
          s.CI_NAME === 'codeship'
        ) {
          return 1
        }
        return t
      }
      if ('TEAMCITY_VERSION' in s) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(s.TEAMCITY_VERSION) ? 1 : 0
      }
      if (s.COLORTERM === 'truecolor') {
        return 3
      }
      if ('TERM_PROGRAM' in s) {
        const e = parseInt((s.TERM_PROGRAM_VERSION || '').split('.')[0], 10)
        switch (s.TERM_PROGRAM) {
          case 'iTerm.app':
            return e >= 3 ? 3 : 2
          case 'Apple_Terminal':
            return 2
        }
      }
      if (/-256(color)?$/i.test(s.TERM)) {
        return 2
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(s.TERM)) {
        return 1
      }
      if ('COLORTERM' in s) {
        return 1
      }
      if (s.TERM === 'dumb') {
        return t
      }
      return t
    }
    function getSupportLevel(e) {
      const t = supportsColor(e)
      return translateLevel(t)
    }
    e.exports = {
      supportsColor: getSupportLevel,
      stdout: getSupportLevel(process.stdout),
      stderr: getSupportLevel(process.stderr)
    }
  },
  260: function(e, t, r) {
    var n = r(357)
    var i = r(654)
    var s = r(614)
    if (typeof s !== 'function') {
      s = s.EventEmitter
    }
    var o
    if (process.__signal_exit_emitter__) {
      o = process.__signal_exit_emitter__
    } else {
      o = process.__signal_exit_emitter__ = new s()
      o.count = 0
      o.emitted = {}
    }
    if (!o.infinite) {
      o.setMaxListeners(Infinity)
      o.infinite = true
    }
    e.exports = function(e, t) {
      n.equal(typeof e, 'function', 'a callback must be provided for exit handler')
      if (u === false) {
        load()
      }
      var r = 'exit'
      if (t && t.alwaysLast) {
        r = 'afterexit'
      }
      var i = function() {
        o.removeListener(r, e)
        if (o.listeners('exit').length === 0 && o.listeners('afterexit').length === 0) {
          unload()
        }
      }
      o.on(r, e)
      return i
    }
    e.exports.unload = unload
    function unload() {
      if (!u) {
        return
      }
      u = false
      i.forEach(function(e) {
        try {
          process.removeListener(e, a[e])
        } catch (e) {}
      })
      process.emit = c
      process.reallyExit = p
      o.count -= 1
    }
    function emit(e, t, r) {
      if (o.emitted[e]) {
        return
      }
      o.emitted[e] = true
      o.emit(e, t, r)
    }
    var a = {}
    i.forEach(function(e) {
      a[e] = function listener() {
        var t = process.listeners(e)
        if (t.length === o.count) {
          unload()
          emit('exit', null, e)
          emit('afterexit', null, e)
          process.kill(process.pid, e)
        }
      }
    })
    e.exports.signals = function() {
      return i
    }
    e.exports.load = load
    var u = false
    function load() {
      if (u) {
        return
      }
      u = true
      o.count += 1
      i = i.filter(function(e) {
        try {
          process.on(e, a[e])
          return true
        } catch (e) {
          return false
        }
      })
      process.emit = processEmit
      process.reallyExit = processReallyExit
    }
    var p = process.reallyExit
    function processReallyExit(e) {
      process.exitCode = e || 0
      emit('exit', process.exitCode, null)
      emit('afterexit', process.exitCode, null)
      p.call(process, process.exitCode)
    }
    var c = process.emit
    function processEmit(e, t) {
      if (e === 'exit') {
        if (t !== undefined) {
          process.exitCode = t
        }
        var r = c.apply(this, arguments)
        emit('exit', process.exitCode, null)
        emit('afterexit', process.exitCode, null)
        return r
      } else {
        return c.apply(this, arguments)
      }
    }
  },
  265: function(e, t, r) {
    e.exports = getPage
    const n = r(370)
    const i = r(577)
    const s = r(297)
    function getPage(e, t, r, o) {
      n(
        `octokit.get${r.charAt(0).toUpperCase() +
          r.slice(
            1
          )}Page() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`
      )
      const a = i(t)[r]
      if (!a) {
        const e = new s(`No ${r} page found`, 404)
        return Promise.reject(e)
      }
      const u = { url: a, headers: applyAcceptHeader(t, o) }
      const p = e.request(u)
      return p
    }
    function applyAcceptHeader(e, t) {
      const r = e.headers && e.headers['x-github-media-type']
      if (!r || (t && t.accept)) {
        return t
      }
      t = t || {}
      t.accept = 'application/vnd.' + r.replace('; param=', '.').replace('; format=', '+')
      return t
    }
  },
  280: function(e, t) {
    t = e.exports = SemVer
    var r
    if (
      typeof process === 'object' &&
      process.env &&
      process.env.NODE_DEBUG &&
      /\bsemver\b/i.test(process.env.NODE_DEBUG)
    ) {
      r = function() {
        var e = Array.prototype.slice.call(arguments, 0)
        e.unshift('SEMVER')
        console.log.apply(console, e)
      }
    } else {
      r = function() {}
    }
    t.SEMVER_SPEC_VERSION = '2.0.0'
    var n = 256
    var i = Number.MAX_SAFE_INTEGER || 9007199254740991
    var s = 16
    var o = (t.re = [])
    var a = (t.src = [])
    var u = 0
    var p = u++
    a[p] = '0|[1-9]\\d*'
    var c = u++
    a[c] = '[0-9]+'
    var d = u++
    a[d] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'
    var l = u++
    a[l] = '(' + a[p] + ')\\.' + '(' + a[p] + ')\\.' + '(' + a[p] + ')'
    var m = u++
    a[m] = '(' + a[c] + ')\\.' + '(' + a[c] + ')\\.' + '(' + a[c] + ')'
    var g = u++
    a[g] = '(?:' + a[p] + '|' + a[d] + ')'
    var h = u++
    a[h] = '(?:' + a[c] + '|' + a[d] + ')'
    var y = u++
    a[y] = '(?:-(' + a[g] + '(?:\\.' + a[g] + ')*))'
    var f = u++
    a[f] = '(?:-?(' + a[h] + '(?:\\.' + a[h] + ')*))'
    var b = u++
    a[b] = '[0-9A-Za-z-]+'
    var _ = u++
    a[_] = '(?:\\+(' + a[b] + '(?:\\.' + a[b] + ')*))'
    var v = u++
    var q = 'v?' + a[l] + a[y] + '?' + a[_] + '?'
    a[v] = '^' + q + '$'
    var w = '[v=\\s]*' + a[m] + a[f] + '?' + a[_] + '?'
    var E = u++
    a[E] = '^' + w + '$'
    var T = u++
    a[T] = '((?:<|>)?=?)'
    var k = u++
    a[k] = a[c] + '|x|X|\\*'
    var C = u++
    a[C] = a[p] + '|x|X|\\*'
    var j = u++
    a[j] =
      '[v=\\s]*(' +
      a[C] +
      ')' +
      '(?:\\.(' +
      a[C] +
      ')' +
      '(?:\\.(' +
      a[C] +
      ')' +
      '(?:' +
      a[y] +
      ')?' +
      a[_] +
      '?' +
      ')?)?'
    var S = u++
    a[S] =
      '[v=\\s]*(' +
      a[k] +
      ')' +
      '(?:\\.(' +
      a[k] +
      ')' +
      '(?:\\.(' +
      a[k] +
      ')' +
      '(?:' +
      a[f] +
      ')?' +
      a[_] +
      '?' +
      ')?)?'
    var O = u++
    a[O] = '^' + a[T] + '\\s*' + a[j] + '$'
    var x = u++
    a[x] = '^' + a[T] + '\\s*' + a[S] + '$'
    var P = u++
    a[P] =
      '(?:^|[^\\d])' +
      '(\\d{1,' +
      s +
      '})' +
      '(?:\\.(\\d{1,' +
      s +
      '}))?' +
      '(?:\\.(\\d{1,' +
      s +
      '}))?' +
      '(?:$|[^\\d])'
    var R = u++
    a[R] = '(?:~>?)'
    var A = u++
    a[A] = '(\\s*)' + a[R] + '\\s+'
    o[A] = new RegExp(a[A], 'g')
    var G = '$1~'
    var D = u++
    a[D] = '^' + a[R] + a[j] + '$'
    var L = u++
    a[L] = '^' + a[R] + a[S] + '$'
    var F = u++
    a[F] = '(?:\\^)'
    var I = u++
    a[I] = '(\\s*)' + a[F] + '\\s+'
    o[I] = new RegExp(a[I], 'g')
    var $ = '$1^'
    var M = u++
    a[M] = '^' + a[F] + a[j] + '$'
    var U = u++
    a[U] = '^' + a[F] + a[S] + '$'
    var B = u++
    a[B] = '^' + a[T] + '\\s*(' + w + ')$|^$'
    var H = u++
    a[H] = '^' + a[T] + '\\s*(' + q + ')$|^$'
    var z = u++
    a[z] = '(\\s*)' + a[T] + '\\s*(' + w + '|' + a[j] + ')'
    o[z] = new RegExp(a[z], 'g')
    var N = '$1$2$3'
    var V = u++
    a[V] = '^\\s*(' + a[j] + ')' + '\\s+-\\s+' + '(' + a[j] + ')' + '\\s*$'
    var W = u++
    a[W] = '^\\s*(' + a[S] + ')' + '\\s+-\\s+' + '(' + a[S] + ')' + '\\s*$'
    var K = u++
    a[K] = '(<|>)?=?\\s*\\*'
    for (var Y = 0; Y < u; Y++) {
      r(Y, a[Y])
      if (!o[Y]) {
        o[Y] = new RegExp(a[Y])
      }
    }
    t.parse = parse
    function parse(e, t) {
      if (!t || typeof t !== 'object') {
        t = { loose: !!t, includePrerelease: false }
      }
      if (e instanceof SemVer) {
        return e
      }
      if (typeof e !== 'string') {
        return null
      }
      if (e.length > n) {
        return null
      }
      var r = t.loose ? o[E] : o[v]
      if (!r.test(e)) {
        return null
      }
      try {
        return new SemVer(e, t)
      } catch (e) {
        return null
      }
    }
    t.valid = valid
    function valid(e, t) {
      var r = parse(e, t)
      return r ? r.version : null
    }
    t.clean = clean
    function clean(e, t) {
      var r = parse(e.trim().replace(/^[=v]+/, ''), t)
      return r ? r.version : null
    }
    t.SemVer = SemVer
    function SemVer(e, t) {
      if (!t || typeof t !== 'object') {
        t = { loose: !!t, includePrerelease: false }
      }
      if (e instanceof SemVer) {
        if (e.loose === t.loose) {
          return e
        } else {
          e = e.version
        }
      } else if (typeof e !== 'string') {
        throw new TypeError('Invalid Version: ' + e)
      }
      if (e.length > n) {
        throw new TypeError('version is longer than ' + n + ' characters')
      }
      if (!(this instanceof SemVer)) {
        return new SemVer(e, t)
      }
      r('SemVer', e, t)
      this.options = t
      this.loose = !!t.loose
      var s = e.trim().match(t.loose ? o[E] : o[v])
      if (!s) {
        throw new TypeError('Invalid Version: ' + e)
      }
      this.raw = e
      this.major = +s[1]
      this.minor = +s[2]
      this.patch = +s[3]
      if (this.major > i || this.major < 0) {
        throw new TypeError('Invalid major version')
      }
      if (this.minor > i || this.minor < 0) {
        throw new TypeError('Invalid minor version')
      }
      if (this.patch > i || this.patch < 0) {
        throw new TypeError('Invalid patch version')
      }
      if (!s[4]) {
        this.prerelease = []
      } else {
        this.prerelease = s[4].split('.').map(function(e) {
          if (/^[0-9]+$/.test(e)) {
            var t = +e
            if (t >= 0 && t < i) {
              return t
            }
          }
          return e
        })
      }
      this.build = s[5] ? s[5].split('.') : []
      this.format()
    }
    SemVer.prototype.format = function() {
      this.version = this.major + '.' + this.minor + '.' + this.patch
      if (this.prerelease.length) {
        this.version += '-' + this.prerelease.join('.')
      }
      return this.version
    }
    SemVer.prototype.toString = function() {
      return this.version
    }
    SemVer.prototype.compare = function(e) {
      r('SemVer.compare', this.version, this.options, e)
      if (!(e instanceof SemVer)) {
        e = new SemVer(e, this.options)
      }
      return this.compareMain(e) || this.comparePre(e)
    }
    SemVer.prototype.compareMain = function(e) {
      if (!(e instanceof SemVer)) {
        e = new SemVer(e, this.options)
      }
      return (
        compareIdentifiers(this.major, e.major) ||
        compareIdentifiers(this.minor, e.minor) ||
        compareIdentifiers(this.patch, e.patch)
      )
    }
    SemVer.prototype.comparePre = function(e) {
      if (!(e instanceof SemVer)) {
        e = new SemVer(e, this.options)
      }
      if (this.prerelease.length && !e.prerelease.length) {
        return -1
      } else if (!this.prerelease.length && e.prerelease.length) {
        return 1
      } else if (!this.prerelease.length && !e.prerelease.length) {
        return 0
      }
      var t = 0
      do {
        var n = this.prerelease[t]
        var i = e.prerelease[t]
        r('prerelease compare', t, n, i)
        if (n === undefined && i === undefined) {
          return 0
        } else if (i === undefined) {
          return 1
        } else if (n === undefined) {
          return -1
        } else if (n === i) {
          continue
        } else {
          return compareIdentifiers(n, i)
        }
      } while (++t)
    }
    SemVer.prototype.inc = function(e, t) {
      switch (e) {
        case 'premajor':
          this.prerelease.length = 0
          this.patch = 0
          this.minor = 0
          this.major++
          this.inc('pre', t)
          break
        case 'preminor':
          this.prerelease.length = 0
          this.patch = 0
          this.minor++
          this.inc('pre', t)
          break
        case 'prepatch':
          this.prerelease.length = 0
          this.inc('patch', t)
          this.inc('pre', t)
          break
        case 'prerelease':
          if (this.prerelease.length === 0) {
            this.inc('patch', t)
          }
          this.inc('pre', t)
          break
        case 'major':
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++
          }
          this.minor = 0
          this.patch = 0
          this.prerelease = []
          break
        case 'minor':
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++
          }
          this.patch = 0
          this.prerelease = []
          break
        case 'patch':
          if (this.prerelease.length === 0) {
            this.patch++
          }
          this.prerelease = []
          break
        case 'pre':
          if (this.prerelease.length === 0) {
            this.prerelease = [0]
          } else {
            var r = this.prerelease.length
            while (--r >= 0) {
              if (typeof this.prerelease[r] === 'number') {
                this.prerelease[r]++
                r = -2
              }
            }
            if (r === -1) {
              this.prerelease.push(0)
            }
          }
          if (t) {
            if (this.prerelease[0] === t) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = [t, 0]
              }
            } else {
              this.prerelease = [t, 0]
            }
          }
          break
        default:
          throw new Error('invalid increment argument: ' + e)
      }
      this.format()
      this.raw = this.version
      return this
    }
    t.inc = inc
    function inc(e, t, r, n) {
      if (typeof r === 'string') {
        n = r
        r = undefined
      }
      try {
        return new SemVer(e, r).inc(t, n).version
      } catch (e) {
        return null
      }
    }
    t.diff = diff
    function diff(e, t) {
      if (eq(e, t)) {
        return null
      } else {
        var r = parse(e)
        var n = parse(t)
        var i = ''
        if (r.prerelease.length || n.prerelease.length) {
          i = 'pre'
          var s = 'prerelease'
        }
        for (var o in r) {
          if (o === 'major' || o === 'minor' || o === 'patch') {
            if (r[o] !== n[o]) {
              return i + o
            }
          }
        }
        return s
      }
    }
    t.compareIdentifiers = compareIdentifiers
    var X = /^[0-9]+$/
    function compareIdentifiers(e, t) {
      var r = X.test(e)
      var n = X.test(t)
      if (r && n) {
        e = +e
        t = +t
      }
      return e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
    }
    t.rcompareIdentifiers = rcompareIdentifiers
    function rcompareIdentifiers(e, t) {
      return compareIdentifiers(t, e)
    }
    t.major = major
    function major(e, t) {
      return new SemVer(e, t).major
    }
    t.minor = minor
    function minor(e, t) {
      return new SemVer(e, t).minor
    }
    t.patch = patch
    function patch(e, t) {
      return new SemVer(e, t).patch
    }
    t.compare = compare
    function compare(e, t, r) {
      return new SemVer(e, r).compare(new SemVer(t, r))
    }
    t.compareLoose = compareLoose
    function compareLoose(e, t) {
      return compare(e, t, true)
    }
    t.rcompare = rcompare
    function rcompare(e, t, r) {
      return compare(t, e, r)
    }
    t.sort = sort
    function sort(e, r) {
      return e.sort(function(e, n) {
        return t.compare(e, n, r)
      })
    }
    t.rsort = rsort
    function rsort(e, r) {
      return e.sort(function(e, n) {
        return t.rcompare(e, n, r)
      })
    }
    t.gt = gt
    function gt(e, t, r) {
      return compare(e, t, r) > 0
    }
    t.lt = lt
    function lt(e, t, r) {
      return compare(e, t, r) < 0
    }
    t.eq = eq
    function eq(e, t, r) {
      return compare(e, t, r) === 0
    }
    t.neq = neq
    function neq(e, t, r) {
      return compare(e, t, r) !== 0
    }
    t.gte = gte
    function gte(e, t, r) {
      return compare(e, t, r) >= 0
    }
    t.lte = lte
    function lte(e, t, r) {
      return compare(e, t, r) <= 0
    }
    t.cmp = cmp
    function cmp(e, t, r, n) {
      switch (t) {
        case '===':
          if (typeof e === 'object') e = e.version
          if (typeof r === 'object') r = r.version
          return e === r
        case '!==':
          if (typeof e === 'object') e = e.version
          if (typeof r === 'object') r = r.version
          return e !== r
        case '':
        case '=':
        case '==':
          return eq(e, r, n)
        case '!=':
          return neq(e, r, n)
        case '>':
          return gt(e, r, n)
        case '>=':
          return gte(e, r, n)
        case '<':
          return lt(e, r, n)
        case '<=':
          return lte(e, r, n)
        default:
          throw new TypeError('Invalid operator: ' + t)
      }
    }
    t.Comparator = Comparator
    function Comparator(e, t) {
      if (!t || typeof t !== 'object') {
        t = { loose: !!t, includePrerelease: false }
      }
      if (e instanceof Comparator) {
        if (e.loose === !!t.loose) {
          return e
        } else {
          e = e.value
        }
      }
      if (!(this instanceof Comparator)) {
        return new Comparator(e, t)
      }
      r('comparator', e, t)
      this.options = t
      this.loose = !!t.loose
      this.parse(e)
      if (this.semver === J) {
        this.value = ''
      } else {
        this.value = this.operator + this.semver.version
      }
      r('comp', this)
    }
    var J = {}
    Comparator.prototype.parse = function(e) {
      var t = this.options.loose ? o[B] : o[H]
      var r = e.match(t)
      if (!r) {
        throw new TypeError('Invalid comparator: ' + e)
      }
      this.operator = r[1]
      if (this.operator === '=') {
        this.operator = ''
      }
      if (!r[2]) {
        this.semver = J
      } else {
        this.semver = new SemVer(r[2], this.options.loose)
      }
    }
    Comparator.prototype.toString = function() {
      return this.value
    }
    Comparator.prototype.test = function(e) {
      r('Comparator.test', e, this.options.loose)
      if (this.semver === J) {
        return true
      }
      if (typeof e === 'string') {
        e = new SemVer(e, this.options)
      }
      return cmp(e, this.operator, this.semver, this.options)
    }
    Comparator.prototype.intersects = function(e, t) {
      if (!(e instanceof Comparator)) {
        throw new TypeError('a Comparator is required')
      }
      if (!t || typeof t !== 'object') {
        t = { loose: !!t, includePrerelease: false }
      }
      var r
      if (this.operator === '') {
        r = new Range(e.value, t)
        return satisfies(this.value, r, t)
      } else if (e.operator === '') {
        r = new Range(this.value, t)
        return satisfies(e.semver, r, t)
      }
      var n =
        (this.operator === '>=' || this.operator === '>') &&
        (e.operator === '>=' || e.operator === '>')
      var i =
        (this.operator === '<=' || this.operator === '<') &&
        (e.operator === '<=' || e.operator === '<')
      var s = this.semver.version === e.semver.version
      var o =
        (this.operator === '>=' || this.operator === '<=') &&
        (e.operator === '>=' || e.operator === '<=')
      var a =
        cmp(this.semver, '<', e.semver, t) &&
        (this.operator === '>=' || this.operator === '>') &&
          (e.operator === '<=' || e.operator === '<')
      var u =
        cmp(this.semver, '>', e.semver, t) &&
        (this.operator === '<=' || this.operator === '<') &&
          (e.operator === '>=' || e.operator === '>')
      return n || i || (s && o) || a || u
    }
    t.Range = Range
    function Range(e, t) {
      if (!t || typeof t !== 'object') {
        t = { loose: !!t, includePrerelease: false }
      }
      if (e instanceof Range) {
        if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) {
          return e
        } else {
          return new Range(e.raw, t)
        }
      }
      if (e instanceof Comparator) {
        return new Range(e.value, t)
      }
      if (!(this instanceof Range)) {
        return new Range(e, t)
      }
      this.options = t
      this.loose = !!t.loose
      this.includePrerelease = !!t.includePrerelease
      this.raw = e
      this.set = e
        .split(/\s*\|\|\s*/)
        .map(function(e) {
          return this.parseRange(e.trim())
        }, this)
        .filter(function(e) {
          return e.length
        })
      if (!this.set.length) {
        throw new TypeError('Invalid SemVer Range: ' + e)
      }
      this.format()
    }
    Range.prototype.format = function() {
      this.range = this.set
        .map(function(e) {
          return e.join(' ').trim()
        })
        .join('||')
        .trim()
      return this.range
    }
    Range.prototype.toString = function() {
      return this.range
    }
    Range.prototype.parseRange = function(e) {
      var t = this.options.loose
      e = e.trim()
      var n = t ? o[W] : o[V]
      e = e.replace(n, hyphenReplace)
      r('hyphen replace', e)
      e = e.replace(o[z], N)
      r('comparator trim', e, o[z])
      e = e.replace(o[A], G)
      e = e.replace(o[I], $)
      e = e.split(/\s+/).join(' ')
      var i = t ? o[B] : o[H]
      var s = e
        .split(' ')
        .map(function(e) {
          return parseComparator(e, this.options)
        }, this)
        .join(' ')
        .split(/\s+/)
      if (this.options.loose) {
        s = s.filter(function(e) {
          return !!e.match(i)
        })
      }
      s = s.map(function(e) {
        return new Comparator(e, this.options)
      }, this)
      return s
    }
    Range.prototype.intersects = function(e, t) {
      if (!(e instanceof Range)) {
        throw new TypeError('a Range is required')
      }
      return this.set.some(function(r) {
        return r.every(function(r) {
          return e.set.some(function(e) {
            return e.every(function(e) {
              return r.intersects(e, t)
            })
          })
        })
      })
    }
    t.toComparators = toComparators
    function toComparators(e, t) {
      return new Range(e, t).set.map(function(e) {
        return e
          .map(function(e) {
            return e.value
          })
          .join(' ')
          .trim()
          .split(' ')
      })
    }
    function parseComparator(e, t) {
      r('comp', e, t)
      e = replaceCarets(e, t)
      r('caret', e)
      e = replaceTildes(e, t)
      r('tildes', e)
      e = replaceXRanges(e, t)
      r('xrange', e)
      e = replaceStars(e, t)
      r('stars', e)
      return e
    }
    function isX(e) {
      return !e || e.toLowerCase() === 'x' || e === '*'
    }
    function replaceTildes(e, t) {
      return e
        .trim()
        .split(/\s+/)
        .map(function(e) {
          return replaceTilde(e, t)
        })
        .join(' ')
    }
    function replaceTilde(e, t) {
      var n = t.loose ? o[L] : o[D]
      return e.replace(n, function(t, n, i, s, o) {
        r('tilde', e, t, n, i, s, o)
        var a
        if (isX(n)) {
          a = ''
        } else if (isX(i)) {
          a = '>=' + n + '.0.0 <' + (+n + 1) + '.0.0'
        } else if (isX(s)) {
          a = '>=' + n + '.' + i + '.0 <' + n + '.' + (+i + 1) + '.0'
        } else if (o) {
          r('replaceTilde pr', o)
          a = '>=' + n + '.' + i + '.' + s + '-' + o + ' <' + n + '.' + (+i + 1) + '.0'
        } else {
          a = '>=' + n + '.' + i + '.' + s + ' <' + n + '.' + (+i + 1) + '.0'
        }
        r('tilde return', a)
        return a
      })
    }
    function replaceCarets(e, t) {
      return e
        .trim()
        .split(/\s+/)
        .map(function(e) {
          return replaceCaret(e, t)
        })
        .join(' ')
    }
    function replaceCaret(e, t) {
      r('caret', e, t)
      var n = t.loose ? o[U] : o[M]
      return e.replace(n, function(t, n, i, s, o) {
        r('caret', e, t, n, i, s, o)
        var a
        if (isX(n)) {
          a = ''
        } else if (isX(i)) {
          a = '>=' + n + '.0.0 <' + (+n + 1) + '.0.0'
        } else if (isX(s)) {
          if (n === '0') {
            a = '>=' + n + '.' + i + '.0 <' + n + '.' + (+i + 1) + '.0'
          } else {
            a = '>=' + n + '.' + i + '.0 <' + (+n + 1) + '.0.0'
          }
        } else if (o) {
          r('replaceCaret pr', o)
          if (n === '0') {
            if (i === '0') {
              a = '>=' + n + '.' + i + '.' + s + '-' + o + ' <' + n + '.' + i + '.' + (+s + 1)
            } else {
              a = '>=' + n + '.' + i + '.' + s + '-' + o + ' <' + n + '.' + (+i + 1) + '.0'
            }
          } else {
            a = '>=' + n + '.' + i + '.' + s + '-' + o + ' <' + (+n + 1) + '.0.0'
          }
        } else {
          r('no pr')
          if (n === '0') {
            if (i === '0') {
              a = '>=' + n + '.' + i + '.' + s + ' <' + n + '.' + i + '.' + (+s + 1)
            } else {
              a = '>=' + n + '.' + i + '.' + s + ' <' + n + '.' + (+i + 1) + '.0'
            }
          } else {
            a = '>=' + n + '.' + i + '.' + s + ' <' + (+n + 1) + '.0.0'
          }
        }
        r('caret return', a)
        return a
      })
    }
    function replaceXRanges(e, t) {
      r('replaceXRanges', e, t)
      return e
        .split(/\s+/)
        .map(function(e) {
          return replaceXRange(e, t)
        })
        .join(' ')
    }
    function replaceXRange(e, t) {
      e = e.trim()
      var n = t.loose ? o[x] : o[O]
      return e.replace(n, function(t, n, i, s, o, a) {
        r('xRange', e, t, n, i, s, o, a)
        var u = isX(i)
        var p = u || isX(s)
        var c = p || isX(o)
        var d = c
        if (n === '=' && d) {
          n = ''
        }
        if (u) {
          if (n === '>' || n === '<') {
            t = '<0.0.0'
          } else {
            t = '*'
          }
        } else if (n && d) {
          if (p) {
            s = 0
          }
          o = 0
          if (n === '>') {
            n = '>='
            if (p) {
              i = +i + 1
              s = 0
              o = 0
            } else {
              s = +s + 1
              o = 0
            }
          } else if (n === '<=') {
            n = '<'
            if (p) {
              i = +i + 1
            } else {
              s = +s + 1
            }
          }
          t = n + i + '.' + s + '.' + o
        } else if (p) {
          t = '>=' + i + '.0.0 <' + (+i + 1) + '.0.0'
        } else if (c) {
          t = '>=' + i + '.' + s + '.0 <' + i + '.' + (+s + 1) + '.0'
        }
        r('xRange return', t)
        return t
      })
    }
    function replaceStars(e, t) {
      r('replaceStars', e, t)
      return e.trim().replace(o[K], '')
    }
    function hyphenReplace(e, t, r, n, i, s, o, a, u, p, c, d, l) {
      if (isX(r)) {
        t = ''
      } else if (isX(n)) {
        t = '>=' + r + '.0.0'
      } else if (isX(i)) {
        t = '>=' + r + '.' + n + '.0'
      } else {
        t = '>=' + t
      }
      if (isX(u)) {
        a = ''
      } else if (isX(p)) {
        a = '<' + (+u + 1) + '.0.0'
      } else if (isX(c)) {
        a = '<' + u + '.' + (+p + 1) + '.0'
      } else if (d) {
        a = '<=' + u + '.' + p + '.' + c + '-' + d
      } else {
        a = '<=' + a
      }
      return (t + ' ' + a).trim()
    }
    Range.prototype.test = function(e) {
      if (!e) {
        return false
      }
      if (typeof e === 'string') {
        e = new SemVer(e, this.options)
      }
      for (var t = 0; t < this.set.length; t++) {
        if (testSet(this.set[t], e, this.options)) {
          return true
        }
      }
      return false
    }
    function testSet(e, t, n) {
      for (var i = 0; i < e.length; i++) {
        if (!e[i].test(t)) {
          return false
        }
      }
      if (t.prerelease.length && !n.includePrerelease) {
        for (i = 0; i < e.length; i++) {
          r(e[i].semver)
          if (e[i].semver === J) {
            continue
          }
          if (e[i].semver.prerelease.length > 0) {
            var s = e[i].semver
            if (s.major === t.major && s.minor === t.minor && s.patch === t.patch) {
              return true
            }
          }
        }
        return false
      }
      return true
    }
    t.satisfies = satisfies
    function satisfies(e, t, r) {
      try {
        t = new Range(t, r)
      } catch (e) {
        return false
      }
      return t.test(e)
    }
    t.maxSatisfying = maxSatisfying
    function maxSatisfying(e, t, r) {
      var n = null
      var i = null
      try {
        var s = new Range(t, r)
      } catch (e) {
        return null
      }
      e.forEach(function(e) {
        if (s.test(e)) {
          if (!n || i.compare(e) === -1) {
            n = e
            i = new SemVer(n, r)
          }
        }
      })
      return n
    }
    t.minSatisfying = minSatisfying
    function minSatisfying(e, t, r) {
      var n = null
      var i = null
      try {
        var s = new Range(t, r)
      } catch (e) {
        return null
      }
      e.forEach(function(e) {
        if (s.test(e)) {
          if (!n || i.compare(e) === 1) {
            n = e
            i = new SemVer(n, r)
          }
        }
      })
      return n
    }
    t.minVersion = minVersion
    function minVersion(e, t) {
      e = new Range(e, t)
      var r = new SemVer('0.0.0')
      if (e.test(r)) {
        return r
      }
      r = new SemVer('0.0.0-0')
      if (e.test(r)) {
        return r
      }
      r = null
      for (var n = 0; n < e.set.length; ++n) {
        var i = e.set[n]
        i.forEach(function(e) {
          var t = new SemVer(e.semver.version)
          switch (e.operator) {
            case '>':
              if (t.prerelease.length === 0) {
                t.patch++
              } else {
                t.prerelease.push(0)
              }
              t.raw = t.format()
            case '':
            case '>=':
              if (!r || gt(r, t)) {
                r = t
              }
              break
            case '<':
            case '<=':
              break
            default:
              throw new Error('Unexpected operation: ' + e.operator)
          }
        })
      }
      if (r && e.test(r)) {
        return r
      }
      return null
    }
    t.validRange = validRange
    function validRange(e, t) {
      try {
        return new Range(e, t).range || '*'
      } catch (e) {
        return null
      }
    }
    t.ltr = ltr
    function ltr(e, t, r) {
      return outside(e, t, '<', r)
    }
    t.gtr = gtr
    function gtr(e, t, r) {
      return outside(e, t, '>', r)
    }
    t.outside = outside
    function outside(e, t, r, n) {
      e = new SemVer(e, n)
      t = new Range(t, n)
      var i, s, o, a, u
      switch (r) {
        case '>':
          i = gt
          s = lte
          o = lt
          a = '>'
          u = '>='
          break
        case '<':
          i = lt
          s = gte
          o = gt
          a = '<'
          u = '<='
          break
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"')
      }
      if (satisfies(e, t, n)) {
        return false
      }
      for (var p = 0; p < t.set.length; ++p) {
        var c = t.set[p]
        var d = null
        var l = null
        c.forEach(function(e) {
          if (e.semver === J) {
            e = new Comparator('>=0.0.0')
          }
          d = d || e
          l = l || e
          if (i(e.semver, d.semver, n)) {
            d = e
          } else if (o(e.semver, l.semver, n)) {
            l = e
          }
        })
        if (d.operator === a || d.operator === u) {
          return false
        }
        if ((!l.operator || l.operator === a) && s(e, l.semver)) {
          return false
        } else if (l.operator === u && o(e, l.semver)) {
          return false
        }
      }
      return true
    }
    t.prerelease = prerelease
    function prerelease(e, t) {
      var r = parse(e, t)
      return r && r.prerelease.length ? r.prerelease : null
    }
    t.intersects = intersects
    function intersects(e, t, r) {
      e = new Range(e, r)
      t = new Range(t, r)
      return e.intersects(t)
    }
    t.coerce = coerce
    function coerce(e) {
      if (e instanceof SemVer) {
        return e
      }
      if (typeof e !== 'string') {
        return null
      }
      var t = e.match(o[P])
      if (t == null) {
        return null
      }
      return parse(t[1] + '.' + (t[2] || '0') + '.' + (t[3] || '0'))
    }
  },
  283: function(e, t, r) {
    'use strict'
    var n = r(35)
    function InterceptorManager() {
      this.handlers = []
    }
    InterceptorManager.prototype.use = function use(e, t) {
      this.handlers.push({ fulfilled: e, rejected: t })
      return this.handlers.length - 1
    }
    InterceptorManager.prototype.eject = function eject(e) {
      if (this.handlers[e]) {
        this.handlers[e] = null
      }
    }
    InterceptorManager.prototype.forEach = function forEach(e) {
      n.forEach(this.handlers, function forEachHandler(t) {
        if (t !== null) {
          e(t)
        }
      })
    }
    e.exports = InterceptorManager
  },
  293: function(e, t, r) {
    e.exports = authenticationRequestError
    const { RequestError: n } = r(463)
    function authenticationRequestError(e, t, r) {
      if (!t.headers) throw t
      const i = /required/.test(t.headers['x-github-otp'] || '')
      if (t.status !== 401 || !i) {
        throw t
      }
      if (t.status === 401 && i && t.request && t.request.headers['x-github-otp']) {
        if (e.otp) {
          delete e.otp
        } else {
          throw new n('Invalid one-time password for two-factor authentication', 401, {
            headers: t.headers,
            request: r
          })
        }
      }
      if (typeof e.auth.on2fa !== 'function') {
        throw new n(
          '2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication',
          401,
          { headers: t.headers, request: r }
        )
      }
      return Promise.resolve()
        .then(() => {
          return e.auth.on2fa()
        })
        .then(t => {
          const n = Object.assign(r, { headers: Object.assign(r.headers, { 'x-github-otp': t }) })
          return e.octokit.request(n).then(r => {
            e.otp = t
            return r
          })
        })
    }
  },
  294: function(e, t, r) {
    e.exports = parseOptions
    const { Deprecation: n } = r(692)
    const { getUserAgent: i } = r(796)
    const s = r(969)
    const o = r(215)
    const a = s((e, t) => e.warn(t))
    const u = s((e, t) => e.warn(t))
    const p = s((e, t) => e.warn(t))
    function parseOptions(e, t, r) {
      if (e.headers) {
        e.headers = Object.keys(e.headers).reduce((t, r) => {
          t[r.toLowerCase()] = e.headers[r]
          return t
        }, {})
      }
      const s = {
        headers: e.headers || {},
        request: e.request || {},
        mediaType: { previews: [], format: '' }
      }
      if (e.baseUrl) {
        s.baseUrl = e.baseUrl
      }
      if (e.userAgent) {
        s.headers['user-agent'] = e.userAgent
      }
      if (e.previews) {
        s.mediaType.previews = e.previews
      }
      if (e.timeZone) {
        s.headers['time-zone'] = e.timeZone
      }
      if (e.timeout) {
        a(
          t,
          new n(
            '[@octokit/rest] new Octokit({timeout}) is deprecated. Use {request: {timeout}} instead. See https://github.com/octokit/request.js#request'
          )
        )
        s.request.timeout = e.timeout
      }
      if (e.agent) {
        u(
          t,
          new n(
            '[@octokit/rest] new Octokit({agent}) is deprecated. Use {request: {agent}} instead. See https://github.com/octokit/request.js#request'
          )
        )
        s.request.agent = e.agent
      }
      if (e.headers) {
        p(
          t,
          new n(
            '[@octokit/rest] new Octokit({headers}) is deprecated. Use {userAgent, previews} instead. See https://github.com/octokit/request.js#request'
          )
        )
      }
      const c = s.headers['user-agent']
      const d = `octokit.js/${o.version} ${i()}`
      s.headers['user-agent'] = [c, d].filter(Boolean).join(' ')
      s.request.hook = r.bind(null, 'request')
      return s
    }
  },
  297: function(e) {
    e.exports = class HttpError extends Error {
      constructor(e, t, r) {
        super(e)
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }
        this.name = 'HttpError'
        this.code = t
        this.headers = r
      }
    }
  },
  299: function(e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    const r = '1.1.2'
    const n = [
      /^\/search\//,
      /^\/repos\/[^\/]+\/[^\/]+\/commits\/[^\/]+\/(check-runs|check-suites)([^\/]|$)/,
      /^\/installation\/repositories([^\/]|$)/,
      /^\/user\/installations([^\/]|$)/,
      /^\/repos\/[^\/]+\/[^\/]+\/actions\/secrets([^\/]|$)/,
      /^\/repos\/[^\/]+\/[^\/]+\/actions\/workflows(\/[^\/]+\/runs)?([^\/]|$)/,
      /^\/repos\/[^\/]+\/[^\/]+\/actions\/runs(\/[^\/]+\/(artifacts|jobs))?([^\/]|$)/
    ]
    function normalizePaginatedListResponse(e, t, r) {
      const i = t.replace(e.request.endpoint.DEFAULTS.baseUrl, '')
      const s = n.find(e => e.test(i))
      if (!s) return
      const o = r.data.incomplete_results
      const a = r.data.repository_selection
      const u = r.data.total_count
      delete r.data.incomplete_results
      delete r.data.repository_selection
      delete r.data.total_count
      const p = Object.keys(r.data)[0]
      const c = r.data[p]
      r.data = c
      if (typeof o !== 'undefined') {
        r.data.incomplete_results = o
      }
      if (typeof a !== 'undefined') {
        r.data.repository_selection = a
      }
      r.data.total_count = u
      Object.defineProperty(r.data, p, {
        get() {
          e.log.warn(
            `[@octokit/paginate-rest] "response.data.${p}" is deprecated for "GET ${i}". Get the results directly from "response.data"`
          )
          return Array.from(c)
        }
      })
    }
    function iterator(e, t, r) {
      const n = e.request.endpoint(t, r)
      const i = n.method
      const s = n.headers
      let o = n.url
      return {
        [Symbol.asyncIterator]: () => ({
          next() {
            if (!o) {
              return Promise.resolve({ done: true })
            }
            return e.request({ method: i, url: o, headers: s }).then(t => {
              normalizePaginatedListResponse(e, o, t)
              o = ((t.headers.link || '').match(/<([^>]+)>;\s*rel="next"/) || [])[1]
              return { value: t }
            })
          }
        })
      }
    }
    function paginate(e, t, r, n) {
      if (typeof r === 'function') {
        n = r
        r = undefined
      }
      return gather(e, [], iterator(e, t, r)[Symbol.asyncIterator](), n)
    }
    function gather(e, t, r, n) {
      return r.next().then(i => {
        if (i.done) {
          return t
        }
        let s = false
        function done() {
          s = true
        }
        t = t.concat(n ? n(i.value, done) : i.value.data)
        if (s) {
          return t
        }
        return gather(e, t, r, n)
      })
    }
    function paginateRest(e) {
      return {
        paginate: Object.assign(paginate.bind(null, e), { iterator: iterator.bind(null, e) })
      }
    }
    paginateRest.VERSION = r
    t.paginateRest = paginateRest
  },
  316: function(e, t, r) {
    const n = r(47)
    e.exports = n()
  },
  323: function(e) {
    'use strict'
    var t = (e.exports = function(e) {
      return e !== null && typeof e === 'object' && typeof e.pipe === 'function'
    })
    t.writable = function(e) {
      return (
        t(e) &&
        e.writable !== false &&
        typeof e._write === 'function' &&
        typeof e._writableState === 'object'
      )
    }
    t.readable = function(e) {
      return (
        t(e) &&
        e.readable !== false &&
        typeof e._read === 'function' &&
        typeof e._readableState === 'object'
      )
    }
    t.duplex = function(e) {
      return t.writable(e) && t.readable(e)
    }
    t.transform = function(e) {
      return (
        t.duplex(e) && typeof e._transform === 'function' && typeof e._transformState === 'object'
      )
    }
  },
  336: function(e, t, r) {
    e.exports = hasLastPage
    const n = r(370)
    const i = r(577)
    function hasLastPage(e) {
      n(
        `octokit.hasLastPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`
      )
      return i(e).last
    }
  },
  348: function(e, t, r) {
    'use strict'
    e.exports = validate
    const { RequestError: n } = r(463)
    const i = r(854)
    const s = r(883)
    function validate(e, t) {
      if (!t.request.validate) {
        return
      }
      const { validate: r } = t.request
      Object.keys(r).forEach(e => {
        const o = i(r, e)
        const a = o.type
        let u
        let p
        let c = true
        let d = false
        if (/\./.test(e)) {
          u = e.replace(/\.[^.]+$/, '')
          d = u.slice(-2) === '[]'
          if (d) {
            u = u.slice(0, -2)
          }
          p = i(t, u)
          c = u === 'headers' || (typeof p === 'object' && p !== null)
        }
        const l = d ? (i(t, u) || []).map(t => t[e.split(/\./).pop()]) : [i(t, e)]
        l.forEach((r, i) => {
          const u = typeof r !== 'undefined'
          const p = r === null
          const l = d ? e.replace(/\[\]/, `[${i}]`) : e
          if (!o.required && !u) {
            return
          }
          if (!c) {
            return
          }
          if (o.allowNull && p) {
            return
          }
          if (!o.allowNull && p) {
            throw new n(`'${l}' cannot be null`, 400, { request: t })
          }
          if (o.required && !u) {
            throw new n(`Empty value for parameter '${l}': ${JSON.stringify(r)}`, 400, {
              request: t
            })
          }
          if (a === 'integer') {
            const e = r
            r = parseInt(r, 10)
            if (isNaN(r)) {
              throw new n(`Invalid value for parameter '${l}': ${JSON.stringify(e)} is NaN`, 400, {
                request: t
              })
            }
          }
          if (o.enum && o.enum.indexOf(String(r)) === -1) {
            throw new n(`Invalid value for parameter '${l}': ${JSON.stringify(r)}`, 400, {
              request: t
            })
          }
          if (o.validation) {
            const e = new RegExp(o.validation)
            if (!e.test(r)) {
              throw new n(`Invalid value for parameter '${l}': ${JSON.stringify(r)}`, 400, {
                request: t
              })
            }
          }
          if (a === 'object' && typeof r === 'string') {
            try {
              r = JSON.parse(r)
            } catch (e) {
              throw new n(
                `JSON parse error of value for parameter '${l}': ${JSON.stringify(r)}`,
                400,
                { request: t }
              )
            }
          }
          s(t, o.mapTo || l, r)
        })
      })
      return t
    }
  },
  349: function(e, t, r) {
    e.exports = authenticationRequestError
    const { RequestError: n } = r(463)
    function authenticationRequestError(e, t, r) {
      if (!t.headers) throw t
      const i = /required/.test(t.headers['x-github-otp'] || '')
      if (t.status !== 401 || !i) {
        throw t
      }
      if (t.status === 401 && i && t.request && t.request.headers['x-github-otp']) {
        throw new n('Invalid one-time password for two-factor authentication', 401, {
          headers: t.headers,
          request: r
        })
      }
      if (typeof e.auth.on2fa !== 'function') {
        throw new n(
          '2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication',
          401,
          { headers: t.headers, request: r }
        )
      }
      return Promise.resolve()
        .then(() => {
          return e.auth.on2fa()
        })
        .then(t => {
          const n = Object.assign(r, { headers: Object.assign({ 'x-github-otp': t }, r.headers) })
          return e.octokit.request(n)
        })
    }
  },
  352: function(e, t, r) {
    'use strict'
    var n = r(35)
    var i = r(727)
    var s = r(779)
    var o = r(529)
    function createInstance(e) {
      var t = new s(e)
      var r = i(s.prototype.request, t)
      n.extend(r, s.prototype, t)
      n.extend(r, t)
      return r
    }
    var a = createInstance(o)
    a.Axios = s
    a.create = function create(e) {
      return createInstance(n.merge(o, e))
    }
    a.Cancel = r(826)
    a.CancelToken = r(137)
    a.isCancel = r(732)
    a.all = function all(e) {
      return Promise.all(e)
    }
    a.spread = r(825)
    e.exports = a
    e.exports.default = a
  },
  357: function(e) {
    e.exports = require('assert')
  },
  361: function(e) {
    e.exports = {
      _from: 'axios@0.18.1',
      _id: 'axios@0.18.1',
      _inBundle: false,
      _integrity:
        'sha512-0BfJq4NSfQXd+SkFdrvFbG7addhYSBA2mQwISr46pD6E5iqkWg02RAs8vyTT/j0RTnoYmeXauBuSv1qKwR179g==',
      _location: '/axios',
      _phantomChildren: {},
      _requested: {
        type: 'version',
        registry: true,
        raw: 'axios@0.18.1',
        name: 'axios',
        escapedName: 'axios',
        rawSpec: '0.18.1',
        saveSpec: null,
        fetchSpec: '0.18.1'
      },
      _requiredBy: ['/'],
      _resolved: 'https://npm.hypers.cc/axios/-/axios-0.18.1.tgz',
      _shasum: 'ff3f0de2e7b5d180e757ad98000f1081b87bcea3',
      _spec: 'axios@0.18.1',
      _where: '/Users/yons/Developer/projects/wakatime-sync',
      author: { name: 'Matt Zabriskie' },
      browser: { './lib/adapters/http.js': './lib/adapters/xhr.js' },
      bugs: { url: 'https://github.com/axios/axios/issues' },
      bundleDependencies: false,
      bundlesize: [{ path: './dist/axios.min.js', threshold: '5kB' }],
      dependencies: { 'follow-redirects': '1.5.10', 'is-buffer': '^2.0.2' },
      deprecated: false,
      description: 'Promise based HTTP client for the browser and node.js',
      devDependencies: {
        bundlesize: '^0.5.7',
        coveralls: '^2.11.9',
        'es6-promise': '^4.0.5',
        grunt: '^1.0.1',
        'grunt-banner': '^0.6.0',
        'grunt-cli': '^1.2.0',
        'grunt-contrib-clean': '^1.0.0',
        'grunt-contrib-nodeunit': '^1.0.0',
        'grunt-contrib-watch': '^1.0.0',
        'grunt-eslint': '^19.0.0',
        'grunt-karma': '^2.0.0',
        'grunt-ts': '^6.0.0-beta.3',
        'grunt-webpack': '^1.0.18',
        'istanbul-instrumenter-loader': '^1.0.0',
        'jasmine-core': '^2.4.1',
        karma: '^1.3.0',
        'karma-chrome-launcher': '^2.0.0',
        'karma-coverage': '^1.0.0',
        'karma-firefox-launcher': '^1.0.0',
        'karma-jasmine': '^1.0.2',
        'karma-jasmine-ajax': '^0.1.13',
        'karma-opera-launcher': '^1.0.0',
        'karma-safari-launcher': '^1.0.0',
        'karma-sauce-launcher': '^1.1.0',
        'karma-sinon': '^1.0.5',
        'karma-sourcemap-loader': '^0.3.7',
        'karma-webpack': '^1.7.0',
        'load-grunt-tasks': '^3.5.2',
        minimist: '^1.2.0',
        sinon: '^1.17.4',
        typescript: '^2.0.3',
        'url-search-params': '^0.6.1',
        webpack: '^1.13.1',
        'webpack-dev-server': '^1.14.1'
      },
      homepage: 'https://github.com/axios/axios',
      keywords: ['xhr', 'http', 'ajax', 'promise', 'node'],
      license: 'MIT',
      main: 'index.js',
      name: 'axios',
      repository: { type: 'git', url: 'git+https://github.com/axios/axios.git' },
      scripts: {
        build: 'NODE_ENV=production grunt build',
        coveralls: 'cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js',
        examples: 'node ./examples/server.js',
        postversion: 'git push && git push --tags',
        preversion: 'npm test',
        start: 'node ./sandbox/server.js',
        test: 'grunt test && bundlesize',
        version:
          'npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json'
      },
      typings: './index.d.ts',
      version: '0.18.1'
    }
  },
  363: function(e) {
    e.exports = register
    function register(e, t, r, n) {
      if (typeof r !== 'function') {
        throw new Error('method for before hook must be a function')
      }
      if (!n) {
        n = {}
      }
      if (Array.isArray(t)) {
        return t.reverse().reduce(function(t, r) {
          return register.bind(null, e, r, t, n)
        }, r)()
      }
      return Promise.resolve().then(function() {
        if (!e.registry[t]) {
          return r(n)
        }
        return e.registry[t].reduce(function(e, t) {
          return t.hook.bind(null, e, n)
        }, r)()
      })
    }
  },
  364: function(e) {
    'use strict'
    e.exports = (e, t) => {
      t = t || process.argv
      const r = e.startsWith('-') ? '' : e.length === 1 ? '-' : '--'
      const n = t.indexOf(r + e)
      const i = t.indexOf('--')
      return n !== -1 && (i === -1 ? true : n < i)
    }
  },
  368: function(e) {
    e.exports = function atob(e) {
      return Buffer.from(e, 'base64').toString('binary')
    }
  },
  369: function(e) {
    'use strict'
    e.exports = function enhanceError(e, t, r, n, i) {
      e.config = t
      if (r) {
        e.code = r
      }
      e.request = n
      e.response = i
      return e
    }
  },
  370: function(e) {
    e.exports = deprecate
    const t = {}
    function deprecate(e) {
      if (t[e]) {
        return
      }
      console.warn(`DEPRECATED (@octokit/rest): ${e}`)
      t[e] = 1
    }
  },
  385: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e
    }
    var n = _interopDefault(r(696))
    var i = r(796)
    function lowercaseKeys(e) {
      if (!e) {
        return {}
      }
      return Object.keys(e).reduce((t, r) => {
        t[r.toLowerCase()] = e[r]
        return t
      }, {})
    }
    function mergeDeep(e, t) {
      const r = Object.assign({}, e)
      Object.keys(t).forEach(i => {
        if (n(t[i])) {
          if (!(i in e)) Object.assign(r, { [i]: t[i] })
          else r[i] = mergeDeep(e[i], t[i])
        } else {
          Object.assign(r, { [i]: t[i] })
        }
      })
      return r
    }
    function merge(e, t, r) {
      if (typeof t === 'string') {
        let [e, n] = t.split(' ')
        r = Object.assign(n ? { method: e, url: n } : { url: e }, r)
      } else {
        r = Object.assign({}, t)
      }
      r.headers = lowercaseKeys(r.headers)
      const n = mergeDeep(e || {}, r)
      if (e && e.mediaType.previews.length) {
        n.mediaType.previews = e.mediaType.previews
          .filter(e => !n.mediaType.previews.includes(e))
          .concat(n.mediaType.previews)
      }
      n.mediaType.previews = n.mediaType.previews.map(e => e.replace(/-preview/, ''))
      return n
    }
    function addQueryParameters(e, t) {
      const r = /\?/.test(e) ? '&' : '?'
      const n = Object.keys(t)
      if (n.length === 0) {
        return e
      }
      return (
        e +
        r +
        n
          .map(e => {
            if (e === 'q') {
              return (
                'q=' +
                t.q
                  .split('+')
                  .map(encodeURIComponent)
                  .join('+')
              )
            }
            return `${e}=${encodeURIComponent(t[e])}`
          })
          .join('&')
      )
    }
    const s = /\{[^}]+\}/g
    function removeNonChars(e) {
      return e.replace(/^\W+|\W+$/g, '').split(/,/)
    }
    function extractUrlVariableNames(e) {
      const t = e.match(s)
      if (!t) {
        return []
      }
      return t.map(removeNonChars).reduce((e, t) => e.concat(t), [])
    }
    function omit(e, t) {
      return Object.keys(e)
        .filter(e => !t.includes(e))
        .reduce((t, r) => {
          t[r] = e[r]
          return t
        }, {})
    }
    function encodeReserved(e) {
      return e
        .split(/(%[0-9A-Fa-f]{2})/g)
        .map(function(e) {
          if (!/%[0-9A-Fa-f]/.test(e)) {
            e = encodeURI(e)
              .replace(/%5B/g, '[')
              .replace(/%5D/g, ']')
          }
          return e
        })
        .join('')
    }
    function encodeUnreserved(e) {
      return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
        return (
          '%' +
          e
            .charCodeAt(0)
            .toString(16)
            .toUpperCase()
        )
      })
    }
    function encodeValue(e, t, r) {
      t = e === '+' || e === '#' ? encodeReserved(t) : encodeUnreserved(t)
      if (r) {
        return encodeUnreserved(r) + '=' + t
      } else {
        return t
      }
    }
    function isDefined(e) {
      return e !== undefined && e !== null
    }
    function isKeyOperator(e) {
      return e === ';' || e === '&' || e === '?'
    }
    function getValues(e, t, r, n) {
      var i = e[r],
        s = []
      if (isDefined(i) && i !== '') {
        if (typeof i === 'string' || typeof i === 'number' || typeof i === 'boolean') {
          i = i.toString()
          if (n && n !== '*') {
            i = i.substring(0, parseInt(n, 10))
          }
          s.push(encodeValue(t, i, isKeyOperator(t) ? r : ''))
        } else {
          if (n === '*') {
            if (Array.isArray(i)) {
              i.filter(isDefined).forEach(function(e) {
                s.push(encodeValue(t, e, isKeyOperator(t) ? r : ''))
              })
            } else {
              Object.keys(i).forEach(function(e) {
                if (isDefined(i[e])) {
                  s.push(encodeValue(t, i[e], e))
                }
              })
            }
          } else {
            const e = []
            if (Array.isArray(i)) {
              i.filter(isDefined).forEach(function(r) {
                e.push(encodeValue(t, r))
              })
            } else {
              Object.keys(i).forEach(function(r) {
                if (isDefined(i[r])) {
                  e.push(encodeUnreserved(r))
                  e.push(encodeValue(t, i[r].toString()))
                }
              })
            }
            if (isKeyOperator(t)) {
              s.push(encodeUnreserved(r) + '=' + e.join(','))
            } else if (e.length !== 0) {
              s.push(e.join(','))
            }
          }
        }
      } else {
        if (t === ';') {
          if (isDefined(i)) {
            s.push(encodeUnreserved(r))
          }
        } else if (i === '' && (t === '&' || t === '?')) {
          s.push(encodeUnreserved(r) + '=')
        } else if (i === '') {
          s.push('')
        }
      }
      return s
    }
    function parseUrl(e) {
      return { expand: expand.bind(null, e) }
    }
    function expand(e, t) {
      var r = ['+', '#', '.', '/', ';', '?', '&']
      return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(e, n, i) {
        if (n) {
          let e = ''
          const i = []
          if (r.indexOf(n.charAt(0)) !== -1) {
            e = n.charAt(0)
            n = n.substr(1)
          }
          n.split(/,/g).forEach(function(r) {
            var n = /([^:\*]*)(?::(\d+)|(\*))?/.exec(r)
            i.push(getValues(t, e, n[1], n[2] || n[3]))
          })
          if (e && e !== '+') {
            var s = ','
            if (e === '?') {
              s = '&'
            } else if (e !== '#') {
              s = e
            }
            return (i.length !== 0 ? e : '') + i.join(s)
          } else {
            return i.join(',')
          }
        } else {
          return encodeReserved(i)
        }
      })
    }
    function parse(e) {
      let t = e.method.toUpperCase()
      let r = (e.url || '/').replace(/:([a-z]\w+)/g, '{+$1}')
      let n = Object.assign({}, e.headers)
      let i
      let s = omit(e, ['method', 'baseUrl', 'url', 'headers', 'request', 'mediaType'])
      const o = extractUrlVariableNames(r)
      r = parseUrl(r).expand(s)
      if (!/^http/.test(r)) {
        r = e.baseUrl + r
      }
      const a = Object.keys(e)
        .filter(e => o.includes(e))
        .concat('baseUrl')
      const u = omit(s, a)
      const p = /application\/octet-stream/i.test(n.accept)
      if (!p) {
        if (e.mediaType.format) {
          n.accept = n.accept
            .split(/,/)
            .map(t =>
              t.replace(
                /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                `application/vnd$1$2.${e.mediaType.format}`
              )
            )
            .join(',')
        }
        if (e.mediaType.previews.length) {
          const t = n.accept.match(/[\w-]+(?=-preview)/g) || []
          n.accept = t
            .concat(e.mediaType.previews)
            .map(t => {
              const r = e.mediaType.format ? `.${e.mediaType.format}` : '+json'
              return `application/vnd.github.${t}-preview${r}`
            })
            .join(',')
        }
      }
      if (['GET', 'HEAD'].includes(t)) {
        r = addQueryParameters(r, u)
      } else {
        if ('data' in u) {
          i = u.data
        } else {
          if (Object.keys(u).length) {
            i = u
          } else {
            n['content-length'] = 0
          }
        }
      }
      if (!n['content-type'] && typeof i !== 'undefined') {
        n['content-type'] = 'application/json; charset=utf-8'
      }
      if (['PATCH', 'PUT'].includes(t) && typeof i === 'undefined') {
        i = ''
      }
      return Object.assign(
        { method: t, url: r, headers: n },
        typeof i !== 'undefined' ? { body: i } : null,
        e.request ? { request: e.request } : null
      )
    }
    function endpointWithDefaults(e, t, r) {
      return parse(merge(e, t, r))
    }
    function withDefaults(e, t) {
      const r = merge(e, t)
      const n = endpointWithDefaults.bind(null, r)
      return Object.assign(n, {
        DEFAULTS: r,
        defaults: withDefaults.bind(null, r),
        merge: merge.bind(null, r),
        parse: parse
      })
    }
    const o = '5.5.2'
    const a = `octokit-endpoint.js/${o} ${i.getUserAgent()}`
    const u = {
      method: 'GET',
      baseUrl: 'https://api.github.com',
      headers: { accept: 'application/vnd.github.v3+json', 'user-agent': a },
      mediaType: { format: '', previews: [] }
    }
    const p = withDefaults(null, u)
    t.endpoint = p
  },
  389: function(e, t, r) {
    'use strict'
    const n = r(747)
    const i = r(866)
    function readShebang(e) {
      const t = 150
      let r
      if (Buffer.alloc) {
        r = Buffer.alloc(t)
      } else {
        r = new Buffer(t)
        r.fill(0)
      }
      let s
      try {
        s = n.openSync(e, 'r')
        n.readSync(s, r, 0, t, 0)
        n.closeSync(s)
      } catch (e) {}
      return i(r.toString())
    }
    e.exports = readShebang
  },
  402: function(e, t, r) {
    e.exports = Octokit
    const { request: n } = r(753)
    const i = r(523)
    const s = r(294)
    function Octokit(e, t) {
      t = t || {}
      const r = new i.Collection()
      const o = Object.assign(
        { debug: () => {}, info: () => {}, warn: console.warn, error: console.error },
        t && t.log
      )
      const a = { hook: r, log: o, request: n.defaults(s(t, o, r)) }
      e.forEach(e => e(a, t))
      return a
    }
  },
  411: function(e, t, r) {
    'use strict'
    var n = r(35)
    e.exports = function normalizeHeaderName(e, t) {
      n.forEach(e, function processHeader(r, n) {
        if (n !== t && n.toUpperCase() === t.toUpperCase()) {
          e[t] = r
          delete e[n]
        }
      })
    }
  },
  413: function(e) {
    e.exports = require('stream')
  },
  427: function(e, t, r) {
    'use strict'
    const n = r(669)
    let i
    if (typeof n.getSystemErrorName === 'function') {
      e.exports = n.getSystemErrorName
    } else {
      try {
        i = process.binding('uv')
        if (typeof i.errname !== 'function') {
          throw new TypeError('uv.errname is not a function')
        }
      } catch (e) {
        console.error("execa/lib/errname: unable to establish process.binding('uv')", e)
        i = null
      }
      e.exports = e => errname(i, e)
    }
    e.exports.__test__ = errname
    function errname(e, t) {
      if (e) {
        return e.errname(t)
      }
      if (!(t < 0)) {
        throw new Error('err >= 0')
      }
      return `Unknown system error ${t}`
    }
  },
  430: function(e, t, r) {
    e.exports = octokitValidate
    const n = r(348)
    function octokitValidate(e) {
      e.hook.before('request', n.bind(null, e))
    }
  },
  453: function(e, t, r) {
    var n = r(969)
    var i = r(9)
    var s = r(747)
    var o = function() {}
    var a = /^v?\.0/.test(process.version)
    var u = function(e) {
      return typeof e === 'function'
    }
    var p = function(e) {
      if (!a) return false
      if (!s) return false
      return (e instanceof (s.ReadStream || o) || e instanceof (s.WriteStream || o)) && u(e.close)
    }
    var c = function(e) {
      return e.setHeader && u(e.abort)
    }
    var d = function(e, t, r, s) {
      s = n(s)
      var a = false
      e.on('close', function() {
        a = true
      })
      i(e, { readable: t, writable: r }, function(e) {
        if (e) return s(e)
        a = true
        s()
      })
      var d = false
      return function(t) {
        if (a) return
        if (d) return
        d = true
        if (p(e)) return e.close(o)
        if (c(e)) return e.abort()
        if (u(e.destroy)) return e.destroy()
        s(t || new Error('stream was destroyed'))
      }
    }
    var l = function(e) {
      e()
    }
    var m = function(e, t) {
      return e.pipe(t)
    }
    var g = function() {
      var e = Array.prototype.slice.call(arguments)
      var t = (u(e[e.length - 1] || o) && e.pop()) || o
      if (Array.isArray(e[0])) e = e[0]
      if (e.length < 2) throw new Error('pump requires two streams per minimum')
      var r
      var n = e.map(function(i, s) {
        var o = s < e.length - 1
        var a = s > 0
        return d(i, o, a, function(e) {
          if (!r) r = e
          if (e) n.forEach(l)
          if (o) return
          n.forEach(l)
          t(r)
        })
      })
      return e.reduce(m)
    }
    e.exports = g
  },
  454: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e
    }
    var n = _interopDefault(r(413))
    var i = _interopDefault(r(605))
    var s = _interopDefault(r(835))
    var o = _interopDefault(r(211))
    var a = _interopDefault(r(903))
    const u = n.Readable
    const p = Symbol('buffer')
    const c = Symbol('type')
    class Blob {
      constructor() {
        this[c] = ''
        const e = arguments[0]
        const t = arguments[1]
        const r = []
        let n = 0
        if (e) {
          const t = e
          const i = Number(t.length)
          for (let e = 0; e < i; e++) {
            const i = t[e]
            let s
            if (i instanceof Buffer) {
              s = i
            } else if (ArrayBuffer.isView(i)) {
              s = Buffer.from(i.buffer, i.byteOffset, i.byteLength)
            } else if (i instanceof ArrayBuffer) {
              s = Buffer.from(i)
            } else if (i instanceof Blob) {
              s = i[p]
            } else {
              s = Buffer.from(typeof i === 'string' ? i : String(i))
            }
            n += s.length
            r.push(s)
          }
        }
        this[p] = Buffer.concat(r)
        let i = t && t.type !== undefined && String(t.type).toLowerCase()
        if (i && !/[^\u0020-\u007E]/.test(i)) {
          this[c] = i
        }
      }
      get size() {
        return this[p].length
      }
      get type() {
        return this[c]
      }
      text() {
        return Promise.resolve(this[p].toString())
      }
      arrayBuffer() {
        const e = this[p]
        const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
        return Promise.resolve(t)
      }
      stream() {
        const e = new u()
        e._read = function() {}
        e.push(this[p])
        e.push(null)
        return e
      }
      toString() {
        return '[object Blob]'
      }
      slice() {
        const e = this.size
        const t = arguments[0]
        const r = arguments[1]
        let n, i
        if (t === undefined) {
          n = 0
        } else if (t < 0) {
          n = Math.max(e + t, 0)
        } else {
          n = Math.min(t, e)
        }
        if (r === undefined) {
          i = e
        } else if (r < 0) {
          i = Math.max(e + r, 0)
        } else {
          i = Math.min(r, e)
        }
        const s = Math.max(i - n, 0)
        const o = this[p]
        const a = o.slice(n, n + s)
        const u = new Blob([], { type: arguments[2] })
        u[p] = a
        return u
      }
    }
    Object.defineProperties(Blob.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true }
    })
    Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
      value: 'Blob',
      writable: false,
      enumerable: false,
      configurable: true
    })
    function FetchError(e, t, r) {
      Error.call(this, e)
      this.message = e
      this.type = t
      if (r) {
        this.code = this.errno = r.code
      }
      Error.captureStackTrace(this, this.constructor)
    }
    FetchError.prototype = Object.create(Error.prototype)
    FetchError.prototype.constructor = FetchError
    FetchError.prototype.name = 'FetchError'
    let d
    try {
      d = r(18).convert
    } catch (e) {}
    const l = Symbol('Body internals')
    const m = n.PassThrough
    function Body(e) {
      var t = this
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        i = r.size
      let s = i === undefined ? 0 : i
      var o = r.timeout
      let a = o === undefined ? 0 : o
      if (e == null) {
        e = null
      } else if (isURLSearchParams(e)) {
        e = Buffer.from(e.toString())
      } else if (isBlob(e));
      else if (Buffer.isBuffer(e));
      else if (Object.prototype.toString.call(e) === '[object ArrayBuffer]') {
        e = Buffer.from(e)
      } else if (ArrayBuffer.isView(e)) {
        e = Buffer.from(e.buffer, e.byteOffset, e.byteLength)
      } else if (e instanceof n);
      else {
        e = Buffer.from(String(e))
      }
      this[l] = { body: e, disturbed: false, error: null }
      this.size = s
      this.timeout = a
      if (e instanceof n) {
        e.on('error', function(e) {
          const r =
            e.name === 'AbortError'
              ? e
              : new FetchError(
                  `Invalid response body while trying to fetch ${t.url}: ${e.message}`,
                  'system',
                  e
                )
          t[l].error = r
        })
      }
    }
    Body.prototype = {
      get body() {
        return this[l].body
      },
      get bodyUsed() {
        return this[l].disturbed
      },
      arrayBuffer() {
        return consumeBody.call(this).then(function(e) {
          return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
        })
      },
      blob() {
        let e = (this.headers && this.headers.get('content-type')) || ''
        return consumeBody.call(this).then(function(t) {
          return Object.assign(new Blob([], { type: e.toLowerCase() }), { [p]: t })
        })
      },
      json() {
        var e = this
        return consumeBody.call(this).then(function(t) {
          try {
            return JSON.parse(t.toString())
          } catch (t) {
            return Body.Promise.reject(
              new FetchError(
                `invalid json response body at ${e.url} reason: ${t.message}`,
                'invalid-json'
              )
            )
          }
        })
      },
      text() {
        return consumeBody.call(this).then(function(e) {
          return e.toString()
        })
      },
      buffer() {
        return consumeBody.call(this)
      },
      textConverted() {
        var e = this
        return consumeBody.call(this).then(function(t) {
          return convertBody(t, e.headers)
        })
      }
    }
    Object.defineProperties(Body.prototype, {
      body: { enumerable: true },
      bodyUsed: { enumerable: true },
      arrayBuffer: { enumerable: true },
      blob: { enumerable: true },
      json: { enumerable: true },
      text: { enumerable: true }
    })
    Body.mixIn = function(e) {
      for (const t of Object.getOwnPropertyNames(Body.prototype)) {
        if (!(t in e)) {
          const r = Object.getOwnPropertyDescriptor(Body.prototype, t)
          Object.defineProperty(e, t, r)
        }
      }
    }
    function consumeBody() {
      var e = this
      if (this[l].disturbed) {
        return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`))
      }
      this[l].disturbed = true
      if (this[l].error) {
        return Body.Promise.reject(this[l].error)
      }
      let t = this.body
      if (t === null) {
        return Body.Promise.resolve(Buffer.alloc(0))
      }
      if (isBlob(t)) {
        t = t.stream()
      }
      if (Buffer.isBuffer(t)) {
        return Body.Promise.resolve(t)
      }
      if (!(t instanceof n)) {
        return Body.Promise.resolve(Buffer.alloc(0))
      }
      let r = []
      let i = 0
      let s = false
      return new Body.Promise(function(n, o) {
        let a
        if (e.timeout) {
          a = setTimeout(function() {
            s = true
            o(
              new FetchError(
                `Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,
                'body-timeout'
              )
            )
          }, e.timeout)
        }
        t.on('error', function(t) {
          if (t.name === 'AbortError') {
            s = true
            o(t)
          } else {
            o(
              new FetchError(
                `Invalid response body while trying to fetch ${e.url}: ${t.message}`,
                'system',
                t
              )
            )
          }
        })
        t.on('data', function(t) {
          if (s || t === null) {
            return
          }
          if (e.size && i + t.length > e.size) {
            s = true
            o(new FetchError(`content size at ${e.url} over limit: ${e.size}`, 'max-size'))
            return
          }
          i += t.length
          r.push(t)
        })
        t.on('end', function() {
          if (s) {
            return
          }
          clearTimeout(a)
          try {
            n(Buffer.concat(r, i))
          } catch (t) {
            o(
              new FetchError(
                `Could not create Buffer from response body for ${e.url}: ${t.message}`,
                'system',
                t
              )
            )
          }
        })
      })
    }
    function convertBody(e, t) {
      if (typeof d !== 'function') {
        throw new Error(
          'The package `encoding` must be installed to use the textConverted() function'
        )
      }
      const r = t.get('content-type')
      let n = 'utf-8'
      let i, s
      if (r) {
        i = /charset=([^;]*)/i.exec(r)
      }
      s = e.slice(0, 1024).toString()
      if (!i && s) {
        i = /<meta.+?charset=(['"])(.+?)\1/i.exec(s)
      }
      if (!i && s) {
        i = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(s)
        if (i) {
          i = /charset=(.*)/i.exec(i.pop())
        }
      }
      if (!i && s) {
        i = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(s)
      }
      if (i) {
        n = i.pop()
        if (n === 'gb2312' || n === 'gbk') {
          n = 'gb18030'
        }
      }
      return d(e, 'UTF-8', n).toString()
    }
    function isURLSearchParams(e) {
      if (
        typeof e !== 'object' ||
        typeof e.append !== 'function' ||
        typeof e.delete !== 'function' ||
        typeof e.get !== 'function' ||
        typeof e.getAll !== 'function' ||
        typeof e.has !== 'function' ||
        typeof e.set !== 'function'
      ) {
        return false
      }
      return (
        e.constructor.name === 'URLSearchParams' ||
        Object.prototype.toString.call(e) === '[object URLSearchParams]' ||
        typeof e.sort === 'function'
      )
    }
    function isBlob(e) {
      return (
        typeof e === 'object' &&
        typeof e.arrayBuffer === 'function' &&
        typeof e.type === 'string' &&
        typeof e.stream === 'function' &&
        typeof e.constructor === 'function' &&
        typeof e.constructor.name === 'string' &&
        /^(Blob|File)$/.test(e.constructor.name) &&
        /^(Blob|File)$/.test(e[Symbol.toStringTag])
      )
    }
    function clone(e) {
      let t, r
      let i = e.body
      if (e.bodyUsed) {
        throw new Error('cannot clone body after it is used')
      }
      if (i instanceof n && typeof i.getBoundary !== 'function') {
        t = new m()
        r = new m()
        i.pipe(t)
        i.pipe(r)
        e[l].body = t
        i = r
      }
      return i
    }
    function extractContentType(e) {
      if (e === null) {
        return null
      } else if (typeof e === 'string') {
        return 'text/plain;charset=UTF-8'
      } else if (isURLSearchParams(e)) {
        return 'application/x-www-form-urlencoded;charset=UTF-8'
      } else if (isBlob(e)) {
        return e.type || null
      } else if (Buffer.isBuffer(e)) {
        return null
      } else if (Object.prototype.toString.call(e) === '[object ArrayBuffer]') {
        return null
      } else if (ArrayBuffer.isView(e)) {
        return null
      } else if (typeof e.getBoundary === 'function') {
        return `multipart/form-data;boundary=${e.getBoundary()}`
      } else if (e instanceof n) {
        return null
      } else {
        return 'text/plain;charset=UTF-8'
      }
    }
    function getTotalBytes(e) {
      const t = e.body
      if (t === null) {
        return 0
      } else if (isBlob(t)) {
        return t.size
      } else if (Buffer.isBuffer(t)) {
        return t.length
      } else if (t && typeof t.getLengthSync === 'function') {
        if (
          (t._lengthRetrievers && t._lengthRetrievers.length == 0) ||
          (t.hasKnownLength && t.hasKnownLength())
        ) {
          return t.getLengthSync()
        }
        return null
      } else {
        return null
      }
    }
    function writeToStream(e, t) {
      const r = t.body
      if (r === null) {
        e.end()
      } else if (isBlob(r)) {
        r.stream().pipe(e)
      } else if (Buffer.isBuffer(r)) {
        e.write(r)
        e.end()
      } else {
        r.pipe(e)
      }
    }
    Body.Promise = global.Promise
    const g = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/
    const h = /[^\t\x20-\x7e\x80-\xff]/
    function validateName(e) {
      e = `${e}`
      if (g.test(e) || e === '') {
        throw new TypeError(`${e} is not a legal HTTP header name`)
      }
    }
    function validateValue(e) {
      e = `${e}`
      if (h.test(e)) {
        throw new TypeError(`${e} is not a legal HTTP header value`)
      }
    }
    function find(e, t) {
      t = t.toLowerCase()
      for (const r in e) {
        if (r.toLowerCase() === t) {
          return r
        }
      }
      return undefined
    }
    const y = Symbol('map')
    class Headers {
      constructor() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined
        this[y] = Object.create(null)
        if (e instanceof Headers) {
          const t = e.raw()
          const r = Object.keys(t)
          for (const e of r) {
            for (const r of t[e]) {
              this.append(e, r)
            }
          }
          return
        }
        if (e == null);
        else if (typeof e === 'object') {
          const t = e[Symbol.iterator]
          if (t != null) {
            if (typeof t !== 'function') {
              throw new TypeError('Header pairs must be iterable')
            }
            const r = []
            for (const t of e) {
              if (typeof t !== 'object' || typeof t[Symbol.iterator] !== 'function') {
                throw new TypeError('Each header pair must be iterable')
              }
              r.push(Array.from(t))
            }
            for (const e of r) {
              if (e.length !== 2) {
                throw new TypeError('Each header pair must be a name/value tuple')
              }
              this.append(e[0], e[1])
            }
          } else {
            for (const t of Object.keys(e)) {
              const r = e[t]
              this.append(t, r)
            }
          }
        } else {
          throw new TypeError('Provided initializer must be an object')
        }
      }
      get(e) {
        e = `${e}`
        validateName(e)
        const t = find(this[y], e)
        if (t === undefined) {
          return null
        }
        return this[y][t].join(', ')
      }
      forEach(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined
        let r = getHeaders(this)
        let n = 0
        while (n < r.length) {
          var i = r[n]
          const s = i[0],
            o = i[1]
          e.call(t, o, s, this)
          r = getHeaders(this)
          n++
        }
      }
      set(e, t) {
        e = `${e}`
        t = `${t}`
        validateName(e)
        validateValue(t)
        const r = find(this[y], e)
        this[y][r !== undefined ? r : e] = [t]
      }
      append(e, t) {
        e = `${e}`
        t = `${t}`
        validateName(e)
        validateValue(t)
        const r = find(this[y], e)
        if (r !== undefined) {
          this[y][r].push(t)
        } else {
          this[y][e] = [t]
        }
      }
      has(e) {
        e = `${e}`
        validateName(e)
        return find(this[y], e) !== undefined
      }
      delete(e) {
        e = `${e}`
        validateName(e)
        const t = find(this[y], e)
        if (t !== undefined) {
          delete this[y][t]
        }
      }
      raw() {
        return this[y]
      }
      keys() {
        return createHeadersIterator(this, 'key')
      }
      values() {
        return createHeadersIterator(this, 'value')
      }
      [Symbol.iterator]() {
        return createHeadersIterator(this, 'key+value')
      }
    }
    Headers.prototype.entries = Headers.prototype[Symbol.iterator]
    Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
      value: 'Headers',
      writable: false,
      enumerable: false,
      configurable: true
    })
    Object.defineProperties(Headers.prototype, {
      get: { enumerable: true },
      forEach: { enumerable: true },
      set: { enumerable: true },
      append: { enumerable: true },
      has: { enumerable: true },
      delete: { enumerable: true },
      keys: { enumerable: true },
      values: { enumerable: true },
      entries: { enumerable: true }
    })
    function getHeaders(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value'
      const r = Object.keys(e[y]).sort()
      return r.map(
        t === 'key'
          ? function(e) {
              return e.toLowerCase()
            }
          : t === 'value'
          ? function(t) {
              return e[y][t].join(', ')
            }
          : function(t) {
              return [t.toLowerCase(), e[y][t].join(', ')]
            }
      )
    }
    const f = Symbol('internal')
    function createHeadersIterator(e, t) {
      const r = Object.create(b)
      r[f] = { target: e, kind: t, index: 0 }
      return r
    }
    const b = Object.setPrototypeOf(
      {
        next() {
          if (!this || Object.getPrototypeOf(this) !== b) {
            throw new TypeError('Value of `this` is not a HeadersIterator')
          }
          var e = this[f]
          const t = e.target,
            r = e.kind,
            n = e.index
          const i = getHeaders(t, r)
          const s = i.length
          if (n >= s) {
            return { value: undefined, done: true }
          }
          this[f].index = n + 1
          return { value: i[n], done: false }
        }
      },
      Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()))
    )
    Object.defineProperty(b, Symbol.toStringTag, {
      value: 'HeadersIterator',
      writable: false,
      enumerable: false,
      configurable: true
    })
    function exportNodeCompatibleHeaders(e) {
      const t = Object.assign({ __proto__: null }, e[y])
      const r = find(e[y], 'Host')
      if (r !== undefined) {
        t[r] = t[r][0]
      }
      return t
    }
    function createHeadersLenient(e) {
      const t = new Headers()
      for (const r of Object.keys(e)) {
        if (g.test(r)) {
          continue
        }
        if (Array.isArray(e[r])) {
          for (const n of e[r]) {
            if (h.test(n)) {
              continue
            }
            if (t[y][r] === undefined) {
              t[y][r] = [n]
            } else {
              t[y][r].push(n)
            }
          }
        } else if (!h.test(e[r])) {
          t[y][r] = [e[r]]
        }
      }
      return t
    }
    const _ = Symbol('Response internals')
    const v = i.STATUS_CODES
    class Response {
      constructor() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
        Body.call(this, e, t)
        const r = t.status || 200
        const n = new Headers(t.headers)
        if (e != null && !n.has('Content-Type')) {
          const t = extractContentType(e)
          if (t) {
            n.append('Content-Type', t)
          }
        }
        this[_] = {
          url: t.url,
          status: r,
          statusText: t.statusText || v[r],
          headers: n,
          counter: t.counter
        }
      }
      get url() {
        return this[_].url || ''
      }
      get status() {
        return this[_].status
      }
      get ok() {
        return this[_].status >= 200 && this[_].status < 300
      }
      get redirected() {
        return this[_].counter > 0
      }
      get statusText() {
        return this[_].statusText
      }
      get headers() {
        return this[_].headers
      }
      clone() {
        return new Response(clone(this), {
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected
        })
      }
    }
    Body.mixIn(Response.prototype)
    Object.defineProperties(Response.prototype, {
      url: { enumerable: true },
      status: { enumerable: true },
      ok: { enumerable: true },
      redirected: { enumerable: true },
      statusText: { enumerable: true },
      headers: { enumerable: true },
      clone: { enumerable: true }
    })
    Object.defineProperty(Response.prototype, Symbol.toStringTag, {
      value: 'Response',
      writable: false,
      enumerable: false,
      configurable: true
    })
    const q = Symbol('Request internals')
    const w = s.parse
    const E = s.format
    const T = 'destroy' in n.Readable.prototype
    function isRequest(e) {
      return typeof e === 'object' && typeof e[q] === 'object'
    }
    function isAbortSignal(e) {
      const t = e && typeof e === 'object' && Object.getPrototypeOf(e)
      return !!(t && t.constructor.name === 'AbortSignal')
    }
    class Request {
      constructor(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
        let r
        if (!isRequest(e)) {
          if (e && e.href) {
            r = w(e.href)
          } else {
            r = w(`${e}`)
          }
          e = {}
        } else {
          r = w(e.url)
        }
        let n = t.method || e.method || 'GET'
        n = n.toUpperCase()
        if (
          (t.body != null || (isRequest(e) && e.body !== null)) &&
          (n === 'GET' || n === 'HEAD')
        ) {
          throw new TypeError('Request with GET/HEAD method cannot have body')
        }
        let i = t.body != null ? t.body : isRequest(e) && e.body !== null ? clone(e) : null
        Body.call(this, i, { timeout: t.timeout || e.timeout || 0, size: t.size || e.size || 0 })
        const s = new Headers(t.headers || e.headers || {})
        if (i != null && !s.has('Content-Type')) {
          const e = extractContentType(i)
          if (e) {
            s.append('Content-Type', e)
          }
        }
        let o = isRequest(e) ? e.signal : null
        if ('signal' in t) o = t.signal
        if (o != null && !isAbortSignal(o)) {
          throw new TypeError('Expected signal to be an instanceof AbortSignal')
        }
        this[q] = {
          method: n,
          redirect: t.redirect || e.redirect || 'follow',
          headers: s,
          parsedURL: r,
          signal: o
        }
        this.follow = t.follow !== undefined ? t.follow : e.follow !== undefined ? e.follow : 20
        this.compress =
          t.compress !== undefined ? t.compress : e.compress !== undefined ? e.compress : true
        this.counter = t.counter || e.counter || 0
        this.agent = t.agent || e.agent
      }
      get method() {
        return this[q].method
      }
      get url() {
        return E(this[q].parsedURL)
      }
      get headers() {
        return this[q].headers
      }
      get redirect() {
        return this[q].redirect
      }
      get signal() {
        return this[q].signal
      }
      clone() {
        return new Request(this)
      }
    }
    Body.mixIn(Request.prototype)
    Object.defineProperty(Request.prototype, Symbol.toStringTag, {
      value: 'Request',
      writable: false,
      enumerable: false,
      configurable: true
    })
    Object.defineProperties(Request.prototype, {
      method: { enumerable: true },
      url: { enumerable: true },
      headers: { enumerable: true },
      redirect: { enumerable: true },
      clone: { enumerable: true },
      signal: { enumerable: true }
    })
    function getNodeRequestOptions(e) {
      const t = e[q].parsedURL
      const r = new Headers(e[q].headers)
      if (!r.has('Accept')) {
        r.set('Accept', '*/*')
      }
      if (!t.protocol || !t.hostname) {
        throw new TypeError('Only absolute URLs are supported')
      }
      if (!/^https?:$/.test(t.protocol)) {
        throw new TypeError('Only HTTP(S) protocols are supported')
      }
      if (e.signal && e.body instanceof n.Readable && !T) {
        throw new Error(
          'Cancellation of streamed requests with AbortSignal is not supported in node < 8'
        )
      }
      let i = null
      if (e.body == null && /^(POST|PUT)$/i.test(e.method)) {
        i = '0'
      }
      if (e.body != null) {
        const t = getTotalBytes(e)
        if (typeof t === 'number') {
          i = String(t)
        }
      }
      if (i) {
        r.set('Content-Length', i)
      }
      if (!r.has('User-Agent')) {
        r.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)')
      }
      if (e.compress && !r.has('Accept-Encoding')) {
        r.set('Accept-Encoding', 'gzip,deflate')
      }
      let s = e.agent
      if (typeof s === 'function') {
        s = s(t)
      }
      if (!r.has('Connection') && !s) {
        r.set('Connection', 'close')
      }
      return Object.assign({}, t, {
        method: e.method,
        headers: exportNodeCompatibleHeaders(r),
        agent: s
      })
    }
    function AbortError(e) {
      Error.call(this, e)
      this.type = 'aborted'
      this.message = e
      Error.captureStackTrace(this, this.constructor)
    }
    AbortError.prototype = Object.create(Error.prototype)
    AbortError.prototype.constructor = AbortError
    AbortError.prototype.name = 'AbortError'
    const k = n.PassThrough
    const C = s.resolve
    function fetch(e, t) {
      if (!fetch.Promise) {
        throw new Error('native promise missing, set fetch.Promise to your favorite alternative')
      }
      Body.Promise = fetch.Promise
      return new fetch.Promise(function(r, s) {
        const u = new Request(e, t)
        const p = getNodeRequestOptions(u)
        const c = (p.protocol === 'https:' ? o : i).request
        const d = u.signal
        let l = null
        const m = function abort() {
          let e = new AbortError('The user aborted a request.')
          s(e)
          if (u.body && u.body instanceof n.Readable) {
            u.body.destroy(e)
          }
          if (!l || !l.body) return
          l.body.emit('error', e)
        }
        if (d && d.aborted) {
          m()
          return
        }
        const g = function abortAndFinalize() {
          m()
          finalize()
        }
        const h = c(p)
        let y
        if (d) {
          d.addEventListener('abort', g)
        }
        function finalize() {
          h.abort()
          if (d) d.removeEventListener('abort', g)
          clearTimeout(y)
        }
        if (u.timeout) {
          h.once('socket', function(e) {
            y = setTimeout(function() {
              s(new FetchError(`network timeout at: ${u.url}`, 'request-timeout'))
              finalize()
            }, u.timeout)
          })
        }
        h.on('error', function(e) {
          s(new FetchError(`request to ${u.url} failed, reason: ${e.message}`, 'system', e))
          finalize()
        })
        h.on('response', function(e) {
          clearTimeout(y)
          const t = createHeadersLenient(e.headers)
          if (fetch.isRedirect(e.statusCode)) {
            const n = t.get('Location')
            const i = n === null ? null : C(u.url, n)
            switch (u.redirect) {
              case 'error':
                s(new FetchError(`redirect mode is set to error: ${u.url}`, 'no-redirect'))
                finalize()
                return
              case 'manual':
                if (i !== null) {
                  try {
                    t.set('Location', i)
                  } catch (e) {
                    s(e)
                  }
                }
                break
              case 'follow':
                if (i === null) {
                  break
                }
                if (u.counter >= u.follow) {
                  s(new FetchError(`maximum redirect reached at: ${u.url}`, 'max-redirect'))
                  finalize()
                  return
                }
                const n = {
                  headers: new Headers(u.headers),
                  follow: u.follow,
                  counter: u.counter + 1,
                  agent: u.agent,
                  compress: u.compress,
                  method: u.method,
                  body: u.body,
                  signal: u.signal,
                  timeout: u.timeout
                }
                if (e.statusCode !== 303 && u.body && getTotalBytes(u) === null) {
                  s(
                    new FetchError(
                      'Cannot follow redirect with body being a readable stream',
                      'unsupported-redirect'
                    )
                  )
                  finalize()
                  return
                }
                if (
                  e.statusCode === 303 ||
                  ((e.statusCode === 301 || e.statusCode === 302) && u.method === 'POST')
                ) {
                  n.method = 'GET'
                  n.body = undefined
                  n.headers.delete('content-length')
                }
                r(fetch(new Request(i, n)))
                finalize()
                return
            }
          }
          e.once('end', function() {
            if (d) d.removeEventListener('abort', g)
          })
          let n = e.pipe(new k())
          const i = {
            url: u.url,
            status: e.statusCode,
            statusText: e.statusMessage,
            headers: t,
            size: u.size,
            timeout: u.timeout,
            counter: u.counter
          }
          const o = t.get('Content-Encoding')
          if (
            !u.compress ||
            u.method === 'HEAD' ||
            o === null ||
            e.statusCode === 204 ||
            e.statusCode === 304
          ) {
            l = new Response(n, i)
            r(l)
            return
          }
          const p = { flush: a.Z_SYNC_FLUSH, finishFlush: a.Z_SYNC_FLUSH }
          if (o == 'gzip' || o == 'x-gzip') {
            n = n.pipe(a.createGunzip(p))
            l = new Response(n, i)
            r(l)
            return
          }
          if (o == 'deflate' || o == 'x-deflate') {
            const t = e.pipe(new k())
            t.once('data', function(e) {
              if ((e[0] & 15) === 8) {
                n = n.pipe(a.createInflate())
              } else {
                n = n.pipe(a.createInflateRaw())
              }
              l = new Response(n, i)
              r(l)
            })
            return
          }
          if (o == 'br' && typeof a.createBrotliDecompress === 'function') {
            n = n.pipe(a.createBrotliDecompress())
            l = new Response(n, i)
            r(l)
            return
          }
          l = new Response(n, i)
          r(l)
        })
        writeToStream(h, u)
      })
    }
    fetch.isRedirect = function(e) {
      return e === 301 || e === 302 || e === 303 || e === 307 || e === 308
    }
    fetch.Promise = global.Promise
    e.exports = t = fetch
    Object.defineProperty(t, '__esModule', { value: true })
    t.default = t
    t.Headers = Headers
    t.Request = Request
    t.Response = Response
    t.FetchError = FetchError
  },
  462: function(e) {
    'use strict'
    const t = /([()\][%!^"`<>&|;, *?])/g
    function escapeCommand(e) {
      e = e.replace(t, '^$1')
      return e
    }
    function escapeArgument(e, r) {
      e = `${e}`
      e = e.replace(/(\\*)"/g, '$1$1\\"')
      e = e.replace(/(\\*)$/, '$1$1')
      e = `"${e}"`
      e = e.replace(t, '^$1')
      if (r) {
        e = e.replace(t, '^$1')
      }
      return e
    }
    e.exports.command = escapeCommand
    e.exports.argument = escapeArgument
  },
  463: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e
    }
    var n = r(692)
    var i = _interopDefault(r(969))
    const s = i(e => console.warn(e))
    class RequestError extends Error {
      constructor(e, t, r) {
        super(e)
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }
        this.name = 'HttpError'
        this.status = t
        Object.defineProperty(this, 'code', {
          get() {
            s(
              new n.Deprecation(
                '[@octokit/request-error] `error.code` is deprecated, use `error.status`.'
              )
            )
            return t
          }
        })
        this.headers = r.headers || {}
        const i = Object.assign({}, r.request)
        if (r.request.headers.authorization) {
          i.headers = Object.assign({}, r.request.headers, {
            authorization: r.request.headers.authorization.replace(/ .*$/, ' [REDACTED]')
          })
        }
        i.url = i.url
          .replace(/\bclient_secret=\w+/g, 'client_secret=[REDACTED]')
          .replace(/\baccess_token=\w+/g, 'access_token=[REDACTED]')
        this.request = i
      }
    }
    t.RequestError = RequestError
  },
  471: function(e, t, r) {
    e.exports = authenticationBeforeRequest
    const n = r(675)
    const i = r(126)
    function authenticationBeforeRequest(e, t) {
      if (!e.auth.type) {
        return
      }
      if (e.auth.type === 'basic') {
        const r = n(`${e.auth.username}:${e.auth.password}`)
        t.headers.authorization = `Basic ${r}`
        return
      }
      if (e.auth.type === 'token') {
        t.headers.authorization = `token ${e.auth.token}`
        return
      }
      if (e.auth.type === 'app') {
        t.headers.authorization = `Bearer ${e.auth.token}`
        const r = t.headers.accept
          .split(',')
          .concat('application/vnd.github.machine-man-preview+json')
        t.headers.accept = i(r)
          .filter(Boolean)
          .join(',')
        return
      }
      t.url += t.url.indexOf('?') === -1 ? '?' : '&'
      if (e.auth.token) {
        t.url += `access_token=${encodeURIComponent(e.auth.token)}`
        return
      }
      const r = encodeURIComponent(e.auth.key)
      const s = encodeURIComponent(e.auth.secret)
      t.url += `client_id=${r}&client_secret=${s}`
    }
  },
  489: function(e, t, r) {
    'use strict'
    const n = r(622)
    const i = r(814)
    const s = r(39)()
    function resolveCommandAttempt(e, t) {
      const r = process.cwd()
      const o = e.options.cwd != null
      if (o) {
        try {
          process.chdir(e.options.cwd)
        } catch (e) {}
      }
      let a
      try {
        a = i.sync(e.command, {
          path: (e.options.env || process.env)[s],
          pathExt: t ? n.delimiter : undefined
        })
      } catch (e) {
      } finally {
        process.chdir(r)
      }
      if (a) {
        a = n.resolve(o ? e.options.cwd : '', a)
      }
      return a
    }
    function resolveCommand(e) {
      return resolveCommandAttempt(e) || resolveCommandAttempt(e, true)
    }
    e.exports = resolveCommand
  },
  510: function(e) {
    e.exports = addHook
    function addHook(e, t, r, n) {
      var i = n
      if (!e.registry[r]) {
        e.registry[r] = []
      }
      if (t === 'before') {
        n = function(e, t) {
          return Promise.resolve()
            .then(i.bind(null, t))
            .then(e.bind(null, t))
        }
      }
      if (t === 'after') {
        n = function(e, t) {
          var r
          return Promise.resolve()
            .then(e.bind(null, t))
            .then(function(e) {
              r = e
              return i(r, t)
            })
            .then(function() {
              return r
            })
        }
      }
      if (t === 'error') {
        n = function(e, t) {
          return Promise.resolve()
            .then(e.bind(null, t))
            .catch(function(e) {
              return i(e, t)
            })
        }
      }
      e.registry[r].push({ hook: n, orig: i })
    }
  },
  523: function(e, t, r) {
    var n = r(363)
    var i = r(510)
    var s = r(763)
    var o = Function.bind
    var a = o.bind(o)
    function bindApi(e, t, r) {
      var n = a(s, null).apply(null, r ? [t, r] : [t])
      e.api = { remove: n }
      e.remove = n
      ;['before', 'error', 'after', 'wrap'].forEach(function(n) {
        var s = r ? [t, n, r] : [t, n]
        e[n] = e.api[n] = a(i, null).apply(null, s)
      })
    }
    function HookSingular() {
      var e = 'h'
      var t = { registry: {} }
      var r = n.bind(null, t, e)
      bindApi(r, t, e)
      return r
    }
    function HookCollection() {
      var e = { registry: {} }
      var t = n.bind(null, e)
      bindApi(t, e)
      return t
    }
    var u = false
    function Hook() {
      if (!u) {
        console.warn(
          '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
        )
        u = true
      }
      return HookCollection()
    }
    Hook.Singular = HookSingular.bind()
    Hook.Collection = HookCollection.bind()
    e.exports = Hook
    e.exports.Hook = Hook
    e.exports.Singular = Hook.Singular
    e.exports.Collection = Hook.Collection
  },
  529: function(e, t, r) {
    'use strict'
    var n = r(35)
    var i = r(411)
    var s = { 'Content-Type': 'application/x-www-form-urlencoded' }
    function setContentTypeIfUnset(e, t) {
      if (!n.isUndefined(e) && n.isUndefined(e['Content-Type'])) {
        e['Content-Type'] = t
      }
    }
    function getDefaultAdapter() {
      var e
      if (typeof XMLHttpRequest !== 'undefined') {
        e = r(219)
      } else if (typeof process !== 'undefined') {
        e = r(670)
      }
      return e
    }
    var o = {
      adapter: getDefaultAdapter(),
      transformRequest: [
        function transformRequest(e, t) {
          i(t, 'Content-Type')
          if (
            n.isFormData(e) ||
            n.isArrayBuffer(e) ||
            n.isBuffer(e) ||
            n.isStream(e) ||
            n.isFile(e) ||
            n.isBlob(e)
          ) {
            return e
          }
          if (n.isArrayBufferView(e)) {
            return e.buffer
          }
          if (n.isURLSearchParams(e)) {
            setContentTypeIfUnset(t, 'application/x-www-form-urlencoded;charset=utf-8')
            return e.toString()
          }
          if (n.isObject(e)) {
            setContentTypeIfUnset(t, 'application/json;charset=utf-8')
            return JSON.stringify(e)
          }
          return e
        }
      ],
      transformResponse: [
        function transformResponse(e) {
          if (typeof e === 'string') {
            try {
              e = JSON.parse(e)
            } catch (e) {}
          }
          return e
        }
      ],
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      validateStatus: function validateStatus(e) {
        return e >= 200 && e < 300
      }
    }
    o.headers = { common: { Accept: 'application/json, text/plain, */*' } }
    n.forEach(['delete', 'get', 'head'], function forEachMethodNoData(e) {
      o.headers[e] = {}
    })
    n.forEach(['post', 'put', 'patch'], function forEachMethodWithData(e) {
      o.headers[e] = n.merge(s)
    })
    e.exports = o
  },
  536: function(e, t, r) {
    e.exports = hasFirstPage
    const n = r(370)
    const i = r(577)
    function hasFirstPage(e) {
      n(
        `octokit.hasFirstPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`
      )
      return i(e).first
    }
  },
  549: function(e, t, r) {
    var n = r(835)
    var i = r(605)
    var s = r(211)
    var o = r(357)
    var a = r(413).Writable
    var u = r(784)('follow-redirects')
    var p = { GET: true, HEAD: true, OPTIONS: true, TRACE: true }
    var c = Object.create(null)
    ;['abort', 'aborted', 'error', 'socket', 'timeout'].forEach(function(e) {
      c[e] = function(t) {
        this._redirectable.emit(e, t)
      }
    })
    function RedirectableRequest(e, t) {
      a.call(this)
      e.headers = e.headers || {}
      this._options = e
      this._redirectCount = 0
      this._redirects = []
      this._requestBodyLength = 0
      this._requestBodyBuffers = []
      if (e.host) {
        if (!e.hostname) {
          e.hostname = e.host
        }
        delete e.host
      }
      if (t) {
        this.on('response', t)
      }
      var r = this
      this._onNativeResponse = function(e) {
        r._processResponse(e)
      }
      if (!e.pathname && e.path) {
        var n = e.path.indexOf('?')
        if (n < 0) {
          e.pathname = e.path
        } else {
          e.pathname = e.path.substring(0, n)
          e.search = e.path.substring(n)
        }
      }
      this._performRequest()
    }
    RedirectableRequest.prototype = Object.create(a.prototype)
    RedirectableRequest.prototype.write = function(e, t, r) {
      if (!(typeof e === 'string' || (typeof e === 'object' && 'length' in e))) {
        throw new Error('data should be a string, Buffer or Uint8Array')
      }
      if (typeof t === 'function') {
        r = t
        t = null
      }
      if (e.length === 0) {
        if (r) {
          r()
        }
        return
      }
      if (this._requestBodyLength + e.length <= this._options.maxBodyLength) {
        this._requestBodyLength += e.length
        this._requestBodyBuffers.push({ data: e, encoding: t })
        this._currentRequest.write(e, t, r)
      } else {
        this.emit('error', new Error('Request body larger than maxBodyLength limit'))
        this.abort()
      }
    }
    RedirectableRequest.prototype.end = function(e, t, r) {
      if (typeof e === 'function') {
        r = e
        e = t = null
      } else if (typeof t === 'function') {
        r = t
        t = null
      }
      var n = this._currentRequest
      this.write(e || '', t, function() {
        n.end(null, null, r)
      })
    }
    RedirectableRequest.prototype.setHeader = function(e, t) {
      this._options.headers[e] = t
      this._currentRequest.setHeader(e, t)
    }
    RedirectableRequest.prototype.removeHeader = function(e) {
      delete this._options.headers[e]
      this._currentRequest.removeHeader(e)
    }
    ;[
      'abort',
      'flushHeaders',
      'getHeader',
      'setNoDelay',
      'setSocketKeepAlive',
      'setTimeout'
    ].forEach(function(e) {
      RedirectableRequest.prototype[e] = function(t, r) {
        return this._currentRequest[e](t, r)
      }
    })
    ;['aborted', 'connection', 'socket'].forEach(function(e) {
      Object.defineProperty(RedirectableRequest.prototype, e, {
        get: function() {
          return this._currentRequest[e]
        }
      })
    })
    RedirectableRequest.prototype._performRequest = function() {
      var e = this._options.protocol
      var t = this._options.nativeProtocols[e]
      if (!t) {
        this.emit('error', new Error('Unsupported protocol ' + e))
        return
      }
      if (this._options.agents) {
        var r = e.substr(0, e.length - 1)
        this._options.agent = this._options.agents[r]
      }
      var i = (this._currentRequest = t.request(this._options, this._onNativeResponse))
      this._currentUrl = n.format(this._options)
      i._redirectable = this
      for (var s in c) {
        if (s) {
          i.on(s, c[s])
        }
      }
      if (this._isRedirect) {
        var o = 0
        var a = this._requestBodyBuffers
        ;(function writeNext() {
          if (o < a.length) {
            var e = a[o++]
            i.write(e.data, e.encoding, writeNext)
          } else {
            i.end()
          }
        })()
      }
    }
    RedirectableRequest.prototype._processResponse = function(e) {
      if (this._options.trackRedirects) {
        this._redirects.push({
          url: this._currentUrl,
          headers: e.headers,
          statusCode: e.statusCode
        })
      }
      var t = e.headers.location
      if (
        t &&
        this._options.followRedirects !== false &&
        e.statusCode >= 300 &&
        e.statusCode < 400
      ) {
        if (++this._redirectCount > this._options.maxRedirects) {
          this.emit('error', new Error('Max redirects exceeded.'))
          return
        }
        var r
        var i = this._options.headers
        if (e.statusCode !== 307 && !(this._options.method in p)) {
          this._options.method = 'GET'
          this._requestBodyBuffers = []
          for (r in i) {
            if (/^content-/i.test(r)) {
              delete i[r]
            }
          }
        }
        if (!this._isRedirect) {
          for (r in i) {
            if (/^host$/i.test(r)) {
              delete i[r]
            }
          }
        }
        var s = n.resolve(this._currentUrl, t)
        u('redirecting to', s)
        Object.assign(this._options, n.parse(s))
        this._isRedirect = true
        this._performRequest()
        e.destroy()
      } else {
        e.responseUrl = this._currentUrl
        e.redirects = this._redirects
        this.emit('response', e)
        this._requestBodyBuffers = []
      }
    }
    function wrap(e) {
      var t = { maxRedirects: 21, maxBodyLength: 10 * 1024 * 1024 }
      var r = {}
      Object.keys(e).forEach(function(i) {
        var s = i + ':'
        var a = (r[s] = e[i])
        var p = (t[i] = Object.create(a))
        p.request = function(e, i) {
          if (typeof e === 'string') {
            e = n.parse(e)
            e.maxRedirects = t.maxRedirects
          } else {
            e = Object.assign(
              { protocol: s, maxRedirects: t.maxRedirects, maxBodyLength: t.maxBodyLength },
              e
            )
          }
          e.nativeProtocols = r
          o.equal(e.protocol, s, 'protocol mismatch')
          u('options', e)
          return new RedirectableRequest(e, i)
        }
        p.get = function(e, t) {
          var r = p.request(e, t)
          r.end()
          return r
        }
      })
      return t
    }
    e.exports = wrap({ http: i, https: s })
    e.exports.wrap = wrap
  },
  550: function(e, t, r) {
    e.exports = getNextPage
    const n = r(265)
    function getNextPage(e, t, r) {
      return n(e, t, 'next', r)
    }
  },
  558: function(e, t, r) {
    e.exports = hasPreviousPage
    const n = r(370)
    const i = r(577)
    function hasPreviousPage(e) {
      n(
        `octokit.hasPreviousPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`
      )
      return i(e).prev
    }
  },
  563: function(e, t, r) {
    e.exports = getPreviousPage
    const n = r(265)
    function getPreviousPage(e, t, r) {
      return n(e, t, 'prev', r)
    }
  },
  564: function(e, t, r) {
    'use strict'
    var n = r(26)
    e.exports = function settle(e, t, r) {
      var i = r.config.validateStatus
      if (!r.status || !i || i(r.status)) {
        e(r)
      } else {
        t(n('Request failed with status code ' + r.status, r.config, null, r.request, r))
      }
    }
  },
  568: function(e, t, r) {
    'use strict'
    const n = r(622)
    const i = r(948)
    const s = r(489)
    const o = r(462)
    const a = r(389)
    const u = r(280)
    const p = process.platform === 'win32'
    const c = /\.(?:com|exe)$/i
    const d = /node_modules[\\\/].bin[\\\/][^\\\/]+\.cmd$/i
    const l = i(() => u.satisfies(process.version, '^4.8.0 || ^5.7.0 || >= 6.0.0', true)) || false
    function detectShebang(e) {
      e.file = s(e)
      const t = e.file && a(e.file)
      if (t) {
        e.args.unshift(e.file)
        e.command = t
        return s(e)
      }
      return e.file
    }
    function parseNonShell(e) {
      if (!p) {
        return e
      }
      const t = detectShebang(e)
      const r = !c.test(t)
      if (e.options.forceShell || r) {
        const r = d.test(t)
        e.command = n.normalize(e.command)
        e.command = o.command(e.command)
        e.args = e.args.map(e => o.argument(e, r))
        const i = [e.command].concat(e.args).join(' ')
        e.args = ['/d', '/s', '/c', `"${i}"`]
        e.command = process.env.comspec || 'cmd.exe'
        e.options.windowsVerbatimArguments = true
      }
      return e
    }
    function parseShell(e) {
      if (l) {
        return e
      }
      const t = [e.command].concat(e.args).join(' ')
      if (p) {
        e.command =
          typeof e.options.shell === 'string' ? e.options.shell : process.env.comspec || 'cmd.exe'
        e.args = ['/d', '/s', '/c', `"${t}"`]
        e.options.windowsVerbatimArguments = true
      } else {
        if (typeof e.options.shell === 'string') {
          e.command = e.options.shell
        } else if (process.platform === 'android') {
          e.command = '/system/bin/sh'
        } else {
          e.command = '/bin/sh'
        }
        e.args = ['-c', t]
      }
      return e
    }
    function parse(e, t, r) {
      if (t && !Array.isArray(t)) {
        r = t
        t = null
      }
      t = t ? t.slice(0) : []
      r = Object.assign({}, r)
      const n = {
        command: e,
        args: t,
        options: r,
        file: undefined,
        original: { command: e, args: t }
      }
      return r.shell ? parseShell(n) : parseNonShell(n)
    }
    e.exports = parse
  },
  577: function(e) {
    e.exports = getPageLinks
    function getPageLinks(e) {
      e = e.link || e.headers.link || ''
      const t = {}
      e.replace(/<([^>]*)>;\s*rel="([\w]*)"/g, (e, r, n) => {
        t[n] = r
      })
      return t
    }
  },
  589: function(e, t, r) {
    'use strict'
    var n = r(35)
    e.exports = function transformData(e, t, r) {
      n.forEach(r, function transform(r) {
        e = r(e, t)
      })
      return e
    }
  },
  590: function(e) {
    'use strict'
    e.exports = function isAbsoluteURL(e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
  },
  605: function(e) {
    e.exports = require('http')
  },
  614: function(e) {
    e.exports = require('events')
  },
  621: function(e, t, r) {
    'use strict'
    const n = r(622)
    const i = r(39)
    e.exports = e => {
      e = Object.assign({ cwd: process.cwd(), path: process.env[i()] }, e)
      let t
      let r = n.resolve(e.cwd)
      const s = []
      while (t !== r) {
        s.push(n.join(r, 'node_modules/.bin'))
        t = r
        r = n.resolve(r, '..')
      }
      s.push(n.dirname(process.execPath))
      return s.concat(e.path).join(n.delimiter)
    }
    e.exports.env = t => {
      t = Object.assign({ env: process.env }, t)
      const r = Object.assign({}, t.env)
      const n = i({ env: r })
      t.path = r[n]
      r[n] = e.exports(t)
      return r
    }
  },
  622: function(e) {
    e.exports = require('path')
  },
  629: function(e) {
    !(function(t, r) {
      true ? (e.exports = r()) : undefined
    })(this, function() {
      'use strict'
      var e = 'millisecond',
        t = 'second',
        r = 'minute',
        n = 'hour',
        i = 'day',
        s = 'week',
        o = 'month',
        a = 'quarter',
        u = 'year',
        p = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
        d = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        l = function(e, t, r) {
          var n = String(e)
          return !n || n.length >= t ? e : '' + Array(t + 1 - n.length).join(r) + e
        },
        m = {
          s: l,
          z: function(e) {
            var t = -e.utcOffset(),
              r = Math.abs(t),
              n = Math.floor(r / 60),
              i = r % 60
            return (t <= 0 ? '+' : '-') + l(n, 2, '0') + ':' + l(i, 2, '0')
          },
          m: function(e, t) {
            var r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
              n = e.clone().add(r, o),
              i = t - n < 0,
              s = e.clone().add(r + (i ? -1 : 1), o)
            return Number(-(r + (t - n) / (i ? n - s : s - n)) || 0)
          },
          a: function(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
          },
          p: function(p) {
            return (
              { M: o, y: u, w: s, d: i, h: n, m: r, s: t, ms: e, Q: a }[p] ||
              String(p || '')
                .toLowerCase()
                .replace(/s$/, '')
            )
          },
          u: function(e) {
            return void 0 === e
          }
        },
        g = {
          name: 'en',
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          )
        },
        h = 'en',
        y = {}
      y[h] = g
      var f = function(e) {
          return e instanceof q
        },
        b = function(e, t, r) {
          var n
          if (!e) return h
          if ('string' == typeof e) y[e] && (n = e), t && ((y[e] = t), (n = e))
          else {
            var i = e.name
            ;(y[i] = e), (n = i)
          }
          return r || (h = n), n
        },
        _ = function(e, t, r) {
          if (f(e)) return e.clone()
          var n = t ? ('string' == typeof t ? { format: t, pl: r } : t) : {}
          return (n.date = e), new q(n)
        },
        v = m
      ;(v.l = b),
        (v.i = f),
        (v.w = function(e, t) {
          return _(e, { locale: t.$L, utc: t.$u, $offset: t.$offset })
        })
      var q = (function() {
        function c(e) {
          ;(this.$L = this.$L || b(e.locale, null, !0)), this.parse(e)
        }
        var l = c.prototype
        return (
          (l.parse = function(e) {
            ;(this.$d = (function(e) {
              var t = e.date,
                r = e.utc
              if (null === t) return new Date(NaN)
              if (v.u(t)) return new Date()
              if (t instanceof Date) return new Date(t)
              if ('string' == typeof t && !/Z$/i.test(t)) {
                var n = t.match(p)
                if (n)
                  return r
                    ? new Date(
                        Date.UTC(
                          n[1],
                          n[2] - 1,
                          n[3] || 1,
                          n[4] || 0,
                          n[5] || 0,
                          n[6] || 0,
                          n[7] || 0
                        )
                      )
                    : new Date(
                        n[1],
                        n[2] - 1,
                        n[3] || 1,
                        n[4] || 0,
                        n[5] || 0,
                        n[6] || 0,
                        n[7] || 0
                      )
              }
              return new Date(t)
            })(e)),
              this.init()
          }),
          (l.init = function() {
            var e = this.$d
            ;(this.$y = e.getFullYear()),
              (this.$M = e.getMonth()),
              (this.$D = e.getDate()),
              (this.$W = e.getDay()),
              (this.$H = e.getHours()),
              (this.$m = e.getMinutes()),
              (this.$s = e.getSeconds()),
              (this.$ms = e.getMilliseconds())
          }),
          (l.$utils = function() {
            return v
          }),
          (l.isValid = function() {
            return !('Invalid Date' === this.$d.toString())
          }),
          (l.isSame = function(e, t) {
            var r = _(e)
            return this.startOf(t) <= r && r <= this.endOf(t)
          }),
          (l.isAfter = function(e, t) {
            return _(e) < this.startOf(t)
          }),
          (l.isBefore = function(e, t) {
            return this.endOf(t) < _(e)
          }),
          (l.$g = function(e, t, r) {
            return v.u(e) ? this[t] : this.set(r, e)
          }),
          (l.year = function(e) {
            return this.$g(e, '$y', u)
          }),
          (l.month = function(e) {
            return this.$g(e, '$M', o)
          }),
          (l.day = function(e) {
            return this.$g(e, '$W', i)
          }),
          (l.date = function(e) {
            return this.$g(e, '$D', 'date')
          }),
          (l.hour = function(e) {
            return this.$g(e, '$H', n)
          }),
          (l.minute = function(e) {
            return this.$g(e, '$m', r)
          }),
          (l.second = function(e) {
            return this.$g(e, '$s', t)
          }),
          (l.millisecond = function(t) {
            return this.$g(t, '$ms', e)
          }),
          (l.unix = function() {
            return Math.floor(this.valueOf() / 1e3)
          }),
          (l.valueOf = function() {
            return this.$d.getTime()
          }),
          (l.startOf = function(e, a) {
            var p = this,
              c = !!v.u(a) || a,
              d = v.p(e),
              l = function(e, t) {
                var r = v.w(p.$u ? Date.UTC(p.$y, t, e) : new Date(p.$y, t, e), p)
                return c ? r : r.endOf(i)
              },
              m = function(e, t) {
                return v.w(
                  p.toDate()[e].apply(p.toDate(), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)),
                  p
                )
              },
              g = this.$W,
              h = this.$M,
              y = this.$D,
              f = 'set' + (this.$u ? 'UTC' : '')
            switch (d) {
              case u:
                return c ? l(1, 0) : l(31, 11)
              case o:
                return c ? l(1, h) : l(0, h + 1)
              case s:
                var b = this.$locale().weekStart || 0,
                  _ = (g < b ? g + 7 : g) - b
                return l(c ? y - _ : y + (6 - _), h)
              case i:
              case 'date':
                return m(f + 'Hours', 0)
              case n:
                return m(f + 'Minutes', 1)
              case r:
                return m(f + 'Seconds', 2)
              case t:
                return m(f + 'Milliseconds', 3)
              default:
                return this.clone()
            }
          }),
          (l.endOf = function(e) {
            return this.startOf(e, !1)
          }),
          (l.$set = function(s, a) {
            var p,
              c = v.p(s),
              d = 'set' + (this.$u ? 'UTC' : ''),
              l = ((p = {}),
              (p[i] = d + 'Date'),
              (p.date = d + 'Date'),
              (p[o] = d + 'Month'),
              (p[u] = d + 'FullYear'),
              (p[n] = d + 'Hours'),
              (p[r] = d + 'Minutes'),
              (p[t] = d + 'Seconds'),
              (p[e] = d + 'Milliseconds'),
              p)[c],
              m = c === i ? this.$D + (a - this.$W) : a
            if (c === o || c === u) {
              var g = this.clone().set('date', 1)
              g.$d[l](m),
                g.init(),
                (this.$d = g.set('date', Math.min(this.$D, g.daysInMonth())).toDate())
            } else l && this.$d[l](m)
            return this.init(), this
          }),
          (l.set = function(e, t) {
            return this.clone().$set(e, t)
          }),
          (l.get = function(e) {
            return this[v.p(e)]()
          }),
          (l.add = function(e, a) {
            var p,
              c = this
            e = Number(e)
            var d = v.p(a),
              l = function(t) {
                var r = _(c)
                return v.w(r.date(r.date() + Math.round(t * e)), c)
              }
            if (d === o) return this.set(o, this.$M + e)
            if (d === u) return this.set(u, this.$y + e)
            if (d === i) return l(1)
            if (d === s) return l(7)
            var m = ((p = {}), (p[r] = 6e4), (p[n] = 36e5), (p[t] = 1e3), p)[d] || 1,
              g = this.$d.getTime() + e * m
            return v.w(g, this)
          }),
          (l.subtract = function(e, t) {
            return this.add(-1 * e, t)
          }),
          (l.format = function(e) {
            var t = this
            if (!this.isValid()) return 'Invalid Date'
            var r = e || 'YYYY-MM-DDTHH:mm:ssZ',
              n = v.z(this),
              i = this.$locale(),
              s = this.$H,
              o = this.$m,
              a = this.$M,
              u = i.weekdays,
              p = i.months,
              c = function(e, n, i, s) {
                return (e && (e[n] || e(t, r))) || i[n].substr(0, s)
              },
              l = function(e) {
                return v.s(s % 12 || 12, e, '0')
              },
              m =
                i.meridiem ||
                function(e, t, r) {
                  var n = e < 12 ? 'AM' : 'PM'
                  return r ? n.toLowerCase() : n
                },
              g = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: a + 1,
                MM: v.s(a + 1, 2, '0'),
                MMM: c(i.monthsShort, a, p, 3),
                MMMM: p[a] || p(this, r),
                D: this.$D,
                DD: v.s(this.$D, 2, '0'),
                d: String(this.$W),
                dd: c(i.weekdaysMin, this.$W, u, 2),
                ddd: c(i.weekdaysShort, this.$W, u, 3),
                dddd: u[this.$W],
                H: String(s),
                HH: v.s(s, 2, '0'),
                h: l(1),
                hh: l(2),
                a: m(s, o, !0),
                A: m(s, o, !1),
                m: String(o),
                mm: v.s(o, 2, '0'),
                s: String(this.$s),
                ss: v.s(this.$s, 2, '0'),
                SSS: v.s(this.$ms, 3, '0'),
                Z: n
              }
            return r.replace(d, function(e, t) {
              return t || g[e] || n.replace(':', '')
            })
          }),
          (l.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
          }),
          (l.diff = function(e, p, c) {
            var d,
              l = v.p(p),
              m = _(e),
              g = 6e4 * (m.utcOffset() - this.utcOffset()),
              h = this - m,
              y = v.m(this, m)
            return (
              (y =
                ((d = {}),
                (d[u] = y / 12),
                (d[o] = y),
                (d[a] = y / 3),
                (d[s] = (h - g) / 6048e5),
                (d[i] = (h - g) / 864e5),
                (d[n] = h / 36e5),
                (d[r] = h / 6e4),
                (d[t] = h / 1e3),
                d)[l] || h),
              c ? y : v.a(y)
            )
          }),
          (l.daysInMonth = function() {
            return this.endOf(o).$D
          }),
          (l.$locale = function() {
            return y[this.$L]
          }),
          (l.locale = function(e, t) {
            if (!e) return this.$L
            var r = this.clone(),
              n = b(e, t, !0)
            return n && (r.$L = n), r
          }),
          (l.clone = function() {
            return v.w(this.$d, this)
          }),
          (l.toDate = function() {
            return new Date(this.valueOf())
          }),
          (l.toJSON = function() {
            return this.isValid() ? this.toISOString() : null
          }),
          (l.toISOString = function() {
            return this.$d.toISOString()
          }),
          (l.toString = function() {
            return this.$d.toUTCString()
          }),
          c
        )
      })()
      return (
        (_.prototype = q.prototype),
        (_.extend = function(e, t) {
          return e(t, q, _), _
        }),
        (_.locale = b),
        (_.isDayjs = f),
        (_.unix = function(e) {
          return _(1e3 * e)
        }),
        (_.en = y[h]),
        (_.Ls = y),
        _
      )
    })
  },
  631: function(e, t, r) {
    'use strict'
    var n = r(35)
    var i = [
      'age',
      'authorization',
      'content-length',
      'content-type',
      'etag',
      'expires',
      'from',
      'host',
      'if-modified-since',
      'if-unmodified-since',
      'last-modified',
      'location',
      'max-forwards',
      'proxy-authorization',
      'referer',
      'retry-after',
      'user-agent'
    ]
    e.exports = function parseHeaders(e) {
      var t = {}
      var r
      var s
      var o
      if (!e) {
        return t
      }
      n.forEach(e.split('\n'), function parser(e) {
        o = e.indexOf(':')
        r = n.trim(e.substr(0, o)).toLowerCase()
        s = n.trim(e.substr(o + 1))
        if (r) {
          if (t[r] && i.indexOf(r) >= 0) {
            return
          }
          if (r === 'set-cookie') {
            t[r] = (t[r] ? t[r] : []).concat([s])
          } else {
            t[r] = t[r] ? t[r] + ', ' + s : s
          }
        }
      })
      return t
    }
  },
  649: function(e, t, r) {
    e.exports = getLastPage
    const n = r(265)
    function getLastPage(e, t, r) {
      return n(e, t, 'last', r)
    }
  },
  650: function(e, i, s) {
    'use strict'
    Object.defineProperty(i, '__esModule', { value: !0 })
    var u,
      p = (u = s(53)) && 'object' == typeof u && 'default' in u ? u.default : u
    function n(e, t) {
      for (var r, n = 0; n < t.length; n++)
        ((r = t[n]).enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
    }
    function r(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = r),
        e
      )
    }
    function a() {
      return (a =
        Object.assign ||
        function(e) {
          for (var t, r = 1; r < arguments.length; r++)
            for (var n in (t = arguments[r]))
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          return e
        }).apply(this, arguments)
    }
    function o(e, t) {
      if (null == e) return {}
      var r,
        n,
        i = (function(e, t) {
          if (null == e) return {}
          var r,
            n,
            i = {},
            s = Object.keys(e)
          for (n = 0; n < s.length; n++) (r = s[n]), 0 <= t.indexOf(r) || (i[r] = e[r])
          return i
        })(e, t)
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e)
        for (n = 0; n < s.length; n++)
          (r = s[n]),
            !(0 <= t.indexOf(r)) &&
              Object.prototype.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r])
      }
      return i
    }
    var c,
      d = Object.freeze({
        LAST_7_DAYS: 'LAST_7_DAYS',
        LAST_30_DAYS: 'LAST_30_DAYS',
        LAST_6_MONTHS: 'LAST_6_MONTHS',
        LAST_YEAR: 'LAST_YEAR'
      }),
      l = function(e) {
        var t = e.dateRange,
          r = e.projectName,
          n = void 0 === r ? null : r,
          i = e.branchNames,
          s = void 0 === i ? [] : i
        return { start: t.startDate, end: t.endDate, project: n, branches: s.join(',') }
      },
      m = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.timeout,
          r = void 0 === t ? null : t,
          n = e.useWritesOnly,
          i = void 0 === n ? null : n,
          s = e.projectName,
          o = void 0 === s ? null : s
        return { timeout: r, writes_only: i, project: o }
      },
      g = function(e) {
        var t = e.date,
          r = e.projectName,
          n = void 0 === r ? null : r,
          i = e.branchNames
        return { date: t, project: n, branches: (void 0 === i ? [] : i).join(',') }
      },
      h = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.authorUsername,
          r = void 0 === t ? null : t,
          n = e.pageNumber,
          i = void 0 === n ? null : n
        return { author: r, page: i }
      },
      y = Object.freeze(
        (r((c = {}), d.LAST_7_DAYS, 'last_7_days'),
        r(c, d.LAST_30_DAYS, 'last_30_days'),
        r(c, d.LAST_6_MONTHS, 'last_6_months'),
        r(c, d.LAST_YEAR, 'last_year'),
        c)
      ),
      f = (function() {
        function t(e) {
          ;(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
            (this.apiKey = e),
            (this.axiosConfiguration = p.create({
              baseURL: 'https://wakatime.com/api/v1/',
              headers: {
                Authorization: 'Basic '.concat(Buffer.from(this.apiKey).toString('base64'))
              }
            }))
        }
        return (
          (function(e, t, r) {
            t && n(e.prototype, t), r && n(e, r)
          })(t, [
            {
              key: 'getUser',
              value: function(e) {
                return this.axiosConfiguration.get('users/'.concat(e)).then(function(e) {
                  return e.data
                })
              }
            },
            {
              key: 'getMe',
              value: function() {
                return this.axiosConfiguration.get('users/current').then(function(e) {
                  return e.data
                })
              }
            },
            {
              key: 'getTeams',
              value: function(e) {
                return this.axiosConfiguration.get('users/'.concat(e, '/teams')).then(function(e) {
                  return e.data
                })
              }
            },
            {
              key: 'getMyTeams',
              value: function() {
                return this.axiosConfiguration.get('users/current/teams').then(function(e) {
                  return e.data
                })
              }
            },
            {
              key: 'getUserAgents',
              value: function(e) {
                return this.axiosConfiguration
                  .get('users/'.concat(e, '/user_agents'))
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getMyUserAgents',
              value: function() {
                return this.axiosConfiguration.get('users/current/user_agents').then(function(e) {
                  return e.data
                })
              }
            },
            {
              key: 'getTeamMembers',
              value: function(e) {
                var t = e.userId,
                  r = e.teamId
                return this.axiosConfiguration
                  .get('users/'.concat(t, '/teams/').concat(r, '/members'))
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getMyTeamMembers',
              value: function(e) {
                return this.axiosConfiguration
                  .get('users/current/teams/'.concat(e, '/members'))
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getTeamMemberSummary',
              value: function(e) {
                var t = e.userId,
                  r = e.teamId,
                  n = e.teamMemberId,
                  i = o(e, ['userId', 'teamId', 'teamMemberId'])
                return this.axiosConfiguration
                  .get(
                    'users/'
                      .concat(t, '/teams/')
                      .concat(r, '/members/')
                      .concat(n, '/summaries'),
                    { params: l(i) }
                  )
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getMyTeamMemberSummary',
              value: function(e) {
                var t = e.teamId,
                  r = e.teamMemberId,
                  n = o(e, ['teamId', 'teamMemberId'])
                return this.axiosConfiguration
                  .get('users/current/teams/'.concat(t, '/members/').concat(r, '/summaries'), {
                    params: l(n)
                  })
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getUserSummary',
              value: function(e) {
                var t = e.userId,
                  r = o(e, ['userId'])
                return this.axiosConfiguration
                  .get('users/'.concat(t, '/summaries'), { params: l(r) })
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getMySummary',
              value: function(e) {
                var t = a({}, e)
                return this.axiosConfiguration
                  .get('users/current/summaries', { params: l(t) })
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getUserStats',
              value: function(e) {
                var t = e.userId,
                  r = e.range,
                  n = o(e, ['userId', 'range'])
                return this.axiosConfiguration
                  .get('users/'.concat(t, '/stats/').concat(y[r]), { params: m(n) })
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getMyStats',
              value: function(e) {
                var t = e.range,
                  r = o(e, ['range'])
                return this.axiosConfiguration
                  .get('users/current/stats/'.concat(y[t]), { params: m(r) })
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getProjects',
              value: function(e) {
                return this.axiosConfiguration
                  .get('users/'.concat(e, '/projects'))
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getMyProjects',
              value: function() {
                return this.axiosConfiguration.get('users/current/projects').then(function(e) {
                  return e.data
                })
              }
            },
            {
              key: 'getLeaders',
              value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.language,
                  r = void 0 === t ? null : t,
                  n = e.pageNumber,
                  i = void 0 === n ? null : n
                return this.axiosConfiguration
                  .get('leaders', { params: { language: r, page: i } })
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getHeartbeats',
              value: function(e) {
                var t = e.userId,
                  r = e.date
                return this.axiosConfiguration
                  .get('users/'.concat(t, '/heartbeats'), { params: { date: r } })
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getMyHeartbeats',
              value: function(e) {
                return this.axiosConfiguration
                  .get('users/current/heartbeats', { params: { date: e } })
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getGoals',
              value: function(e) {
                return this.axiosConfiguration.get('users/'.concat(e, '/goals')).then(function(e) {
                  return e.data
                })
              }
            },
            {
              key: 'getMyGoals',
              value: function() {
                return this.axiosConfiguration.get('users/current/goals').then(function(e) {
                  return e.data
                })
              }
            },
            {
              key: 'getDurations',
              value: function(e) {
                var t = e.userId,
                  r = o(e, ['userId'])
                return this.axiosConfiguration
                  .get('users/'.concat(t, '/durations'), { params: g(r) })
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getMyDurations',
              value: function(e) {
                var t = a({}, e)
                return this.axiosConfiguration
                  .get('users/current/durations', { params: g(t) })
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getCommits',
              value: function(e) {
                var t = e.userId,
                  r = e.projectName,
                  n = o(e, ['userId', 'projectName'])
                return this.axiosConfiguration
                  .get('users/'.concat(t, '/projects/').concat(r, '/commits'), { params: h(n) })
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getMyCommits',
              value: function(e) {
                var t = e.projectName,
                  r = o(e, ['projectName'])
                return this.axiosConfiguration
                  .get('users/current/projects/'.concat(t, '/commits'), { params: h(r) })
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getMetadata',
              value: function() {
                return this.axiosConfiguration.get('meta')
              }
            },
            {
              key: 'getOrganizations',
              value: function(e) {
                return this.axiosConfiguration.get('users/'.concat(e, '/orgs')).then(function(e) {
                  return e.data
                })
              }
            },
            {
              key: 'getMyOrganizations',
              value: function() {
                return this.axiosConfiguration.get('users/current/orgs').then(function(e) {
                  return e.data
                })
              }
            },
            {
              key: 'getOrganizationDashboards',
              value: function(e) {
                var t = e.userId,
                  r = e.organizationId
                return this.axiosConfiguration
                  .get('users/'.concat(t, '/orgs/').concat(r))
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getMyOrganizationDashboards',
              value: function(e) {
                return this.getOrganizationDashboards({ userId: 'current', organizationId: e })
              }
            },
            {
              key: 'getOrganizationDashboardMembers',
              value: function(e) {
                var t = e.userId,
                  r = e.organizationId,
                  n = e.dashboardId
                return this.axiosConfiguration
                  .get(
                    'users/'
                      .concat(t, '/orgs/')
                      .concat(r, '/dashboards/')
                      .concat(n, '/members')
                  )
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getMyOrganizationDashboardMembers',
              value: function(e) {
                var t = e.organizationId,
                  r = e.dashboardId
                return this.getOrganizationDashboardMembers({
                  userId: 'current',
                  organizationId: t,
                  dashboardId: r
                })
              }
            },
            {
              key: 'getOrganizationDashboardMemberSummaries',
              value: function(e) {
                var t = e.userId,
                  r = e.organizationId,
                  n = e.dashboardId,
                  i = e.memberId
                return this.axiosConfiguration
                  .get(
                    'users/'
                      .concat(t, '/orgs/')
                      .concat(r, '/dashboards/')
                      .concat(n, '/members/')
                      .concat(i, '/summaries')
                  )
                  .then(function(e) {
                    return e.data
                  })
              }
            },
            {
              key: 'getMyOrganizationDashboardMemberSummaries',
              value: function(e) {
                var t = e.organizationId,
                  r = e.dashboardId,
                  n = e.memberId
                return this.getOrganizationDashboardMemberSummaries({
                  userId: 'current',
                  organizationId: t,
                  dashboardId: r,
                  memberId: n
                })
              }
            }
          ]),
          t
        )
      })()
    ;(i.RANGE = d), (i.WakaTimeClient = f)
  },
  654: function(e) {
    e.exports = ['SIGABRT', 'SIGALRM', 'SIGHUP', 'SIGINT', 'SIGTERM']
    if (process.platform !== 'win32') {
      e.exports.push(
        'SIGVTALRM',
        'SIGXCPU',
        'SIGXFSZ',
        'SIGUSR2',
        'SIGTRAP',
        'SIGSYS',
        'SIGQUIT',
        'SIGIOT'
      )
    }
    if (process.platform === 'linux') {
      e.exports.push('SIGIO', 'SIGPOLL', 'SIGPWR', 'SIGSTKFLT', 'SIGUNUSED')
    }
  },
  669: function(e) {
    e.exports = require('util')
  },
  670: function(e, t, r) {
    'use strict'
    var n = r(35)
    var i = r(564)
    var s = r(133)
    var o = r(605)
    var a = r(211)
    var u = r(549).http
    var p = r(549).https
    var c = r(835)
    var d = r(903)
    var l = r(361)
    var m = r(26)
    var g = r(369)
    e.exports = function httpAdapter(e) {
      return new Promise(function dispatchHttpRequest(t, r) {
        var h = e.data
        var y = e.headers
        var f
        if (!y['User-Agent'] && !y['user-agent']) {
          y['User-Agent'] = 'axios/' + l.version
        }
        if (h && !n.isStream(h)) {
          if (Buffer.isBuffer(h)) {
          } else if (n.isArrayBuffer(h)) {
            h = new Buffer(new Uint8Array(h))
          } else if (n.isString(h)) {
            h = new Buffer(h, 'utf-8')
          } else {
            return r(
              m(
                'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
                e
              )
            )
          }
          y['Content-Length'] = h.length
        }
        var b = undefined
        if (e.auth) {
          var _ = e.auth.username || ''
          var v = e.auth.password || ''
          b = _ + ':' + v
        }
        var q = c.parse(e.url)
        var w = q.protocol || 'http:'
        if (!b && q.auth) {
          var E = q.auth.split(':')
          var T = E[0] || ''
          var k = E[1] || ''
          b = T + ':' + k
        }
        if (b) {
          delete y.Authorization
        }
        var C = w === 'https:'
        var j = C ? e.httpsAgent : e.httpAgent
        var S = {
          path: s(q.path, e.params, e.paramsSerializer).replace(/^\?/, ''),
          method: e.method,
          headers: y,
          agent: j,
          auth: b
        }
        if (e.socketPath) {
          S.socketPath = e.socketPath
        } else {
          S.hostname = q.hostname
          S.port = q.port
        }
        var O = e.proxy
        if (!O && O !== false) {
          var x = w.slice(0, -1) + '_proxy'
          var P = process.env[x] || process.env[x.toUpperCase()]
          if (P) {
            var R = c.parse(P)
            O = { host: R.hostname, port: R.port }
            if (R.auth) {
              var A = R.auth.split(':')
              O.auth = { username: A[0], password: A[1] }
            }
          }
        }
        if (O) {
          S.hostname = O.host
          S.host = O.host
          S.headers.host = q.hostname + (q.port ? ':' + q.port : '')
          S.port = O.port
          S.path = w + '//' + q.hostname + (q.port ? ':' + q.port : '') + S.path
          if (O.auth) {
            var G = new Buffer(O.auth.username + ':' + O.auth.password, 'utf8').toString('base64')
            S.headers['Proxy-Authorization'] = 'Basic ' + G
          }
        }
        var D
        if (e.transport) {
          D = e.transport
        } else if (e.maxRedirects === 0) {
          D = C ? a : o
        } else {
          if (e.maxRedirects) {
            S.maxRedirects = e.maxRedirects
          }
          D = C ? p : u
        }
        if (e.maxContentLength && e.maxContentLength > -1) {
          S.maxBodyLength = e.maxContentLength
        }
        var L = D.request(S, function handleResponse(n) {
          if (L.aborted) return
          clearTimeout(f)
          f = null
          var s = n
          switch (n.headers['content-encoding']) {
            case 'gzip':
            case 'compress':
            case 'deflate':
              s = s.pipe(d.createUnzip())
              delete n.headers['content-encoding']
              break
          }
          var o = n.req || L
          var a = {
            status: n.statusCode,
            statusText: n.statusMessage,
            headers: n.headers,
            config: e,
            request: o
          }
          if (e.responseType === 'stream') {
            a.data = s
            i(t, r, a)
          } else {
            var u = []
            s.on('data', function handleStreamData(t) {
              u.push(t)
              if (e.maxContentLength > -1 && Buffer.concat(u).length > e.maxContentLength) {
                s.destroy()
                r(m('maxContentLength size of ' + e.maxContentLength + ' exceeded', e, null, o))
              }
            })
            s.on('error', function handleStreamError(t) {
              if (L.aborted) return
              r(g(t, e, null, o))
            })
            s.on('end', function handleStreamEnd() {
              var n = Buffer.concat(u)
              if (e.responseType !== 'arraybuffer') {
                n = n.toString('utf8')
              }
              a.data = n
              i(t, r, a)
            })
          }
        })
        L.on('error', function handleRequestError(t) {
          if (L.aborted) return
          r(g(t, e, null, L))
        })
        if (e.timeout && !f) {
          f = setTimeout(function handleRequestTimeout() {
            L.abort()
            r(m('timeout of ' + e.timeout + 'ms exceeded', e, 'ECONNABORTED', L))
          }, e.timeout)
        }
        if (e.cancelToken) {
          e.cancelToken.promise.then(function onCanceled(e) {
            if (L.aborted) return
            L.abort()
            r(e)
          })
        }
        if (n.isStream(h)) {
          h.pipe(L)
        } else {
          L.end(h)
        }
      })
    }
  },
  674: function(e, t, r) {
    e.exports = authenticate
    const { Deprecation: n } = r(692)
    const i = r(969)
    const s = i((e, t) => e.warn(t))
    function authenticate(e, t) {
      s(
        e.octokit.log,
        new n(
          '[@octokit/rest] octokit.authenticate() is deprecated. Use "auth" constructor option instead.'
        )
      )
      if (!t) {
        e.auth = false
        return
      }
      switch (t.type) {
        case 'basic':
          if (!t.username || !t.password) {
            throw new Error('Basic authentication requires both a username and password to be set')
          }
          break
        case 'oauth':
          if (!t.token && !(t.key && t.secret)) {
            throw new Error('OAuth2 authentication requires a token or key & secret to be set')
          }
          break
        case 'token':
        case 'app':
          if (!t.token) {
            throw new Error('Token authentication requires a token to be set')
          }
          break
        default:
          throw new Error("Invalid authentication type, must be 'basic', 'oauth', 'token' or 'app'")
      }
      e.auth = t
    }
  },
  675: function(e) {
    e.exports = function btoa(e) {
      return new Buffer(e).toString('base64')
    }
  },
  688: function(e, t, r) {
    'use strict'
    var n = r(35)
    e.exports = n.isStandardBrowserEnv()
      ? (function standardBrowserEnv() {
          var e = /(msie|trident)/i.test(navigator.userAgent)
          var t = document.createElement('a')
          var r
          function resolveURL(r) {
            var n = r
            if (e) {
              t.setAttribute('href', n)
              n = t.href
            }
            t.setAttribute('href', n)
            return {
              href: t.href,
              protocol: t.protocol ? t.protocol.replace(/:$/, '') : '',
              host: t.host,
              search: t.search ? t.search.replace(/^\?/, '') : '',
              hash: t.hash ? t.hash.replace(/^#/, '') : '',
              hostname: t.hostname,
              port: t.port,
              pathname: t.pathname.charAt(0) === '/' ? t.pathname : '/' + t.pathname
            }
          }
          r = resolveURL(window.location.href)
          return function isURLSameOrigin(e) {
            var t = n.isString(e) ? resolveURL(e) : e
            return t.protocol === r.protocol && t.host === r.host
          }
        })()
      : (function nonStandardBrowserEnv() {
          return function isURLSameOrigin() {
            return true
          }
        })()
  },
  692: function(e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    class Deprecation extends Error {
      constructor(e) {
        super(e)
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }
        this.name = 'Deprecation'
      }
    }
    t.Deprecation = Deprecation
  },
  696: function(e) {
    'use strict'
    function isObject(e) {
      return e != null && typeof e === 'object' && Array.isArray(e) === false
    }
    function isObjectObject(e) {
      return isObject(e) === true && Object.prototype.toString.call(e) === '[object Object]'
    }
    function isPlainObject(e) {
      var t, r
      if (isObjectObject(e) === false) return false
      t = e.constructor
      if (typeof t !== 'function') return false
      r = t.prototype
      if (isObjectObject(r) === false) return false
      if (r.hasOwnProperty('isPrototypeOf') === false) {
        return false
      }
      return true
    }
    e.exports = isPlainObject
  },
  697: function(e) {
    'use strict'
    e.exports = (e, t) => {
      t = t || (() => {})
      return e.then(
        e =>
          new Promise(e => {
            e(t())
          }).then(() => e),
        e =>
          new Promise(e => {
            e(t())
          }).then(() => {
            throw e
          })
      )
    }
  },
  727: function(e) {
    'use strict'
    e.exports = function bind(e, t) {
      return function wrap() {
        var r = new Array(arguments.length)
        for (var n = 0; n < r.length; n++) {
          r[n] = arguments[n]
        }
        return e.apply(t, r)
      }
    }
  },
  732: function(e) {
    'use strict'
    e.exports = function isCancel(e) {
      return !!(e && e.__CANCEL__)
    }
  },
  742: function(e, t, r) {
    var n = r(747)
    var i
    if (process.platform === 'win32' || global.TESTING_WINDOWS) {
      i = r(818)
    } else {
      i = r(197)
    }
    e.exports = isexe
    isexe.sync = sync
    function isexe(e, t, r) {
      if (typeof t === 'function') {
        r = t
        t = {}
      }
      if (!r) {
        if (typeof Promise !== 'function') {
          throw new TypeError('callback not provided')
        }
        return new Promise(function(r, n) {
          isexe(e, t || {}, function(e, t) {
            if (e) {
              n(e)
            } else {
              r(t)
            }
          })
        })
      }
      i(e, t || {}, function(e, n) {
        if (e) {
          if (e.code === 'EACCES' || (t && t.ignoreErrors)) {
            e = null
            n = false
          }
        }
        r(e, n)
      })
    }
    function sync(e, t) {
      try {
        return i.sync(e, t || {})
      } catch (e) {
        if ((t && t.ignoreErrors) || e.code === 'EACCES') {
          return false
        } else {
          throw e
        }
      }
    }
  },
  747: function(e) {
    e.exports = require('fs')
  },
  753: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e
    }
    var n = r(385)
    var i = r(796)
    var s = _interopDefault(r(696))
    var o = _interopDefault(r(454))
    var a = r(463)
    const u = '5.3.1'
    function getBufferResponse(e) {
      return e.arrayBuffer()
    }
    function fetchWrapper(e) {
      if (s(e.body) || Array.isArray(e.body)) {
        e.body = JSON.stringify(e.body)
      }
      let t = {}
      let r
      let n
      const i = (e.request && e.request.fetch) || o
      return i(
        e.url,
        Object.assign(
          { method: e.method, body: e.body, headers: e.headers, redirect: e.redirect },
          e.request
        )
      )
        .then(i => {
          n = i.url
          r = i.status
          for (const e of i.headers) {
            t[e[0]] = e[1]
          }
          if (r === 204 || r === 205) {
            return
          }
          if (e.method === 'HEAD') {
            if (r < 400) {
              return
            }
            throw new a.RequestError(i.statusText, r, { headers: t, request: e })
          }
          if (r === 304) {
            throw new a.RequestError('Not modified', r, { headers: t, request: e })
          }
          if (r >= 400) {
            return i.text().then(n => {
              const i = new a.RequestError(n, r, { headers: t, request: e })
              try {
                let e = JSON.parse(i.message)
                Object.assign(i, e)
                let t = e.errors
                i.message = i.message + ': ' + t.map(JSON.stringify).join(', ')
              } catch (e) {}
              throw i
            })
          }
          const s = i.headers.get('content-type')
          if (/application\/json/.test(s)) {
            return i.json()
          }
          if (!s || /^text\/|charset=utf-8$/.test(s)) {
            return i.text()
          }
          return getBufferResponse(i)
        })
        .then(e => {
          return { status: r, url: n, headers: t, data: e }
        })
        .catch(r => {
          if (r instanceof a.RequestError) {
            throw r
          }
          throw new a.RequestError(r.message, 500, { headers: t, request: e })
        })
    }
    function withDefaults(e, t) {
      const r = e.defaults(t)
      const n = function(e, t) {
        const n = r.merge(e, t)
        if (!n.request || !n.request.hook) {
          return fetchWrapper(r.parse(n))
        }
        const i = (e, t) => {
          return fetchWrapper(r.parse(r.merge(e, t)))
        }
        Object.assign(i, { endpoint: r, defaults: withDefaults.bind(null, r) })
        return n.request.hook(i, n)
      }
      return Object.assign(n, { endpoint: r, defaults: withDefaults.bind(null, r) })
    }
    const p = withDefaults(n.endpoint, {
      headers: { 'user-agent': `octokit-request.js/${u} ${i.getUserAgent()}` }
    })
    t.request = p
  },
  761: function(e) {
    var t = 1e3
    var r = t * 60
    var n = r * 60
    var i = n * 24
    var s = i * 365.25
    e.exports = function(e, t) {
      t = t || {}
      var r = typeof e
      if (r === 'string' && e.length > 0) {
        return parse(e)
      } else if (r === 'number' && isNaN(e) === false) {
        return t.long ? fmtLong(e) : fmtShort(e)
      }
      throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(e))
    }
    function parse(e) {
      e = String(e)
      if (e.length > 100) {
        return
      }
      var o = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        e
      )
      if (!o) {
        return
      }
      var a = parseFloat(o[1])
      var u = (o[2] || 'ms').toLowerCase()
      switch (u) {
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
          return a * s
        case 'days':
        case 'day':
        case 'd':
          return a * i
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
          return a * n
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
          return a * r
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
          return a * t
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
          return a
        default:
          return undefined
      }
    }
    function fmtShort(e) {
      if (e >= i) {
        return Math.round(e / i) + 'd'
      }
      if (e >= n) {
        return Math.round(e / n) + 'h'
      }
      if (e >= r) {
        return Math.round(e / r) + 'm'
      }
      if (e >= t) {
        return Math.round(e / t) + 's'
      }
      return e + 'ms'
    }
    function fmtLong(e) {
      return (
        plural(e, i, 'day') ||
        plural(e, n, 'hour') ||
        plural(e, r, 'minute') ||
        plural(e, t, 'second') ||
        e + ' ms'
      )
    }
    function plural(e, t, r) {
      if (e < t) {
        return
      }
      if (e < t * 1.5) {
        return Math.floor(e / t) + ' ' + r
      }
      return Math.ceil(e / t) + ' ' + r + 's'
    }
  },
  763: function(e) {
    e.exports = removeHook
    function removeHook(e, t, r) {
      if (!e.registry[t]) {
        return
      }
      var n = e.registry[t]
        .map(function(e) {
          return e.orig
        })
        .indexOf(r)
      if (n === -1) {
        return
      }
      e.registry[t].splice(n, 1)
    }
  },
  768: function(e) {
    'use strict'
    e.exports = function(e) {
      var t = typeof e === 'string' ? '\n' : '\n'.charCodeAt()
      var r = typeof e === 'string' ? '\r' : '\r'.charCodeAt()
      if (e[e.length - 1] === t) {
        e = e.slice(0, e.length - 1)
      }
      if (e[e.length - 1] === r) {
        e = e.slice(0, e.length - 1)
      }
      return e
    }
  },
  777: function(e, t, r) {
    e.exports = getFirstPage
    const n = r(265)
    function getFirstPage(e, t, r) {
      return n(e, t, 'first', r)
    }
  },
  779: function(e, t, r) {
    'use strict'
    var n = r(529)
    var i = r(35)
    var s = r(283)
    var o = r(946)
    function Axios(e) {
      this.defaults = e
      this.interceptors = { request: new s(), response: new s() }
    }
    Axios.prototype.request = function request(e) {
      if (typeof e === 'string') {
        e = i.merge({ url: arguments[0] }, arguments[1])
      }
      e = i.merge(n, { method: 'get' }, this.defaults, e)
      e.method = e.method.toLowerCase()
      var t = [o, undefined]
      var r = Promise.resolve(e)
      this.interceptors.request.forEach(function unshiftRequestInterceptors(e) {
        t.unshift(e.fulfilled, e.rejected)
      })
      this.interceptors.response.forEach(function pushResponseInterceptors(e) {
        t.push(e.fulfilled, e.rejected)
      })
      while (t.length) {
        r = r.then(t.shift(), t.shift())
      }
      return r
    }
    i.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(e) {
      Axios.prototype[e] = function(t, r) {
        return this.request(i.merge(r || {}, { method: e, url: t }))
      }
    })
    i.forEach(['post', 'put', 'patch'], function forEachMethodWithData(e) {
      Axios.prototype[e] = function(t, r, n) {
        return this.request(i.merge(n || {}, { method: e, url: t, data: r }))
      }
    })
    e.exports = Axios
  },
  784: function(e, t, r) {
    if (typeof process === 'undefined' || process.type === 'renderer') {
      e.exports = r(794)
    } else {
      e.exports = r(81)
    }
  },
  794: function(e, t, r) {
    t = e.exports = r(25)
    t.log = log
    t.formatArgs = formatArgs
    t.save = save
    t.load = load
    t.useColors = useColors
    t.storage =
      'undefined' != typeof chrome && 'undefined' != typeof chrome.storage
        ? chrome.storage.local
        : localstorage()
    t.colors = [
      '#0000CC',
      '#0000FF',
      '#0033CC',
      '#0033FF',
      '#0066CC',
      '#0066FF',
      '#0099CC',
      '#0099FF',
      '#00CC00',
      '#00CC33',
      '#00CC66',
      '#00CC99',
      '#00CCCC',
      '#00CCFF',
      '#3300CC',
      '#3300FF',
      '#3333CC',
      '#3333FF',
      '#3366CC',
      '#3366FF',
      '#3399CC',
      '#3399FF',
      '#33CC00',
      '#33CC33',
      '#33CC66',
      '#33CC99',
      '#33CCCC',
      '#33CCFF',
      '#6600CC',
      '#6600FF',
      '#6633CC',
      '#6633FF',
      '#66CC00',
      '#66CC33',
      '#9900CC',
      '#9900FF',
      '#9933CC',
      '#9933FF',
      '#99CC00',
      '#99CC33',
      '#CC0000',
      '#CC0033',
      '#CC0066',
      '#CC0099',
      '#CC00CC',
      '#CC00FF',
      '#CC3300',
      '#CC3333',
      '#CC3366',
      '#CC3399',
      '#CC33CC',
      '#CC33FF',
      '#CC6600',
      '#CC6633',
      '#CC9900',
      '#CC9933',
      '#CCCC00',
      '#CCCC33',
      '#FF0000',
      '#FF0033',
      '#FF0066',
      '#FF0099',
      '#FF00CC',
      '#FF00FF',
      '#FF3300',
      '#FF3333',
      '#FF3366',
      '#FF3399',
      '#FF33CC',
      '#FF33FF',
      '#FF6600',
      '#FF6633',
      '#FF9900',
      '#FF9933',
      '#FFCC00',
      '#FFCC33'
    ]
    function useColors() {
      if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
        return true
      }
      if (
        typeof navigator !== 'undefined' &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ) {
        return false
      }
      return (
        (typeof document !== 'undefined' &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window !== 'undefined' &&
          window.console &&
          (window.console.firebug || (window.console.exception && window.console.table))) ||
        (typeof navigator !== 'undefined' &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) ||
        (typeof navigator !== 'undefined' &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
      )
    }
    t.formatters.j = function(e) {
      try {
        return JSON.stringify(e)
      } catch (e) {
        return '[UnexpectedJSONParseError]: ' + e.message
      }
    }
    function formatArgs(e) {
      var r = this.useColors
      e[0] =
        (r ? '%c' : '') +
        this.namespace +
        (r ? ' %c' : ' ') +
        e[0] +
        (r ? '%c ' : ' ') +
        '+' +
        t.humanize(this.diff)
      if (!r) return
      var n = 'color: ' + this.color
      e.splice(1, 0, n, 'color: inherit')
      var i = 0
      var s = 0
      e[0].replace(/%[a-zA-Z%]/g, function(e) {
        if ('%%' === e) return
        i++
        if ('%c' === e) {
          s = i
        }
      })
      e.splice(s, 0, n)
    }
    function log() {
      return (
        'object' === typeof console &&
        console.log &&
        Function.prototype.apply.call(console.log, console, arguments)
      )
    }
    function save(e) {
      try {
        if (null == e) {
          t.storage.removeItem('debug')
        } else {
          t.storage.debug = e
        }
      } catch (e) {}
    }
    function load() {
      var e
      try {
        e = t.storage.debug
      } catch (e) {}
      if (!e && typeof process !== 'undefined' && 'env' in process) {
        e = process.env.DEBUG
      }
      return e
    }
    t.enable(load())
    function localstorage() {
      try {
        return window.localStorage
      } catch (e) {}
    }
  },
  796: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e
    }
    var n = _interopDefault(r(2))
    function getUserAgent() {
      try {
        return `Node.js/${process.version.substr(1)} (${n()}; ${process.arch})`
      } catch (e) {
        if (/wmic os get Caption/.test(e.message)) {
          return 'Windows <version undetectable>'
        }
        throw e
      }
    }
    t.getUserAgent = getUserAgent
  },
  812: function(e) {
    e.exports = function isBuffer(e) {
      return (
        e != null &&
        e.constructor != null &&
        typeof e.constructor.isBuffer === 'function' &&
        e.constructor.isBuffer(e)
      )
    }
  },
  813: function(e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    async function auth(e) {
      const t = e.split(/\./).length === 3 ? 'app' : /^v\d+\./.test(e) ? 'installation' : 'oauth'
      return { type: 'token', token: e, tokenType: t }
    }
    function withAuthorizationPrefix(e) {
      if (e.split(/\./).length === 3) {
        return `bearer ${e}`
      }
      return `token ${e}`
    }
    async function hook(e, t, r, n) {
      const i = t.endpoint.merge(r, n)
      i.headers.authorization = withAuthorizationPrefix(e)
      return t(i)
    }
    const r = function createTokenAuth(e) {
      if (!e) {
        throw new Error('[@octokit/auth-token] No token passed to createTokenAuth')
      }
      if (typeof e !== 'string') {
        throw new Error('[@octokit/auth-token] Token passed to createTokenAuth is not a string')
      }
      e = e.replace(/^(token|bearer) +/i, '')
      return Object.assign(auth.bind(null, e), { hook: hook.bind(null, e) })
    }
    t.createTokenAuth = r
  },
  814: function(e, t, r) {
    e.exports = which
    which.sync = whichSync
    var n =
      process.platform === 'win32' ||
      process.env.OSTYPE === 'cygwin' ||
      process.env.OSTYPE === 'msys'
    var i = r(622)
    var s = n ? ';' : ':'
    var o = r(742)
    function getNotFoundError(e) {
      var t = new Error('not found: ' + e)
      t.code = 'ENOENT'
      return t
    }
    function getPathInfo(e, t) {
      var r = t.colon || s
      var i = t.path || process.env.PATH || ''
      var o = ['']
      i = i.split(r)
      var a = ''
      if (n) {
        i.unshift(process.cwd())
        a = t.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM'
        o = a.split(r)
        if (e.indexOf('.') !== -1 && o[0] !== '') o.unshift('')
      }
      if (e.match(/\//) || (n && e.match(/\\/))) i = ['']
      return { env: i, ext: o, extExe: a }
    }
    function which(e, t, r) {
      if (typeof t === 'function') {
        r = t
        t = {}
      }
      var n = getPathInfo(e, t)
      var s = n.env
      var a = n.ext
      var u = n.extExe
      var p = []
      ;(function F(n, c) {
        if (n === c) {
          if (t.all && p.length) return r(null, p)
          else return r(getNotFoundError(e))
        }
        var d = s[n]
        if (d.charAt(0) === '"' && d.slice(-1) === '"') d = d.slice(1, -1)
        var l = i.join(d, e)
        if (!d && /^\.[\\\/]/.test(e)) {
          l = e.slice(0, 2) + l
        }
        ;(function E(e, i) {
          if (e === i) return F(n + 1, c)
          var s = a[e]
          o(l + s, { pathExt: u }, function(n, o) {
            if (!n && o) {
              if (t.all) p.push(l + s)
              else return r(null, l + s)
            }
            return E(e + 1, i)
          })
        })(0, a.length)
      })(0, s.length)
    }
    function whichSync(e, t) {
      t = t || {}
      var r = getPathInfo(e, t)
      var n = r.env
      var s = r.ext
      var a = r.extExe
      var u = []
      for (var p = 0, c = n.length; p < c; p++) {
        var d = n[p]
        if (d.charAt(0) === '"' && d.slice(-1) === '"') d = d.slice(1, -1)
        var l = i.join(d, e)
        if (!d && /^\.[\\\/]/.test(e)) {
          l = e.slice(0, 2) + l
        }
        for (var m = 0, g = s.length; m < g; m++) {
          var h = l + s[m]
          var y
          try {
            y = o.sync(h, { pathExt: a })
            if (y) {
              if (t.all) u.push(h)
              else return h
            }
          } catch (e) {}
        }
      }
      if (t.all && u.length) return u
      if (t.nothrow) return null
      throw getNotFoundError(e)
    }
  },
  816: function(e) {
    'use strict'
    e.exports = /^#!.*/
  },
  818: function(e, t, r) {
    e.exports = isexe
    isexe.sync = sync
    var n = r(747)
    function checkPathExt(e, t) {
      var r = t.pathExt !== undefined ? t.pathExt : process.env.PATHEXT
      if (!r) {
        return true
      }
      r = r.split(';')
      if (r.indexOf('') !== -1) {
        return true
      }
      for (var n = 0; n < r.length; n++) {
        var i = r[n].toLowerCase()
        if (i && e.substr(-i.length).toLowerCase() === i) {
          return true
        }
      }
      return false
    }
    function checkStat(e, t, r) {
      if (!e.isSymbolicLink() && !e.isFile()) {
        return false
      }
      return checkPathExt(t, r)
    }
    function isexe(e, t, r) {
      n.stat(e, function(n, i) {
        r(n, n ? false : checkStat(i, e, t))
      })
    }
    function sync(e, t) {
      return checkStat(n.statSync(e), e, t)
    }
  },
  825: function(e) {
    'use strict'
    e.exports = function spread(e) {
      return function wrap(t) {
        return e.apply(null, t)
      }
    }
  },
  826: function(e) {
    'use strict'
    function Cancel(e) {
      this.message = e
    }
    Cancel.prototype.toString = function toString() {
      return 'Cancel' + (this.message ? ': ' + this.message : '')
    }
    Cancel.prototype.__CANCEL__ = true
    e.exports = Cancel
  },
  835: function(e) {
    e.exports = require('url')
  },
  842: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    var n = r(692)
    var i = {
      actions: {
        cancelWorkflowRun: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            run_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/runs/:run_id/cancel'
        },
        createOrUpdateSecretForRepo: {
          method: 'PUT',
          params: {
            encrypted_value: { type: 'string' },
            key_id: { type: 'string' },
            name: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/secrets/:name'
        },
        createRegistrationToken: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/runners/registration-token'
        },
        createRemoveToken: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/runners/remove-token'
        },
        deleteArtifact: {
          method: 'DELETE',
          params: {
            artifact_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/artifacts/:artifact_id'
        },
        deleteSecretFromRepo: {
          method: 'DELETE',
          params: {
            name: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/secrets/:name'
        },
        downloadArtifact: {
          method: 'GET',
          params: {
            archive_format: { required: true, type: 'string' },
            artifact_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/artifacts/:artifact_id/:archive_format'
        },
        getArtifact: {
          method: 'GET',
          params: {
            artifact_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/artifacts/:artifact_id'
        },
        getPublicKey: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/secrets/public-key'
        },
        getSecret: {
          method: 'GET',
          params: {
            name: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/secrets/:name'
        },
        getSelfHostedRunner: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            runner_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/runners/:runner_id'
        },
        getWorkflow: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            workflow_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/workflows/:workflow_id'
        },
        getWorkflowJob: {
          method: 'GET',
          params: {
            job_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/jobs/:job_id'
        },
        getWorkflowRun: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            run_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/runs/:run_id'
        },
        listDownloadsForSelfHostedRunnerApplication: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/runners/downloads'
        },
        listJobsForWorkflowRun: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            run_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/runs/:run_id/jobs'
        },
        listRepoWorkflowRuns: {
          method: 'GET',
          params: {
            actor: { type: 'string' },
            branch: { type: 'string' },
            event: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            status: { enum: ['completed', 'status', 'conclusion'], type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/runs'
        },
        listRepoWorkflows: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/workflows'
        },
        listSecretsForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/secrets'
        },
        listSelfHostedRunnersForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/runners'
        },
        listWorkflowJobLogs: {
          method: 'GET',
          params: {
            job_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/jobs/:job_id/logs'
        },
        listWorkflowRunArtifacts: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            run_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/runs/:run_id/artifacts'
        },
        listWorkflowRunLogs: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            run_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/runs/:run_id/logs'
        },
        listWorkflowRuns: {
          method: 'GET',
          params: {
            actor: { type: 'string' },
            branch: { type: 'string' },
            event: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            status: { enum: ['completed', 'status', 'conclusion'], type: 'string' },
            workflow_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/workflows/:workflow_id/runs'
        },
        reRunWorkflow: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            run_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/runs/:run_id/rerun'
        },
        removeSelfHostedRunner: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            runner_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/runners/:runner_id'
        }
      },
      activity: {
        checkStarringRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/user/starred/:owner/:repo'
        },
        deleteRepoSubscription: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/subscription'
        },
        deleteThreadSubscription: {
          method: 'DELETE',
          params: { thread_id: { required: true, type: 'integer' } },
          url: '/notifications/threads/:thread_id/subscription'
        },
        getRepoSubscription: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/subscription'
        },
        getThread: {
          method: 'GET',
          params: { thread_id: { required: true, type: 'integer' } },
          url: '/notifications/threads/:thread_id'
        },
        getThreadSubscription: {
          method: 'GET',
          params: { thread_id: { required: true, type: 'integer' } },
          url: '/notifications/threads/:thread_id/subscription'
        },
        listEventsForOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/events/orgs/:org'
        },
        listEventsForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/events'
        },
        listFeeds: { method: 'GET', params: {}, url: '/feeds' },
        listNotifications: {
          method: 'GET',
          params: {
            all: { type: 'boolean' },
            before: { type: 'string' },
            page: { type: 'integer' },
            participating: { type: 'boolean' },
            per_page: { type: 'integer' },
            since: { type: 'string' }
          },
          url: '/notifications'
        },
        listNotificationsForRepo: {
          method: 'GET',
          params: {
            all: { type: 'boolean' },
            before: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            participating: { type: 'boolean' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            since: { type: 'string' }
          },
          url: '/repos/:owner/:repo/notifications'
        },
        listPublicEvents: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/events'
        },
        listPublicEventsForOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/events'
        },
        listPublicEventsForRepoNetwork: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/networks/:owner/:repo/events'
        },
        listPublicEventsForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/events/public'
        },
        listReceivedEventsForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/received_events'
        },
        listReceivedPublicEventsForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/received_events/public'
        },
        listRepoEvents: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/events'
        },
        listReposStarredByAuthenticatedUser: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            sort: { enum: ['created', 'updated'], type: 'string' }
          },
          url: '/user/starred'
        },
        listReposStarredByUser: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            sort: { enum: ['created', 'updated'], type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/starred'
        },
        listReposWatchedByUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/subscriptions'
        },
        listStargazersForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/stargazers'
        },
        listWatchedReposForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/subscriptions'
        },
        listWatchersForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/subscribers'
        },
        markAsRead: {
          method: 'PUT',
          params: { last_read_at: { type: 'string' } },
          url: '/notifications'
        },
        markNotificationsAsReadForRepo: {
          method: 'PUT',
          params: {
            last_read_at: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/notifications'
        },
        markThreadAsRead: {
          method: 'PATCH',
          params: { thread_id: { required: true, type: 'integer' } },
          url: '/notifications/threads/:thread_id'
        },
        setRepoSubscription: {
          method: 'PUT',
          params: {
            ignored: { type: 'boolean' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            subscribed: { type: 'boolean' }
          },
          url: '/repos/:owner/:repo/subscription'
        },
        setThreadSubscription: {
          method: 'PUT',
          params: { ignored: { type: 'boolean' }, thread_id: { required: true, type: 'integer' } },
          url: '/notifications/threads/:thread_id/subscription'
        },
        starRepo: {
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/user/starred/:owner/:repo'
        },
        unstarRepo: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/user/starred/:owner/:repo'
        }
      },
      apps: {
        addRepoToInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'PUT',
          params: {
            installation_id: { required: true, type: 'integer' },
            repository_id: { required: true, type: 'integer' }
          },
          url: '/user/installations/:installation_id/repositories/:repository_id'
        },
        checkAccountIsAssociatedWithAny: {
          method: 'GET',
          params: { account_id: { required: true, type: 'integer' } },
          url: '/marketplace_listing/accounts/:account_id'
        },
        checkAccountIsAssociatedWithAnyStubbed: {
          method: 'GET',
          params: { account_id: { required: true, type: 'integer' } },
          url: '/marketplace_listing/stubbed/accounts/:account_id'
        },
        checkAuthorization: {
          deprecated:
            'octokit.apps.checkAuthorization() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#check-an-authorization',
          method: 'GET',
          params: {
            access_token: { required: true, type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/tokens/:access_token'
        },
        checkToken: {
          headers: { accept: 'application/vnd.github.doctor-strange-preview+json' },
          method: 'POST',
          params: {
            access_token: { type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/token'
        },
        createContentAttachment: {
          headers: { accept: 'application/vnd.github.corsair-preview+json' },
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            content_reference_id: { required: true, type: 'integer' },
            title: { required: true, type: 'string' }
          },
          url: '/content_references/:content_reference_id/attachments'
        },
        createFromManifest: {
          headers: { accept: 'application/vnd.github.fury-preview+json' },
          method: 'POST',
          params: { code: { required: true, type: 'string' } },
          url: '/app-manifests/:code/conversions'
        },
        createInstallationToken: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'POST',
          params: {
            installation_id: { required: true, type: 'integer' },
            permissions: { type: 'object' },
            repository_ids: { type: 'integer[]' }
          },
          url: '/app/installations/:installation_id/access_tokens'
        },
        deleteAuthorization: {
          headers: { accept: 'application/vnd.github.doctor-strange-preview+json' },
          method: 'DELETE',
          params: {
            access_token: { type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/grant'
        },
        deleteInstallation: {
          headers: {
            accept:
              'application/vnd.github.gambit-preview+json,application/vnd.github.machine-man-preview+json'
          },
          method: 'DELETE',
          params: { installation_id: { required: true, type: 'integer' } },
          url: '/app/installations/:installation_id'
        },
        deleteToken: {
          headers: { accept: 'application/vnd.github.doctor-strange-preview+json' },
          method: 'DELETE',
          params: {
            access_token: { type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/token'
        },
        findOrgInstallation: {
          deprecated:
            'octokit.apps.findOrgInstallation() has been renamed to octokit.apps.getOrgInstallation() (2019-04-10)',
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { org: { required: true, type: 'string' } },
          url: '/orgs/:org/installation'
        },
        findRepoInstallation: {
          deprecated:
            'octokit.apps.findRepoInstallation() has been renamed to octokit.apps.getRepoInstallation() (2019-04-10)',
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/installation'
        },
        findUserInstallation: {
          deprecated:
            'octokit.apps.findUserInstallation() has been renamed to octokit.apps.getUserInstallation() (2019-04-10)',
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { username: { required: true, type: 'string' } },
          url: '/users/:username/installation'
        },
        getAuthenticated: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: {},
          url: '/app'
        },
        getBySlug: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { app_slug: { required: true, type: 'string' } },
          url: '/apps/:app_slug'
        },
        getInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { installation_id: { required: true, type: 'integer' } },
          url: '/app/installations/:installation_id'
        },
        getOrgInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { org: { required: true, type: 'string' } },
          url: '/orgs/:org/installation'
        },
        getRepoInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/installation'
        },
        getUserInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { username: { required: true, type: 'string' } },
          url: '/users/:username/installation'
        },
        listAccountsUserOrOrgOnPlan: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            plan_id: { required: true, type: 'integer' },
            sort: { enum: ['created', 'updated'], type: 'string' }
          },
          url: '/marketplace_listing/plans/:plan_id/accounts'
        },
        listAccountsUserOrOrgOnPlanStubbed: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            plan_id: { required: true, type: 'integer' },
            sort: { enum: ['created', 'updated'], type: 'string' }
          },
          url: '/marketplace_listing/stubbed/plans/:plan_id/accounts'
        },
        listInstallationReposForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: {
            installation_id: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/user/installations/:installation_id/repositories'
        },
        listInstallations: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/app/installations'
        },
        listInstallationsForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/installations'
        },
        listMarketplacePurchasesForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/marketplace_purchases'
        },
        listMarketplacePurchasesForAuthenticatedUserStubbed: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/marketplace_purchases/stubbed'
        },
        listPlans: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/marketplace_listing/plans'
        },
        listPlansStubbed: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/marketplace_listing/stubbed/plans'
        },
        listRepos: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/installation/repositories'
        },
        removeRepoFromInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'DELETE',
          params: {
            installation_id: { required: true, type: 'integer' },
            repository_id: { required: true, type: 'integer' }
          },
          url: '/user/installations/:installation_id/repositories/:repository_id'
        },
        resetAuthorization: {
          deprecated:
            'octokit.apps.resetAuthorization() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#reset-an-authorization',
          method: 'POST',
          params: {
            access_token: { required: true, type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/tokens/:access_token'
        },
        resetToken: {
          headers: { accept: 'application/vnd.github.doctor-strange-preview+json' },
          method: 'PATCH',
          params: {
            access_token: { type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/token'
        },
        revokeAuthorizationForApplication: {
          deprecated:
            'octokit.apps.revokeAuthorizationForApplication() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#revoke-an-authorization-for-an-application',
          method: 'DELETE',
          params: {
            access_token: { required: true, type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/tokens/:access_token'
        },
        revokeGrantForApplication: {
          deprecated:
            'octokit.apps.revokeGrantForApplication() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#revoke-a-grant-for-an-application',
          method: 'DELETE',
          params: {
            access_token: { required: true, type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/grants/:access_token'
        },
        revokeInstallationToken: {
          headers: { accept: 'application/vnd.github.gambit-preview+json' },
          method: 'DELETE',
          params: {},
          url: '/installation/token'
        }
      },
      checks: {
        create: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'POST',
          params: {
            actions: { type: 'object[]' },
            'actions[].description': { required: true, type: 'string' },
            'actions[].identifier': { required: true, type: 'string' },
            'actions[].label': { required: true, type: 'string' },
            completed_at: { type: 'string' },
            conclusion: {
              enum: ['success', 'failure', 'neutral', 'cancelled', 'timed_out', 'action_required'],
              type: 'string'
            },
            details_url: { type: 'string' },
            external_id: { type: 'string' },
            head_sha: { required: true, type: 'string' },
            name: { required: true, type: 'string' },
            output: { type: 'object' },
            'output.annotations': { type: 'object[]' },
            'output.annotations[].annotation_level': {
              enum: ['notice', 'warning', 'failure'],
              required: true,
              type: 'string'
            },
            'output.annotations[].end_column': { type: 'integer' },
            'output.annotations[].end_line': { required: true, type: 'integer' },
            'output.annotations[].message': { required: true, type: 'string' },
            'output.annotations[].path': { required: true, type: 'string' },
            'output.annotations[].raw_details': { type: 'string' },
            'output.annotations[].start_column': { type: 'integer' },
            'output.annotations[].start_line': { required: true, type: 'integer' },
            'output.annotations[].title': { type: 'string' },
            'output.images': { type: 'object[]' },
            'output.images[].alt': { required: true, type: 'string' },
            'output.images[].caption': { type: 'string' },
            'output.images[].image_url': { required: true, type: 'string' },
            'output.summary': { required: true, type: 'string' },
            'output.text': { type: 'string' },
            'output.title': { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            started_at: { type: 'string' },
            status: { enum: ['queued', 'in_progress', 'completed'], type: 'string' }
          },
          url: '/repos/:owner/:repo/check-runs'
        },
        createSuite: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'POST',
          params: {
            head_sha: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/check-suites'
        },
        get: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'GET',
          params: {
            check_run_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/check-runs/:check_run_id'
        },
        getSuite: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'GET',
          params: {
            check_suite_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/check-suites/:check_suite_id'
        },
        listAnnotations: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'GET',
          params: {
            check_run_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/check-runs/:check_run_id/annotations'
        },
        listForRef: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'GET',
          params: {
            check_name: { type: 'string' },
            filter: { enum: ['latest', 'all'], type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            status: { enum: ['queued', 'in_progress', 'completed'], type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:ref/check-runs'
        },
        listForSuite: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'GET',
          params: {
            check_name: { type: 'string' },
            check_suite_id: { required: true, type: 'integer' },
            filter: { enum: ['latest', 'all'], type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            status: { enum: ['queued', 'in_progress', 'completed'], type: 'string' }
          },
          url: '/repos/:owner/:repo/check-suites/:check_suite_id/check-runs'
        },
        listSuitesForRef: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'GET',
          params: {
            app_id: { type: 'integer' },
            check_name: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:ref/check-suites'
        },
        rerequestSuite: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'POST',
          params: {
            check_suite_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/check-suites/:check_suite_id/rerequest'
        },
        setSuitesPreferences: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'PATCH',
          params: {
            auto_trigger_checks: { type: 'object[]' },
            'auto_trigger_checks[].app_id': { required: true, type: 'integer' },
            'auto_trigger_checks[].setting': { required: true, type: 'boolean' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/check-suites/preferences'
        },
        update: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'PATCH',
          params: {
            actions: { type: 'object[]' },
            'actions[].description': { required: true, type: 'string' },
            'actions[].identifier': { required: true, type: 'string' },
            'actions[].label': { required: true, type: 'string' },
            check_run_id: { required: true, type: 'integer' },
            completed_at: { type: 'string' },
            conclusion: {
              enum: ['success', 'failure', 'neutral', 'cancelled', 'timed_out', 'action_required'],
              type: 'string'
            },
            details_url: { type: 'string' },
            external_id: { type: 'string' },
            name: { type: 'string' },
            output: { type: 'object' },
            'output.annotations': { type: 'object[]' },
            'output.annotations[].annotation_level': {
              enum: ['notice', 'warning', 'failure'],
              required: true,
              type: 'string'
            },
            'output.annotations[].end_column': { type: 'integer' },
            'output.annotations[].end_line': { required: true, type: 'integer' },
            'output.annotations[].message': { required: true, type: 'string' },
            'output.annotations[].path': { required: true, type: 'string' },
            'output.annotations[].raw_details': { type: 'string' },
            'output.annotations[].start_column': { type: 'integer' },
            'output.annotations[].start_line': { required: true, type: 'integer' },
            'output.annotations[].title': { type: 'string' },
            'output.images': { type: 'object[]' },
            'output.images[].alt': { required: true, type: 'string' },
            'output.images[].caption': { type: 'string' },
            'output.images[].image_url': { required: true, type: 'string' },
            'output.summary': { required: true, type: 'string' },
            'output.text': { type: 'string' },
            'output.title': { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            started_at: { type: 'string' },
            status: { enum: ['queued', 'in_progress', 'completed'], type: 'string' }
          },
          url: '/repos/:owner/:repo/check-runs/:check_run_id'
        }
      },
      codesOfConduct: {
        getConductCode: {
          headers: { accept: 'application/vnd.github.scarlet-witch-preview+json' },
          method: 'GET',
          params: { key: { required: true, type: 'string' } },
          url: '/codes_of_conduct/:key'
        },
        getForRepo: {
          headers: { accept: 'application/vnd.github.scarlet-witch-preview+json' },
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/community/code_of_conduct'
        },
        listConductCodes: {
          headers: { accept: 'application/vnd.github.scarlet-witch-preview+json' },
          method: 'GET',
          params: {},
          url: '/codes_of_conduct'
        }
      },
      emojis: { get: { method: 'GET', params: {}, url: '/emojis' } },
      gists: {
        checkIsStarred: {
          method: 'GET',
          params: { gist_id: { required: true, type: 'string' } },
          url: '/gists/:gist_id/star'
        },
        create: {
          method: 'POST',
          params: {
            description: { type: 'string' },
            files: { required: true, type: 'object' },
            'files.content': { type: 'string' },
            public: { type: 'boolean' }
          },
          url: '/gists'
        },
        createComment: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            gist_id: { required: true, type: 'string' }
          },
          url: '/gists/:gist_id/comments'
        },
        delete: {
          method: 'DELETE',
          params: { gist_id: { required: true, type: 'string' } },
          url: '/gists/:gist_id'
        },
        deleteComment: {
          method: 'DELETE',
          params: {
            comment_id: { required: true, type: 'integer' },
            gist_id: { required: true, type: 'string' }
          },
          url: '/gists/:gist_id/comments/:comment_id'
        },
        fork: {
          method: 'POST',
          params: { gist_id: { required: true, type: 'string' } },
          url: '/gists/:gist_id/forks'
        },
        get: {
          method: 'GET',
          params: { gist_id: { required: true, type: 'string' } },
          url: '/gists/:gist_id'
        },
        getComment: {
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' },
            gist_id: { required: true, type: 'string' }
          },
          url: '/gists/:gist_id/comments/:comment_id'
        },
        getRevision: {
          method: 'GET',
          params: {
            gist_id: { required: true, type: 'string' },
            sha: { required: true, type: 'string' }
          },
          url: '/gists/:gist_id/:sha'
        },
        list: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'string' }
          },
          url: '/gists'
        },
        listComments: {
          method: 'GET',
          params: {
            gist_id: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/gists/:gist_id/comments'
        },
        listCommits: {
          method: 'GET',
          params: {
            gist_id: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/gists/:gist_id/commits'
        },
        listForks: {
          method: 'GET',
          params: {
            gist_id: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/gists/:gist_id/forks'
        },
        listPublic: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'string' }
          },
          url: '/gists/public'
        },
        listPublicForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/gists'
        },
        listStarred: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'string' }
          },
          url: '/gists/starred'
        },
        star: {
          method: 'PUT',
          params: { gist_id: { required: true, type: 'string' } },
          url: '/gists/:gist_id/star'
        },
        unstar: {
          method: 'DELETE',
          params: { gist_id: { required: true, type: 'string' } },
          url: '/gists/:gist_id/star'
        },
        update: {
          method: 'PATCH',
          params: {
            description: { type: 'string' },
            files: { type: 'object' },
            'files.content': { type: 'string' },
            'files.filename': { type: 'string' },
            gist_id: { required: true, type: 'string' }
          },
          url: '/gists/:gist_id'
        },
        updateComment: {
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' },
            comment_id: { required: true, type: 'integer' },
            gist_id: { required: true, type: 'string' }
          },
          url: '/gists/:gist_id/comments/:comment_id'
        }
      },
      git: {
        createBlob: {
          method: 'POST',
          params: {
            content: { required: true, type: 'string' },
            encoding: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/blobs'
        },
        createCommit: {
          method: 'POST',
          params: {
            author: { type: 'object' },
            'author.date': { type: 'string' },
            'author.email': { type: 'string' },
            'author.name': { type: 'string' },
            committer: { type: 'object' },
            'committer.date': { type: 'string' },
            'committer.email': { type: 'string' },
            'committer.name': { type: 'string' },
            message: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            parents: { required: true, type: 'string[]' },
            repo: { required: true, type: 'string' },
            signature: { type: 'string' },
            tree: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/commits'
        },
        createRef: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/refs'
        },
        createTag: {
          method: 'POST',
          params: {
            message: { required: true, type: 'string' },
            object: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            tag: { required: true, type: 'string' },
            tagger: { type: 'object' },
            'tagger.date': { type: 'string' },
            'tagger.email': { type: 'string' },
            'tagger.name': { type: 'string' },
            type: { enum: ['commit', 'tree', 'blob'], required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/tags'
        },
        createTree: {
          method: 'POST',
          params: {
            base_tree: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            tree: { required: true, type: 'object[]' },
            'tree[].content': { type: 'string' },
            'tree[].mode': {
              enum: ['100644', '100755', '040000', '160000', '120000'],
              type: 'string'
            },
            'tree[].path': { type: 'string' },
            'tree[].sha': { allowNull: true, type: 'string' },
            'tree[].type': { enum: ['blob', 'tree', 'commit'], type: 'string' }
          },
          url: '/repos/:owner/:repo/git/trees'
        },
        deleteRef: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/refs/:ref'
        },
        getBlob: {
          method: 'GET',
          params: {
            file_sha: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/blobs/:file_sha'
        },
        getCommit: {
          method: 'GET',
          params: {
            commit_sha: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/commits/:commit_sha'
        },
        getRef: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/ref/:ref'
        },
        getTag: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            tag_sha: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/tags/:tag_sha'
        },
        getTree: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            recursive: { enum: ['1'], type: 'integer' },
            repo: { required: true, type: 'string' },
            tree_sha: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/trees/:tree_sha'
        },
        listMatchingRefs: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/matching-refs/:ref'
        },
        listRefs: {
          method: 'GET',
          params: {
            namespace: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/refs/:namespace'
        },
        updateRef: {
          method: 'PATCH',
          params: {
            force: { type: 'boolean' },
            owner: { required: true, type: 'string' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/refs/:ref'
        }
      },
      gitignore: {
        getTemplate: {
          method: 'GET',
          params: { name: { required: true, type: 'string' } },
          url: '/gitignore/templates/:name'
        },
        listTemplates: { method: 'GET', params: {}, url: '/gitignore/templates' }
      },
      interactions: {
        addOrUpdateRestrictionsForOrg: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' },
          method: 'PUT',
          params: {
            limit: {
              enum: ['existing_users', 'contributors_only', 'collaborators_only'],
              required: true,
              type: 'string'
            },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/interaction-limits'
        },
        addOrUpdateRestrictionsForRepo: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' },
          method: 'PUT',
          params: {
            limit: {
              enum: ['existing_users', 'contributors_only', 'collaborators_only'],
              required: true,
              type: 'string'
            },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/interaction-limits'
        },
        getRestrictionsForOrg: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' },
          method: 'GET',
          params: { org: { required: true, type: 'string' } },
          url: '/orgs/:org/interaction-limits'
        },
        getRestrictionsForRepo: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' },
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/interaction-limits'
        },
        removeRestrictionsForOrg: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' },
          method: 'DELETE',
          params: { org: { required: true, type: 'string' } },
          url: '/orgs/:org/interaction-limits'
        },
        removeRestrictionsForRepo: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' },
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/interaction-limits'
        }
      },
      issues: {
        addAssignees: {
          method: 'POST',
          params: {
            assignees: { type: 'string[]' },
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/assignees'
        },
        addLabels: {
          method: 'POST',
          params: {
            issue_number: { required: true, type: 'integer' },
            labels: { required: true, type: 'string[]' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/labels'
        },
        checkAssignee: {
          method: 'GET',
          params: {
            assignee: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/assignees/:assignee'
        },
        create: {
          method: 'POST',
          params: {
            assignee: { type: 'string' },
            assignees: { type: 'string[]' },
            body: { type: 'string' },
            labels: { type: 'string[]' },
            milestone: { type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            title: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues'
        },
        createComment: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/comments'
        },
        createLabel: {
          method: 'POST',
          params: {
            color: { required: true, type: 'string' },
            description: { type: 'string' },
            name: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/labels'
        },
        createMilestone: {
          method: 'POST',
          params: {
            description: { type: 'string' },
            due_on: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            state: { enum: ['open', 'closed'], type: 'string' },
            title: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/milestones'
        },
        deleteComment: {
          method: 'DELETE',
          params: {
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/comments/:comment_id'
        },
        deleteLabel: {
          method: 'DELETE',
          params: {
            name: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/labels/:name'
        },
        deleteMilestone: {
          method: 'DELETE',
          params: {
            milestone_number: { required: true, type: 'integer' },
            number: { alias: 'milestone_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/milestones/:milestone_number'
        },
        get: {
          method: 'GET',
          params: {
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number'
        },
        getComment: {
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/comments/:comment_id'
        },
        getEvent: {
          method: 'GET',
          params: {
            event_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/events/:event_id'
        },
        getLabel: {
          method: 'GET',
          params: {
            name: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/labels/:name'
        },
        getMilestone: {
          method: 'GET',
          params: {
            milestone_number: { required: true, type: 'integer' },
            number: { alias: 'milestone_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/milestones/:milestone_number'
        },
        list: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            filter: {
              enum: ['assigned', 'created', 'mentioned', 'subscribed', 'all'],
              type: 'string'
            },
            labels: { type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'string' },
            sort: { enum: ['created', 'updated', 'comments'], type: 'string' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' }
          },
          url: '/issues'
        },
        listAssignees: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/assignees'
        },
        listComments: {
          method: 'GET',
          params: {
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            since: { type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/comments'
        },
        listCommentsForRepo: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            since: { type: 'string' },
            sort: { enum: ['created', 'updated'], type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/comments'
        },
        listEvents: {
          method: 'GET',
          params: {
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/events'
        },
        listEventsForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/events'
        },
        listEventsForTimeline: {
          headers: { accept: 'application/vnd.github.mockingbird-preview+json' },
          method: 'GET',
          params: {
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/timeline'
        },
        listForAuthenticatedUser: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            filter: {
              enum: ['assigned', 'created', 'mentioned', 'subscribed', 'all'],
              type: 'string'
            },
            labels: { type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'string' },
            sort: { enum: ['created', 'updated', 'comments'], type: 'string' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' }
          },
          url: '/user/issues'
        },
        listForOrg: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            filter: {
              enum: ['assigned', 'created', 'mentioned', 'subscribed', 'all'],
              type: 'string'
            },
            labels: { type: 'string' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'string' },
            sort: { enum: ['created', 'updated', 'comments'], type: 'string' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' }
          },
          url: '/orgs/:org/issues'
        },
        listForRepo: {
          method: 'GET',
          params: {
            assignee: { type: 'string' },
            creator: { type: 'string' },
            direction: { enum: ['asc', 'desc'], type: 'string' },
            labels: { type: 'string' },
            mentioned: { type: 'string' },
            milestone: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            since: { type: 'string' },
            sort: { enum: ['created', 'updated', 'comments'], type: 'string' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' }
          },
          url: '/repos/:owner/:repo/issues'
        },
        listLabelsForMilestone: {
          method: 'GET',
          params: {
            milestone_number: { required: true, type: 'integer' },
            number: { alias: 'milestone_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/milestones/:milestone_number/labels'
        },
        listLabelsForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/labels'
        },
        listLabelsOnIssue: {
          method: 'GET',
          params: {
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/labels'
        },
        listMilestonesForRepo: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            sort: { enum: ['due_on', 'completeness'], type: 'string' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' }
          },
          url: '/repos/:owner/:repo/milestones'
        },
        lock: {
          method: 'PUT',
          params: {
            issue_number: { required: true, type: 'integer' },
            lock_reason: { enum: ['off-topic', 'too heated', 'resolved', 'spam'], type: 'string' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/lock'
        },
        removeAssignees: {
          method: 'DELETE',
          params: {
            assignees: { type: 'string[]' },
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/assignees'
        },
        removeLabel: {
          method: 'DELETE',
          params: {
            issue_number: { required: true, type: 'integer' },
            name: { required: true, type: 'string' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/labels/:name'
        },
        removeLabels: {
          method: 'DELETE',
          params: {
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/labels'
        },
        replaceLabels: {
          method: 'PUT',
          params: {
            issue_number: { required: true, type: 'integer' },
            labels: { type: 'string[]' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/labels'
        },
        unlock: {
          method: 'DELETE',
          params: {
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/lock'
        },
        update: {
          method: 'PATCH',
          params: {
            assignee: { type: 'string' },
            assignees: { type: 'string[]' },
            body: { type: 'string' },
            issue_number: { required: true, type: 'integer' },
            labels: { type: 'string[]' },
            milestone: { allowNull: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            state: { enum: ['open', 'closed'], type: 'string' },
            title: { type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number'
        },
        updateComment: {
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' },
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/comments/:comment_id'
        },
        updateLabel: {
          method: 'PATCH',
          params: {
            color: { type: 'string' },
            current_name: { required: true, type: 'string' },
            description: { type: 'string' },
            name: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/labels/:current_name'
        },
        updateMilestone: {
          method: 'PATCH',
          params: {
            description: { type: 'string' },
            due_on: { type: 'string' },
            milestone_number: { required: true, type: 'integer' },
            number: { alias: 'milestone_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            state: { enum: ['open', 'closed'], type: 'string' },
            title: { type: 'string' }
          },
          url: '/repos/:owner/:repo/milestones/:milestone_number'
        }
      },
      licenses: {
        get: {
          method: 'GET',
          params: { license: { required: true, type: 'string' } },
          url: '/licenses/:license'
        },
        getForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/license'
        },
        list: {
          deprecated:
            'octokit.licenses.list() has been renamed to octokit.licenses.listCommonlyUsed() (2019-03-05)',
          method: 'GET',
          params: {},
          url: '/licenses'
        },
        listCommonlyUsed: { method: 'GET', params: {}, url: '/licenses' }
      },
      markdown: {
        render: {
          method: 'POST',
          params: {
            context: { type: 'string' },
            mode: { enum: ['markdown', 'gfm'], type: 'string' },
            text: { required: true, type: 'string' }
          },
          url: '/markdown'
        },
        renderRaw: {
          headers: { 'content-type': 'text/plain; charset=utf-8' },
          method: 'POST',
          params: { data: { mapTo: 'data', required: true, type: 'string' } },
          url: '/markdown/raw'
        }
      },
      meta: { get: { method: 'GET', params: {}, url: '/meta' } },
      migrations: {
        cancelImport: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/import'
        },
        deleteArchiveForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'DELETE',
          params: { migration_id: { required: true, type: 'integer' } },
          url: '/user/migrations/:migration_id/archive'
        },
        deleteArchiveForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'DELETE',
          params: {
            migration_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/migrations/:migration_id/archive'
        },
        downloadArchiveForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: {
            migration_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/migrations/:migration_id/archive'
        },
        getArchiveForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: { migration_id: { required: true, type: 'integer' } },
          url: '/user/migrations/:migration_id/archive'
        },
        getArchiveForOrg: {
          deprecated:
            'octokit.migrations.getArchiveForOrg() has been renamed to octokit.migrations.downloadArchiveForOrg() (2020-01-27)',
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: {
            migration_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/migrations/:migration_id/archive'
        },
        getCommitAuthors: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            since: { type: 'string' }
          },
          url: '/repos/:owner/:repo/import/authors'
        },
        getImportProgress: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/import'
        },
        getLargeFiles: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/import/large_files'
        },
        getStatusForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: { migration_id: { required: true, type: 'integer' } },
          url: '/user/migrations/:migration_id'
        },
        getStatusForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: {
            migration_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/migrations/:migration_id'
        },
        listForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/migrations'
        },
        listForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/migrations'
        },
        listReposForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: {
            migration_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/migrations/:migration_id/repositories'
        },
        listReposForUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: {
            migration_id: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/user/:migration_id/repositories'
        },
        mapCommitAuthor: {
          method: 'PATCH',
          params: {
            author_id: { required: true, type: 'integer' },
            email: { type: 'string' },
            name: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/import/authors/:author_id'
        },
        setLfsPreference: {
          method: 'PATCH',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            use_lfs: { enum: ['opt_in', 'opt_out'], required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/import/lfs'
        },
        startForAuthenticatedUser: {
          method: 'POST',
          params: {
            exclude_attachments: { type: 'boolean' },
            lock_repositories: { type: 'boolean' },
            repositories: { required: true, type: 'string[]' }
          },
          url: '/user/migrations'
        },
        startForOrg: {
          method: 'POST',
          params: {
            exclude_attachments: { type: 'boolean' },
            lock_repositories: { type: 'boolean' },
            org: { required: true, type: 'string' },
            repositories: { required: true, type: 'string[]' }
          },
          url: '/orgs/:org/migrations'
        },
        startImport: {
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            tfvc_project: { type: 'string' },
            vcs: { enum: ['subversion', 'git', 'mercurial', 'tfvc'], type: 'string' },
            vcs_password: { type: 'string' },
            vcs_url: { required: true, type: 'string' },
            vcs_username: { type: 'string' }
          },
          url: '/repos/:owner/:repo/import'
        },
        unlockRepoForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'DELETE',
          params: {
            migration_id: { required: true, type: 'integer' },
            repo_name: { required: true, type: 'string' }
          },
          url: '/user/migrations/:migration_id/repos/:repo_name/lock'
        },
        unlockRepoForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'DELETE',
          params: {
            migration_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            repo_name: { required: true, type: 'string' }
          },
          url: '/orgs/:org/migrations/:migration_id/repos/:repo_name/lock'
        },
        updateImport: {
          method: 'PATCH',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            vcs_password: { type: 'string' },
            vcs_username: { type: 'string' }
          },
          url: '/repos/:owner/:repo/import'
        }
      },
      oauthAuthorizations: {
        checkAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.checkAuthorization() has been renamed to octokit.apps.checkAuthorization() (2019-11-05)',
          method: 'GET',
          params: {
            access_token: { required: true, type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/tokens/:access_token'
        },
        createAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.createAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization',
          method: 'POST',
          params: {
            client_id: { type: 'string' },
            client_secret: { type: 'string' },
            fingerprint: { type: 'string' },
            note: { required: true, type: 'string' },
            note_url: { type: 'string' },
            scopes: { type: 'string[]' }
          },
          url: '/authorizations'
        },
        deleteAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.deleteAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#delete-an-authorization',
          method: 'DELETE',
          params: { authorization_id: { required: true, type: 'integer' } },
          url: '/authorizations/:authorization_id'
        },
        deleteGrant: {
          deprecated:
            'octokit.oauthAuthorizations.deleteGrant() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#delete-a-grant',
          method: 'DELETE',
          params: { grant_id: { required: true, type: 'integer' } },
          url: '/applications/grants/:grant_id'
        },
        getAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.getAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-a-single-authorization',
          method: 'GET',
          params: { authorization_id: { required: true, type: 'integer' } },
          url: '/authorizations/:authorization_id'
        },
        getGrant: {
          deprecated:
            'octokit.oauthAuthorizations.getGrant() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-a-single-grant',
          method: 'GET',
          params: { grant_id: { required: true, type: 'integer' } },
          url: '/applications/grants/:grant_id'
        },
        getOrCreateAuthorizationForApp: {
          deprecated:
            'octokit.oauthAuthorizations.getOrCreateAuthorizationForApp() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app',
          method: 'PUT',
          params: {
            client_id: { required: true, type: 'string' },
            client_secret: { required: true, type: 'string' },
            fingerprint: { type: 'string' },
            note: { type: 'string' },
            note_url: { type: 'string' },
            scopes: { type: 'string[]' }
          },
          url: '/authorizations/clients/:client_id'
        },
        getOrCreateAuthorizationForAppAndFingerprint: {
          deprecated:
            'octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint',
          method: 'PUT',
          params: {
            client_id: { required: true, type: 'string' },
            client_secret: { required: true, type: 'string' },
            fingerprint: { required: true, type: 'string' },
            note: { type: 'string' },
            note_url: { type: 'string' },
            scopes: { type: 'string[]' }
          },
          url: '/authorizations/clients/:client_id/:fingerprint'
        },
        getOrCreateAuthorizationForAppFingerprint: {
          deprecated:
            'octokit.oauthAuthorizations.getOrCreateAuthorizationForAppFingerprint() has been renamed to octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint() (2018-12-27)',
          method: 'PUT',
          params: {
            client_id: { required: true, type: 'string' },
            client_secret: { required: true, type: 'string' },
            fingerprint: { required: true, type: 'string' },
            note: { type: 'string' },
            note_url: { type: 'string' },
            scopes: { type: 'string[]' }
          },
          url: '/authorizations/clients/:client_id/:fingerprint'
        },
        listAuthorizations: {
          deprecated:
            'octokit.oauthAuthorizations.listAuthorizations() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#list-your-authorizations',
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/authorizations'
        },
        listGrants: {
          deprecated:
            'octokit.oauthAuthorizations.listGrants() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#list-your-grants',
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/applications/grants'
        },
        resetAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.resetAuthorization() has been renamed to octokit.apps.resetAuthorization() (2019-11-05)',
          method: 'POST',
          params: {
            access_token: { required: true, type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/tokens/:access_token'
        },
        revokeAuthorizationForApplication: {
          deprecated:
            'octokit.oauthAuthorizations.revokeAuthorizationForApplication() has been renamed to octokit.apps.revokeAuthorizationForApplication() (2019-11-05)',
          method: 'DELETE',
          params: {
            access_token: { required: true, type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/tokens/:access_token'
        },
        revokeGrantForApplication: {
          deprecated:
            'octokit.oauthAuthorizations.revokeGrantForApplication() has been renamed to octokit.apps.revokeGrantForApplication() (2019-11-05)',
          method: 'DELETE',
          params: {
            access_token: { required: true, type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/grants/:access_token'
        },
        updateAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.updateAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#update-an-existing-authorization',
          method: 'PATCH',
          params: {
            add_scopes: { type: 'string[]' },
            authorization_id: { required: true, type: 'integer' },
            fingerprint: { type: 'string' },
            note: { type: 'string' },
            note_url: { type: 'string' },
            remove_scopes: { type: 'string[]' },
            scopes: { type: 'string[]' }
          },
          url: '/authorizations/:authorization_id'
        }
      },
      orgs: {
        addOrUpdateMembership: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' },
            role: { enum: ['admin', 'member'], type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/memberships/:username'
        },
        blockUser: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/blocks/:username'
        },
        checkBlockedUser: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/blocks/:username'
        },
        checkMembership: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/members/:username'
        },
        checkPublicMembership: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/public_members/:username'
        },
        concealMembership: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/public_members/:username'
        },
        convertMemberToOutsideCollaborator: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/outside_collaborators/:username'
        },
        createHook: {
          method: 'POST',
          params: {
            active: { type: 'boolean' },
            config: { required: true, type: 'object' },
            'config.content_type': { type: 'string' },
            'config.insecure_ssl': { type: 'string' },
            'config.secret': { type: 'string' },
            'config.url': { required: true, type: 'string' },
            events: { type: 'string[]' },
            name: { required: true, type: 'string' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/hooks'
        },
        createInvitation: {
          method: 'POST',
          params: {
            email: { type: 'string' },
            invitee_id: { type: 'integer' },
            org: { required: true, type: 'string' },
            role: { enum: ['admin', 'direct_member', 'billing_manager'], type: 'string' },
            team_ids: { type: 'integer[]' }
          },
          url: '/orgs/:org/invitations'
        },
        deleteHook: {
          method: 'DELETE',
          params: {
            hook_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/hooks/:hook_id'
        },
        get: {
          method: 'GET',
          params: { org: { required: true, type: 'string' } },
          url: '/orgs/:org'
        },
        getHook: {
          method: 'GET',
          params: {
            hook_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/hooks/:hook_id'
        },
        getMembership: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/memberships/:username'
        },
        getMembershipForAuthenticatedUser: {
          method: 'GET',
          params: { org: { required: true, type: 'string' } },
          url: '/user/memberships/orgs/:org'
        },
        list: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'integer' }
          },
          url: '/organizations'
        },
        listBlockedUsers: {
          method: 'GET',
          params: { org: { required: true, type: 'string' } },
          url: '/orgs/:org/blocks'
        },
        listForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/orgs'
        },
        listForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/orgs'
        },
        listHooks: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/hooks'
        },
        listInstallations: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/installations'
        },
        listInvitationTeams: {
          method: 'GET',
          params: {
            invitation_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/invitations/:invitation_id/teams'
        },
        listMembers: {
          method: 'GET',
          params: {
            filter: { enum: ['2fa_disabled', 'all'], type: 'string' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            role: { enum: ['all', 'admin', 'member'], type: 'string' }
          },
          url: '/orgs/:org/members'
        },
        listMemberships: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            state: { enum: ['active', 'pending'], type: 'string' }
          },
          url: '/user/memberships/orgs'
        },
        listOutsideCollaborators: {
          method: 'GET',
          params: {
            filter: { enum: ['2fa_disabled', 'all'], type: 'string' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/outside_collaborators'
        },
        listPendingInvitations: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/invitations'
        },
        listPublicMembers: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/public_members'
        },
        pingHook: {
          method: 'POST',
          params: {
            hook_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/hooks/:hook_id/pings'
        },
        publicizeMembership: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/public_members/:username'
        },
        removeMember: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/members/:username'
        },
        removeMembership: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/memberships/:username'
        },
        removeOutsideCollaborator: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/outside_collaborators/:username'
        },
        unblockUser: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/blocks/:username'
        },
        update: {
          method: 'PATCH',
          params: {
            billing_email: { type: 'string' },
            company: { type: 'string' },
            default_repository_permission: {
              enum: ['read', 'write', 'admin', 'none'],
              type: 'string'
            },
            description: { type: 'string' },
            email: { type: 'string' },
            has_organization_projects: { type: 'boolean' },
            has_repository_projects: { type: 'boolean' },
            location: { type: 'string' },
            members_allowed_repository_creation_type: {
              enum: ['all', 'private', 'none'],
              type: 'string'
            },
            members_can_create_internal_repositories: { type: 'boolean' },
            members_can_create_private_repositories: { type: 'boolean' },
            members_can_create_public_repositories: { type: 'boolean' },
            members_can_create_repositories: { type: 'boolean' },
            name: { type: 'string' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org'
        },
        updateHook: {
          method: 'PATCH',
          params: {
            active: { type: 'boolean' },
            config: { type: 'object' },
            'config.content_type': { type: 'string' },
            'config.insecure_ssl': { type: 'string' },
            'config.secret': { type: 'string' },
            'config.url': { required: true, type: 'string' },
            events: { type: 'string[]' },
            hook_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/hooks/:hook_id'
        },
        updateMembership: {
          method: 'PATCH',
          params: {
            org: { required: true, type: 'string' },
            state: { enum: ['active'], required: true, type: 'string' }
          },
          url: '/user/memberships/orgs/:org'
        }
      },
      projects: {
        addCollaborator: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'PUT',
          params: {
            permission: { enum: ['read', 'write', 'admin'], type: 'string' },
            project_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/projects/:project_id/collaborators/:username'
        },
        createCard: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'POST',
          params: {
            column_id: { required: true, type: 'integer' },
            content_id: { type: 'integer' },
            content_type: { type: 'string' },
            note: { type: 'string' }
          },
          url: '/projects/columns/:column_id/cards'
        },
        createColumn: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'POST',
          params: {
            name: { required: true, type: 'string' },
            project_id: { required: true, type: 'integer' }
          },
          url: '/projects/:project_id/columns'
        },
        createForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'POST',
          params: { body: { type: 'string' }, name: { required: true, type: 'string' } },
          url: '/user/projects'
        },
        createForOrg: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'POST',
          params: {
            body: { type: 'string' },
            name: { required: true, type: 'string' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/projects'
        },
        createForRepo: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'POST',
          params: {
            body: { type: 'string' },
            name: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/projects'
        },
        delete: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'DELETE',
          params: { project_id: { required: true, type: 'integer' } },
          url: '/projects/:project_id'
        },
        deleteCard: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'DELETE',
          params: { card_id: { required: true, type: 'integer' } },
          url: '/projects/columns/cards/:card_id'
        },
        deleteColumn: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'DELETE',
          params: { column_id: { required: true, type: 'integer' } },
          url: '/projects/columns/:column_id'
        },
        get: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: { project_id: { required: true, type: 'integer' } },
          url: '/projects/:project_id'
        },
        getCard: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: { card_id: { required: true, type: 'integer' } },
          url: '/projects/columns/cards/:card_id'
        },
        getColumn: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: { column_id: { required: true, type: 'integer' } },
          url: '/projects/columns/:column_id'
        },
        listCards: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            archived_state: { enum: ['all', 'archived', 'not_archived'], type: 'string' },
            column_id: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/projects/columns/:column_id/cards'
        },
        listCollaborators: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            affiliation: { enum: ['outside', 'direct', 'all'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            project_id: { required: true, type: 'integer' }
          },
          url: '/projects/:project_id/collaborators'
        },
        listColumns: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            project_id: { required: true, type: 'integer' }
          },
          url: '/projects/:project_id/columns'
        },
        listForOrg: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' }
          },
          url: '/orgs/:org/projects'
        },
        listForRepo: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' }
          },
          url: '/repos/:owner/:repo/projects'
        },
        listForUser: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/projects'
        },
        moveCard: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'POST',
          params: {
            card_id: { required: true, type: 'integer' },
            column_id: { type: 'integer' },
            position: { required: true, type: 'string', validation: '^(top|bottom|after:\\d+)$' }
          },
          url: '/projects/columns/cards/:card_id/moves'
        },
        moveColumn: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'POST',
          params: {
            column_id: { required: true, type: 'integer' },
            position: { required: true, type: 'string', validation: '^(first|last|after:\\d+)$' }
          },
          url: '/projects/columns/:column_id/moves'
        },
        removeCollaborator: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'DELETE',
          params: {
            project_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/projects/:project_id/collaborators/:username'
        },
        reviewUserPermissionLevel: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            project_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/projects/:project_id/collaborators/:username/permission'
        },
        update: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'PATCH',
          params: {
            body: { type: 'string' },
            name: { type: 'string' },
            organization_permission: { type: 'string' },
            private: { type: 'boolean' },
            project_id: { required: true, type: 'integer' },
            state: { enum: ['open', 'closed'], type: 'string' }
          },
          url: '/projects/:project_id'
        },
        updateCard: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'PATCH',
          params: {
            archived: { type: 'boolean' },
            card_id: { required: true, type: 'integer' },
            note: { type: 'string' }
          },
          url: '/projects/columns/cards/:card_id'
        },
        updateColumn: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'PATCH',
          params: {
            column_id: { required: true, type: 'integer' },
            name: { required: true, type: 'string' }
          },
          url: '/projects/columns/:column_id'
        }
      },
      pulls: {
        checkIfMerged: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/merge'
        },
        create: {
          method: 'POST',
          params: {
            base: { required: true, type: 'string' },
            body: { type: 'string' },
            draft: { type: 'boolean' },
            head: { required: true, type: 'string' },
            maintainer_can_modify: { type: 'boolean' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            title: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls'
        },
        createComment: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            commit_id: { required: true, type: 'string' },
            in_reply_to: {
              deprecated: true,
              description:
                'The comment ID to reply to. **Note**: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.',
              type: 'integer'
            },
            line: { type: 'integer' },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            path: { required: true, type: 'string' },
            position: { type: 'integer' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            side: { enum: ['LEFT', 'RIGHT'], type: 'string' },
            start_line: { type: 'integer' },
            start_side: { enum: ['LEFT', 'RIGHT', 'side'], type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/comments'
        },
        createCommentReply: {
          deprecated:
            'octokit.pulls.createCommentReply() has been renamed to octokit.pulls.createComment() (2019-09-09)',
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            commit_id: { required: true, type: 'string' },
            in_reply_to: {
              deprecated: true,
              description:
                'The comment ID to reply to. **Note**: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.',
              type: 'integer'
            },
            line: { type: 'integer' },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            path: { required: true, type: 'string' },
            position: { type: 'integer' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            side: { enum: ['LEFT', 'RIGHT'], type: 'string' },
            start_line: { type: 'integer' },
            start_side: { enum: ['LEFT', 'RIGHT', 'side'], type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/comments'
        },
        createFromIssue: {
          deprecated:
            'octokit.pulls.createFromIssue() is deprecated, see https://developer.github.com/v3/pulls/#create-a-pull-request',
          method: 'POST',
          params: {
            base: { required: true, type: 'string' },
            draft: { type: 'boolean' },
            head: { required: true, type: 'string' },
            issue: { required: true, type: 'integer' },
            maintainer_can_modify: { type: 'boolean' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls'
        },
        createReview: {
          method: 'POST',
          params: {
            body: { type: 'string' },
            comments: { type: 'object[]' },
            'comments[].body': { required: true, type: 'string' },
            'comments[].path': { required: true, type: 'string' },
            'comments[].position': { required: true, type: 'integer' },
            commit_id: { type: 'string' },
            event: { enum: ['APPROVE', 'REQUEST_CHANGES', 'COMMENT'], type: 'string' },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews'
        },
        createReviewCommentReply: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/comments/:comment_id/replies'
        },
        createReviewRequest: {
          method: 'POST',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            reviewers: { type: 'string[]' },
            team_reviewers: { type: 'string[]' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/requested_reviewers'
        },
        deleteComment: {
          method: 'DELETE',
          params: {
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/comments/:comment_id'
        },
        deletePendingReview: {
          method: 'DELETE',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            review_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id'
        },
        deleteReviewRequest: {
          method: 'DELETE',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            reviewers: { type: 'string[]' },
            team_reviewers: { type: 'string[]' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/requested_reviewers'
        },
        dismissReview: {
          method: 'PUT',
          params: {
            message: { required: true, type: 'string' },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            review_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/dismissals'
        },
        get: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number'
        },
        getComment: {
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/comments/:comment_id'
        },
        getCommentsForReview: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            review_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments'
        },
        getReview: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            review_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id'
        },
        list: {
          method: 'GET',
          params: {
            base: { type: 'string' },
            direction: { enum: ['asc', 'desc'], type: 'string' },
            head: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            sort: { enum: ['created', 'updated', 'popularity', 'long-running'], type: 'string' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls'
        },
        listComments: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            since: { type: 'string' },
            sort: { enum: ['created', 'updated'], type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/comments'
        },
        listCommentsForRepo: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            since: { type: 'string' },
            sort: { enum: ['created', 'updated'], type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/comments'
        },
        listCommits: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/commits'
        },
        listFiles: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/files'
        },
        listReviewRequests: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/requested_reviewers'
        },
        listReviews: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews'
        },
        merge: {
          method: 'PUT',
          params: {
            commit_message: { type: 'string' },
            commit_title: { type: 'string' },
            merge_method: { enum: ['merge', 'squash', 'rebase'], type: 'string' },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            sha: { type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/merge'
        },
        submitReview: {
          method: 'POST',
          params: {
            body: { type: 'string' },
            event: {
              enum: ['APPROVE', 'REQUEST_CHANGES', 'COMMENT'],
              required: true,
              type: 'string'
            },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            review_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/events'
        },
        update: {
          method: 'PATCH',
          params: {
            base: { type: 'string' },
            body: { type: 'string' },
            maintainer_can_modify: { type: 'boolean' },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            state: { enum: ['open', 'closed'], type: 'string' },
            title: { type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number'
        },
        updateBranch: {
          headers: { accept: 'application/vnd.github.lydian-preview+json' },
          method: 'PUT',
          params: {
            expected_head_sha: { type: 'string' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/update-branch'
        },
        updateComment: {
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' },
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/comments/:comment_id'
        },
        updateReview: {
          method: 'PUT',
          params: {
            body: { required: true, type: 'string' },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            review_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id'
        }
      },
      rateLimit: { get: { method: 'GET', params: {}, url: '/rate_limit' } },
      reactions: {
        createForCommitComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            comment_id: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/comments/:comment_id/reactions'
        },
        createForIssue: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/reactions'
        },
        createForIssueComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            comment_id: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/comments/:comment_id/reactions'
        },
        createForPullRequestReviewComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            comment_id: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/comments/:comment_id/reactions'
        },
        createForTeamDiscussion: {
          deprecated:
            'octokit.reactions.createForTeamDiscussion() has been renamed to octokit.reactions.createForTeamDiscussionLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/reactions'
        },
        createForTeamDiscussionComment: {
          deprecated:
            'octokit.reactions.createForTeamDiscussionComment() has been renamed to octokit.reactions.createForTeamDiscussionCommentLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            comment_number: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions'
        },
        createForTeamDiscussionCommentInOrg: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            comment_number: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url:
            '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions'
        },
        createForTeamDiscussionCommentLegacy: {
          deprecated:
            'octokit.reactions.createForTeamDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-comment-legacy',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            comment_number: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions'
        },
        createForTeamDiscussionInOrg: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions'
        },
        createForTeamDiscussionLegacy: {
          deprecated:
            'octokit.reactions.createForTeamDiscussionLegacy() is deprecated, see https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-legacy',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/reactions'
        },
        delete: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'DELETE',
          params: { reaction_id: { required: true, type: 'integer' } },
          url: '/reactions/:reaction_id'
        },
        listForCommitComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/comments/:comment_id/reactions'
        },
        listForIssue: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/reactions'
        },
        listForIssueComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/comments/:comment_id/reactions'
        },
        listForPullRequestReviewComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/comments/:comment_id/reactions'
        },
        listForTeamDiscussion: {
          deprecated:
            'octokit.reactions.listForTeamDiscussion() has been renamed to octokit.reactions.listForTeamDiscussionLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/reactions'
        },
        listForTeamDiscussionComment: {
          deprecated:
            'octokit.reactions.listForTeamDiscussionComment() has been renamed to octokit.reactions.listForTeamDiscussionCommentLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions'
        },
        listForTeamDiscussionCommentInOrg: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url:
            '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions'
        },
        listForTeamDiscussionCommentLegacy: {
          deprecated:
            'octokit.reactions.listForTeamDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-comment-legacy',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions'
        },
        listForTeamDiscussionInOrg: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions'
        },
        listForTeamDiscussionLegacy: {
          deprecated:
            'octokit.reactions.listForTeamDiscussionLegacy() is deprecated, see https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-legacy',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/reactions'
        }
      },
      repos: {
        acceptInvitation: {
          method: 'PATCH',
          params: { invitation_id: { required: true, type: 'integer' } },
          url: '/user/repository_invitations/:invitation_id'
        },
        addCollaborator: {
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' },
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' },
            repo: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/collaborators/:username'
        },
        addDeployKey: {
          method: 'POST',
          params: {
            key: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            read_only: { type: 'boolean' },
            repo: { required: true, type: 'string' },
            title: { type: 'string' }
          },
          url: '/repos/:owner/:repo/keys'
        },
        addProtectedBranchAdminEnforcement: {
          method: 'POST',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
        },
        addProtectedBranchAppRestrictions: {
          method: 'POST',
          params: {
            apps: { mapTo: 'data', required: true, type: 'string[]' },
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps'
        },
        addProtectedBranchRequiredSignatures: {
          headers: { accept: 'application/vnd.github.zzzax-preview+json' },
          method: 'POST',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_signatures'
        },
        addProtectedBranchRequiredStatusChecksContexts: {
          method: 'POST',
          params: {
            branch: { required: true, type: 'string' },
            contexts: { mapTo: 'data', required: true, type: 'string[]' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
        },
        addProtectedBranchTeamRestrictions: {
          method: 'POST',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            teams: { mapTo: 'data', required: true, type: 'string[]' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        },
        addProtectedBranchUserRestrictions: {
          method: 'POST',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            users: { mapTo: 'data', required: true, type: 'string[]' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        },
        checkCollaborator: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/collaborators/:username'
        },
        checkVulnerabilityAlerts: {
          headers: { accept: 'application/vnd.github.dorian-preview+json' },
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/vulnerability-alerts'
        },
        compareCommits: {
          method: 'GET',
          params: {
            base: { required: true, type: 'string' },
            head: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/compare/:base...:head'
        },
        createCommitComment: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            commit_sha: { required: true, type: 'string' },
            line: { type: 'integer' },
            owner: { required: true, type: 'string' },
            path: { type: 'string' },
            position: { type: 'integer' },
            repo: { required: true, type: 'string' },
            sha: { alias: 'commit_sha', deprecated: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:commit_sha/comments'
        },
        createDeployment: {
          method: 'POST',
          params: {
            auto_merge: { type: 'boolean' },
            description: { type: 'string' },
            environment: { type: 'string' },
            owner: { required: true, type: 'string' },
            payload: { type: 'string' },
            production_environment: { type: 'boolean' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            required_contexts: { type: 'string[]' },
            task: { type: 'string' },
            transient_environment: { type: 'boolean' }
          },
          url: '/repos/:owner/:repo/deployments'
        },
        createDeploymentStatus: {
          method: 'POST',
          params: {
            auto_inactive: { type: 'boolean' },
            deployment_id: { required: true, type: 'integer' },
            description: { type: 'string' },
            environment: { enum: ['production', 'staging', 'qa'], type: 'string' },
            environment_url: { type: 'string' },
            log_url: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            state: {
              enum: ['error', 'failure', 'inactive', 'in_progress', 'queued', 'pending', 'success'],
              required: true,
              type: 'string'
            },
            target_url: { type: 'string' }
          },
          url: '/repos/:owner/:repo/deployments/:deployment_id/statuses'
        },
        createDispatchEvent: {
          method: 'POST',
          params: {
            client_payload: { type: 'object' },
            event_type: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/dispatches'
        },
        createFile: {
          deprecated:
            'octokit.repos.createFile() has been renamed to octokit.repos.createOrUpdateFile() (2019-06-07)',
          method: 'PUT',
          params: {
            author: { type: 'object' },
            'author.email': { required: true, type: 'string' },
            'author.name': { required: true, type: 'string' },
            branch: { type: 'string' },
            committer: { type: 'object' },
            'committer.email': { required: true, type: 'string' },
            'committer.name': { required: true, type: 'string' },
            content: { required: true, type: 'string' },
            message: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            path: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { type: 'string' }
          },
          url: '/repos/:owner/:repo/contents/:path'
        },
        createForAuthenticatedUser: {
          method: 'POST',
          params: {
            allow_merge_commit: { type: 'boolean' },
            allow_rebase_merge: { type: 'boolean' },
            allow_squash_merge: { type: 'boolean' },
            auto_init: { type: 'boolean' },
            delete_branch_on_merge: { type: 'boolean' },
            description: { type: 'string' },
            gitignore_template: { type: 'string' },
            has_issues: { type: 'boolean' },
            has_projects: { type: 'boolean' },
            has_wiki: { type: 'boolean' },
            homepage: { type: 'string' },
            is_template: { type: 'boolean' },
            license_template: { type: 'string' },
            name: { required: true, type: 'string' },
            private: { type: 'boolean' },
            team_id: { type: 'integer' },
            visibility: { enum: ['public', 'private', 'visibility', 'internal'], type: 'string' }
          },
          url: '/user/repos'
        },
        createFork: {
          method: 'POST',
          params: {
            organization: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/forks'
        },
        createHook: {
          method: 'POST',
          params: {
            active: { type: 'boolean' },
            config: { required: true, type: 'object' },
            'config.content_type': { type: 'string' },
            'config.insecure_ssl': { type: 'string' },
            'config.secret': { type: 'string' },
            'config.url': { required: true, type: 'string' },
            events: { type: 'string[]' },
            name: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/hooks'
        },
        createInOrg: {
          method: 'POST',
          params: {
            allow_merge_commit: { type: 'boolean' },
            allow_rebase_merge: { type: 'boolean' },
            allow_squash_merge: { type: 'boolean' },
            auto_init: { type: 'boolean' },
            delete_branch_on_merge: { type: 'boolean' },
            description: { type: 'string' },
            gitignore_template: { type: 'string' },
            has_issues: { type: 'boolean' },
            has_projects: { type: 'boolean' },
            has_wiki: { type: 'boolean' },
            homepage: { type: 'string' },
            is_template: { type: 'boolean' },
            license_template: { type: 'string' },
            name: { required: true, type: 'string' },
            org: { required: true, type: 'string' },
            private: { type: 'boolean' },
            team_id: { type: 'integer' },
            visibility: { enum: ['public', 'private', 'visibility', 'internal'], type: 'string' }
          },
          url: '/orgs/:org/repos'
        },
        createOrUpdateFile: {
          method: 'PUT',
          params: {
            author: { type: 'object' },
            'author.email': { required: true, type: 'string' },
            'author.name': { required: true, type: 'string' },
            branch: { type: 'string' },
            committer: { type: 'object' },
            'committer.email': { required: true, type: 'string' },
            'committer.name': { required: true, type: 'string' },
            content: { required: true, type: 'string' },
            message: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            path: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { type: 'string' }
          },
          url: '/repos/:owner/:repo/contents/:path'
        },
        createRelease: {
          method: 'POST',
          params: {
            body: { type: 'string' },
            draft: { type: 'boolean' },
            name: { type: 'string' },
            owner: { required: true, type: 'string' },
            prerelease: { type: 'boolean' },
            repo: { required: true, type: 'string' },
            tag_name: { required: true, type: 'string' },
            target_commitish: { type: 'string' }
          },
          url: '/repos/:owner/:repo/releases'
        },
        createStatus: {
          method: 'POST',
          params: {
            context: { type: 'string' },
            description: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { required: true, type: 'string' },
            state: {
              enum: ['error', 'failure', 'pending', 'success'],
              required: true,
              type: 'string'
            },
            target_url: { type: 'string' }
          },
          url: '/repos/:owner/:repo/statuses/:sha'
        },
        createUsingTemplate: {
          headers: { accept: 'application/vnd.github.baptiste-preview+json' },
          method: 'POST',
          params: {
            description: { type: 'string' },
            name: { required: true, type: 'string' },
            owner: { type: 'string' },
            private: { type: 'boolean' },
            template_owner: { required: true, type: 'string' },
            template_repo: { required: true, type: 'string' }
          },
          url: '/repos/:template_owner/:template_repo/generate'
        },
        declineInvitation: {
          method: 'DELETE',
          params: { invitation_id: { required: true, type: 'integer' } },
          url: '/user/repository_invitations/:invitation_id'
        },
        delete: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo'
        },
        deleteCommitComment: {
          method: 'DELETE',
          params: {
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/comments/:comment_id'
        },
        deleteDownload: {
          method: 'DELETE',
          params: {
            download_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/downloads/:download_id'
        },
        deleteFile: {
          method: 'DELETE',
          params: {
            author: { type: 'object' },
            'author.email': { type: 'string' },
            'author.name': { type: 'string' },
            branch: { type: 'string' },
            committer: { type: 'object' },
            'committer.email': { type: 'string' },
            'committer.name': { type: 'string' },
            message: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            path: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/contents/:path'
        },
        deleteHook: {
          method: 'DELETE',
          params: {
            hook_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/hooks/:hook_id'
        },
        deleteInvitation: {
          method: 'DELETE',
          params: {
            invitation_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/invitations/:invitation_id'
        },
        deleteRelease: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            release_id: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/:release_id'
        },
        deleteReleaseAsset: {
          method: 'DELETE',
          params: {
            asset_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/assets/:asset_id'
        },
        disableAutomatedSecurityFixes: {
          headers: { accept: 'application/vnd.github.london-preview+json' },
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/automated-security-fixes'
        },
        disablePagesSite: {
          headers: { accept: 'application/vnd.github.switcheroo-preview+json' },
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pages'
        },
        disableVulnerabilityAlerts: {
          headers: { accept: 'application/vnd.github.dorian-preview+json' },
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/vulnerability-alerts'
        },
        enableAutomatedSecurityFixes: {
          headers: { accept: 'application/vnd.github.london-preview+json' },
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/automated-security-fixes'
        },
        enablePagesSite: {
          headers: { accept: 'application/vnd.github.switcheroo-preview+json' },
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            source: { type: 'object' },
            'source.branch': { enum: ['master', 'gh-pages'], type: 'string' },
            'source.path': { type: 'string' }
          },
          url: '/repos/:owner/:repo/pages'
        },
        enableVulnerabilityAlerts: {
          headers: { accept: 'application/vnd.github.dorian-preview+json' },
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/vulnerability-alerts'
        },
        get: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo'
        },
        getAppsWithAccessToProtectedBranch: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps'
        },
        getArchiveLink: {
          method: 'GET',
          params: {
            archive_format: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/:archive_format/:ref'
        },
        getBranch: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch'
        },
        getBranchProtection: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection'
        },
        getClones: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            per: { enum: ['day', 'week'], type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/traffic/clones'
        },
        getCodeFrequencyStats: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/stats/code_frequency'
        },
        getCollaboratorPermissionLevel: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/collaborators/:username/permission'
        },
        getCombinedStatusForRef: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:ref/status'
        },
        getCommit: {
          method: 'GET',
          params: {
            commit_sha: { alias: 'ref', deprecated: true, type: 'string' },
            owner: { required: true, type: 'string' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { alias: 'ref', deprecated: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:ref'
        },
        getCommitActivityStats: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/stats/commit_activity'
        },
        getCommitComment: {
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/comments/:comment_id'
        },
        getCommitRefSha: {
          deprecated:
            'octokit.repos.getCommitRefSha() is deprecated, see https://developer.github.com/v3/repos/commits/#get-a-single-commit',
          headers: { accept: 'application/vnd.github.v3.sha' },
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:ref'
        },
        getContents: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            path: { required: true, type: 'string' },
            ref: { type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/contents/:path'
        },
        getContributorsStats: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/stats/contributors'
        },
        getDeployKey: {
          method: 'GET',
          params: {
            key_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/keys/:key_id'
        },
        getDeployment: {
          method: 'GET',
          params: {
            deployment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/deployments/:deployment_id'
        },
        getDeploymentStatus: {
          method: 'GET',
          params: {
            deployment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            status_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/deployments/:deployment_id/statuses/:status_id'
        },
        getDownload: {
          method: 'GET',
          params: {
            download_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/downloads/:download_id'
        },
        getHook: {
          method: 'GET',
          params: {
            hook_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/hooks/:hook_id'
        },
        getLatestPagesBuild: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pages/builds/latest'
        },
        getLatestRelease: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/latest'
        },
        getPages: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pages'
        },
        getPagesBuild: {
          method: 'GET',
          params: {
            build_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pages/builds/:build_id'
        },
        getParticipationStats: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/stats/participation'
        },
        getProtectedBranchAdminEnforcement: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
        },
        getProtectedBranchPullRequestReviewEnforcement: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
        },
        getProtectedBranchRequiredSignatures: {
          headers: { accept: 'application/vnd.github.zzzax-preview+json' },
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_signatures'
        },
        getProtectedBranchRequiredStatusChecks: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
        },
        getProtectedBranchRestrictions: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions'
        },
        getPunchCardStats: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/stats/punch_card'
        },
        getReadme: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            ref: { type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/readme'
        },
        getRelease: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            release_id: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/:release_id'
        },
        getReleaseAsset: {
          method: 'GET',
          params: {
            asset_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/assets/:asset_id'
        },
        getReleaseByTag: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            tag: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/tags/:tag'
        },
        getTeamsWithAccessToProtectedBranch: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        },
        getTopPaths: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/traffic/popular/paths'
        },
        getTopReferrers: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/traffic/popular/referrers'
        },
        getUsersWithAccessToProtectedBranch: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        },
        getViews: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            per: { enum: ['day', 'week'], type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/traffic/views'
        },
        list: {
          method: 'GET',
          params: {
            affiliation: { type: 'string' },
            direction: { enum: ['asc', 'desc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            sort: { enum: ['created', 'updated', 'pushed', 'full_name'], type: 'string' },
            type: { enum: ['all', 'owner', 'public', 'private', 'member'], type: 'string' },
            visibility: { enum: ['all', 'public', 'private'], type: 'string' }
          },
          url: '/user/repos'
        },
        listAppsWithAccessToProtectedBranch: {
          deprecated:
            'octokit.repos.listAppsWithAccessToProtectedBranch() has been renamed to octokit.repos.getAppsWithAccessToProtectedBranch() (2019-09-13)',
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps'
        },
        listAssetsForRelease: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            release_id: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/:release_id/assets'
        },
        listBranches: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            protected: { type: 'boolean' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches'
        },
        listBranchesForHeadCommit: {
          headers: { accept: 'application/vnd.github.groot-preview+json' },
          method: 'GET',
          params: {
            commit_sha: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:commit_sha/branches-where-head'
        },
        listCollaborators: {
          method: 'GET',
          params: {
            affiliation: { enum: ['outside', 'direct', 'all'], type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/collaborators'
        },
        listCommentsForCommit: {
          method: 'GET',
          params: {
            commit_sha: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            ref: { alias: 'commit_sha', deprecated: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:commit_sha/comments'
        },
        listCommitComments: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/comments'
        },
        listCommits: {
          method: 'GET',
          params: {
            author: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            path: { type: 'string' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            sha: { type: 'string' },
            since: { type: 'string' },
            until: { type: 'string' }
          },
          url: '/repos/:owner/:repo/commits'
        },
        listContributors: {
          method: 'GET',
          params: {
            anon: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/contributors'
        },
        listDeployKeys: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/keys'
        },
        listDeploymentStatuses: {
          method: 'GET',
          params: {
            deployment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/deployments/:deployment_id/statuses'
        },
        listDeployments: {
          method: 'GET',
          params: {
            environment: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            ref: { type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { type: 'string' },
            task: { type: 'string' }
          },
          url: '/repos/:owner/:repo/deployments'
        },
        listDownloads: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/downloads'
        },
        listForOrg: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            sort: { enum: ['created', 'updated', 'pushed', 'full_name'], type: 'string' },
            type: {
              enum: ['all', 'public', 'private', 'forks', 'sources', 'member', 'internal'],
              type: 'string'
            }
          },
          url: '/orgs/:org/repos'
        },
        listForUser: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            sort: { enum: ['created', 'updated', 'pushed', 'full_name'], type: 'string' },
            type: { enum: ['all', 'owner', 'member'], type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/repos'
        },
        listForks: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            sort: { enum: ['newest', 'oldest', 'stargazers'], type: 'string' }
          },
          url: '/repos/:owner/:repo/forks'
        },
        listHooks: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/hooks'
        },
        listInvitations: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/invitations'
        },
        listInvitationsForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/repository_invitations'
        },
        listLanguages: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/languages'
        },
        listPagesBuilds: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pages/builds'
        },
        listProtectedBranchRequiredStatusChecksContexts: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
        },
        listProtectedBranchTeamRestrictions: {
          deprecated:
            'octokit.repos.listProtectedBranchTeamRestrictions() has been renamed to octokit.repos.getTeamsWithAccessToProtectedBranch() (2019-09-09)',
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        },
        listProtectedBranchUserRestrictions: {
          deprecated:
            'octokit.repos.listProtectedBranchUserRestrictions() has been renamed to octokit.repos.getUsersWithAccessToProtectedBranch() (2019-09-09)',
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        },
        listPublic: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'integer' }
          },
          url: '/repositories'
        },
        listPullRequestsAssociatedWithCommit: {
          headers: { accept: 'application/vnd.github.groot-preview+json' },
          method: 'GET',
          params: {
            commit_sha: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:commit_sha/pulls'
        },
        listReleases: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases'
        },
        listStatusesForRef: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:ref/statuses'
        },
        listTags: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/tags'
        },
        listTeams: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/teams'
        },
        listTeamsWithAccessToProtectedBranch: {
          deprecated:
            'octokit.repos.listTeamsWithAccessToProtectedBranch() has been renamed to octokit.repos.getTeamsWithAccessToProtectedBranch() (2019-09-13)',
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        },
        listTopics: {
          headers: { accept: 'application/vnd.github.mercy-preview+json' },
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/topics'
        },
        listUsersWithAccessToProtectedBranch: {
          deprecated:
            'octokit.repos.listUsersWithAccessToProtectedBranch() has been renamed to octokit.repos.getUsersWithAccessToProtectedBranch() (2019-09-13)',
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        },
        merge: {
          method: 'POST',
          params: {
            base: { required: true, type: 'string' },
            commit_message: { type: 'string' },
            head: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/merges'
        },
        pingHook: {
          method: 'POST',
          params: {
            hook_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/hooks/:hook_id/pings'
        },
        removeBranchProtection: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection'
        },
        removeCollaborator: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/collaborators/:username'
        },
        removeDeployKey: {
          method: 'DELETE',
          params: {
            key_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/keys/:key_id'
        },
        removeProtectedBranchAdminEnforcement: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
        },
        removeProtectedBranchAppRestrictions: {
          method: 'DELETE',
          params: {
            apps: { mapTo: 'data', required: true, type: 'string[]' },
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps'
        },
        removeProtectedBranchPullRequestReviewEnforcement: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
        },
        removeProtectedBranchRequiredSignatures: {
          headers: { accept: 'application/vnd.github.zzzax-preview+json' },
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_signatures'
        },
        removeProtectedBranchRequiredStatusChecks: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
        },
        removeProtectedBranchRequiredStatusChecksContexts: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            contexts: { mapTo: 'data', required: true, type: 'string[]' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
        },
        removeProtectedBranchRestrictions: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions'
        },
        removeProtectedBranchTeamRestrictions: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            teams: { mapTo: 'data', required: true, type: 'string[]' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        },
        removeProtectedBranchUserRestrictions: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            users: { mapTo: 'data', required: true, type: 'string[]' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        },
        replaceProtectedBranchAppRestrictions: {
          method: 'PUT',
          params: {
            apps: { mapTo: 'data', required: true, type: 'string[]' },
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps'
        },
        replaceProtectedBranchRequiredStatusChecksContexts: {
          method: 'PUT',
          params: {
            branch: { required: true, type: 'string' },
            contexts: { mapTo: 'data', required: true, type: 'string[]' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
        },
        replaceProtectedBranchTeamRestrictions: {
          method: 'PUT',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            teams: { mapTo: 'data', required: true, type: 'string[]' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        },
        replaceProtectedBranchUserRestrictions: {
          method: 'PUT',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            users: { mapTo: 'data', required: true, type: 'string[]' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        },
        replaceTopics: {
          headers: { accept: 'application/vnd.github.mercy-preview+json' },
          method: 'PUT',
          params: {
            names: { required: true, type: 'string[]' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/topics'
        },
        requestPageBuild: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pages/builds'
        },
        retrieveCommunityProfileMetrics: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/community/profile'
        },
        testPushHook: {
          method: 'POST',
          params: {
            hook_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/hooks/:hook_id/tests'
        },
        transfer: {
          method: 'POST',
          params: {
            new_owner: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            team_ids: { type: 'integer[]' }
          },
          url: '/repos/:owner/:repo/transfer'
        },
        update: {
          method: 'PATCH',
          params: {
            allow_merge_commit: { type: 'boolean' },
            allow_rebase_merge: { type: 'boolean' },
            allow_squash_merge: { type: 'boolean' },
            archived: { type: 'boolean' },
            default_branch: { type: 'string' },
            delete_branch_on_merge: { type: 'boolean' },
            description: { type: 'string' },
            has_issues: { type: 'boolean' },
            has_projects: { type: 'boolean' },
            has_wiki: { type: 'boolean' },
            homepage: { type: 'string' },
            is_template: { type: 'boolean' },
            name: { type: 'string' },
            owner: { required: true, type: 'string' },
            private: { type: 'boolean' },
            repo: { required: true, type: 'string' },
            visibility: { enum: ['public', 'private', 'visibility', 'internal'], type: 'string' }
          },
          url: '/repos/:owner/:repo'
        },
        updateBranchProtection: {
          method: 'PUT',
          params: {
            allow_deletions: { type: 'boolean' },
            allow_force_pushes: { allowNull: true, type: 'boolean' },
            branch: { required: true, type: 'string' },
            enforce_admins: { allowNull: true, required: true, type: 'boolean' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            required_linear_history: { type: 'boolean' },
            required_pull_request_reviews: { allowNull: true, required: true, type: 'object' },
            'required_pull_request_reviews.dismiss_stale_reviews': { type: 'boolean' },
            'required_pull_request_reviews.dismissal_restrictions': { type: 'object' },
            'required_pull_request_reviews.dismissal_restrictions.teams': { type: 'string[]' },
            'required_pull_request_reviews.dismissal_restrictions.users': { type: 'string[]' },
            'required_pull_request_reviews.require_code_owner_reviews': { type: 'boolean' },
            'required_pull_request_reviews.required_approving_review_count': { type: 'integer' },
            required_status_checks: { allowNull: true, required: true, type: 'object' },
            'required_status_checks.contexts': { required: true, type: 'string[]' },
            'required_status_checks.strict': { required: true, type: 'boolean' },
            restrictions: { allowNull: true, required: true, type: 'object' },
            'restrictions.apps': { type: 'string[]' },
            'restrictions.teams': { required: true, type: 'string[]' },
            'restrictions.users': { required: true, type: 'string[]' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection'
        },
        updateCommitComment: {
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' },
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/comments/:comment_id'
        },
        updateFile: {
          deprecated:
            'octokit.repos.updateFile() has been renamed to octokit.repos.createOrUpdateFile() (2019-06-07)',
          method: 'PUT',
          params: {
            author: { type: 'object' },
            'author.email': { required: true, type: 'string' },
            'author.name': { required: true, type: 'string' },
            branch: { type: 'string' },
            committer: { type: 'object' },
            'committer.email': { required: true, type: 'string' },
            'committer.name': { required: true, type: 'string' },
            content: { required: true, type: 'string' },
            message: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            path: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { type: 'string' }
          },
          url: '/repos/:owner/:repo/contents/:path'
        },
        updateHook: {
          method: 'PATCH',
          params: {
            active: { type: 'boolean' },
            add_events: { type: 'string[]' },
            config: { type: 'object' },
            'config.content_type': { type: 'string' },
            'config.insecure_ssl': { type: 'string' },
            'config.secret': { type: 'string' },
            'config.url': { required: true, type: 'string' },
            events: { type: 'string[]' },
            hook_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            remove_events: { type: 'string[]' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/hooks/:hook_id'
        },
        updateInformationAboutPagesSite: {
          method: 'PUT',
          params: {
            cname: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            source: { enum: ['"gh-pages"', '"master"', '"master /docs"'], type: 'string' }
          },
          url: '/repos/:owner/:repo/pages'
        },
        updateInvitation: {
          method: 'PATCH',
          params: {
            invitation_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            permissions: { enum: ['read', 'write', 'admin'], type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/invitations/:invitation_id'
        },
        updateProtectedBranchPullRequestReviewEnforcement: {
          method: 'PATCH',
          params: {
            branch: { required: true, type: 'string' },
            dismiss_stale_reviews: { type: 'boolean' },
            dismissal_restrictions: { type: 'object' },
            'dismissal_restrictions.teams': { type: 'string[]' },
            'dismissal_restrictions.users': { type: 'string[]' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            require_code_owner_reviews: { type: 'boolean' },
            required_approving_review_count: { type: 'integer' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
        },
        updateProtectedBranchRequiredStatusChecks: {
          method: 'PATCH',
          params: {
            branch: { required: true, type: 'string' },
            contexts: { type: 'string[]' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            strict: { type: 'boolean' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
        },
        updateRelease: {
          method: 'PATCH',
          params: {
            body: { type: 'string' },
            draft: { type: 'boolean' },
            name: { type: 'string' },
            owner: { required: true, type: 'string' },
            prerelease: { type: 'boolean' },
            release_id: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            tag_name: { type: 'string' },
            target_commitish: { type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/:release_id'
        },
        updateReleaseAsset: {
          method: 'PATCH',
          params: {
            asset_id: { required: true, type: 'integer' },
            label: { type: 'string' },
            name: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/assets/:asset_id'
        },
        uploadReleaseAsset: {
          method: 'POST',
          params: {
            data: { mapTo: 'data', required: true, type: 'string | object' },
            file: { alias: 'data', deprecated: true, type: 'string | object' },
            headers: { required: true, type: 'object' },
            'headers.content-length': { required: true, type: 'integer' },
            'headers.content-type': { required: true, type: 'string' },
            label: { type: 'string' },
            name: { required: true, type: 'string' },
            url: { required: true, type: 'string' }
          },
          url: ':url'
        }
      },
      search: {
        code: {
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            q: { required: true, type: 'string' },
            sort: { enum: ['indexed'], type: 'string' }
          },
          url: '/search/code'
        },
        commits: {
          headers: { accept: 'application/vnd.github.cloak-preview+json' },
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            q: { required: true, type: 'string' },
            sort: { enum: ['author-date', 'committer-date'], type: 'string' }
          },
          url: '/search/commits'
        },
        issues: {
          deprecated:
            'octokit.search.issues() has been renamed to octokit.search.issuesAndPullRequests() (2018-12-27)',
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            q: { required: true, type: 'string' },
            sort: {
              enum: [
                'comments',
                'reactions',
                'reactions-+1',
                'reactions--1',
                'reactions-smile',
                'reactions-thinking_face',
                'reactions-heart',
                'reactions-tada',
                'interactions',
                'created',
                'updated'
              ],
              type: 'string'
            }
          },
          url: '/search/issues'
        },
        issuesAndPullRequests: {
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            q: { required: true, type: 'string' },
            sort: {
              enum: [
                'comments',
                'reactions',
                'reactions-+1',
                'reactions--1',
                'reactions-smile',
                'reactions-thinking_face',
                'reactions-heart',
                'reactions-tada',
                'interactions',
                'created',
                'updated'
              ],
              type: 'string'
            }
          },
          url: '/search/issues'
        },
        labels: {
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' },
            q: { required: true, type: 'string' },
            repository_id: { required: true, type: 'integer' },
            sort: { enum: ['created', 'updated'], type: 'string' }
          },
          url: '/search/labels'
        },
        repos: {
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            q: { required: true, type: 'string' },
            sort: { enum: ['stars', 'forks', 'help-wanted-issues', 'updated'], type: 'string' }
          },
          url: '/search/repositories'
        },
        topics: {
          method: 'GET',
          params: { q: { required: true, type: 'string' } },
          url: '/search/topics'
        },
        users: {
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            q: { required: true, type: 'string' },
            sort: { enum: ['followers', 'repositories', 'joined'], type: 'string' }
          },
          url: '/search/users'
        }
      },
      teams: {
        addMember: {
          deprecated:
            'octokit.teams.addMember() has been renamed to octokit.teams.addMemberLegacy() (2020-01-16)',
          method: 'PUT',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/members/:username'
        },
        addMemberLegacy: {
          deprecated:
            'octokit.teams.addMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#add-team-member-legacy',
          method: 'PUT',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/members/:username'
        },
        addOrUpdateMembership: {
          deprecated:
            'octokit.teams.addOrUpdateMembership() has been renamed to octokit.teams.addOrUpdateMembershipLegacy() (2020-01-16)',
          method: 'PUT',
          params: {
            role: { enum: ['member', 'maintainer'], type: 'string' },
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/memberships/:username'
        },
        addOrUpdateMembershipInOrg: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' },
            role: { enum: ['member', 'maintainer'], type: 'string' },
            team_slug: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/memberships/:username'
        },
        addOrUpdateMembershipLegacy: {
          deprecated:
            'octokit.teams.addOrUpdateMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#add-or-update-team-membership-legacy',
          method: 'PUT',
          params: {
            role: { enum: ['member', 'maintainer'], type: 'string' },
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/memberships/:username'
        },
        addOrUpdateProject: {
          deprecated:
            'octokit.teams.addOrUpdateProject() has been renamed to octokit.teams.addOrUpdateProjectLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'PUT',
          params: {
            permission: { enum: ['read', 'write', 'admin'], type: 'string' },
            project_id: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/projects/:project_id'
        },
        addOrUpdateProjectInOrg: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' },
            permission: { enum: ['read', 'write', 'admin'], type: 'string' },
            project_id: { required: true, type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/projects/:project_id'
        },
        addOrUpdateProjectLegacy: {
          deprecated:
            'octokit.teams.addOrUpdateProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#add-or-update-team-project-legacy',
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'PUT',
          params: {
            permission: { enum: ['read', 'write', 'admin'], type: 'string' },
            project_id: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/projects/:project_id'
        },
        addOrUpdateRepo: {
          deprecated:
            'octokit.teams.addOrUpdateRepo() has been renamed to octokit.teams.addOrUpdateRepoLegacy() (2020-01-16)',
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' },
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' },
            repo: { required: true, type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/repos/:owner/:repo'
        },
        addOrUpdateRepoInOrg: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' },
            repo: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/repos/:owner/:repo'
        },
        addOrUpdateRepoLegacy: {
          deprecated:
            'octokit.teams.addOrUpdateRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#add-or-update-team-repository-legacy',
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' },
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' },
            repo: { required: true, type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/repos/:owner/:repo'
        },
        checkManagesRepo: {
          deprecated:
            'octokit.teams.checkManagesRepo() has been renamed to octokit.teams.checkManagesRepoLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/repos/:owner/:repo'
        },
        checkManagesRepoInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/repos/:owner/:repo'
        },
        checkManagesRepoLegacy: {
          deprecated:
            'octokit.teams.checkManagesRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#check-if-a-team-manages-a-repository-legacy',
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/repos/:owner/:repo'
        },
        create: {
          method: 'POST',
          params: {
            description: { type: 'string' },
            maintainers: { type: 'string[]' },
            name: { required: true, type: 'string' },
            org: { required: true, type: 'string' },
            parent_team_id: { type: 'integer' },
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' },
            privacy: { enum: ['secret', 'closed'], type: 'string' },
            repo_names: { type: 'string[]' }
          },
          url: '/orgs/:org/teams'
        },
        createDiscussion: {
          deprecated:
            'octokit.teams.createDiscussion() has been renamed to octokit.teams.createDiscussionLegacy() (2020-01-16)',
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            private: { type: 'boolean' },
            team_id: { required: true, type: 'integer' },
            title: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/discussions'
        },
        createDiscussionComment: {
          deprecated:
            'octokit.teams.createDiscussionComment() has been renamed to octokit.teams.createDiscussionCommentLegacy() (2020-01-16)',
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments'
        },
        createDiscussionCommentInOrg: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments'
        },
        createDiscussionCommentLegacy: {
          deprecated:
            'octokit.teams.createDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#create-a-comment-legacy',
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments'
        },
        createDiscussionInOrg: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            org: { required: true, type: 'string' },
            private: { type: 'boolean' },
            team_slug: { required: true, type: 'string' },
            title: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions'
        },
        createDiscussionLegacy: {
          deprecated:
            'octokit.teams.createDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#create-a-discussion-legacy',
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            private: { type: 'boolean' },
            team_id: { required: true, type: 'integer' },
            title: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/discussions'
        },
        delete: {
          deprecated:
            'octokit.teams.delete() has been renamed to octokit.teams.deleteLegacy() (2020-01-16)',
          method: 'DELETE',
          params: { team_id: { required: true, type: 'integer' } },
          url: '/teams/:team_id'
        },
        deleteDiscussion: {
          deprecated:
            'octokit.teams.deleteDiscussion() has been renamed to octokit.teams.deleteDiscussionLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number'
        },
        deleteDiscussionComment: {
          deprecated:
            'octokit.teams.deleteDiscussionComment() has been renamed to octokit.teams.deleteDiscussionCommentLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        },
        deleteDiscussionCommentInOrg: {
          method: 'DELETE',
          params: {
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number'
        },
        deleteDiscussionCommentLegacy: {
          deprecated:
            'octokit.teams.deleteDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#delete-a-comment-legacy',
          method: 'DELETE',
          params: {
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        },
        deleteDiscussionInOrg: {
          method: 'DELETE',
          params: {
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number'
        },
        deleteDiscussionLegacy: {
          deprecated:
            'octokit.teams.deleteDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#delete-a-discussion-legacy',
          method: 'DELETE',
          params: {
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number'
        },
        deleteInOrg: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug'
        },
        deleteLegacy: {
          deprecated:
            'octokit.teams.deleteLegacy() is deprecated, see https://developer.github.com/v3/teams/#delete-team-legacy',
          method: 'DELETE',
          params: { team_id: { required: true, type: 'integer' } },
          url: '/teams/:team_id'
        },
        get: {
          deprecated:
            'octokit.teams.get() has been renamed to octokit.teams.getLegacy() (2020-01-16)',
          method: 'GET',
          params: { team_id: { required: true, type: 'integer' } },
          url: '/teams/:team_id'
        },
        getByName: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug'
        },
        getDiscussion: {
          deprecated:
            'octokit.teams.getDiscussion() has been renamed to octokit.teams.getDiscussionLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number'
        },
        getDiscussionComment: {
          deprecated:
            'octokit.teams.getDiscussionComment() has been renamed to octokit.teams.getDiscussionCommentLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        },
        getDiscussionCommentInOrg: {
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number'
        },
        getDiscussionCommentLegacy: {
          deprecated:
            'octokit.teams.getDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#get-a-single-comment-legacy',
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        },
        getDiscussionInOrg: {
          method: 'GET',
          params: {
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number'
        },
        getDiscussionLegacy: {
          deprecated:
            'octokit.teams.getDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#get-a-single-discussion-legacy',
          method: 'GET',
          params: {
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number'
        },
        getLegacy: {
          deprecated:
            'octokit.teams.getLegacy() is deprecated, see https://developer.github.com/v3/teams/#get-team-legacy',
          method: 'GET',
          params: { team_id: { required: true, type: 'integer' } },
          url: '/teams/:team_id'
        },
        getMember: {
          deprecated:
            'octokit.teams.getMember() has been renamed to octokit.teams.getMemberLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/members/:username'
        },
        getMemberLegacy: {
          deprecated:
            'octokit.teams.getMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#get-team-member-legacy',
          method: 'GET',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/members/:username'
        },
        getMembership: {
          deprecated:
            'octokit.teams.getMembership() has been renamed to octokit.teams.getMembershipLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/memberships/:username'
        },
        getMembershipInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/memberships/:username'
        },
        getMembershipLegacy: {
          deprecated:
            'octokit.teams.getMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#get-team-membership-legacy',
          method: 'GET',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/memberships/:username'
        },
        list: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/teams'
        },
        listChild: {
          deprecated:
            'octokit.teams.listChild() has been renamed to octokit.teams.listChildLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/teams'
        },
        listChildInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/teams'
        },
        listChildLegacy: {
          deprecated:
            'octokit.teams.listChildLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-child-teams-legacy',
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/teams'
        },
        listDiscussionComments: {
          deprecated:
            'octokit.teams.listDiscussionComments() has been renamed to octokit.teams.listDiscussionCommentsLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments'
        },
        listDiscussionCommentsInOrg: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments'
        },
        listDiscussionCommentsLegacy: {
          deprecated:
            'octokit.teams.listDiscussionCommentsLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#list-comments-legacy',
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments'
        },
        listDiscussions: {
          deprecated:
            'octokit.teams.listDiscussions() has been renamed to octokit.teams.listDiscussionsLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions'
        },
        listDiscussionsInOrg: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions'
        },
        listDiscussionsLegacy: {
          deprecated:
            'octokit.teams.listDiscussionsLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#list-discussions-legacy',
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions'
        },
        listForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/teams'
        },
        listMembers: {
          deprecated:
            'octokit.teams.listMembers() has been renamed to octokit.teams.listMembersLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            role: { enum: ['member', 'maintainer', 'all'], type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/members'
        },
        listMembersInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            role: { enum: ['member', 'maintainer', 'all'], type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/members'
        },
        listMembersLegacy: {
          deprecated:
            'octokit.teams.listMembersLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#list-team-members-legacy',
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            role: { enum: ['member', 'maintainer', 'all'], type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/members'
        },
        listPendingInvitations: {
          deprecated:
            'octokit.teams.listPendingInvitations() has been renamed to octokit.teams.listPendingInvitationsLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/invitations'
        },
        listPendingInvitationsInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/invitations'
        },
        listPendingInvitationsLegacy: {
          deprecated:
            'octokit.teams.listPendingInvitationsLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#list-pending-team-invitations-legacy',
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/invitations'
        },
        listProjects: {
          deprecated:
            'octokit.teams.listProjects() has been renamed to octokit.teams.listProjectsLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/projects'
        },
        listProjectsInOrg: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/projects'
        },
        listProjectsLegacy: {
          deprecated:
            'octokit.teams.listProjectsLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-team-projects-legacy',
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/projects'
        },
        listRepos: {
          deprecated:
            'octokit.teams.listRepos() has been renamed to octokit.teams.listReposLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/repos'
        },
        listReposInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/repos'
        },
        listReposLegacy: {
          deprecated:
            'octokit.teams.listReposLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-team-repos-legacy',
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/repos'
        },
        removeMember: {
          deprecated:
            'octokit.teams.removeMember() has been renamed to octokit.teams.removeMemberLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/members/:username'
        },
        removeMemberLegacy: {
          deprecated:
            'octokit.teams.removeMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#remove-team-member-legacy',
          method: 'DELETE',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/members/:username'
        },
        removeMembership: {
          deprecated:
            'octokit.teams.removeMembership() has been renamed to octokit.teams.removeMembershipLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/memberships/:username'
        },
        removeMembershipInOrg: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/memberships/:username'
        },
        removeMembershipLegacy: {
          deprecated:
            'octokit.teams.removeMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#remove-team-membership-legacy',
          method: 'DELETE',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/memberships/:username'
        },
        removeProject: {
          deprecated:
            'octokit.teams.removeProject() has been renamed to octokit.teams.removeProjectLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            project_id: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/projects/:project_id'
        },
        removeProjectInOrg: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            project_id: { required: true, type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/projects/:project_id'
        },
        removeProjectLegacy: {
          deprecated:
            'octokit.teams.removeProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#remove-team-project-legacy',
          method: 'DELETE',
          params: {
            project_id: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/projects/:project_id'
        },
        removeRepo: {
          deprecated:
            'octokit.teams.removeRepo() has been renamed to octokit.teams.removeRepoLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/repos/:owner/:repo'
        },
        removeRepoInOrg: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/repos/:owner/:repo'
        },
        removeRepoLegacy: {
          deprecated:
            'octokit.teams.removeRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#remove-team-repository-legacy',
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/repos/:owner/:repo'
        },
        reviewProject: {
          deprecated:
            'octokit.teams.reviewProject() has been renamed to octokit.teams.reviewProjectLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            project_id: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/projects/:project_id'
        },
        reviewProjectInOrg: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            project_id: { required: true, type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/projects/:project_id'
        },
        reviewProjectLegacy: {
          deprecated:
            'octokit.teams.reviewProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#review-a-team-project-legacy',
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            project_id: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/projects/:project_id'
        },
        update: {
          deprecated:
            'octokit.teams.update() has been renamed to octokit.teams.updateLegacy() (2020-01-16)',
          method: 'PATCH',
          params: {
            description: { type: 'string' },
            name: { required: true, type: 'string' },
            parent_team_id: { type: 'integer' },
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' },
            privacy: { enum: ['secret', 'closed'], type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id'
        },
        updateDiscussion: {
          deprecated:
            'octokit.teams.updateDiscussion() has been renamed to octokit.teams.updateDiscussionLegacy() (2020-01-16)',
          method: 'PATCH',
          params: {
            body: { type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' },
            title: { type: 'string' }
          },
          url: '/teams/:team_id/discussions/:discussion_number'
        },
        updateDiscussionComment: {
          deprecated:
            'octokit.teams.updateDiscussionComment() has been renamed to octokit.teams.updateDiscussionCommentLegacy() (2020-01-16)',
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' },
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        },
        updateDiscussionCommentInOrg: {
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' },
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number'
        },
        updateDiscussionCommentLegacy: {
          deprecated:
            'octokit.teams.updateDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#edit-a-comment-legacy',
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' },
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        },
        updateDiscussionInOrg: {
          method: 'PATCH',
          params: {
            body: { type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' },
            title: { type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number'
        },
        updateDiscussionLegacy: {
          deprecated:
            'octokit.teams.updateDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#edit-a-discussion-legacy',
          method: 'PATCH',
          params: {
            body: { type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' },
            title: { type: 'string' }
          },
          url: '/teams/:team_id/discussions/:discussion_number'
        },
        updateInOrg: {
          method: 'PATCH',
          params: {
            description: { type: 'string' },
            name: { required: true, type: 'string' },
            org: { required: true, type: 'string' },
            parent_team_id: { type: 'integer' },
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' },
            privacy: { enum: ['secret', 'closed'], type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug'
        },
        updateLegacy: {
          deprecated:
            'octokit.teams.updateLegacy() is deprecated, see https://developer.github.com/v3/teams/#edit-team-legacy',
          method: 'PATCH',
          params: {
            description: { type: 'string' },
            name: { required: true, type: 'string' },
            parent_team_id: { type: 'integer' },
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' },
            privacy: { enum: ['secret', 'closed'], type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id'
        }
      },
      users: {
        addEmails: {
          method: 'POST',
          params: { emails: { required: true, type: 'string[]' } },
          url: '/user/emails'
        },
        block: {
          method: 'PUT',
          params: { username: { required: true, type: 'string' } },
          url: '/user/blocks/:username'
        },
        checkBlocked: {
          method: 'GET',
          params: { username: { required: true, type: 'string' } },
          url: '/user/blocks/:username'
        },
        checkFollowing: {
          method: 'GET',
          params: { username: { required: true, type: 'string' } },
          url: '/user/following/:username'
        },
        checkFollowingForUser: {
          method: 'GET',
          params: {
            target_user: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/following/:target_user'
        },
        createGpgKey: {
          method: 'POST',
          params: { armored_public_key: { type: 'string' } },
          url: '/user/gpg_keys'
        },
        createPublicKey: {
          method: 'POST',
          params: { key: { type: 'string' }, title: { type: 'string' } },
          url: '/user/keys'
        },
        deleteEmails: {
          method: 'DELETE',
          params: { emails: { required: true, type: 'string[]' } },
          url: '/user/emails'
        },
        deleteGpgKey: {
          method: 'DELETE',
          params: { gpg_key_id: { required: true, type: 'integer' } },
          url: '/user/gpg_keys/:gpg_key_id'
        },
        deletePublicKey: {
          method: 'DELETE',
          params: { key_id: { required: true, type: 'integer' } },
          url: '/user/keys/:key_id'
        },
        follow: {
          method: 'PUT',
          params: { username: { required: true, type: 'string' } },
          url: '/user/following/:username'
        },
        getAuthenticated: { method: 'GET', params: {}, url: '/user' },
        getByUsername: {
          method: 'GET',
          params: { username: { required: true, type: 'string' } },
          url: '/users/:username'
        },
        getContextForUser: {
          method: 'GET',
          params: {
            subject_id: { type: 'string' },
            subject_type: {
              enum: ['organization', 'repository', 'issue', 'pull_request'],
              type: 'string'
            },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/hovercard'
        },
        getGpgKey: {
          method: 'GET',
          params: { gpg_key_id: { required: true, type: 'integer' } },
          url: '/user/gpg_keys/:gpg_key_id'
        },
        getPublicKey: {
          method: 'GET',
          params: { key_id: { required: true, type: 'integer' } },
          url: '/user/keys/:key_id'
        },
        list: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'string' }
          },
          url: '/users'
        },
        listBlocked: { method: 'GET', params: {}, url: '/user/blocks' },
        listEmails: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/emails'
        },
        listFollowersForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/followers'
        },
        listFollowersForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/followers'
        },
        listFollowingForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/following'
        },
        listFollowingForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/following'
        },
        listGpgKeys: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/gpg_keys'
        },
        listGpgKeysForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/gpg_keys'
        },
        listPublicEmails: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/public_emails'
        },
        listPublicKeys: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/keys'
        },
        listPublicKeysForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/keys'
        },
        togglePrimaryEmailVisibility: {
          method: 'PATCH',
          params: {
            email: { required: true, type: 'string' },
            visibility: { required: true, type: 'string' }
          },
          url: '/user/email/visibility'
        },
        unblock: {
          method: 'DELETE',
          params: { username: { required: true, type: 'string' } },
          url: '/user/blocks/:username'
        },
        unfollow: {
          method: 'DELETE',
          params: { username: { required: true, type: 'string' } },
          url: '/user/following/:username'
        },
        updateAuthenticated: {
          method: 'PATCH',
          params: {
            bio: { type: 'string' },
            blog: { type: 'string' },
            company: { type: 'string' },
            email: { type: 'string' },
            hireable: { type: 'boolean' },
            location: { type: 'string' },
            name: { type: 'string' }
          },
          url: '/user'
        }
      }
    }
    const s = '2.4.0'
    function registerEndpoints(e, t) {
      Object.keys(t).forEach(r => {
        if (!e[r]) {
          e[r] = {}
        }
        Object.keys(t[r]).forEach(i => {
          const s = t[r][i]
          const o = ['method', 'url', 'headers'].reduce((e, t) => {
            if (typeof s[t] !== 'undefined') {
              e[t] = s[t]
            }
            return e
          }, {})
          o.request = { validate: s.params }
          let a = e.request.defaults(o)
          const u = Object.keys(s.params || {}).find(e => s.params[e].deprecated)
          if (u) {
            const t = patchForDeprecation.bind(null, e, s)
            a = t(e.request.defaults(o), `.${r}.${i}()`)
            a.endpoint = t(a.endpoint, `.${r}.${i}.endpoint()`)
            a.endpoint.merge = t(a.endpoint.merge, `.${r}.${i}.endpoint.merge()`)
          }
          if (s.deprecated) {
            e[r][i] = Object.assign(function deprecatedEndpointMethod() {
              e.log.warn(new n.Deprecation(`[@octokit/rest] ${s.deprecated}`))
              e[r][i] = a
              return a.apply(null, arguments)
            }, a)
            return
          }
          e[r][i] = a
        })
      })
    }
    function patchForDeprecation(e, t, r, i) {
      const s = s => {
        s = Object.assign({}, s)
        Object.keys(s).forEach(r => {
          if (t.params[r] && t.params[r].deprecated) {
            const o = t.params[r].alias
            e.log.warn(
              new n.Deprecation(
                `[@octokit/rest] "${r}" parameter is deprecated for "${i}". Use "${o}" instead`
              )
            )
            if (!(o in s)) {
              s[o] = s[r]
            }
            delete s[r]
          }
        })
        return r(s)
      }
      Object.keys(r).forEach(e => {
        s[e] = r[e]
      })
      return s
    }
    function restEndpointMethods(e) {
      e.registerEndpoints = registerEndpoints.bind(null, e)
      registerEndpoints(e, i)
      ;[
        ['gitdata', 'git'],
        ['authorization', 'oauthAuthorizations'],
        ['pullRequests', 'pulls']
      ].forEach(([t, r]) => {
        Object.defineProperty(e, t, {
          get() {
            e.log.warn(
              new n.Deprecation(
                `[@octokit/plugin-rest-endpoint-methods] "octokit.${t}.*" methods are deprecated, use "octokit.${r}.*" instead`
              )
            )
            return e[r]
          }
        })
      })
      return {}
    }
    restEndpointMethods.VERSION = s
    t.restEndpointMethods = restEndpointMethods
  },
  850: function(e, t, r) {
    e.exports = paginationMethodsPlugin
    function paginationMethodsPlugin(e) {
      e.getFirstPage = r(777).bind(null, e)
      e.getLastPage = r(649).bind(null, e)
      e.getNextPage = r(550).bind(null, e)
      e.getPreviousPage = r(563).bind(null, e)
      e.hasFirstPage = r(536)
      e.hasLastPage = r(336)
      e.hasNextPage = r(929)
      e.hasPreviousPage = r(558)
    }
  },
  854: function(e) {
    var t = 'Expected a function'
    var r = '__lodash_hash_undefined__'
    var n = 1 / 0
    var i = '[object Function]',
      s = '[object GeneratorFunction]',
      o = '[object Symbol]'
    var a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      u = /^\w*$/,
      p = /^\./,
      c = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
    var d = /[\\^$.*+?()[\]{}|]/g
    var l = /\\(\\)?/g
    var m = /^\[object .+?Constructor\]$/
    var g = typeof global == 'object' && global && global.Object === Object && global
    var h = typeof self == 'object' && self && self.Object === Object && self
    var y = g || h || Function('return this')()
    function getValue(e, t) {
      return e == null ? undefined : e[t]
    }
    function isHostObject(e) {
      var t = false
      if (e != null && typeof e.toString != 'function') {
        try {
          t = !!(e + '')
        } catch (e) {}
      }
      return t
    }
    var f = Array.prototype,
      b = Function.prototype,
      _ = Object.prototype
    var v = y['__core-js_shared__']
    var q = (function() {
      var e = /[^.]+$/.exec((v && v.keys && v.keys.IE_PROTO) || '')
      return e ? 'Symbol(src)_1.' + e : ''
    })()
    var w = b.toString
    var E = _.hasOwnProperty
    var T = _.toString
    var k = RegExp(
      '^' +
        w
          .call(E)
          .replace(d, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    )
    var C = y.Symbol,
      j = f.splice
    var S = getNative(y, 'Map'),
      O = getNative(Object, 'create')
    var x = C ? C.prototype : undefined,
      P = x ? x.toString : undefined
    function Hash(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    function hashClear() {
      this.__data__ = O ? O(null) : {}
    }
    function hashDelete(e) {
      return this.has(e) && delete this.__data__[e]
    }
    function hashGet(e) {
      var t = this.__data__
      if (O) {
        var n = t[e]
        return n === r ? undefined : n
      }
      return E.call(t, e) ? t[e] : undefined
    }
    function hashHas(e) {
      var t = this.__data__
      return O ? t[e] !== undefined : E.call(t, e)
    }
    function hashSet(e, t) {
      var n = this.__data__
      n[e] = O && t === undefined ? r : t
      return this
    }
    Hash.prototype.clear = hashClear
    Hash.prototype['delete'] = hashDelete
    Hash.prototype.get = hashGet
    Hash.prototype.has = hashHas
    Hash.prototype.set = hashSet
    function ListCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    function listCacheClear() {
      this.__data__ = []
    }
    function listCacheDelete(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      if (r < 0) {
        return false
      }
      var n = t.length - 1
      if (r == n) {
        t.pop()
      } else {
        j.call(t, r, 1)
      }
      return true
    }
    function listCacheGet(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      return r < 0 ? undefined : t[r][1]
    }
    function listCacheHas(e) {
      return assocIndexOf(this.__data__, e) > -1
    }
    function listCacheSet(e, t) {
      var r = this.__data__,
        n = assocIndexOf(r, e)
      if (n < 0) {
        r.push([e, t])
      } else {
        r[n][1] = t
      }
      return this
    }
    ListCache.prototype.clear = listCacheClear
    ListCache.prototype['delete'] = listCacheDelete
    ListCache.prototype.get = listCacheGet
    ListCache.prototype.has = listCacheHas
    ListCache.prototype.set = listCacheSet
    function MapCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    function mapCacheClear() {
      this.__data__ = { hash: new Hash(), map: new (S || ListCache)(), string: new Hash() }
    }
    function mapCacheDelete(e) {
      return getMapData(this, e)['delete'](e)
    }
    function mapCacheGet(e) {
      return getMapData(this, e).get(e)
    }
    function mapCacheHas(e) {
      return getMapData(this, e).has(e)
    }
    function mapCacheSet(e, t) {
      getMapData(this, e).set(e, t)
      return this
    }
    MapCache.prototype.clear = mapCacheClear
    MapCache.prototype['delete'] = mapCacheDelete
    MapCache.prototype.get = mapCacheGet
    MapCache.prototype.has = mapCacheHas
    MapCache.prototype.set = mapCacheSet
    function assocIndexOf(e, t) {
      var r = e.length
      while (r--) {
        if (eq(e[r][0], t)) {
          return r
        }
      }
      return -1
    }
    function baseGet(e, t) {
      t = isKey(t, e) ? [t] : castPath(t)
      var r = 0,
        n = t.length
      while (e != null && r < n) {
        e = e[toKey(t[r++])]
      }
      return r && r == n ? e : undefined
    }
    function baseIsNative(e) {
      if (!isObject(e) || isMasked(e)) {
        return false
      }
      var t = isFunction(e) || isHostObject(e) ? k : m
      return t.test(toSource(e))
    }
    function baseToString(e) {
      if (typeof e == 'string') {
        return e
      }
      if (isSymbol(e)) {
        return P ? P.call(e) : ''
      }
      var t = e + ''
      return t == '0' && 1 / e == -n ? '-0' : t
    }
    function castPath(e) {
      return A(e) ? e : R(e)
    }
    function getMapData(e, t) {
      var r = e.__data__
      return isKeyable(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
    }
    function getNative(e, t) {
      var r = getValue(e, t)
      return baseIsNative(r) ? r : undefined
    }
    function isKey(e, t) {
      if (A(e)) {
        return false
      }
      var r = typeof e
      if (r == 'number' || r == 'symbol' || r == 'boolean' || e == null || isSymbol(e)) {
        return true
      }
      return u.test(e) || !a.test(e) || (t != null && e in Object(t))
    }
    function isKeyable(e) {
      var t = typeof e
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null
    }
    function isMasked(e) {
      return !!q && q in e
    }
    var R = memoize(function(e) {
      e = toString(e)
      var t = []
      if (p.test(e)) {
        t.push('')
      }
      e.replace(c, function(e, r, n, i) {
        t.push(n ? i.replace(l, '$1') : r || e)
      })
      return t
    })
    function toKey(e) {
      if (typeof e == 'string' || isSymbol(e)) {
        return e
      }
      var t = e + ''
      return t == '0' && 1 / e == -n ? '-0' : t
    }
    function toSource(e) {
      if (e != null) {
        try {
          return w.call(e)
        } catch (e) {}
        try {
          return e + ''
        } catch (e) {}
      }
      return ''
    }
    function memoize(e, r) {
      if (typeof e != 'function' || (r && typeof r != 'function')) {
        throw new TypeError(t)
      }
      var n = function() {
        var t = arguments,
          i = r ? r.apply(this, t) : t[0],
          s = n.cache
        if (s.has(i)) {
          return s.get(i)
        }
        var o = e.apply(this, t)
        n.cache = s.set(i, o)
        return o
      }
      n.cache = new (memoize.Cache || MapCache)()
      return n
    }
    memoize.Cache = MapCache
    function eq(e, t) {
      return e === t || (e !== e && t !== t)
    }
    var A = Array.isArray
    function isFunction(e) {
      var t = isObject(e) ? T.call(e) : ''
      return t == i || t == s
    }
    function isObject(e) {
      var t = typeof e
      return !!e && (t == 'object' || t == 'function')
    }
    function isObjectLike(e) {
      return !!e && typeof e == 'object'
    }
    function isSymbol(e) {
      return typeof e == 'symbol' || (isObjectLike(e) && T.call(e) == o)
    }
    function toString(e) {
      return e == null ? '' : baseToString(e)
    }
    function get(e, t, r) {
      var n = e == null ? undefined : baseGet(e, t)
      return n === undefined ? r : n
    }
    e.exports = get
  },
  855: function(e, t, r) {
    e.exports = registerPlugin
    const n = r(47)
    function registerPlugin(e, t) {
      return n(e.includes(t) ? e : e.concat(t))
    }
  },
  863: function(e, t, r) {
    e.exports = authenticationBeforeRequest
    const n = r(675)
    const i = r(143)
    function authenticationBeforeRequest(e, t) {
      if (typeof e.auth === 'string') {
        t.headers.authorization = i(e.auth)
        return
      }
      if (e.auth.username) {
        const r = n(`${e.auth.username}:${e.auth.password}`)
        t.headers.authorization = `Basic ${r}`
        if (e.otp) {
          t.headers['x-github-otp'] = e.otp
        }
        return
      }
      if (e.auth.clientId) {
        if (/\/applications\/:?[\w_]+\/tokens\/:?[\w_]+($|\?)/.test(t.url)) {
          const r = n(`${e.auth.clientId}:${e.auth.clientSecret}`)
          t.headers.authorization = `Basic ${r}`
          return
        }
        t.url += t.url.indexOf('?') === -1 ? '?' : '&'
        t.url += `client_id=${e.auth.clientId}&client_secret=${e.auth.clientSecret}`
        return
      }
      return Promise.resolve()
        .then(() => {
          return e.auth()
        })
        .then(e => {
          t.headers.authorization = i(e)
        })
    }
  },
  864: function(e, t, r) {
    'use strict'
    var n = r(35)
    e.exports = n.isStandardBrowserEnv()
      ? (function standardBrowserEnv() {
          return {
            write: function write(e, t, r, i, s, o) {
              var a = []
              a.push(e + '=' + encodeURIComponent(t))
              if (n.isNumber(r)) {
                a.push('expires=' + new Date(r).toGMTString())
              }
              if (n.isString(i)) {
                a.push('path=' + i)
              }
              if (n.isString(s)) {
                a.push('domain=' + s)
              }
              if (o === true) {
                a.push('secure')
              }
              document.cookie = a.join('; ')
            },
            read: function read(e) {
              var t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'))
              return t ? decodeURIComponent(t[3]) : null
            },
            remove: function remove(e) {
              this.write(e, '', Date.now() - 864e5)
            }
          }
        })()
      : (function nonStandardBrowserEnv() {
          return {
            write: function write() {},
            read: function read() {
              return null
            },
            remove: function remove() {}
          }
        })()
  },
  866: function(e, t, r) {
    'use strict'
    var n = r(816)
    e.exports = function(e) {
      var t = e.match(n)
      if (!t) {
        return null
      }
      var r = t[0].replace(/#! ?/, '').split(' ')
      var i = r[0].split('/').pop()
      var s = r[1]
      return i === 'env' ? s : i + (s ? ' ' + s : '')
    }
  },
  867: function(e) {
    e.exports = require('tty')
  },
  881: function(e) {
    'use strict'
    const t = process.platform === 'win32'
    function notFoundError(e, t) {
      return Object.assign(new Error(`${t} ${e.command} ENOENT`), {
        code: 'ENOENT',
        errno: 'ENOENT',
        syscall: `${t} ${e.command}`,
        path: e.command,
        spawnargs: e.args
      })
    }
    function hookChildProcess(e, r) {
      if (!t) {
        return
      }
      const n = e.emit
      e.emit = function(t, i) {
        if (t === 'exit') {
          const t = verifyENOENT(i, r, 'spawn')
          if (t) {
            return n.call(e, 'error', t)
          }
        }
        return n.apply(e, arguments)
      }
    }
    function verifyENOENT(e, r) {
      if (t && e === 1 && !r.file) {
        return notFoundError(r.original, 'spawn')
      }
      return null
    }
    function verifyENOENTSync(e, r) {
      if (t && e === 1 && !r.file) {
        return notFoundError(r.original, 'spawnSync')
      }
      return null
    }
    e.exports = {
      hookChildProcess: hookChildProcess,
      verifyENOENT: verifyENOENT,
      verifyENOENTSync: verifyENOENTSync,
      notFoundError: notFoundError
    }
  },
  883: function(e) {
    var t = 'Expected a function'
    var r = '__lodash_hash_undefined__'
    var n = 1 / 0,
      i = 9007199254740991
    var s = '[object Function]',
      o = '[object GeneratorFunction]',
      a = '[object Symbol]'
    var u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      p = /^\w*$/,
      c = /^\./,
      d = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
    var l = /[\\^$.*+?()[\]{}|]/g
    var m = /\\(\\)?/g
    var g = /^\[object .+?Constructor\]$/
    var h = /^(?:0|[1-9]\d*)$/
    var y = typeof global == 'object' && global && global.Object === Object && global
    var f = typeof self == 'object' && self && self.Object === Object && self
    var b = y || f || Function('return this')()
    function getValue(e, t) {
      return e == null ? undefined : e[t]
    }
    function isHostObject(e) {
      var t = false
      if (e != null && typeof e.toString != 'function') {
        try {
          t = !!(e + '')
        } catch (e) {}
      }
      return t
    }
    var _ = Array.prototype,
      v = Function.prototype,
      q = Object.prototype
    var w = b['__core-js_shared__']
    var E = (function() {
      var e = /[^.]+$/.exec((w && w.keys && w.keys.IE_PROTO) || '')
      return e ? 'Symbol(src)_1.' + e : ''
    })()
    var T = v.toString
    var k = q.hasOwnProperty
    var C = q.toString
    var j = RegExp(
      '^' +
        T.call(k)
          .replace(l, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    )
    var S = b.Symbol,
      O = _.splice
    var x = getNative(b, 'Map'),
      P = getNative(Object, 'create')
    var R = S ? S.prototype : undefined,
      A = R ? R.toString : undefined
    function Hash(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    function hashClear() {
      this.__data__ = P ? P(null) : {}
    }
    function hashDelete(e) {
      return this.has(e) && delete this.__data__[e]
    }
    function hashGet(e) {
      var t = this.__data__
      if (P) {
        var n = t[e]
        return n === r ? undefined : n
      }
      return k.call(t, e) ? t[e] : undefined
    }
    function hashHas(e) {
      var t = this.__data__
      return P ? t[e] !== undefined : k.call(t, e)
    }
    function hashSet(e, t) {
      var n = this.__data__
      n[e] = P && t === undefined ? r : t
      return this
    }
    Hash.prototype.clear = hashClear
    Hash.prototype['delete'] = hashDelete
    Hash.prototype.get = hashGet
    Hash.prototype.has = hashHas
    Hash.prototype.set = hashSet
    function ListCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    function listCacheClear() {
      this.__data__ = []
    }
    function listCacheDelete(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      if (r < 0) {
        return false
      }
      var n = t.length - 1
      if (r == n) {
        t.pop()
      } else {
        O.call(t, r, 1)
      }
      return true
    }
    function listCacheGet(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      return r < 0 ? undefined : t[r][1]
    }
    function listCacheHas(e) {
      return assocIndexOf(this.__data__, e) > -1
    }
    function listCacheSet(e, t) {
      var r = this.__data__,
        n = assocIndexOf(r, e)
      if (n < 0) {
        r.push([e, t])
      } else {
        r[n][1] = t
      }
      return this
    }
    ListCache.prototype.clear = listCacheClear
    ListCache.prototype['delete'] = listCacheDelete
    ListCache.prototype.get = listCacheGet
    ListCache.prototype.has = listCacheHas
    ListCache.prototype.set = listCacheSet
    function MapCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    function mapCacheClear() {
      this.__data__ = { hash: new Hash(), map: new (x || ListCache)(), string: new Hash() }
    }
    function mapCacheDelete(e) {
      return getMapData(this, e)['delete'](e)
    }
    function mapCacheGet(e) {
      return getMapData(this, e).get(e)
    }
    function mapCacheHas(e) {
      return getMapData(this, e).has(e)
    }
    function mapCacheSet(e, t) {
      getMapData(this, e).set(e, t)
      return this
    }
    MapCache.prototype.clear = mapCacheClear
    MapCache.prototype['delete'] = mapCacheDelete
    MapCache.prototype.get = mapCacheGet
    MapCache.prototype.has = mapCacheHas
    MapCache.prototype.set = mapCacheSet
    function assignValue(e, t, r) {
      var n = e[t]
      if (!(k.call(e, t) && eq(n, r)) || (r === undefined && !(t in e))) {
        e[t] = r
      }
    }
    function assocIndexOf(e, t) {
      var r = e.length
      while (r--) {
        if (eq(e[r][0], t)) {
          return r
        }
      }
      return -1
    }
    function baseIsNative(e) {
      if (!isObject(e) || isMasked(e)) {
        return false
      }
      var t = isFunction(e) || isHostObject(e) ? j : g
      return t.test(toSource(e))
    }
    function baseSet(e, t, r, n) {
      if (!isObject(e)) {
        return e
      }
      t = isKey(t, e) ? [t] : castPath(t)
      var i = -1,
        s = t.length,
        o = s - 1,
        a = e
      while (a != null && ++i < s) {
        var u = toKey(t[i]),
          p = r
        if (i != o) {
          var c = a[u]
          p = n ? n(c, u, a) : undefined
          if (p === undefined) {
            p = isObject(c) ? c : isIndex(t[i + 1]) ? [] : {}
          }
        }
        assignValue(a, u, p)
        a = a[u]
      }
      return e
    }
    function baseToString(e) {
      if (typeof e == 'string') {
        return e
      }
      if (isSymbol(e)) {
        return A ? A.call(e) : ''
      }
      var t = e + ''
      return t == '0' && 1 / e == -n ? '-0' : t
    }
    function castPath(e) {
      return D(e) ? e : G(e)
    }
    function getMapData(e, t) {
      var r = e.__data__
      return isKeyable(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
    }
    function getNative(e, t) {
      var r = getValue(e, t)
      return baseIsNative(r) ? r : undefined
    }
    function isIndex(e, t) {
      t = t == null ? i : t
      return !!t && (typeof e == 'number' || h.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    function isKey(e, t) {
      if (D(e)) {
        return false
      }
      var r = typeof e
      if (r == 'number' || r == 'symbol' || r == 'boolean' || e == null || isSymbol(e)) {
        return true
      }
      return p.test(e) || !u.test(e) || (t != null && e in Object(t))
    }
    function isKeyable(e) {
      var t = typeof e
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null
    }
    function isMasked(e) {
      return !!E && E in e
    }
    var G = memoize(function(e) {
      e = toString(e)
      var t = []
      if (c.test(e)) {
        t.push('')
      }
      e.replace(d, function(e, r, n, i) {
        t.push(n ? i.replace(m, '$1') : r || e)
      })
      return t
    })
    function toKey(e) {
      if (typeof e == 'string' || isSymbol(e)) {
        return e
      }
      var t = e + ''
      return t == '0' && 1 / e == -n ? '-0' : t
    }
    function toSource(e) {
      if (e != null) {
        try {
          return T.call(e)
        } catch (e) {}
        try {
          return e + ''
        } catch (e) {}
      }
      return ''
    }
    function memoize(e, r) {
      if (typeof e != 'function' || (r && typeof r != 'function')) {
        throw new TypeError(t)
      }
      var n = function() {
        var t = arguments,
          i = r ? r.apply(this, t) : t[0],
          s = n.cache
        if (s.has(i)) {
          return s.get(i)
        }
        var o = e.apply(this, t)
        n.cache = s.set(i, o)
        return o
      }
      n.cache = new (memoize.Cache || MapCache)()
      return n
    }
    memoize.Cache = MapCache
    function eq(e, t) {
      return e === t || (e !== e && t !== t)
    }
    var D = Array.isArray
    function isFunction(e) {
      var t = isObject(e) ? C.call(e) : ''
      return t == s || t == o
    }
    function isObject(e) {
      var t = typeof e
      return !!e && (t == 'object' || t == 'function')
    }
    function isObjectLike(e) {
      return !!e && typeof e == 'object'
    }
    function isSymbol(e) {
      return typeof e == 'symbol' || (isObjectLike(e) && C.call(e) == a)
    }
    function toString(e) {
      return e == null ? '' : baseToString(e)
    }
    function set(e, t, r) {
      return e == null ? e : baseSet(e, t, r)
    }
    e.exports = set
  },
  887: function(e) {
    'use strict'
    e.exports = function combineURLs(e, t) {
      return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
    }
  },
  903: function(e) {
    e.exports = require('zlib')
  },
  916: function(e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    const r = '1.0.0'
    function requestLog(e) {
      e.hook.wrap('request', (t, r) => {
        e.log.debug('request', r)
        const n = Date.now()
        const i = e.request.endpoint.parse(r)
        const s = i.url.replace(r.baseUrl, '')
        return t(r)
          .then(t => {
            e.log.info(`${i.method} ${s} - ${t.status} in ${Date.now() - n}ms`)
            return t
          })
          .catch(t => {
            e.log.info(`${i.method} ${s} - ${t.status} in ${Date.now() - n}ms`)
            throw t
          })
      })
    }
    requestLog.VERSION = r
    t.requestLog = requestLog
  },
  929: function(e, t, r) {
    e.exports = hasNextPage
    const n = r(370)
    const i = r(577)
    function hasNextPage(e) {
      n(
        `octokit.hasNextPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`
      )
      return i(e).next
    }
  },
  946: function(e, t, r) {
    'use strict'
    var n = r(35)
    var i = r(589)
    var s = r(732)
    var o = r(529)
    var a = r(590)
    var u = r(887)
    function throwIfCancellationRequested(e) {
      if (e.cancelToken) {
        e.cancelToken.throwIfRequested()
      }
    }
    e.exports = function dispatchRequest(e) {
      throwIfCancellationRequested(e)
      if (e.baseURL && !a(e.url)) {
        e.url = u(e.baseURL, e.url)
      }
      e.headers = e.headers || {}
      e.data = i(e.data, e.headers, e.transformRequest)
      e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {})
      n.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function cleanHeaderConfig(t) {
          delete e.headers[t]
        }
      )
      var t = e.adapter || o.adapter
      return t(e).then(
        function onAdapterResolution(t) {
          throwIfCancellationRequested(e)
          t.data = i(t.data, t.headers, e.transformResponse)
          return t
        },
        function onAdapterRejection(t) {
          if (!s(t)) {
            throwIfCancellationRequested(e)
            if (t && t.response) {
              t.response.data = i(t.response.data, t.response.headers, e.transformResponse)
            }
          }
          return Promise.reject(t)
        }
      )
    }
  },
  948: function(e) {
    'use strict'
    e.exports = function(e) {
      try {
        return e()
      } catch (e) {}
    }
  },
  954: function(e) {
    e.exports = validateAuth
    function validateAuth(e) {
      if (typeof e === 'string') {
        return
      }
      if (typeof e === 'function') {
        return
      }
      if (e.username && e.password) {
        return
      }
      if (e.clientId && e.clientSecret) {
        return
      }
      throw new Error(`Invalid "auth" option: ${JSON.stringify(e)}`)
    }
  },
  955: function(e, t, r) {
    'use strict'
    const n = r(622)
    const i = r(129)
    const s = r(20)
    const o = r(768)
    const a = r(621)
    const u = r(323)
    const p = r(145)
    const c = r(697)
    const d = r(260)
    const l = r(427)
    const m = r(168)
    const g = 1e3 * 1e3 * 10
    function handleArgs(e, t, r) {
      let i
      r = Object.assign({ extendEnv: true, env: {} }, r)
      if (r.extendEnv) {
        r.env = Object.assign({}, process.env, r.env)
      }
      if (r.__winShell === true) {
        delete r.__winShell
        i = { command: e, args: t, options: r, file: e, original: { cmd: e, args: t } }
      } else {
        i = s._parse(e, t, r)
      }
      r = Object.assign(
        {
          maxBuffer: g,
          buffer: true,
          stripEof: true,
          preferLocal: true,
          localDir: i.options.cwd || process.cwd(),
          encoding: 'utf8',
          reject: true,
          cleanup: true
        },
        i.options
      )
      r.stdio = m(r)
      if (r.preferLocal) {
        r.env = a.env(Object.assign({}, r, { cwd: r.localDir }))
      }
      if (r.detached) {
        r.cleanup = false
      }
      if (process.platform === 'win32' && n.basename(i.command) === 'cmd.exe') {
        i.args.unshift('/q')
      }
      return { cmd: i.command, args: i.args, opts: r, parsed: i }
    }
    function handleInput(e, t) {
      if (t === null || t === undefined) {
        return
      }
      if (u(t)) {
        t.pipe(e.stdin)
      } else {
        e.stdin.end(t)
      }
    }
    function handleOutput(e, t) {
      if (t && e.stripEof) {
        t = o(t)
      }
      return t
    }
    function handleShell(e, t, r) {
      let n = '/bin/sh'
      let i = ['-c', t]
      r = Object.assign({}, r)
      if (process.platform === 'win32') {
        r.__winShell = true
        n = process.env.comspec || 'cmd.exe'
        i = ['/s', '/c', `"${t}"`]
        r.windowsVerbatimArguments = true
      }
      if (r.shell) {
        n = r.shell
        delete r.shell
      }
      return e(n, i, r)
    }
    function getStream(e, t, { encoding: r, buffer: n, maxBuffer: i }) {
      if (!e[t]) {
        return null
      }
      let s
      if (!n) {
        s = new Promise((r, n) => {
          e[t].once('end', r).once('error', n)
        })
      } else if (r) {
        s = p(e[t], { encoding: r, maxBuffer: i })
      } else {
        s = p.buffer(e[t], { maxBuffer: i })
      }
      return s.catch(e => {
        e.stream = t
        e.message = `${t} ${e.message}`
        throw e
      })
    }
    function makeError(e, t) {
      const { stdout: r, stderr: n } = e
      let i = e.error
      const { code: s, signal: o } = e
      const { parsed: a, joinedCmd: u } = t
      const p = t.timedOut || false
      if (!i) {
        let e = ''
        if (Array.isArray(a.opts.stdio)) {
          if (a.opts.stdio[2] !== 'inherit') {
            e += e.length > 0 ? n : `\n${n}`
          }
          if (a.opts.stdio[1] !== 'inherit') {
            e += `\n${r}`
          }
        } else if (a.opts.stdio !== 'inherit') {
          e = `\n${n}${r}`
        }
        i = new Error(`Command failed: ${u}${e}`)
        i.code = s < 0 ? l(s) : s
      }
      i.stdout = r
      i.stderr = n
      i.failed = true
      i.signal = o || null
      i.cmd = u
      i.timedOut = p
      return i
    }
    function joinCmd(e, t) {
      let r = e
      if (Array.isArray(t) && t.length > 0) {
        r += ' ' + t.join(' ')
      }
      return r
    }
    e.exports = (e, t, r) => {
      const n = handleArgs(e, t, r)
      const { encoding: o, buffer: a, maxBuffer: u } = n.opts
      const p = joinCmd(e, t)
      let l
      try {
        l = i.spawn(n.cmd, n.args, n.opts)
      } catch (e) {
        return Promise.reject(e)
      }
      let m
      if (n.opts.cleanup) {
        m = d(() => {
          l.kill()
        })
      }
      let g = null
      let h = false
      const y = () => {
        if (g) {
          clearTimeout(g)
          g = null
        }
        if (m) {
          m()
        }
      }
      if (n.opts.timeout > 0) {
        g = setTimeout(() => {
          g = null
          h = true
          l.kill(n.opts.killSignal)
        }, n.opts.timeout)
      }
      const f = new Promise(e => {
        l.on('exit', (t, r) => {
          y()
          e({ code: t, signal: r })
        })
        l.on('error', t => {
          y()
          e({ error: t })
        })
        if (l.stdin) {
          l.stdin.on('error', t => {
            y()
            e({ error: t })
          })
        }
      })
      function destroy() {
        if (l.stdout) {
          l.stdout.destroy()
        }
        if (l.stderr) {
          l.stderr.destroy()
        }
      }
      const b = () =>
        c(
          Promise.all([
            f,
            getStream(l, 'stdout', { encoding: o, buffer: a, maxBuffer: u }),
            getStream(l, 'stderr', { encoding: o, buffer: a, maxBuffer: u })
          ]).then(e => {
            const t = e[0]
            t.stdout = e[1]
            t.stderr = e[2]
            if (t.error || t.code !== 0 || t.signal !== null) {
              const e = makeError(t, { joinedCmd: p, parsed: n, timedOut: h })
              e.killed = e.killed || l.killed
              if (!n.opts.reject) {
                return e
              }
              throw e
            }
            return {
              stdout: handleOutput(n.opts, t.stdout),
              stderr: handleOutput(n.opts, t.stderr),
              code: 0,
              failed: false,
              killed: false,
              signal: null,
              cmd: p,
              timedOut: false
            }
          }),
          destroy
        )
      s._enoent.hookChildProcess(l, n.parsed)
      handleInput(l, n.opts.input)
      l.then = (e, t) => b().then(e, t)
      l.catch = e => b().catch(e)
      return l
    }
    e.exports.stdout = (...t) => e.exports(...t).then(e => e.stdout)
    e.exports.stderr = (...t) => e.exports(...t).then(e => e.stderr)
    e.exports.shell = (t, r) => handleShell(e.exports, t, r)
    e.exports.sync = (e, t, r) => {
      const n = handleArgs(e, t, r)
      const s = joinCmd(e, t)
      if (u(n.opts.input)) {
        throw new TypeError('The `input` option cannot be a stream in sync mode')
      }
      const o = i.spawnSync(n.cmd, n.args, n.opts)
      o.code = o.status
      if (o.error || o.status !== 0 || o.signal !== null) {
        const e = makeError(o, { joinedCmd: s, parsed: n })
        if (!n.opts.reject) {
          return e
        }
        throw e
      }
      return {
        stdout: handleOutput(n.opts, o.stdout),
        stderr: handleOutput(n.opts, o.stderr),
        code: 0,
        failed: false,
        signal: null,
        cmd: s,
        timedOut: false
      }
    }
    e.exports.shellSync = (t, r) => handleShell(e.exports.sync, t, r)
  },
  966: function(e, t, r) {
    'use strict'
    const { PassThrough: n } = r(413)
    e.exports = e => {
      e = Object.assign({}, e)
      const { array: t } = e
      let { encoding: r } = e
      const i = r === 'buffer'
      let s = false
      if (t) {
        s = !(r || i)
      } else {
        r = r || 'utf8'
      }
      if (i) {
        r = null
      }
      let o = 0
      const a = []
      const u = new n({ objectMode: s })
      if (r) {
        u.setEncoding(r)
      }
      u.on('data', e => {
        a.push(e)
        if (s) {
          o = a.length
        } else {
          o += e.length
        }
      })
      u.getBufferedValue = () => {
        if (t) {
          return a
        }
        return i ? Buffer.concat(a, o) : a.join('')
      }
      u.getBufferedLength = () => o
      return u
    }
  },
  969: function(e, t, r) {
    var n = r(11)
    e.exports = n(once)
    e.exports.strict = n(onceStrict)
    once.proto = once(function() {
      Object.defineProperty(Function.prototype, 'once', {
        value: function() {
          return once(this)
        },
        configurable: true
      })
      Object.defineProperty(Function.prototype, 'onceStrict', {
        value: function() {
          return onceStrict(this)
        },
        configurable: true
      })
    })
    function once(e) {
      var t = function() {
        if (t.called) return t.value
        t.called = true
        return (t.value = e.apply(this, arguments))
      }
      t.called = false
      return t
    }
    function onceStrict(e) {
      var t = function() {
        if (t.called) throw new Error(t.onceError)
        t.called = true
        return (t.value = e.apply(this, arguments))
      }
      var r = e.name || 'Function wrapped with `once`'
      t.onceError = r + " shouldn't be called more than once"
      t.called = false
      return t
    }
  }
})
