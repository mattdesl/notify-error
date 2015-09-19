#!/usr/bin/env node
var notify = require('../')
var opt = require('rc')('notify-error', {
  sound: true
})

var msg = process.argv.slice(2).join(' ')
if (msg && process.stdin.isTTY) {
  if (msg) process.stdout.write(msg + '\n')
  notify(msg, opt)
} else {
  require('get-stdin')().then(function (msg) {
    msg = msg.toString()
    if (msg) process.stdout.write(msg)
    notify(msg, opt)
  })
}
