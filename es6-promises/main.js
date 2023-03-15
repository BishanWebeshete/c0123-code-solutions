import takeAChance from './take-a-chance.js';

const promise = takeAChance('Bishan').then((resolve) => {
  console.log(resolve);
}).catch((error) => {
  console.log(error.message);
});
