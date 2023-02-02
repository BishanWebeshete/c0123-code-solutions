/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddOrEvenString = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddOrEvenString.push('even');
    }
    if (numbers[i] % 2 !== 0) {
      oddOrEvenString.push('odd');
    }
  }
  return oddOrEvenString;
}
