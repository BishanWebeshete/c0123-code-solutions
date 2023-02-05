/* exported reverse */
// create a function which is named reverse with the parameter of array
// create a for-loop which goes in reverse order and return that value
// push that into a new array
function reverse(array) {
  var newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
