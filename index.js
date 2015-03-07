var strip = require('rpi-ws281x-native'),
  Clock = require('./Clock')

var clock = new Clock()

setInterval(function() {
  var date = new Date()

  clock.setTime(date.getHours(), date.getMinutes(), date.getSeconds())
}, 500)
