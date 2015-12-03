'use strict'
require('gaston-tester')

const TRACK_DATA = {}

describe('Infonline plugin manual tests', function () {
  var info = require('../../lib')

  // plugin will be initialized by setting its value as true
  it('should be set as ready after the init', function (done) {
    info.val = true
    info.ready.is(true, () => {
      done()
    })
  })

  // plugin must be able to send events using the track methods
  it('should be able to track stuff', function (done) {
    info.track(TRACK_DATA, function () {
      done()
    })
  })
})

