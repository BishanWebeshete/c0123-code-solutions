/* exported chunk */
// define a function named chunk with the parameters of array and size
// use a for loop to iterate over every item in the array
// at index of the size parameter, return that array

function chunk(array, size) {
  var newArray = [];
  for (let i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}
