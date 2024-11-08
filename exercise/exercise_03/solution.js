function getShippingCost(weight) {
  let cost = 0;
  switch (true) {
    case weight <= 1:
      cost = 5;
      break;
    case weight <= 5:
      cost = 10;
      break;
    case weight <= 10:
      cost = 15;
      break;
    default:
      cost = 20;
      break;
  }
  return cost;
}

// Testing
console.log(getShippingCost(0.5)); // Outputs: 5
console.log(getShippingCost(3)); // Outputs: 10
console.log(getShippingCost(7)); // Outputs: 15
console.log(getShippingCost(12)); // Outputs: 20
