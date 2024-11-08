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
// Outputs: Hello
console.log(coalesce(null, undefined, "", 0, "Hello", "World"));
// Outputs: First Truthy
console.log(coalesceAlternative(false, NaN, 0, "", "First Truthy"));

/*
  Explanation:

  The function iterates over the arguments and returns the 
    first truthy value.

  The logical OR operator || can be used to chain values, 
    returning the first truthy one.
    
  Demonstrates understanding of falsy values in JavaScript.

*/
