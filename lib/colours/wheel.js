var wheel = require('../animations/wheel')

var lastUpdate = 0
var offset = 0

module.exports = function (pin, row, column) {
  var now = new Date()
  var update = parseInt(now.getMilliseconds()/5)

  if (update !== lastUpdate) {
    lastUpdate = update
    offset++

    if (offset > 255) {
      offset = 0
    }
  }

  return wheel(offset)
}
