var jf = require("johnny-five");
var circuito = new jf.Board({port: 'COM3'});

circuito.on("ready", prender);

function prender()
{
  var led = new jf.Led(7);
  var led_rgb = new jf.Led(13);
    led.blink(5);
    led_rgb.blink(1000);

}
