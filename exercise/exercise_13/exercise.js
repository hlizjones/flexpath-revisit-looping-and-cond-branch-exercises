// Write a function `countFalsyValues` that takes an array of values and 
// returns the number of falsy values in the array. 

// Use the Boolean constructor and logical operators to implement this.

function countFalsyValues (arr) {
    let counter = 0;
    for (let val of arr) {
        if (Boolean(val) === false) {
            counter ++
        } 
    } return counter;
}

let arr1 = [2, null, "", "potato", true, false] // 3 falsy

let result = countFalsyValues(arr1)

console.log(result)