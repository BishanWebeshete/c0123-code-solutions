/* exported includes */
// declare a function named includes with the parameters of array and value
// use a for loop and nest an if statement, if the value and index are equal, return true, else return false

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
