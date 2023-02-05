/* exported tail */
// create a for loop which loops over every item except for the first
// return the above result
function tail(array) {
  var newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
