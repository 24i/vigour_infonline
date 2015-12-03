'use strict'
var pkg = require('../../package.json')

exports.platform = {
  inject: require('vigour-wrapper/lib/bridge/inject')(pkg.name)
}
