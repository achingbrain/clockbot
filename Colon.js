var Colon = function(buffer, offset) {
  this._buffer = buffer
  this._offset = offset
}

Colon.prototype.setValue = function(r, g, b) {
  for(var led = 0; led < Colon.LED_COUNT; led++) {
    var offset = led + this._offset

    this._buffer[offset] = (r << 16) + (g << 8) + b
  }
}

Colon.LED_COUNT = 8

module.exports = Colon
