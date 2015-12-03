'use strict'
require('gaston-tester')

const TRACK_DATA = {
  st: 'fakest',
  cp: 'fakecp',
  sv: 'fakesv',
  co: 'fakeco'
}

module.exports = function infonlineTests (inject) {
  var infonline

  it('should require', function () {
    infonline = require('../lib')
    infonline.on('error', function (err) {
      throw err
    })
  })

  if (inject) {
    it('should inject platform', function () {
      infonline.inject(inject)
    })
  }

  // plugin will be initialized by setting its value as true
  it('should be set as ready after the init', function (done) {
    infonline.val = true
    infonline.ready.is(true, () => {
      done()
    })
  })

  // plugin must be able to send events using the track methods
  it('should be able to track stuff', function (done) {
    infonline.track(TRACK_DATA, function () {
      done()
    })
  })
}
