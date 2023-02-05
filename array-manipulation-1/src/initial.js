/* exported initial */
// create a for-loop which goes over every item except the last
// return all of the values minus the last
function initial(array) {
  var newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
