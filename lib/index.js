'use strict'
var Plugin = require('vigour-wrapper/lib/plugin')

module.exports = new Plugin({
  inject: require('./platform')
})
