'use strict'
var bridge = require('vigour-wrapper-bridge')

bridge.label = 'mockBridge'
bridge.mock = {
  methods: {
    init (opts, cb) {
      setTimeout(function () {
        cb && cb(null)
      })
    },
    track (data, cb) {
      // track the data!
      setTimeout(function () {
        cb && cb(null)
      })
    }
  }
}

delete bridge.send

bridge.define({
  send: function (pluginId, fnName, opts, cb) {
    return bridge.mock.methods[fnName](opts, cb)
  }
})

module.exports = bridge
