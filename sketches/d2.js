export default (w, h) => (p) => {
  // let PI = p.PI
  // let PI_2 = p.HALF_PI
  // let PI_4 = p.QUARTER_PI
  // let TWO_PI = p.TWO_PI
  let kW = w
  let kH = h
  let { 
    PI, 
    HALF_PI = PI_2,
    PI_4 = p.QUARTER_PI,
    TWO_PI,
    mouseX, mouseY
  } = p

  p.setup = () => {
    p.createCanvas(w, h)
    p.angleMode(p.RADIANS)
  }

  p.draw = () => {
    p.background(20)
    
  } 
}
  