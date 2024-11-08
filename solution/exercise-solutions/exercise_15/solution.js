function evaluateOperation(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) throw new Error("Division by zero");
      return a / b;
    case "%":
      if (b === 0) throw new Error("Division by zero");
      return a % b;
    case "^":
      return a ** b;
    default:
      throw new Error("Invalid operator");
  }
}

// Testing
console.log(evaluateOperation(5, 3, "+")); // Outputs: 8
console.log(evaluateOperation(5, 3, "-")); // Outputs: 2
console.log(evaluateOperation(5, 3, "*")); // Outputs: 15
console.log(evaluateOperation(5, 3, "/")); // Outputs: 1.666...
console.log(evaluateOperation(5, 3, "%")); // Outputs: 2
console.log(evaluateOperation(5, 3, "^")); // Outputs: 125

/*
  Explanation:

  The switch statement handles different operators.
  Division by zero is checked for / and %.
  The default case handles invalid operators by throwing an error.
*/
