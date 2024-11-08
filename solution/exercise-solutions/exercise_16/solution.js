function validateInput(user) {
  if (
    (typeof user.username === "string" &&
      user.username !== "" &&
      typeof user.password === "string" &&
      user.password !== "" &&
      typeof user.email === "string" &&
      user.email.includes("@")) ||
    user.isGuest === true
  ) {
    return true;
  }
  return false;
}

// Testing
const user1 = {
  username: "john",
  password: "secret",
  email: "john@example.com",
};
const user2 = { username: "jane", password: "pass", email: "invalidemail" };
const user3 = { isGuest: true };

console.log(validateInput(user1)); // Outputs: true
console.log(validateInput(user2)); // Outputs: false
console.log(validateInput(user3)); // Outputs: true

/*
  Explanation:

  Parentheses are used to group conditions correctly.

  Logical operators follow precedence rules, but 
    explicit grouping ensures clarity.
    
  The function handles both registered users and guests.
*/
