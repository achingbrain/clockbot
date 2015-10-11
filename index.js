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

var clock = new Clock()
var offset = 0
var frequency = 5 // about 80Hz

var map = require('map-range')
var mapColour = map(function (x) {return x}, 480, 1439, 0, 255)
var actualWheel = require('./lib/animations/wheel')

function paint () {
  var now = moment(new Date())
  var minutes = (now.get('hours') * 60) + now.get('minutes')

  var colour = function () {
    return actualWheel(mapColour(minutes))
  }

  if (now.get('minutes') === 0) {
    // show an animation for the first minute of every hour
    colour = now.get('hours') % 2 === 0 ? tron : wheel
  }

  if (now.get('hours') > 23 || now.get('hours') < 8) {
    colour = function () {
      return {r: 0, g: 0, b: 0}
    }
  }

  clock.setTime(now.get('hours'), now.get('minutes'), now.get('seconds'), colour)
}

setInterval(paint, frequency)
