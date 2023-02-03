/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var wordsList = [];
  for (let i = 0; i < words.length; i++) {
    wordsList.push(words[i] + suffix);
  }
  return wordsList;
}
