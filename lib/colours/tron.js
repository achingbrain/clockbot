var MAX_ROWS = 14
var highlightRow = 0
var lastUpdate = 0

module.exports = function (pin, row, column) {
  if (column === undefined && row === undefined) {
    return {r: 0, g: 0, b: 30}
  }

  var now = new Date()
  var update = parseInt(now.getMilliseconds()/30)

  if (update !== lastUpdate) {
    lastUpdate = update
    highlightRow++

    if (highlightRow > MAX_ROWS) {
      highlightRow = 0
    }
  }

  if (row === highlightRow) {
    return {r: 0, g: 0, b: 255}
  }

  return {r: 0, g: 0, b: 30}
}
