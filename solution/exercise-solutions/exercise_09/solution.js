function invertBooleanProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "boolean") {
      obj[key] = !obj[key];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      invertBooleanProperties(obj[key]);
    }
  }
}

// Testing
const settings = {
  darkMode: true,
  notifications: false,
  preferences: {
    autoSave: true,
    sync: false,
  },
};

invertBooleanProperties(settings);
console.log(settings);
// Outputs:
// {
//   darkMode: false,
//   notifications: true,
//   preferences: { autoSave: false, sync: true }
// }

/*
  Explanation:

  The function iterates over the object's properties.
  It uses the typeof operator to check for Booleans.
  The ! operator inverts the Boolean values.
  Recursion is used to handle nested objects.
*/
