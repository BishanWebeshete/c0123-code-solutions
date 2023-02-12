/* exported takeRight */
// define a function named takeRigt with the parameters of array and count
// use the slice method, with a negative value, to take the elements from the right of the array using the count argument

function takeRight(array, count) {
  var newArray = array.slice(-count);
  return newArray;
}
