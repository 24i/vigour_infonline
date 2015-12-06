'use strict'
exports._platform = {
  on: {
    init: {
      orientation () {
        setTimeout(() => {
          this.parent.ready.val = true
          console.warn('[Infonline] mock platform')
        })
      }
    },
    track: {
      infonline (data, event) {
        console.warn('[Infonline] mock platform')
        data.cb()
      }
    }
  }
}
