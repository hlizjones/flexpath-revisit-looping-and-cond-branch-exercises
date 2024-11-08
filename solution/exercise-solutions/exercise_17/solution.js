const original = {
  name: "Alice",
  preferences: {
    theme: "dark",
    language: "en",
  },
};

// Shallow copy
const copy = { ...original };

// Modifying nested property
copy.preferences.theme = "light";

console.log(original.preferences.theme); // Outputs: 'light'

// Deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original));

// Modifying deep copy
deepCopy.preferences.language = "es";

console.log(original.preferences.language); // Outputs: 'en'
console.log(deepCopy.preferences.language); // Outputs: 'es'

/*
  Explanation:

  Shallow copying copies top-level properties, 
    but nested objects are still references.

  Modifying a nested object in the copy affects the original.

  Deep copying creates entirely new nested objects, 
    preventing unintended side effects.
*/
