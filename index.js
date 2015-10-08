var moment = require('moment')
var Clock = require('./lib/Clock')
var wheel = require('./lib/animations/wheel')

var endTime = new Date('2015-10-11T12:00:00');
var clock = new Clock()

setInterval(function() {
  var remaining = moment('2015-10-11T12:00:00').subtract(Date.now()).get("date")

  clock.setTime(remaining.get('hours'), remaining.get('minutes'), remaining.get('seconds'), wheel)
}, 500)
