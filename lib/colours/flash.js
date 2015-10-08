module.exports = function (colour, pin) {
  var now = new Date()
    
  if (now.getSeconds() % 2 === 0) {
    return {r: 0, g: 0, b: 0}
  }

  return colour(pin)
}
