var wheel = require('./wheel')
var position = 0
var on = true
var colour = {r: 0, g: 0, b: 0}

setInterval(function() {
  on = !on

  if (!on) {
    return
  }

  colour = wheel(position)
  position++

  if (position === 255) {
   position = 0
  }
}, 1000)

module.exports = function () {
  if (on) {
    return colour
  }

  return {r: 0, g: 0, b: 0}
}
