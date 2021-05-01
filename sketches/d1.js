const Sketch = (W, H) => (p) => {

  let PI = p.PI
  let PI_2 = p.HALF_PI
  let PI_4 = p.QUARTER_PI
  let TWO_PI = p.TWO_PI

  p.setup = () => {
    p.createCanvas(W, H)
    p.angleMode(p.RADIANS)
  }

  p.draw = () => {
    p.background(220)

    const c1 = p.map(p.constrain(p.mouseX, 0, W), 0, W, 0, 255)
    const c2 = p.map(p.constrain(p.mouseY, 0, H), 0, H, 0, 255)
    p.fill(c1,c2, 255)
    p.strokeWeight(4)
    if (p.mouseIsPressed) {
      p.stroke(255)
    } else {
      p.stroke(0)
    }

    p.textSize(H/3)
    p.text('Hello!', 20, H/2)
  } 
}
export default Sketch;