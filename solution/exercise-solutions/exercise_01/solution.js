function validateUser(user) {
  if (
    user.age >= 18 &&
    (user.isAdmin === true ||
      user.subscriptionType === "pro" ||
      user.subscriptionType === "enterprise") &&
    user.banned !== true
  ) {
    return true;
  } else {
    return false;
  }
}

// Testing
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

console.log(validateUser(user1)); // Outputs: true
console.log(validateUser(user2)); // Outputs: false
console.log(validateUser(user3)); // Outputs: false

/*
  Explanation:

  The function uses logical && and || operators to 
    combine conditions.

  The strict inequality !== ensures that banned is 
    not true (it could be undefined).

  The function checks for age, admin status or 
    subscription type, and ban status.
*/
