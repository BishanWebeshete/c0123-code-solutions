/* exported getKeys */
// declare a function named getKeys with the parameter of object
// create an empty array
// use a for in loop to push each key into the array
function getKeys(object) {
  var keysArray = [];
  for (const key in object) {
    keysArray.push(key);
  }
  return keysArray;
}
