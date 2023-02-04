/* exported isVowel */
// name function isVowel with parameter of char.
// use if statement asking if the character is one of the vowels return true
// otherwise return false

function isVowel(char) {
  if (char === 'a' || char === 'A') {
    return true;
  } else if (char === 'e' || char === 'E') {
    return true;
  } else if (char === 'i' || char === 'I') {
    return true;
  } else if (char === 'o' || char === 'O') {
    return true;
  } else if (char === 'u' || char === 'U') {
    return true;
  }
  return false;
}
