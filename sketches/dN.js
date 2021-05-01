import Transformer from '../utils/transformer';
import {
  range
} from '../utils/utils';

const Sketch = (W, H) => (p) => {
  let { 
    // Constants
    RADIANS,
    PI, 
    HALF_PI: PI_2,
    QUARTER_PI: PI_4,
    TWO_PI,

    // Time
    // Not sure why when millis() is used it errors out on _millisStart. 
    // A workaround is just to use p.millis()
    year, month, day, hour, minute, second,
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
    p.text(`${range(10)}`, 0, H/3)
  } 
}
export default Sketch