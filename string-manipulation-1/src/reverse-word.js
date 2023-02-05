/* exported reverseWord */
// define function named reverseWord which takes the parameter of word (string)
// create a loop that returns the words letters in opposite order
function reverseWord(word) {
  var string = '';
  for (let i = word.length - 1; i >= 0; i--) {
    string += word[i];
  }
  return string;
}
