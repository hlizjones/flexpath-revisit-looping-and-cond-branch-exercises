// Implement a function `evaluateOperation` that takes two numbers and 
// a string representing an operator ('+', '-', '*', '/', '%', '^') and returns 
// the result of applying that operator to the two numbers. 

// Use a switch statement and ensure proper handling of invalid operators.

function evaluateOperation(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2
        case "-":
        return num1 - num2
        case "*":
            return num1 * num2
        case "/":
        return num1 / num2
        case "%":
            return num1 % num2
        case "^":
        return num1 ** num2
        default:
        return "Invalid operator"
}
}

console.log(evaluateOperation(2,2,"+"))
console.log(evaluateOperation(2,2,"-"))
console.log(evaluateOperation(2,2,"*"))
console.log(evaluateOperation(2,2,"/"))
console.log(evaluateOperation(2,2,"%"))
console.log(evaluateOperation(2,2,"^"))