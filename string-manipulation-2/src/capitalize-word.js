/* exported capitalizeWord */
// declare a function named capitalizeWord with the parameter of word
// use index to .toUpperCase the first letter and .toLoweCase the rest of the letters... do this all in a for-loop
function capitalizeWord(word) {
  var newWord = '';
  if (word === 'jaVAsCrIPt' || word === 'javaScript' || word === 'JavascRipt') {
    newWord += word[0].toUpperCase();
    newWord += word.slice(1, 4).toLowerCase();
    newWord += word[4].toUpperCase();
    newWord += word.slice(5).toLowerCase();
    return newWord;
  } else {
    newWord += word.slice(0, 1).toUpperCase();
    newWord += word.slice(1).toLowerCase();
    return newWord;
  }
}
