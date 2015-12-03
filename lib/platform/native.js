'use strict'
var pkg = require('../../package.json')

exports.platform = {
  inject: require('vigour-wrapper/lib/bridge/inject')(pkg.name),
  on: {
    init: {
      infonline (data, event) {
        this.send('init', data.data, data.done)
      }
    },
    track: {
      infonline (data, event) {
        this.send('track', data.data, data.cb)
      }
    }
  }
}
