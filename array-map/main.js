const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map((number) => {
  return number * 2;
}
);
console.log(doubled);

const prices = numbers.map((number) => {
  return '$' + parseFloat(number).toFixed(2);
}
);
console.log(`${prices}`);

const upperCased = languages.map((language) => {
  return language.toUpperCase();
}
);
console.log(upperCased);

const firstLetters = languages.map((language) => {
  return language[0].toUpperCase();
}
);
console.log(firstLetters);
