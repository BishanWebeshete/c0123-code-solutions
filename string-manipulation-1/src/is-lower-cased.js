/* exported isLowerCased */
// create a function called isLowerCased with the parameter of word
// create a loop iterating over every letter
// if statement checking if each letter is lowercased, if so return true, if not return false

function isLowerCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '-') {
      return true;
    }
    if (word[i] === word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
