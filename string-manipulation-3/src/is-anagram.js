/* exported isAnagram */

// create a function named isAnagram with the parameters of firsString and secondString
// loop through the first string, then loop through the second string to see if it also contains the same letters
// while looping through the second string, if a letter already exists at a previosu index, then do not include that letter again
// then if both strings include the same letters return true, otherwise retun false

// function isAnagram(firstString, secondString) {
//   var boolean = true;
//   var firstArray = firstString.split('').sort();
//   var secondArray = secondString.split('').sort();
//   for (let i = 0; i < firstArray.length; i++) {
//     if (firstArray[i] === secondArray[i]) {
//       boolean = true;
//     } else {
//       boolean = false;
//       // return boolean;
//     }
//   }
//   return boolean;
// }

function isAnagram(firstString, secondString) {
  var firstArray = firstString.split('').sort().join();
  var secondArray = secondString.split('').sort().join();
  if (firstArray === secondArray) {
    return true;
  } else {
    return false;
  }
}
