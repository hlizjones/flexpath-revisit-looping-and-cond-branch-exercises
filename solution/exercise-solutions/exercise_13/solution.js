function countFalsyValues(arr) {
  let count = 0;
  for (let val of arr) {
    if (!Boolean(val)) {
      count++;
    }
  }
  return count;
}

// Testing
const testArray = [
  0,
  1,
  "",
  "hello",
  null,
  undefined,
  NaN,
  false,
  true,
  [],
  {},
];
console.log(countFalsyValues(testArray)); // Outputs: 6

/*
  Explanation:

  The Boolean constructor converts a value to its Boolean equivalent.
  The ! operator negates the Boolean value, allowing us to check for falsy values.
  The function counts all values that are falsy.

*/
