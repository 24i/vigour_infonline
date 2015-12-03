'use strict'
var tests = require('../tests')
require('./bridgeMock')

var nativePlatform = require('../../lib/platform/native')

describe('Infonline plugin automated tests', function () {
  // describe('Mock plugin tests', function () {
  //   tests(require('./pluginMock'))
  // })

  describe('Mock bridge tests', function () {
    tests(nativePlatform)
  })
})
