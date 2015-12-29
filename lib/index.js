'use strict'
var Plugin = require('vigour-wrapper/lib/plugin')

var Config = require('vigour-config')
var config = new Config().track.services.infonline

// use config for app level package.json config info
// such as trackId default track info etc.

console.log(config)

module.exports = new Plugin({
  inject: [
    require('./platform'),
    config.serialize()
  ],
  on: {
    data: {
      condition (data, done, event) {
        this._platform.emit('init', {data, done})
      }
    }
  },
  define: {
    track (data, cb) {
      this._platform.emit('track', {data, cb})
    }
  }
})
