'use strict'
var bridge = require('vigour-wrapper/lib/bridge')

bridge.label = 'mockBridge'
bridge.mock = {
  methods: {
    init (opts, cb) {
      console.log('init!')
      setTimeout(function () {
        cb && cb(null)
      })
    },
    track (data, cb) {
      // track the data!
      console.log('track!')
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
