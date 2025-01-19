// Create a function `coalesce` that accepts any number of arguments and 
// returns the first argument that is 
// not falsy (false, 0, '', null, undefined, NaN). 

// Use the logical OR (||) operator to implement this function.

function coalesce(...args) {
    return args.find((arg) => { if (arg) { return arg } })
}

function coalesceAlternative(...args) { 
    let lastValue = null
    for (let arg of args) {
        let result = arg || lastValue
        if (result) {
            return result
        } else {
            lastValue = arg
        }
    }
};

// When ready, use code below for testing

// Outputs: Hello
console.log(coalesce(null, undefined, "", 0, "Hello", "World"));
// Outputs: First Truthy
console.log(coalesceAlternative(false, NaN, 0, "", "First Truthy"));
