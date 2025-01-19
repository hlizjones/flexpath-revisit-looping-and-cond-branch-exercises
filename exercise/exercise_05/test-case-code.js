// Create an object `counter` with a property 'value' initialized to 0. 

// Add methods 'increment' and 'decrement' that mimic the behavior of the 
// increment (++) and decrement (--) operators. 

// Ensure that the methods can be used in both prefix and postfix forms, and that 
// they return the correct values.

let counter = { value: 0 }

counter.increment = function (truthy) {
    if (!truthy) {
        return this.value++
    } else {
       return ++this.value
    }
}

counter.decrement = function (truthy) {
    if (!truthy) {
        return this.value--
    } else {
        return --this.value
    }
}



// When ready, use code below for testing

console.log(counter.increment()); // Outputs: 0 (postfix)
console.log(counter.value); // Outputs: 1
console.log(counter.increment(true)); // Outputs: 2 (prefix)
console.log(counter.value); // Outputs: 2
console.log(counter.decrement()); // Outputs: 2 (postfix)
console.log(counter.value); // Outputs: 1
console.log(counter.decrement(true)); // Outputs: 0 (prefix)
console.log(counter.value); // Outputs: 0
