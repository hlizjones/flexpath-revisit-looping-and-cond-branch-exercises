const counter = {
  value: 0,
  increment(prefix = false) {
    if (prefix) {
      this.value += 1;
      return this.value;
    } else {
      const temp = this.value;
      this.value += 1;
      return temp;
    }
  },
  decrement(prefix = false) {
    if (prefix) {
      this.value -= 1;
      return this.value;
    } else {
      const temp = this.value;
      this.value -= 1;
      return temp;
    }
  },
};

// Testing
console.log(counter.increment()); // Outputs: 0 (postfix)
console.log(counter.value); // Outputs: 1
console.log(counter.increment(true)); // Outputs: 2 (prefix)
console.log(counter.value); // Outputs: 2
console.log(counter.decrement()); // Outputs: 2 (postfix)
console.log(counter.value); // Outputs: 1
console.log(counter.decrement(true)); // Outputs: 0 (prefix)
console.log(counter.value); // Outputs: 0
