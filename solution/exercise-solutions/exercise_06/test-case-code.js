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
