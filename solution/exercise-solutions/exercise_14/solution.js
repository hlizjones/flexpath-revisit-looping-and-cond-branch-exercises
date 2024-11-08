function deepFreeze(obj) {
  Object.freeze(obj);
  for (let key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      obj[key] !== null &&
      (typeof obj[key] === "object" || typeof obj[key] === "function") &&
      !Object.isFrozen(obj[key])
    ) {
      deepFreeze(obj[key]);
    }
  }
}

const dataStore = {
  number: 42,
  text: "Hello",
  array: [1, 2, 3],
  nested: {
    a: 1,
    b: [2, 3],
    c: { d: 4 },
  },
};

deepFreeze(dataStore);

// Testing modifications
dataStore.number = 100; // Fails silently
dataStore.array.push(4); // Throws error in strict mode
dataStore.nested.c.d = 5; // Throws error in strict mode
dataStore.newProp = "New"; // Fails silently

console.log(dataStore);
// Outputs the original dataStore without modifications
