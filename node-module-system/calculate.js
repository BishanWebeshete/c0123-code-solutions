import sum from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const num = +process.argv[2];
const num2 = +process.argv[4];
const action = process.argv[3];

if (action === 'plus') {
  console.log(`result: ${sum(num, num2)}`);
} else if (action === 'minus') {
  console.log(`result: ${subtract(num, num2)}`);
} else if (action === 'multiply') {
  console.log(`result: ${multiply(num, num2)}`);
} else if (action === 'divide') {
  console.log(`result: ${divide(num, num2)}`);
} else {
  console.log('invalid operation');
}
