import { range } from '../utils/utils'
import Transformer from '../utils/transformer'

const Sketch = (W, H) => (p) => {
  let { 
    // Constants
    RADIANS,
    PI, 
    HALF_PI: PI_2,
    QUARTER_PI: PI_4,
    TWO_PI,

    // Time
    year, month, day, hour, minute, second,
  } = p

  const tf = new (Transformer(p))()

  p.setup = function() {
    p.createCanvas(W, H)
    p.angleMode(RADIANS)
  }

  p.draw = () => {
    // const angle = p.abs(p.mouseX)/50
    // const angle = -p.atan((p.mouseY - H/2)/(p.mouseX - W/2))
    const v0 = p.createVector(1, 0)
    const v1 = p.createVector(p.mouseX - W/2, p.mouseY - H/2)
    let angle = -v0.angleBetween(v1).toFixed(2)
    if (v1.y <= 0) {
      angle = -TWO_PI-angle
    }
    const radius = p.dist(W/2, H/2, p.mouseX, p.mouseY) / 3
    const freq = (n) => p.millis() / (1000/n)
    const freq_2 = freq(0.5)
    const freq1 = freq(1)
    const freq2 = freq(2)

    p.background(200)
    p.textSize(20)

    tf.push()

    // Start at the center
    tf.translate(W/2, H/2)
    tf.rotate(freq_2*TWO_PI)

    const makeHands = (baseRadius, num) => {
      tf.push()
      for(let _i of range(num)) {
        const i = _i + 1 
        const handLength = baseRadius/i
        const gearColor = (1 - i/num) * 255
        const handColor = i/num * 255
        const handThickness = num/i
        const handAngle = i % 2 == 0 ? angle*i : -angle*i
  
        // hand
        p.fill(handColor)
        tf.rotate(handAngle*i)
        p.rect(0, -handThickness/2, handLength, handThickness)
        // p.push()
        // p.fill(0)
        // p.text(`${tf.x.toFixed(1)} ${tf.y.toFixed(1)}`, 0, -handThickness)
        // p.pop()
        // gear
        p.fill(gearColor)
        p.ellipse(0,0,10, 10)
  
        tf.translate(handLength, 0)
        tf.rotate(freq_2*PI/i)
      }
      const x = tf.x, y = tf.y
      tf.pop()
      return {x, y}
    }
    const {x,y} = makeHands(radius, 6)
    tf.pop()

    tf.push()
    tf.translate(W/2, H/2)
    tf.rotate(freq_2*TWO_PI + PI)
    const {x: x2, y: y2 } = makeHands(radius, 4)
    tf.pop()

    // Connecting line using coordinates returned from 'makeHands'
    p.line(x,y,x2,y2)
  } 
}
export default Sketch