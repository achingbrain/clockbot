var pins = []

module.exports = function (pin) {
  if (!pins[pin]) {
    pins[pin] = 0
  }

  if (pins[pin] === 3) {
    pins[pin] = 0
  }

  var colour

  if ((pin + pins[pin]) % 3 === 0) {
    colour = {r: 255, g: 255, b: 255}
  } else {
    colour = {r: 0, g: 0, b: 0}
  }

  pins[pin]++

  return colour
}
