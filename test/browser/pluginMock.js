'use strict'
exports.platform = {
  on: {
    init: {
      orientation () {
        setTimeout(() => {
          this.parent.val = true
        })
      }
    }
  }
}
