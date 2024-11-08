// Example of a closure causing increased memory usage
function createHeavyClosure() {
  const largeArray = new Array(1e6).fill("*"); // Large array occupying memory
  return function () {
    return largeArray.length;
  };
}

const closureFunc = createHeavyClosure();
console.log(closureFunc()); // Outputs: 1000000

// The largeArray is still in memory because closureFunc holds a reference

// To allow for garbage collection
closureFunc = null; // Remove reference to the closure
