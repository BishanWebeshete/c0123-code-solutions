/* exported isPalindromic */

// define a function called isPalindromic which takes the argument of a string
// loop through the string starting at the last letter, ending at the 1st letter
// declare a variable and asign the string to the variable
// if the new string is equal to the original string the return true... otherwise return false

function isPalindromic(string) {
  var originalString = '';
  var newString = '';
  for (let j = 0; j < string.length; j++) {
    if (string[j] !== ' ') {
      originalString += string[j];
    }
  }
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      newString += string[i];
    }
  }
  if (newString === originalString) {
    return true;
  } else {
    return false;
  }
}
