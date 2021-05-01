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
  const startAtY = H/3
  const MOON = {
    centerX: W * 0.8,
    centerY: H/4,
    R: W * 0.1,
    movingFactor: W * 0.08 
  }
  const vanishingX = W*0.8
  const mountainDH1 = 40
  const mountainDH2 = 60
  const mountainDX = 200
  const randNoises1 = [...Array(mountainDX)].fill(null).map((_, ind) => p.noise(ind * 0.1) * mountainDH1)
  const randNoises2 = [...Array(mountainDX)].fill(null).map((_, ind) => p.noise(1000 + ind * 0.15) * mountainDH2)
  const mountainStartAtY1 = H * 0.1
  const mountainStartAtY2 = H * 0.14
  let manImg;

  p.preload = () => {
    manImg = p.loadImage('/static/blackman.png')
  }
  p.setup = () => {
    p.createCanvas(W, H)
    p.angleMode(RADIANS)
  }

  const drawMan = (x, y) => {
    p.stroke(255)
    p.fill(0)
    p.image(manImg, x, y)

    p.image(manImg, x + p.random() * 20, y + p.random() * 20)

    return
    // head 
    // const drawHead = () => {
    //   const scale = 1
    //   const hw = scale * 16
    //   const dhy1 = scale * 6
    //   const hh = scale * 24
    //   const dhx1 = scale * 8
      
    //   p.quad(
    //     x,y,
    //     x+hw,y-dhy1,
    //     x+hw-dhx1,y-dhy1+hh,
    //     x,y-dhy1+hh
    //   )
    //   return {
    //     x: x, 
    //     y: y-dhy1+hh
    //   }
    // }

    // const { x: headx, y: heady } = drawHead()

    // // body
    // const drawBody = () => {
    //   const scale = 1
    //   const dx1 = scale * 8
    //   const bw = scale * 16
    //   const dy1 = scale * 2
    //   const bh = scale * 40

    //   const dy2 = scale * 4
    //   p.quad(
    //     headx-dx1,heady,
    //     headx + bw, heady + dy1,
    //     headx + bw, heady + dy1 + bh,
    //     headx, heady + dy1 + bh + dy2,
    //   )
    // }

    // drawBody()
  }

  const drawMountain = (mountainStartAtY, randNoises, fillColor=100) => {
    p.stroke(255)
    p.fill(fillColor)
    p.beginShape()
    const wOff = 60
    p.vertex(-wOff, mountainStartAtY)
    const segW = (W + wOff*2) / randNoises.length
    for(const [ind, val] of randNoises.entries()) {
      p.vertex(segW * (ind+1), mountainStartAtY + val)
    }
    p.vertex(W+wOff, H)
    p.vertex(-wOff, H)
    p.endShape(p.CLOSE)
  }

  p.draw = () => {
    const mouseX = p.constrain(p.mouseX, 0, W)
    const mouseY = p.constrain(p.mouseY, 0, H)
    p.background(0)

    // MOON
    p.stroke(255)
    p.fill(255)
    const mXoff = p.map(mouseX, 0, W, 0, MOON.movingFactor)
    const mYoff = p.map(mouseY, 0, H, 0, MOON.movingFactor)
    const moonX = MOON.centerX - mXoff
    const moonY = MOON.centerY - mYoff
    p.ellipse(moonX, moonY, MOON.R, MOON.R)

    // MOUNTAINS
    drawMountain(mountainStartAtY1 + mYoff * 1.5, randNoises1, 180)
    drawMountain(mountainStartAtY2 + mYoff * 1.8, randNoises2, 100)
    
    // PLAIN
    const linesNumVertical = 12
    const linesNumHorizontal = 16
    const spacing = 1
    let currentY = startAtY

    p.stroke(255)
    p.fill(255, 100)
    p.rect(0, startAtY + mYoff, W, H)

    for (let _i = 0; _i < linesNumVertical; _i++) {
      const i = _i + 1
      p.line(0, currentY + mYoff, W, currentY + mYoff)
      currentY += spacing * i * i
    }

    let currentAngle = 0;
    for (let _i = 0; _i <= linesNumHorizontal; _i++) {
      const i = _i + 1
      const R = 1.42 * W
      const x2 = vanishingX + R*p.cos(currentAngle) + mXoff * 3
      const y2 = startAtY + R*p.sin(currentAngle) + mYoff * 3
      p.line(vanishingX, startAtY + mYoff, x2, y2)
      currentAngle += PI/linesNumHorizontal
    }

    drawMan(mouseX, mouseY - 80)
  } 
}
export default Sketch