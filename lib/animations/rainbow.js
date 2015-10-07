var wheel = require('./wheel')

var j = 0

module.exports = function (pin) {
  if (j > 255) {
    j = 0
  }

  var colour = wheel(j)

  j++

  return colour
}
