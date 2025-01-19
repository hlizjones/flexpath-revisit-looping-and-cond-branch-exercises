// Create an object `dataStore` that contains various data types as 
// properties (numbers, strings, arrays, objects). 

// Write a function `deepFreeze` that recursively freezes the object and 
// all nested objects, preventing any modifications. 

// Demonstrate that after freezing, properties cannot be changed, 
// added, or deleted.

let dataStore = {
    string: "string",
    number: 4,
    array: [2,3,4],
    object: {name: "hannah"}
}

function deepFreeze (obj) {
    for (let key in obj) {
        if (typeof obj[key] !== "object") {
            continue
        } else {
            deepFreeze(obj[key])
        }
    } Object.freeze(obj)
}

deepFreeze(dataStore)

dataStore.name = "dataStore"

dataStore.object.age = 26