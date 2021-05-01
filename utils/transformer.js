// Adapted from https://github.com/ChristerNilsson/Transformer
const _Transformer = (p) => class Transformer {
  constructor(x, y, a, s, stack) {
    this.x = x != null ? x : 0;
    this.y = y != null ? y : 0;
    this.a = a != null ? a : 0;
    this.s = s != null ? s : 1;
    this.stack = stack != null ? stack : [];
  }

  push() {
    p.push();
    return this.stack.push([this.x, this.y, this.a, this.s]);
  }

  pop() {
    var ref;
    p.pop();
    return ref = this.stack.pop(), this.x = ref[0], this.y = ref[1], this.a = ref[2], this.s = ref[3], ref;
  }
  
  rotate(da) {
    p.rotate(da);
    return this.a += da;
  }

  scale(ds) {
    p.scale(ds);
    return this.s *= ds;
  }

  translate(dx, dy) {
    p.translate(dx, dy);
    this.x += this.s * dx * p.cos(this.a) - this.s * dy * p.sin(this.a);
    return this.y += this.s * dy * p.cos(this.a) + this.s * dx * p.sin(this.a);
  }
}
export default _Transformer