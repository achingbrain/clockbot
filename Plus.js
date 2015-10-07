var Plus = function(buffer, offset) {
  this._buffer = buffer
  this._offset = offset
}

Plus.prototype.setValue = function(r, g, b) {
  for(var led = 0; led < Plus.LED_COUNT; led++) {
    var offset = led + this._offset

    this._buffer[offset] = (r << 16) + (g << 8) + b
  }
}

Plus.LED_COUNT = 9

module.exports = Plus
