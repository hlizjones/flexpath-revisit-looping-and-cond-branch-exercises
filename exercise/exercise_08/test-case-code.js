// Write a function `areObjectsEqual` that takes two objects and returns 
// true if they are equal by value, meaning they have the same properties and 
// values (deep equality), and false otherwise. 

// The function should handle nested objects and arrays.

function areObjectsEqual(obj1, obj2) {
    if (obj1 === obj2) return true
    if (obj1.length !== obj2.length) return false
    function addtoArr (obj) {
        let arr = []
        for (let key in obj) {
        if (typeof obj[key] === "object") {
          arr = arr.concat(addtoArr(obj[key]))
        } else {
            arr.push(obj[key])
        }
    }
    return arr
}
let result1 = addtoArr(obj1)
let result2 = addtoArr(obj2)
return result1.every((el) => result2.includes(el))
}


// When ready, use code below for testing

const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 4 } };


console.log(areObjectsEqual(objA, objB)); // Outputs: true
console.log(areObjectsEqual(objA, objC)); // Outputs: false
