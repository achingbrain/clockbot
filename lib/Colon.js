var Colon = function(buffer, offset) {
  this._buffer = buffer
  this._offset = offset
}

Colon.prototype.setValue = function(colour) {
  for(var led = 0; led < Colon.LED_COUNT; led++) {
    var pin = led + this._offset

    var c = colour(pin)

    this._buffer[pin] = (c.r << 16) + (c.g << 8) + c.b
  }
}

Colon.LED_COUNT = 8

module.exports = Colon
