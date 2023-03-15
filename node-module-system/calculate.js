import sum from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const num = +process.argv[2];
const num2 = +process.argv[4];

if (process.argv[3] === 'plus') {
  console.log(`result: ${sum(num, num2)}`);
}

if (process.argv[3] === 'minus') {
  console.log(`result: ${subtract(num, num2)}`);
}

if (process.argv[3] === 'multiply') {
  console.log(`result: ${multiply(num, num2)}`);
}

if (process.argv[3] === 'divide') {
  console.log(`result: ${divide(num, num2)}`);
}
