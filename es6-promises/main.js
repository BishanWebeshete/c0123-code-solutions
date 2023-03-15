import takeAChance from './take-a-chance.js';

const promise = takeAChance('Bishan').then((value) => {
  console.log(`${value}`);
}).catch((error) => {
  console.log(`${error}`);
});
