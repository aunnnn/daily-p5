export default (w, h) => (p) => {

  let PI = p.PI
  let PI_2 = p.HALF_PI
  let PI_4 = p.QUARTER_PI
  let TWO_PI = p.TWO_PI
  let kW = w
  let kH = h

  p.setup = () => {
    p.createCanvas(w, h)
    p.angleMode(p.RADIANS)
  }

  p.draw = () => {
    p.background(200)
    if (p.mouseIsPressed) {
      p.fill(100,0,0)
    } else {
      p.fill(0,0,100)
    }
    p.rect(p.mouseX, p.mouseY, 20, 20)
    p.textSize(12)
    p.text('A template for making p5.js apps!!!\n\nSec:'+p.second(), 0, kH/2)
  } 
}
