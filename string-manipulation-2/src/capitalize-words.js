/* exported capitalizeWords */
// create a function named capitalizeWords with the parameter of a string
// use a for-loop which looks at every character in the string
// use split method to split at every space then uppercase first letter of each new word

function capitalizeWords(string) {
  var words = string.split(' ');
  var wordsString = '';
  for (let i = 0; i < words.length; i++) {
    wordsString += words[i][0].toUpperCase() + words[i].substr(1).toLowerCase() + ' ';
  }
  return wordsString.trim();
}
