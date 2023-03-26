/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  print() {
    console.log(`and here is the radius ${this.radius}`);
  }
}
const sphere = new Circle(155);
sphere.print();
