/* exported swapChars */
// declare a function named swapChars with the parameters of firstIndex, secondIndex, and string
// use a for loop to look through each character...
// at the first index make i = second index and at second index make i = first index

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string[i] = string[secondIndex];
    } else if (i === secondIndex) {
      newString += string[i] = string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;
}
