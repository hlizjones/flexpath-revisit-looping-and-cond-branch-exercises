// Write a function `getShippingCost` that calculates shipping costs based 
// on package weight. 

// Use a switch statement with fallthrough to handle the following cases:

// - For weights up to 1kg, the cost is $5.
// - For weights above 1kg and up to 5kg, the cost is $10.
// - For weights above 5kg and up to 10kg, the cost is $15.
// - For weights above 10kg, the cost is $20.


// Weights are categorized as:

// 1: up to 1kg
// 2: above 1kg up to 5kg
// 3: above 5kg up to 10kg
// 4: above 10kg

// Implement the function so that it returns the 
// correct shipping cost based on the weight category.

function getShippingCost (weight) {
    switch (true) {
    case (weight<= 1):
        return 5;
    case (weight > 1 && weight <= 5) :
        return 10;
    case (weight > 5 && weight <= 10) :
        return 15;
    default :
        return 20
    }
}

// When ready, use code below for testing


console.log(getShippingCost(0.5)); // Outputs: 5
console.log(getShippingCost(3)); // Outputs: 10
console.log(getShippingCost(7)); // Outputs: 15
console.log(getShippingCost(12)); // Outputs: 20
