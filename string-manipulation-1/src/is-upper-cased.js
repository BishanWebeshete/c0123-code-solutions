/* exported isUpperCased */
// declare a function called isUpperCased which takes a parameter of the string word
// create a loop that iterates over every letter.
// if any letter is lowercase, then return false, otherwise return true

function isUpperCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
