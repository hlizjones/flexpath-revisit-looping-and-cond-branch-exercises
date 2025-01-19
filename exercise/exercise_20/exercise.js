// Create a class `CircularCounter` that counts from 0 up to 
// a maximum value 'max' and then wraps around to 0 when incremented. 

// Implement 'increment' and 'decrement' methods

// Ensure that the counter behaves correctly at the boundaries.

class CircularCounter {
    constructor(max) {
        this.val = 0
        this.max = max
    }
}

CircularCounter.prototype.increment = function () {
    if (this.val === this.max) {
        this.val = 0
    } else {
        this.val++
        return this.val
    }
}

CircularCounter.prototype.decrement = function () {
    if (this.val === 0) {
        this.val = 0
    } else {
        this.val--
        return this.val
    }
}

let counter = new CircularCounter(3)

console.log("------Inc Round 1------")
console.log("Starting Val", counter.val)
counter.increment()
console.log("Ending Val", counter.val)
console.log("------Inc Round 2------")
console.log("Starting Val", counter.val)
counter.increment()
console.log("Ending Val", counter.val)
console.log("------Inc Round 3------")
console.log("Starting Val", counter.val)
counter.increment()
console.log("Ending Val", counter.val)
// console.log("------Inc Round 4------")
// console.log("Starting Val", counter.val)
// counter.increment()
// console.log("Ending Val", counter.val)

console.log("------Dec Round 1------")
console.log("Starting Val", counter.val)
counter.decrement()
console.log("Ending Val", counter.val)
console.log("------Dec Round 2------")
console.log("Starting Val", counter.val)
counter.decrement()
console.log("Ending Val", counter.val)
console.log("------Dec Round 3------")
console.log("Starting Val", counter.val)
counter.decrement()
console.log("Ending Val", counter.val)
console.log("------Dec Round 4------")
console.log("Starting Val", counter.val)
counter.decrement()
console.log("Ending Val", counter.val)