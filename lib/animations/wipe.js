var wheel = require('./wheel')
var pins = []
var position = 0
var total = 94
var max = 0
var colour = {r: 0, g: 0, b: 0}

module.exports = function (pin) {
  if (pin === 0) {
    max++

    if (max === total) {
      max = 1
    }

    if (max === 18) {
      max = 42
    }

    if (max === 52) {
      max = 58
    }

    position++

    if (position === 255) {
      position = 0
    }

    colour = wheel(position)
  } else if (pin < max) {
    return colour
  }

  return {r: 0, g: 0, b: 0}
}
