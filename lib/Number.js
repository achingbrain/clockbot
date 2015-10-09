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
  [1, 0, 1, 1, 1, 1, 1]  // 9
]

var COLUMNS = {
  '0': 6,
  '1': 5,
  '2': 4,
  '3': 3,
  '4': 2,
  '5': 1,
  '6': 0,
  '7': 0,
  '8': 0,
  '9': 0,
  '10': 0,
  '11': 0,
  '12': 0,
  '13': 0,
  '14': 0,
  '15': 0,
  '16': 0,
  '17': 0,
  '18': 1,
  '19': 2,
  '20': 3,
  '21': 4,
  '22': 5,
  '23': 6,
  '24': 7,
  '25': 7,
  '26': 7,
  '27': 7,
  '28': 7,
  '29': 7,
  '30': 6,
  '31': 5,
  '32': 4,
  '33': 3,
  '34': 2,
  '35': 1,
  '36': 7,
  '37': 7,
  '38': 7,
  '39': 7,
  '40': 7,
  '41': 7
}

var ROWS = {
  '0': 14,
  '1': 14,
  '2': 14,
  '3': 14,
  '4': 14,
  '5': 14,
  '6': 13,
  '7': 12,
  '8': 11,
  '9': 10,
  '10': 9,
  '11': 8,
  '12': 6,
  '13': 5,
  '14': 4,
  '15': 3,
  '16': 2,
  '17': 1,
  '18': 0,
  '19': 0,
  '20': 0,
  '21': 0,
  '22': 0,
  '23': 0,
  '24': 1,
  '25': 2,
  '26': 3,
  '27': 4,
  '28': 5,
  '29': 6,
  '30': 7,
  '31': 7,
  '32': 7,
  '33': 7,
  '34': 7,
  '35': 7,
  '36': 8,
  '37': 9,
  '38': 10,
  '39': 11,
  '40': 12,
  '41': 13
}

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
      var ledIndex = (segment * SEGMENT_LENGTH) + led
      var pin = ledIndex + this._offset

      var c = colour(pin, ROWS[ledIndex], COLUMNS[ledIndex])

      this._buffer[pin] = ((c.r * multiplier) << 16) + ((c.g * multiplier) << 8) + (c.b * multiplier)

//      console.info('pin', pin, 'value', this._buffer[offset].toString(16))
    }
  }
}

Number.LED_COUNT = 42

module.exports = Number
