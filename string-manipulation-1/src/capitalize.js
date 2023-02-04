/* exported capitalize */
// declare a function named capitalize word with parameter of word
// return uppercased first letter at using toUpperCase method

function capitalize(word) {
  var newWord = '';
  newWord += word[0].toUpperCase();
  newWord += word.slice(1).toLowerCase();
  return newWord;
}
