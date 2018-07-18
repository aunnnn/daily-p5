import Transformer from '../utils/transformer';
import {
  range
} from '../utils/utils';

export default (W, H) => (p) => {
  let { 
    // Constants
    RADIANS,
    PI, 
    HALF_PI: PI_2,
    QUARTER_PI: PI_4,
    TWO_PI,

    // Time
    year, month, day, hour, minute, second, millis,
  } = p

  const tf = new (Transformer(p))()

  p.setup = () => {
    p.createCanvas(W, H)
    p.angleMode(RADIANS)
  }

  p.draw = () => {
    p.background(200)
    p.textSize(12)
    p.text('A template for making p5.js apps\n\nSec:'+second(), 0, H/2)
    p.text(`range(10) = ${range(10)}`, 0, H/3)
  } 
}
  