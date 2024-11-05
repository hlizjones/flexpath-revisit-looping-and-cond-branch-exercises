import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  // To run the code you write for each exercise, change the text below to match the name
  // of the exercise.
  // For Example:
  // If I want to run exercise_05 below, I would change the text from "exercise_01" to
  // "exercise_05", save this file, and then when I run this file with `node exercise.js`
  // the code for exercise_05 will run
  exercise_01();
}

export function exercise_01() {
  /* 
   
    Exercise 1
    
    Write a classic for loop that prints the numbers from 1 to 5 inclusive. 
    Ensure proper initialization, condition, and iteration statements.
  
  */
  // CODE IN THE OPEN LINES BELOW
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  // Enter your code in the empty lines ABOVE
}

export function exercise_02() {
  /* 
   
    Exercise 2
    
    The following loop is intended to print numbers from 1 to 5 but has an off-by-one error. 
    Identify and correct the error.
  
  */
  // CODE IN THE OPEN LINES BELOW
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  // Enter your code in the empty lines ABOVE

  /*  
    Answer

    The loop starts at i = 0 and ends at i < 5, so it prints numbers from 0 to 4. To correct it:
  */
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

export function exercise_03() {
  /* 
   
    Exercise 3
    Given an array const fruits = ['apple', 'banana', 'cherry'];, use a for...of loop to print each fruit.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  const fruits = ["apple", "banana", "cherry"];

  for (const fruit of fruits) {
    console.log(fruit);
  }

  // Enter your code in the empty lines ABOVE
}

export function exercise_04() {
  /* 
   
    Exercise 4
    
     Explain the difference between using let and const in a for...of loop. 
     Modify the previous exercise to use const and explain why it works.
  
  */
  // CODE IN THE OPEN LINES BELOW
  // Enter your code in the empty lines ABOVE

  /*
    answer

    Using const in a for...of loop is acceptable because const declarations 
    are block-scoped and the constant is re-declared in each iteration of the loop.
  */
  for (const fruit of fruits) {
    console.log(fruit);
  }
  // In each iteration, fruit is a new constant binding to the current item.
}

export function exercise_05() {
  /* 
   
    Exercise 5
    
    Given an object const person = { name: 'Alice', age: 25, city: 'New York' };, 
    use a for...in loop to print each property and its value.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const person = { name: "Alice", age: 25, city: "New York" };

  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }

  // Enter your code in the empty lines ABOVE
}

export function exercise_06() {
  /* 
   
    Exercise 6
    
    Explain the differences between for...in and for...of loops. Provide examples where each is appropriate.
  
  */
  // CODE IN THE OPEN LINES BELOW
  // for in
  const obj = { a: 1, b: 2 };

  for (const key in obj) {
    console.log(key); // Outputs 'a' and 'b'
  }

  // for of
  const arr = [10, 20, 30];

  for (const value of arr) {
    console.log(value); // Outputs 10, 20, 30
  }

  // Enter your code in the empty lines ABOVE
  /*
    Answer

      for...in iterates over the enumerable property names (keys) of an object.
      for...of iterates over the values of an iterable object (like arrays, strings, Maps, Sets).
  */
}

export function exercise_07() {
  /* 
   
    Exercise 7
    
    Use a while loop to print the numbers from 5 down to 1.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let i = 5;

  while (i >= 1) {
    console.log(i);
    i--;
  }

  // Enter your code in the empty lines ABOVE
}

export function exercise_08() {
  /* 
   
    Exercise 8
    
    Write a do...while loop that prompts the user to enter a number greater than 10. 
    Keep prompting until the condition is met. (Assume prompt is available.)
  
  */
  // CODE IN THE OPEN LINES BELOW
  let number;

  do {
    number = prompt("Enter a number greater than 10:");
  } while (number <= 10);

  console.log(`You entered: ${number}`);

  // Enter your code in the empty lines ABOVE
}

export function exercise_09() {
  /* 
   
    Exercise 9
    
    Identify the issue in the following code that causes an infinite loop and fix it.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let count = 0;

  while (count < 5) {
    console.log(count);
    // Missing count increment
  }

  // Enter your code in the empty lines ABOVE

  /*
    Answer

    The variable count is not being incremented. Add count++ inside the loop.
  */

  let count_ans = 0;

  while (count_ans < 5) {
    console.log(count_ans);
    count_ans++;
  }
}

export function exercise_10() {
  /* 
   
    Exercise 10
    
    Given an array const numbers = [1, 2, 3, 4, 5];, use forEach to print each number multiplied by 2.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const numbers = [1, 2, 3, 4, 5];

  numbers.forEach(function (number) {
    console.log(number * 2);
  });

  // Enter your code in the empty lines ABOVE
}

export function exercise_11() {
  /* 
   
    Exercise 11
    
    Create a sparse array const sparseArray = [1, , 3];.
     Use a traditional for loop and forEach to iterate over the array. Explain the difference in output.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const sparseArray = [1, , 3];

  console.log("Using traditional for loop:");
  for (let i = 0; i < sparseArray.length; i++) {
    console.log(sparseArray[i]); // Outputs 1, undefined, 3
  }

  console.log("Using forEach:");
  sparseArray.forEach(function (value) {
    console.log(value); // Outputs 1, 3
  });
  /*
  Explanation

  The forEach method skips empty slots in sparse arrays, whereas the traditional for loop does not.
*/
  // Enter your code in the empty lines ABOVE
}

export function exercise_12() {
  /* 
   
    Exercise 12
    
    Given const temperaturesC = [0, 20, 30];, 
    use map to create a new array temperaturesF containing the temperatures converted to Fahrenheit.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const temperaturesC = [0, 20, 30];

  const temperaturesF = temperaturesC.map(function (tempC) {
    return (tempC * 9) / 5 + 32;
  });

  // temperaturesF: [32, 68, 86]

  // Enter your code in the empty lines ABOVE
}

export function exercise_13() {
  /* 
   
    Exercise 13
    
    Given an array const ages = [12, 17, 22, 30, 16];, 
    use filter to create a new array adultAges containing only the ages 18 and above.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const ages = [12, 17, 22, 30, 16];

  const adultAges = ages.filter(function (age) {
    return age >= 18;
  });

  // adultAges: [22, 30]

  // Enter your code in the empty lines ABOVE
}

export function exercise_14() {
  /* 
   
    Exercise 14
    
    Given an array const prices = [29.99, 9.99, 4.99, 19.99];, use reduce to calculate the total price.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const prices = [29.99, 9.99, 4.99, 19.99];

  const totalPrice = prices.reduce(function (total, price) {
    return total + price;
  }, 0);

  // totalPrice: 64.96

  // Enter your code in the empty lines ABOVE
}

export function exercise_15() {
  /* 
   
    Exercise 15
    
    Given an array of objects const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];, 
    use find to locate the user with id of 2.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  const user = users.find(function (user) {
    return user.id === 2;
  });

  // user: { id: 2, name: 'Bob' }

  // Enter your code in the empty lines ABOVE
}

export function exercise_16() {
  /* 
   
    Exercise 16
    
    Description:

      Use .some to check if the ages array from Exercise 13 contains any minors (age less than 18).
      Use .every to check if all prices in the prices array from Exercise 14 are under $50.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const ages = [12, 17, 22, 30, 16];
  const prices = [29.99, 9.99, 4.99, 19.99];

  const hasMinors = ages.some(function (age) {
    return age < 18;
  });

  // hasMinors: true

  const allAffordable = prices.every(function (price) {
    return price < 50;
  });

  // allAffordable: true
  // Enter your code in the empty lines ABOVE
}

export function exercise_17() {
  /* 
   
    Exercise 17
    
  
        Explain why it's more performant to cache the array length in a loop condition. 
    Modify the following loop to optimize it.
  */
  // CODE IN THE OPEN LINES BELOW
  // CODE IN THE OPEN LINES BELOW
  for (let i = 0; i < largeArray.length; i++) {
    // loop body
  }
  // Enter your code in the empty lines ABOVE
  /*
    Answer

    Accessing largeArray.length on every iteration can be inefficient for large arrays. Cache the length:
  */
  for (let i = 0, len = largeArray.length; i < len; i++) {
    // loop body
  }
}

export function exercise_18() {
  /* 
   
    Exercise 18
    
      Write a loop that searches for the number 7 in an array const numbers = [1, 3, 7, 8, 7]; 
      and stops searching after finding the first occurrence.
  
  */

  const numbers = [1, 3, 7, 8, 7];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
      console.log(`Found 7 at index ${i}`);
      break;
    }
  }

  // Output: Found 7 at index 2
}

