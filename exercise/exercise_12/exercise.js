// Implement custom functions for addition (add), subtraction (subtract), 
// multiplication (multiply), division (divide), modulus (mod), and 
// exponentiation (power) without using the built-in operators (+, -, *, /, %, **). 

// Use only the increment (++) and decrement (--) operators, 
// loops, and conditional statements.

function addition(a, b) {
    if (a >= 0 && b >= 0) {
        for (let i = 0; i < a; i++) {
            b++
        } return b
    } else if (a < 0 && b < 0) {
        for (let i = 0; i < -a; i++) {
            b--
        } return b
    } else {
        if (a < 0) {
            for (let i = 0; i < b; i++) {
                a++
            } return a
        } else {
            for (let i = 0; i < -b; i++) {
                a--
            } return a
        }
    }
}

let add = addition(5, 3)

console.log(add)

function subtraction(a, b) {
    let result = addition(a, -b)
    return result
}

let sub = subtraction(2, 10)

console.log(sub)

function multiplication(a, b) {
    let total = 0
    for (let i = 0; i < Math.abs(b); i++) {
        total = addition(total, a)
    }
    if (b < 0) {
        return -total
    } else {
        return total
    }
}

let mult = multiplication(2, 4)

console.log(mult)

function division(a, b) {
    if (b === 0) return "Cannot divide by 0"
    let counter = 0;
    for (let i = 0; i < a; i++) {
        a = subtraction(a, b)
        counter++
    } return counter
}

let div = division(0, 4)

console.log(div)

function exponentiation(a, b) {
    let total = a;
    for (let i = 1; i < b; i++) {
        total = multiplication(total, a)
    };
    if (a < 0) {
        return -total
    } else {
        return total
    }
}

let exp = exponentiation(2, 4)

console.log(exp)

   function modulus (a,b) {
    if (b === 0) return "Cannot divide by 0"
    for (let i = 0; i < a; i++) {
        a = subtraction(a, b)
    } return a
}

let mod = modulus(12,5)

console.log(mod)