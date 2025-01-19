// Write a function `normalizeInput` that accepts any value and returns:

// - The value itself if it is truthy.
// - A default value 'N/A' if the value is falsy but not null or undefined.
// - Throws an error if the value is null or undefined.

// Use conditional logic and strict equality operators to implement this.

function normalizeInput (val) {
    if (val) {
        return val
    } else if (!val && (val !== null && val !== undefined)){
        return "N/A"
    } else {
        throw "Value is null or undefined"
    }
}

let result = normalizeInput(null)

try {
console.log(result)
} catch (err) {
    console.log(err)
}