/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super(width * width, width * 4);
    this.width = width;
  }

  print() {
    return `${super.print()} width is: ${this.width}`;
  }
}
const rectangle = new Square(4);
console.log(rectangle.print());
