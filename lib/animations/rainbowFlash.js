var wheel = require('./wheel')
var on = true
var colour = {r: 0, g: 0, b: 0}
var position = 0

setInterval(function() {
  on = !on

  colour = wheel(Math.floor(Math.random() * 255))
}, 1000)

module.exports = function () {
  if (on) {
    return colour
  }

  return {r: 0, g: 0, b: 0}
}
