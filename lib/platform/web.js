'use strict'
exports._platform = {
  on: {
    init: {
      infonline () {
        var plugin = this.parent
        var script = document.createElement('script')
        script.onerror = () => {
          plugin.initialised.val = false
          plugin.emit('error', 'Infonline script load error')
        }
        script.onload = () => {
          plugin.ready.val = true
        }
        script.id = plugin.web.scriptId.val
        script.src = plugin.web.src.val
        document.getElementsByTagName('head')[0].appendChild(script)
      }
    },
    track: {
      infonline (data, event) {
        data.data.st = this.parent.siteId.val
        window.iom.h(data.data, 1)
        data.cb()
      }
    }
  }
}
