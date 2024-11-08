function evaluateExpression(funcA, funcB, funcC) {
  return funcA() || (funcB() && !funcC());
}

// Testing
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

console.log(evaluateExpression(funcA, funcB, funcC)); // Outputs: funcA called, funcB called, funcC called, true
