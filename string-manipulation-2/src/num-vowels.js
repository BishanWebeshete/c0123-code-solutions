/* exported numVowels */
// create a function named numVowels with the parameter of string
// create a counter and start it at zero
// loop through the string and use an if statement to check if the index matches a vowel
// if so then add one to the counter

function numVowels(string) {
  var vowelCounter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'A' || string[i] === 'e' || string[i] === 'E' || string[i] === 'i' || string[i] === 'I' || string[i] === 'o' || string[i] === 'O' || string[i] === 'u' || string[i] === 'U') {
      vowelCounter += 1;
    }
  }
  return vowelCounter;
}
