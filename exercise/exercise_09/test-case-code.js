// Implement a function `invertBooleanProperties` that takes an object and 
// inverts all of its Boolean properties (i.e., true becomes false, and vice versa). 

// The function should modify the original object and handle nested objects.

// Use this for testing
const settings = {
  darkMode: true,
  notifications: false,
  preferences: {
    autoSave: true,
    sync: false,
  },
};

function invertBooleanProperties (obj) {
  for (let key in obj)
    if (typeof obj[key] !== "boolean") {
      continue
    }
     else if (typeof obj[key] === "object") {
      obj[key] = invertBooleanProperties(obj[key])
    } else {
      obj[key] = !obj[key]
    }
    return obj
}

console.log(invertBooleanProperties(settings))


// Result if function works correctly
// Outputs:
// {
//   darkMode: false,
//   notifications: true,
//   preferences: { autoSave: false, sync: true }
// }
