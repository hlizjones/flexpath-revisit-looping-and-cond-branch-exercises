// Example of a closure causing increased memory usage
function createHeavyClosure() {
  const largeArray = new Array(1e6).fill("*"); // Large array occupying memory
  return function () {
    return largeArray.length;
  };
}

let closureFunc = createHeavyClosure();
console.log(closureFunc()); // Outputs: 1000000

// The largeArray is still in memory because closureFunc holds a reference

// To allow for garbage collection
closureFunc = null; // Remove reference to the closure

/*
  Explanation:

  The closure captures largeArray, preventing it from being garbage collected.

  Setting closureFunc to null removes the reference, allowing memory to be freed.
  
  Understanding of how closures interact with memory management is crucial.
*/
