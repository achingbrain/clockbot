var wheel = require('./wheel')
var pins = []
var position = 0

module.exports = function (pin) {
  if (!pins[pin]) {
    pins[pin] = 0
  }

  if (pins[pin] === 3) {
    pins[pin] = 0
  }

  if (position === 255) {
    position = 0
  }

  var colour

  if ((pin + pins[pin]) % 3 === 0) {
    colour = wheel(position)
  } else {
    colour = {r: 0, g: 0, b: 0}
  }

  pins[pin]++
  position++

  return colour
}
