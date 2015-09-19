#!/usr/bin/env node
var notify = require('../')

var msg = process.argv.slice(2).join(' ')
if (msg && process.stdin.isTTY) {
  notify(msg)
} else {
  require('get-stdin')().then(function (msg) {
    msg = msg.toString()
    notify(msg)
  })
}
