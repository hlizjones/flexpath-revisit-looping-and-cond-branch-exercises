// Exercise 1: Write a for loop that counts down from 10 to 1
for (let i = 10; i > 0; i--) {
    console.log(i);
}

// Exercise 2: Implement a while loop that sums numbers from 1 to 100
let sum = 0;
let num = 1;
while (num <= 100) {
    sum += num;
    num++;
}
console.log(sum);

// Exercise 3: Use a do-while loop to prompt for a password
let password;
do {
    password = prompt('Enter the password:');
} while (password !== 'correctPassword');
console.log('Access granted');

// Exercise 4: Iterate over an array of names using for-of
const names = ['Alice', 'Bob', 'Charlie'];
for (const name of names) {
    console.log(name);
}

// Exercise 5: Use for-in to iterate over object properties
const user = { name: 'John', age: 25, city: 'New York' };
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

// Exercise 6: Use forEach to log all elements in an array
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));

// Exercise 7: Use map to double each number in an array
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

// Exercise 8: Use filter to keep only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Exercise 9: Use reduce to calculate the product of numbers
const product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product);

// Exercise 10: Function to return unique elements
function uniqueArray(arr) {
    return [...new Set(arr)];
}
console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5]));

// Exercise 11: Use some to check for negative numbers
const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative);

// Exercise 12: Use every to check if all numbers are positive
const allPositive = numbers.every(num => num > 0);
console.log(allPositive);

// Exercise 13: Use find to get the first number greater than 10
const foundNumber = numbers.find(num => num > 10);
console.log(foundNumber);

// Exercise 14: Use findIndex to get index of first number less than 5
const index = numbers.findIndex(num => num < 5);
console.log(index);

// Exercise 15: Deep copy function using recursion
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}

// Exercise 16: Function to compare two arrays for deep equality
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, index) => val === arr2[index]);
}
console.log(arraysEqual([1, 2, 3], [1, 2, 3]));

// Exercise 17: Use Object.freeze and attempt modification
const frozenObj = Object.freeze({ key: 'value' });
frozenObj.key = 'newValue'; // No effect
console.log(frozenObj.key);

// Exercise 18: Use Object.seal and try adding a property
const sealedObj = Object.seal({ name: 'Alice' });
sealedObj.age = 30; // Can't add new property
console.log(sealedObj);

// Exercise 19: Use Object.keys to get keys of an object
const keys = Object.keys(user);
console.log(keys);

// Exercise 20: Use Object.entries to iterate over key-value pairs
Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// Exercise 21: Implement a switch statement
function categorizeFruit(fruit) {
    switch (fruit) {
        case 'orange':
        case 'lemon':
            return 'Citrus';
        case 'strawberry':
        case 'blueberry':
            return 'Berry';
        default:
            return 'Other';
    }
}
console.log(categorizeFruit('orange'));

// Exercise 22: Use a ternary operator for voting eligibility
const age = 18;
const canVote = age >= 18 ? 'Can vote' : 'Cannot vote';
console.log(canVote);

// Exercise 23: Use nullish coalescing operator
const data = null;
const backupData = 'Default data';
const result = data ?? backupData;
console.log(result);

// Exercise 24: Use for-await-of with an array of Promises
async function asyncLoop() {
    const promises = [Promise.resolve('A'), Promise.resolve('B'), Promise.resolve('C')];
    for await (const result of promises) {
        console.log(result);
    }
}
asyncLoop();

// Exercise 25: Loop to count letter occurrences in a string
function countLetters(str, letter) {
    let count = 0;
    for (const char of str) {
        if (char === letter) count++;
    }
    return count;
}
console.log(countLetters('hello world', 'o'));

// Exercise 26: Use continue to skip even numbers
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) continue;
    console.log(numbers[i]);
}

// Exercise 27: Use break to stop at a condition
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3) break;
    console.log(numbers[i]);
}

// Exercise 28: Reverse a string using a loop
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('hello'));

// Exercise 29: Use for-of to iterate over a Set
const mySet = new Set(['apple', 'banana', 'cherry']);
for (const item of mySet) {
    console.log(item);
}

// Exercise 30: Flatten a nested array using a loop
function flattenArray(nestedArray) {
    const flatArray = [];
    for (const element of nestedArray) {
        if (Array.isArray(element)) {
            flatArray.push(...element);
        } else {
            flatArray.push(element);
        }
    }
    return flatArray;
}
console.log(flattenArray([1, [2, 3], [4, 5], 6]));
