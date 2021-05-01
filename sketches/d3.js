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
    year, month, day, hour, minute, second, millis,
  } = p

  const tf = new (Transformer(p))()

  p.setup = () => {
    p.createCanvas(W, H)
    p.angleMode(RADIANS)
  }

  const minY = H * 0.4, maxY = H * 0.8
  const dividedByW = 1/W

  p.draw = () => {
    if (p.mouseIsPressed) {
      p.background(240)
      p.stroke(0)
      p.fill(0)
    } else {
      p.background(20)
      p.stroke(255)
      p.fill(255)
    }

    p.strokeWeight(1)
    p.textSize(18)

    const mouseX = p.constrain(p.mouseX, 0, W)
    const mouseY = p.constrain(p.mouseY, minY, maxY)

    p.line(0,mouseY,W,mouseY)

    const lhRatio = 3
    const linesNum = 7

    let totalHeightLeft = H - mouseY
    let prevHeight = mouseY
    let prevFirstRatio = mouseX * dividedByW

    for (let _i = 0; _i < linesNum; _i++) {
      const level = prevHeight + totalHeightLeft/lhRatio
      const currentRatio = prevFirstRatio/2
      const restRatioSeg = (1 - currentRatio)/(_i+1)      
      for (let _i2 = 0; _i2 < _i+1 ; _i2++) {
        const ratio2 = currentRatio + restRatioSeg * (_i2+1)
        p.line(W*ratio2, level, W*prevFirstRatio, prevHeight)
      }
      p.line(W*currentRatio, level, W*prevFirstRatio, prevHeight)
      p.line(0, level, W, level)

      p.text(_i, 20, level)

      prevFirstRatio = currentRatio
      totalHeightLeft = H - level
      prevHeight = level
    }

    const r = p.mouseIsPressed ? 16 : 10
    p.ellipse(mouseX,mouseY,r,r)
    const tx = p.constrain(mouseX - 40, 20, W - 100)
    const yoffset = p.mouseIsPressed ? 20 : 10
    const ty = mouseY - yoffset
    const tsize = p.mouseIsPressed ? 28 : 22
    p.textSize(tsize)
    p.text('unknown', tx, ty)
  } 
}
export default Sketch