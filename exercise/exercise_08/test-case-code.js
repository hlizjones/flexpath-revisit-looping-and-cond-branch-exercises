// Write a function `areObjectsEqual` that takes two objects and returns 
// true if they are equal by value, meaning they have the same properties and 
// values (deep equality), and false otherwise. 

// The function should handle nested objects and arrays.

function areObjectsEqual(obj1, obj2) {
    if (obj1 === obj2) return true


    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);

    for (let i = 0; i < obj1Keys.length && i < obj2Keys.length; i++) {
        if (typeof obj1[obj1Keys[i]] === "object" && typeof obj2[obj2Keys[i]] === "object") {
            let result = areObjectsEqual(obj1[obj1Keys[i]], obj2[obj2Keys[i]]);
            if (result !== true) {
                return false;
            }
        } else {
            if (obj1[obj1Keys[i]] !== obj2[obj2Keys[i]]) { // Why is this necessary? 
                return false;
            }
        }
    }
    return true
}

/*It shouldn't be necesssary because there is no mismatch 
the deeper level (both arrays have b: {c : 2} so 2===2)*/

// When ready, use code below for testing

const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 4 } };


console.log(areObjectsEqual(objA, objB)); // Outputs: true
console.log(areObjectsEqual(objA, objC)); // Outputs: false
