function areObjectsEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 != "object" ||
    obj1 == null ||
    typeof obj2 != "object" ||
    obj2 == null
  ) {
    return false;
  }

  let keysA = Object.keys(obj1);
  let keysB = Object.keys(obj2);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!areObjectsEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

// Testing
const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 4 } };

console.log(areObjectsEqual(objA, objB)); // Outputs: true
console.log(areObjectsEqual(objA, objC)); // Outputs: false

/*
  Explanation:

  The function checks for strict equality first.
  It then recursively compares each property.
  Handles nested objects and arrays by recursion.
*/
