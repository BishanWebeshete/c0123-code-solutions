/* exported drop */
// declare a function named drop with the parameters of array and count
// use the slice method to get rid of the first elemetns with count parameter

function drop(array, count) {
  var newArray = array.slice(count);
  return newArray;
}
