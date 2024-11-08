class CircularCounter {
  constructor(max) {
    this.value = 0;
    this.max = max;
  }

  increment(prefix = false) {
    if (prefix) {
      this.value = (this.value + 1) % (this.max + 1);
      return this.value;
    } else {
      const temp = this.value;
      this.value = (this.value + 1) % (this.max + 1);
      return temp;
    }
  }

  decrement(prefix = false) {
    if (prefix) {
      this.value = (this.value - 1 + (this.max + 1)) % (this.max + 1);
      return this.value;
    } else {
      const temp = this.value;
      this.value = (this.value - 1 + (this.max + 1)) % (this.max + 1);
      return temp;
    }
  }
}

// Testing
const counter = new CircularCounter(3);

console.log(counter.increment()); // Outputs: 0 (value becomes 1)
console.log(counter.increment(true)); // Outputs: 2
console.log(counter.increment()); // Outputs: 2 (value becomes 3)
console.log(counter.increment()); // Outputs: 3 (value becomes 0)
console.log(counter.decrement(true)); // Outputs: 3
console.log(counter.decrement()); // Outputs: 3 (value becomes 2)

/*
  Explanation:

  The % operator is used to wrap around the value.
  The counter increments and decrements within the range 0 to max.
  Prefix and postfix behavior is implemented similarly to Exercise 5.
*/
