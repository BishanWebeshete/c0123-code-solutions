/* exported pick */
// define a function named pick with the parameters of source and keys
// use a for loop to look through the array and for-in loop to look through object to make sure they match, if they do
// return the key value pair

function pick(source, keys) {
  var object = {};
  for (const key in source) {
    if (keys.includes(key) && typeof source[key] !== 'undefined') {
      object[key] = source[key];
    }
  }
  return object;
}
