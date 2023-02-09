/* exported ransomCase */
// declare a function named ransom ransomCase with the parameter of string
// use index to find every other character with a for loop
// use .toUpperCase() and return it to the string

function ransomCase(string) {
  var newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
