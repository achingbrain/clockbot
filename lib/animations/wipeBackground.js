var wheel = require('./wheel')
var pins = []
var position = 1
var total = 92
var max = 0
var colour = wheel(Math.floor(Math.random() * 255))
var lastColour = wheel(Math.floor(Math.random() * 255))

module.exports = function (pin) {
  if (pin === 0) {
    max++

    if (max === total) {
      lastColour = colour
      colour = wheel(Math.floor(Math.random() * 255))
      max = 1
    }

    if (max === 18) {
      max = 42
    }

    if (max === 52) {
      max = 58
    }

    return colour
  } else if (pin < max) {
    return colour
  }

  return lastColour
}
