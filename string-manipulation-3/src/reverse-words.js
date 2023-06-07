/* exported reverseWords */

function reverseWords(string) {
  var strArr = string.split(' ');
  var reversed = [];
  for (var i = 0; i < strArr.length; i++) {
    var word = strArr[i];
    var reversing = '';
    for (var j = word.length - 1; j >= 0; j--) {
      reversing += word[j];
    }
    reversed.push(reversing);
  }
  return reversed.join(' ');
}
