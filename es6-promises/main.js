import takeAChance from './take-a-chance.js';

const promise = takeAChance('Bishan');
promise.then((value) => {
  console.log(`${value}`);
});

promise.catch((error) => {
  console.log(`${error}`);
});
