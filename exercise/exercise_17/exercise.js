// Demonstrate how copying objects in JavaScript affects memory references. 

// Create an object `original` and a shallow copy `copy`. 

// Modify a nested property in `copy` and show how it affects `original`. 

// Then, create a deep copy to prevent this issue.

let original = { a: 1, b: { c: {c : 3}, d: {d :4} } }

let copy = {...original}

console.log("og before", original)
console.log("copy before", copy)

original.b.c = {c : 6}

console.log("og after", original)
console.log("copy after", copy) // Should not be changing but it is lol

function deepCopy (obj) {
    let newObj = {}
    for (let key in obj) {
        if ( typeof obj[key] === "object") {
            let result = deepCopy(obj[key])
            newObj[key] = result
        } else {
            newObj[key] = obj[key]
        }
    } return newObj
}

let deep = deepCopy(original)

console.log("deep", deep)