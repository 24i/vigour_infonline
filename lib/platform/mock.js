'use strict'
exports._platform = {
  on: {
    init: {
      orientation () {
        setTimeout(() => {
          this.parent.ready.val = true
        })
      }
    },
    track: {
      infonline (data, event) {
        data.cb()
      }
    }
  }
}
