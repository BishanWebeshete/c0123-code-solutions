/* exported invert */

function invert(source) {
  var object = {};
  for (const key in source) {
    object[source[key]] = key;
  }
  return object;
}
