/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * Math.pow(radius, 2), 2 * Math.PI * radius);
    this.radius = radius;
  }

  print() {
    return `${super.print()} radius ${this.radius}`;
  }
}
const sphere = new Circle(5);
console.log(sphere.print());
