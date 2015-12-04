'use strict'
var Plugin = require('vigour-wrapper/lib/plugin')

module.exports = new Plugin({
  inject: require('./platform'),
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
