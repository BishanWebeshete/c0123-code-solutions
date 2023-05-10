export default function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let max = -Infinity;
  while (1) {
    const top = stack.pop();
    if (top === undefined) {
      return max;
    }
    if (max < top) {
      max = top;
    }
  }
}

// Or
// export default function maxValue(stack) {
//   const top = stack.pop();
//   let maxNum = top;
//   if (top === undefined) {
//     return -Infinity;
//   }
//   while (stack.peek() !== undefined) {
//     if (stack.peek() > maxNum) {
//       maxNum = stack.peek();
//     }
//     stack.pop();
//   }
//   return maxNum;
// }
