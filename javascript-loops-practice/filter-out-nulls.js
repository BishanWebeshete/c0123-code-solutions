/* exported filterOutNulls */
function filterOutNulls(values) {
  var filteredNulls = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] != null) {
      filteredNulls.push(values[i]);
    }
  }
  return filteredNulls;
}
