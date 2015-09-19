var notifier = require('node-notifier')
var assign = require('object-assign')

module.exports = notify
function notify (msg, opt) {
  if (!msg) return
  notifier.notify(assign({
    title: '⚠️ error',
    sound: true
  }, opt, {
    message: msg
  }))
}
