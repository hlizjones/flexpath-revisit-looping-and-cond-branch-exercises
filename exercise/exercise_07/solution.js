function coalesce(...args) {
  for (let arg of args) {
    if (arg) {
      return arg;
    }
  }
  return args[args.length - 1];
}

// Alternatively, using logical OR
function coalesceAlternative(...args) {
  return args.reduce((acc, val) => acc || val);
}

// Testing
console.log(coalesce(null, undefined, "", 0, "Hello", "World")); // Outputs: Hello
console.log(coalesceAlternative(false, NaN, 0, "", "First Truthy")); // Outputs: First Truthy