export function exercise_19() {
  /* 
   
    Exercise 19
    
    Write an if-else statement that assigns 'even' or 'odd' to a variable 
    type based on whether number is even or odd, without using braces. Discuss potential pitfalls.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const number = 4;
  let type;

  if (number % 2 === 0) type = "even";
  else type = "odd";
  /*
Pitfalls: Omitting braces can lead to 
errors if additional statements are added to the conditional blocks without proper indentation.
*/
  // Enter your code in the empty lines ABOVE
}

export function exercise_20() {
  /* 
   
    Exercise 20
    
    Create a switch statement that logs the season based on the month number (1-12). 
    Group months into seasons using fall-through behavior.

  
  */
  // CODE IN THE OPEN LINES BELOW
  const month = 4;
  let season;

  switch (month) {
    case 12:
    case 1:
    case 2:
      season = "Winter";
      break;
    case 3:
    case 4:
    case 5:
      season = "Spring";
      break;
    case 6:
    case 7:
    case 8:
      season = "Summer";
      break;
    case 9:
    case 10:
    case 11:
      season = "Autumn";
      break;
    default:
      season = "Invalid month";
  }

  console.log(season); // 'Spring'

  // Enter your code in the empty lines ABOVE
}

export function exercise_21() {
  /* 
   
    Exercise 21
    
    Rewrite the following if-else statement using a ternary operator.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let access;

  if (age >= 18) {
    access = "granted";
  } else {
    access = "denied";
  }

  // Enter your code in the empty lines ABOVE

  // answer

  const access_ans = age >= 18 ? "granted" : "denied";
}

export function exercise_22() {
  /* 
   
    Exercise 22
    
    List all the falsy values in JavaScript. 
    Write a function that checks if a given value is falsy and logs a message accordingly.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function checkFalsy(value) {
    if (!value) {
      console.log(`${value} is falsy`);
    } else {
      console.log(`${value} is truthy`);
    }
  }

  checkFalsy(0); // '0 is falsy'
  checkFalsy("hello"); // 'hello is truthy'

  // Enter your code in the empty lines ABOVE

  /*

    Answer

    Falsy values in JavaScript:

    false
    0
    '' (empty string)
    null
    undefined
    NaN
  */
}

