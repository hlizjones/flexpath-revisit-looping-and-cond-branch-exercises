function filterAndTransform(numbers) {
  const result = [];
  for (let num of numbers) {
    if (num >= 0) {
      if (num % 2 === 0) {
        result.push(num ** 2);
      } else {
        result.push(num + 1);
      }
    }
  }
  return result;
}

// Testing
const nums = [-3, -2, 0, 1, 2, 3, 4];
console.log(filterAndTransform(nums)); // Outputs: [0, 2, 4, 4, 16]

/*
  Explanation:

  Negative numbers are filtered out using an if condition.
  Even numbers (num % 2 === 0) are squared.
  Odd numbers are incremented.
  The function combines multiple conditional logic statements
*/
