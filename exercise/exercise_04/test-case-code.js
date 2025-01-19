// Write a function `areValuesEqual` that compares two values and 
// returns true if they are equal in value AND type, and false otherwise. 

// Handle cases where values are objects, arrays, or functions by 
// comparing their references.

// When ready, use code below for testing

function areValuesEqual (val1, val2) {
if (typeof val1 === typeof val2 && val1 === val2) {
    return true
} else {
    return false
}
}

console.log(areValuesEqual(5, "5")); // Outputs: false
console.log(areValuesEqual(5, 5)); // Outputs: true
console.log(areValuesEqual([1, 2], [1, 2])); // Outputs: false
const obj = { x: 1 };
console.log(areValuesEqual(obj, obj)); // Outputs: true
console.log(areValuesEqual(null, undefined)); // Outputs: false