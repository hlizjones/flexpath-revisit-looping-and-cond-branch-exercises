// Write a function `validateUser` that accepts an object representing 
// a user with properties 'age', 'isAdmin', and 'subscriptionType'. 

// The function should return true if the user meets all the following conditions:

// - The user is at least 18 years old.
// - The user is an admin or has a subscription type of 'pro' or 'enterprise'.
// - The user does not have a banned property set to true.

// Implement the function using a combination of if-else statements, 
// logical operators, and the !== operator for strict inequality.

// When ready, use code below for testing
const user1 = {
  age: 25,
  isAdmin: false,
  subscriptionType: "pro",
  banned: false,
};
const user2 = {
  age: 17,
  isAdmin: true,
  subscriptionType: "basic",
  banned: false,
};
const user3 = {
  age: 30,
  isAdmin: false,
  subscriptionType: "basic",
  banned: true,
};

function validateUser (obj) {
  if (obj.age >= 18 && !obj.banned) {
    if (obj.isAdmin==="true" || (obj.subscriptionType=== "pro" || obj.subscriptionType==="enterprise")) {
      return true;
    } else {
      return `Invalid subsciption type: ${obj.subscriptionType}`
    }
  } else {
    return `Invalid user`
  }
}

let valid = validateUser(user3);

console.log(valid);