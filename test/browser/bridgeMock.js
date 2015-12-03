'use strict'
var bridge = require('vigour-wrapper/lib/bridge')

var mockMethods = {
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

bridge.define({
  send: function (pluginId, fnName, opts, cb) {
    return mockMethods[fnName](opts, cb)
  }
})

exports.inject = require('../../lib/platform/native')
