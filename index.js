var moment = require('moment')
var Clock = require('./lib/Clock')
var wheel = require('./lib/animations/wheel')
var red = require('./lib/colours/red')
var green = require('./lib/colours/green')
var yellow = require('./lib/colours/yellow')
var flash = require('./lib/colours/flash')
var rgb = require('./lib/colours/rgb')
var tron = require('./lib/colours/tron')
var wheel = require('./lib/colours/wheel')
var walk = require('./lib/colours/walk')

var startTime = new Date('2015-10-10T12:00:00');
var endTime = moment('2015-10-11 12:00:00+01:00');
var startTime = moment('2015-10-08 20:00:00+01:00');
//var endTime = moment('2015-10-08 20:13:00+01:00');
var clock = new Clock()
var offset = 0
var frequency = 5 // about 80Hz

function findRemaining () {
  var ms = moment(endTime).diff(Date.now(), 'ms')
  return moment.duration(ms)
}

function paint () {
   var now = moment(new Date())

  if (moment(Date.now()).isBefore(startTime)) {
    return clock.setTime(0, 0, 0, green)
  }

  var remaining = findRemaining()

  if (remaining.asMilliseconds() <= 0) {
    if (remaining.asSeconds() > -20) {
      return clock.setTime(0, 0, 0, flash.bind(null, red))
    }

    var r = Math.max(parseInt(255 * ((100 + remaining.asSeconds()) / 100), 10), 0)

    return clock.setTime(0, 0, 0, rgb(r, 0, 0))
  }

  var colour = green

  if (now.get('minutes') < 6) {
    colour = now.get('hours') % 2 === 0 ? tron : wheel
  }

  if (remaining.asHours() < 1) {
    colour = yellow
  }

  if (remaining.asHours() < 1 && remaining.asMinutes() < 1) {
    colour = red

    clock.setTime(remaining.get('minutes'), remaining.get('seconds'), remaining.get('milliseconds'), colour)

    return
  }

  var hours = (remaining.get('days') * 24) + remaining.get('hours')

  clock.setTime(hours, remaining.get('minutes'), remaining.get('seconds'), colour)
}

setInterval(paint, frequency)
