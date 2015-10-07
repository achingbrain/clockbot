var strip = require('rpi-ws281x-native')
var Number = require('./Number')
var Colon = require('./Colon')
var wheel = require('./animations/wheel')

process.on('SIGINT', function() {
  strip.reset()
  process.nextTick(function() {
    process.exit(0)
  })
})

var Clock = function() {
  var numLeds = 268
  strip.init(numLeds)

  this._components = []
  this._buffer = new Uint32Array(numLeds)

  var offset = 0

  this._components.push(new Number(this._buffer, offset))
  offset += Number.LED_COUNT
  this._components.push(new Number(this._buffer, offset))
  offset += Number.LED_COUNT
  this._components.push(new Colon(this._buffer, offset))
  offset += Colon.LED_COUNT
  this._components.push(new Number(this._buffer, offset))
  offset += Number.LED_COUNT
  this._components.push(new Number(this._buffer, offset))
  offset += Number.LED_COUNT
  this._components.push(new Colon(this._buffer, offset))
  offset += Colon.LED_COUNT
  this._components.push(new Number(this._buffer, offset))
  offset += Number.LED_COUNT
  this._components.push(new Number(this._buffer, offset))
  offset += Number.LED_COUNT
}

Clock.prototype.setTime = function(h, m, s) {
  var time = ''
  time += (h < 10 ? '0' + h : h)
  time += (m < 10 ? '0' + m : m)
  time += (s < 10 ? '0' + s : s)

  this._components[0].setValue(parseInt(time.charAt(0, 10)), wheel)
  this._components[1].setValue(parseInt(time.charAt(1, 10)), wheel)
  this._components[2].setValue(wheel)
  this._components[3].setValue(parseInt(time.charAt(2, 10)), wheel)
  this._components[4].setValue(parseInt(time.charAt(3, 10)), wheel)
  this._components[5].setValue(wheel)
  this._components[6].setValue(parseInt(time.charAt(4, 10)), wheel)
  this._components[7].setValue(parseInt(time.charAt(5, 10)), wheel)

  strip.render(this._buffer)
}

Clock.prototype._format = function(num, large, small) {

}

module.exports = Clock
