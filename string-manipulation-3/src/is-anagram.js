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

// function isAnagram(firstString, secondString) {
//   var firstArray = firstString.split('').sort().join();
//   var secondArray = secondString.split('').sort().join();
//   if (firstArray === secondArray) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isAnagram(firstString, secondString) {
  var obj1 = {};
  var obj2 = {};
  var string1 = firstString.replaceAll(' ', '');
  var string2 = secondString.replaceAll(' ', '');

  if (string1.length !== string2.length) {
    return false;
  }

  for (var i = 0; i < string1.length; i++) {
    if (string1[i] in obj1) {
      obj1[string1[i]] += 1;
    } else {
      obj1[string1[i]] = 1;
    }
    if (string2[i] in obj2) {
      obj2[string2[i]] += 1;
    } else {
      obj2[string2[i]] = 1;
    }
  }
  for (var key1 in obj1) {
    var count = 0;
    for (var key2 in obj2) {
      if (key1 === key2) {
        if (obj1[key1] !== obj2[key2]) {
          return false;
        } else {
          break;
        }
      }
      count++;
    }
    if (count === Object.keys(obj1).length) {
      return false;
    }
  }
  return true;
}
