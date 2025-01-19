// Write a function `filterAndTransform` that takes an array of 
// numbers and returns a new array where:

// - All negative numbers are removed.
// - All even numbers are squared.
// - All odd numbers are incremented by 1.

// Use for loops, if-else statements, and logical operators to 
// implement this function.

let array = [-1, 2, 3]

function filterAndTransform(arr) {
    let positiveArr = arr.filter(el => el >= 0)
    let newArr = []
    for (let val of positiveArr) {
        if (val % 2 === 0) {
            newArr.push(val*val)
        } else {
            newArr.push(++val)
        }
    }
    return newArr
}

let result = filterAndTransform(array)
console.log(result)

