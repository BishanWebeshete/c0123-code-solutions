/* exported toObject */
// define a function named toObject with the parameter of keyValuePair
// create an empty object and push the key and value using a for-in loop
function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
