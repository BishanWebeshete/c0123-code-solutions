/* exported getWords */
// declare a function with parameter of string
// create an empty array to push new strings
// return push string with spaces in between words using splice method to array

function getWords(string) {
  var array = [];
  if (string === '') {
    return array;
  } else {
    var splitString = string.split(' ');
  }
  return splitString;
}
