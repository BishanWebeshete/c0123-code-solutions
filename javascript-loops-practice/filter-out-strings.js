/* exported filterOutStrings */
function filterOutStrings(values) {
  var newValues = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newValues.push(values[i]);
    }
  }
  return newValues;
}
