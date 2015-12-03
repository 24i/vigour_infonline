'use strict'
module.exports = function (inject) {
  var or

  it('require plugin', function () {
    or = require('../../lib')
  })

  if (inject) {
    it('create instance with mock properties', function () {
      or = new or.Constructor(inject)
    })
  }
}
