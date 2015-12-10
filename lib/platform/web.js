'use strict'
exports._platform = {
  on: {
    init: {
      orientation () {
        setTimeout(() => {
          this.parent.ready.val = true
          console.warn('[Infonline] web platform not ready')
        })
      }
    },
    track: {
      infonline (data, event) {
        console.warn('[Infonline] web platform not ready')
        data.cb()
      }
    }
  }
}
