var num1 = 3;
var num2 = 4;
var num3 = 5;
var maximumValue = Math.max(num1, num2, num3);
console.log('value of maximumValue', maximumValue);

var heroes = ['spiderman', 'batman', 'black panther', 'Tony Stark'];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [{
  title: 'Lone Survivor',
  author: 'Marcus Luttrell'
},
{
  title: 'Harry Potter and the Order of the Phoenix',
  author: 'J.K. Rowling'
}];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 0);
console.log('value of library:', library);

var fullName = 'Bishan Webeshete';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
console.log('value of firstName:', firstName);
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
