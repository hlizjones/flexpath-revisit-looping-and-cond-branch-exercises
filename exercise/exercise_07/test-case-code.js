// When ready, use code below for testing

// Outputs: Hello
console.log(coalesce(null, undefined, "", 0, "Hello", "World"));
// Outputs: First Truthy
console.log(coalesceAlternative(false, NaN, 0, "", "First Truthy"));
