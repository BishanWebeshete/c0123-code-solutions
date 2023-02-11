/* exported lastChars */
// declare a functio named lastChars with the parameters of length and string
// use the slice method with negative values to only get the last portion of desired text

function lastChars(length, string) {
  return string.slice(-length);
}
