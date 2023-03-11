/* exported omit */

function omit(source, keys) {
  var object = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      object[key] = source[key];
    }
  }
  return object;
}
