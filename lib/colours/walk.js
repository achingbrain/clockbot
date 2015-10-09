var wheel = require('../animations/wheel')

var lastUpdate = 0
var offset = 0
var MAX_COLUMNS = 7
var currentColumn = 0

module.exports = function (pin, row, column) {
  if (row === undefined && column === undefined) {
    return wheel(offset)
  }

  var now = new Date()
  var update = parseInt(now.getMilliseconds()/5)

  if (update !== lastUpdate) {
    lastUpdate = update
    offset++
    currentColumn++

    if (currentColumn === MAX_COLUMNS) {
      currentColumn = 0
    }

    if (offset > 255) {
      offset = 0
    }
  }

  var o = offset

  if (currentColumn !== column)  {
    o--

    if (o < 0) {
      o = 255
    }
  }

  return wheel(o)
}
