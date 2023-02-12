/* exported dropRight */
// define a function named dropRight with the parameters of array and count
// use the slice method on the array to get rid of the last elements based off count and returnin the first ones

function dropRight(array, count) {
  var newArray = array.slice(0, -count);
  return newArray;
}
