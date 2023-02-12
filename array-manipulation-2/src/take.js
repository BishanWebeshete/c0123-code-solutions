/* exported take */
// define a function named take with the parameters of array and count
// use slice method to return new array using the count variable

function take(array, count) {
  var newArray = array.slice(0, count);
  return newArray;
}
