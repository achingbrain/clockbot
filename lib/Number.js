var NUM_SEGMENTS = 7
var SEGMENT_LENGTH = 6
var SEGMENTS = [
  [1, 1, 1, 1, 1, 0, 1], // 0
  [0, 0, 0, 0, 1, 0, 1], // 1
  [1, 1, 0, 1, 1, 1, 0], // 2
  [1, 0, 0, 1, 1, 1, 1], // 3
  [0, 0, 1, 0, 1, 1, 1], // 4
  [1, 0, 1, 1, 0, 1, 1], // 5
  [1, 1, 1, 1, 0, 1, 1], // 6
  [0, 0, 0, 1, 1, 0, 1], // 7
  [1, 1, 1, 1, 1, 1, 1], // 8
  [1, 0, 1, 1, 1, 1, 1] // 9
]

var Number = function(buffer, offset) {
  this._buffer = buffer
  this._offset = offset
}

Number.prototype.setValue = function(value, colour) {
//  console.info('setting value to', value)

  for(var segment = 0; segment < NUM_SEGMENTS; segment++) {
    var multiplier = SEGMENTS[value][segment]
//    console.info('value', value, 'segment', segment, 'multiplier', multiplier)

    for(var led = 0; led < SEGMENT_LENGTH; led++) {
      var pin = (segment * SEGMENT_LENGTH) + led + this._offset

      var c = colour(pin)

      this._buffer[pin] = ((c.r * multiplier) << 16) + ((c.g * multiplier) << 8) + (c.b * multiplier)

//      console.info('pin', pin, 'value', this._buffer[offset].toString(16))
    }
  }
}

Number.LED_COUNT = 42

module.exports = Number
