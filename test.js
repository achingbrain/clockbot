var strip = require('rpi-ws281x-native')

var data = new Uint32Array(20)
data[0]= 0xff0000
data[1]= 0xff0000
data[2]= 0xff0000
data[3]= 0xff0000
data[4]= 0xff0000
data[5]= 0xff0000
data[6]= 0xff0000
data[7]= 0xff0000
data[8]= 0xff0000

strip.init(9)
strip.render(data)

setInterval(function() {}, 500)
