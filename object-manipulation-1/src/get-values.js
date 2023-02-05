/* exported getValues */
// declare a function named getValue with the parameters of the object and the key that is desired
// use dot notation to get the value of the key
function getValues(object) {
  var valuesArray = [];
  for (const key in object) {
    valuesArray.push(object[key]);
  }
  return valuesArray;
}