export function exercise_23() {
  /* 
   
    Exercise 23
    
    Use the nullish coalescing operator ?? to 
    assign a default value to a variable username if it is null or undefined.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let username = null;
  const displayName = username ?? "Guest";

  console.log(displayName); // 'Guest'

  // Enter your code in the empty lines ABOVE
}

export function exercise_24() {
  /* 
   
    Exercise 24
    
    Write a function that attempts to find a value in a nested array structure. 
    Use error handling to prevent infinite loops if the structure is deeply nested or circular.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function findValue(data, target, visited = new Set()) {
    if (visited.has(data)) {
      throw new Error("Circular reference detected");
    }
    visited.add(data);

    if (Array.isArray(data)) {
      for (const item of data) {
        if (item === target) {
          return true;
        }
        if (typeof item === "object") {
          if (findValue(item, target, visited)) {
            return true;
          }
        }
      }
    } else if (typeof data === "object") {
      for (const key in data) {
        if (data[key] === target) {
          return true;
        }
        if (typeof data[key] === "object") {
          if (findValue(data[key], target, visited)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  // Example usage:
  const data = [1, [2, [3, [4]]]];
  try {
    console.log(findValue(data, 4)); // true
  } catch (error) {
    console.error(error.message);
  }

  /*
    Explanation

    The function uses a Set to keep track of visited nodes to 
    prevent infinite loops in case of circular references.

  */

  // Enter your code in the empty lines ABOVE
}
