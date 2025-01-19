// Write a function `validateInput` that accepts an object with 
// properties 'username', 'password', and 'email'. 

// The function should return true if:

// - username and password are non-empty strings, and email contains an '@' symbol, 

// or

// - The user has a property isGuest set to true.


// Use logical operators and parentheses to ensure the correct evaluation order.

function validateInput (obj) {
    if (!obj.isGuest) {
        if (obj.username && obj.password && obj.email.includes("@")) {
            return true
        } else {
            return false
        }
    } else {
        return true
    }
}

let user = {
    username: "hjones",
    password: "123!",
    email: "hlizjones@gmail.com",
}

let guest = {
    isGuest: true
}

let resultUser = validateInput(user)

let resultGuest = validateInput(guest)

console.log(resultUser)

console.log(resultGuest)