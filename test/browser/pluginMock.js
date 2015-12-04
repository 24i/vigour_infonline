'use strict'
exports._platform = {
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
