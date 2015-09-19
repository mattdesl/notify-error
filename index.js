var notifier = require('node-notifier')

module.exports = notify
function notify (msg) {
  if (!msg) return
  notifier.notify({
    title: "⚠️ error",
    sound: true,
    message: msg
  })
}
