function calculateDiscount(membershipLevel, purchaseAmount) {
  const discount =
    membershipLevel === "gold"
      ? 0.2
      : membershipLevel === "silver"
      ? 0.15
      : membershipLevel === "bronze"
      ? 0.1
      : 0;

  return purchaseAmount * discount;
}

// Testing
console.log(calculateDiscount("gold", 100)); // Outputs: 20
console.log(calculateDiscount("silver", 200)); // Outputs: 30
console.log(calculateDiscount("bronze", 150)); // Outputs: 15
console.log(calculateDiscount("none", 100)); // Outputs: 0
