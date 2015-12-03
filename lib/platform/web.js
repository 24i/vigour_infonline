'use strict'
var pkg = require('../../package.json')

// TODO web implementation is not done

exports.platform = {
  inject: require('vigour-wrapper/lib/bridge/inject')(pkg.name)
}
