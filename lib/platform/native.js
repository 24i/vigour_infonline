'use strict'
var pkg = require('../../package.json')

exports._platform = {
  inject: require('vigour-wrapper/lib/bridge/inject')(pkg.name),
  on: {
    init: {
      infonline (data, event) {
        var plugin = this.parent
        this.send('init', data.data, function (err) {
          if (!err) {
            plugin.ready.val = true
          }
        })
      }
    },
    track: {
      infonline (data, event) {
        this.send('track', data.data, data.cb)
      }
    }
  }
}
