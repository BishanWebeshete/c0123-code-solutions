/* exported truncate */
// declare a function called truncate with the parameters of length and string
// declare a new variable called newString with an empty string
// use splice method to cut out all letters after the index of length
// push this into the newString
function truncate(length, string) {
  var newString = '';
  newString += string.slice(0, length);
  newString += '...';
  return newString;
}
