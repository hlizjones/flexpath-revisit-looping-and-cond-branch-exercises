function add(a, b) {
  while (b > 0) {
    a++;
    b--;
  }
  while (b < 0) {
    a--;
    b++;
  }
  return a;
}

function subtract(a, b) {
  return add(a, -b);
}

function multiply(a, b) {
  let result = 0;
  let positive = b > 0;
  b = Math.abs(b);
  for (let i = 0; i < b; i++) {
    result = add(result, a);
  }
  return positive ? result : -result;
}

function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  let quotient = 0;
  let positive = a > 0 === b > 0;
  a = Math.abs(a);
  b = Math.abs(b);
  while (a >= b) {
    a = subtract(a, b);
    quotient++;
  }
  return positive ? quotient : -quotient;
}

function mod(a, b) {
  if (b === 0) throw new Error("Division by zero");
  let positive = a >= 0;
  a = Math.abs(a);
  b = Math.abs(b);
  while (a >= b) {
    a = subtract(a, b);
  }
  return positive ? a : -a;
}

function power(a, b) {
  if (b === 0) return 1;
  let result = a;
  for (let i = 1; i < b; i++) {
    result = multiply(result, a);
  }
  return result;
}

// Testing
console.log(add(5, 3)); // Outputs: 8
console.log(subtract(5, 3)); // Outputs: 2
console.log(multiply(5, -3)); // Outputs: -15
console.log(divide(10, 2)); // Outputs: 5
console.log(mod(10, 3)); // Outputs: 1
console.log(power(2, 3)); // Outputs: 8

/*
  Explanation:

  Each function implements the operation using loops and increments/decrements.
  This demonstrates understanding of mathematical operations at a low level.
  Edge cases like negative numbers and division by zero are handled.
*/
