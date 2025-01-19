// Write a function `evaluateExpression` that accepts three Boolean functions 
// funcA, funcB, and funcC. 

// The function should return true if:

// - funcA() returns true, or
// - funcB() returns true, and funcC() returns false.


// Use logical operators to ensure that funcC() is only called if 
// funcB() returns true. 

// Demonstrate the short-circuit behavior.

function evaluateExpression (funcA, funcB, funcC) {
  if (funcA() || (funcB() && !funcC())) {
    return true
  } return false
}

// When ready, use code below for testing

function funcA() {
  console.log("funcA called");
  return false;
}

function funcB() {
  console.log("funcB called");
  return true;
}

function funcC() {
  console.log("funcC called");
  return false;
}

// Outputs: funcA called, funcB called, funcC called, true
console.log(evaluateExpression(funcA, funcB, funcC));
