// When ready, use code below for testing

const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 4 } };

console.log(areObjectsEqual(objA, objB)); // Outputs: true
console.log(areObjectsEqual(objA, objC)); // Outputs: false
