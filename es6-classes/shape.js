/* exported Shape */

class Shape {
  constructor(area, circumference) {
    this.area = area;
    this.circumference = circumference;
  }

  print() {
    return `area is ${this.area} and circumference is ${this.circumference}`;
  }
}

const oval = new Shape(4, 3);
console.log(oval.print());
