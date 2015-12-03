'use strict'
var Plugin = require('vigour-wrapper/lib/plugin')

module.exports = new Plugin({
  inject: require('./platform'),
  on: {
    data: {
      condition (data, done, event) {
        this.platform.emit('init', {data, done})
      }
    }
  },
  define: {
    track (data, cb) {
      this.platofrm.emit('track', {data, cb})
    }
  }
})
