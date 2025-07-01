//! 1. Function Declarations (Named Functions)
// Basic syntax
function greet(name) {
  return `Hello, ${name}!`;
}
// Example usage
console.log(greet('Alice')); // "Hello, Alice!"

//! 2. Function Expressions
// Assigning to a variable
const sum = function(a, b) {
  return a + b;
};
// Example usage
console.log(sum(2, 3)); // 5

//! 3. Arrow Functions
const findArr = [1, 2, 3, 4, 5];
const evenNumber = findArr.find((number) => {
  return number % 2 === 0;
});
console.log(evenNumber);

//! 4. High - Order Functions
// A higher-order function is a function that:
// 1. Takes one or more functions as arguments, or
// 2. Returns a function as its result, or
// 3. Both

// Core Examples of Higher-Order Functions
// 1. Functions That Accept Other Functions (Callback Functions)
// Higher-order function
function operateOnNumbers(a, b, operation) {
  return operation(a, b);
}
// Callback functions
function add(x, y) { return x + y; }
function multiply(x, y) { return x * y; }
// Usage
console.log(operateOnNumbers(5, 3, add));      // 8
console.log(operateOnNumbers(5, 3, multiply)); // 

// 2. Functions That Return Functions 
function createGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}
const sayHello = createGreeter('Hello');
const sayHi = createGreeter('Hi');
console.log(sayHello('Alice')); // "Hello, Alice!"
console.log(sayHi('Bob'));      // "Hi, Bob!"

//! 5. Async await Functions: Async functions are a special type of function that allow you to write asynchronous code in a more synchronous style.

// Example 1
let asyncFunc = async () => {
  let randomUser = await fetch(`https://randomuser.me/api/`);
  let user = await randomUser.json();
  console.log(user.results);
}
asyncFunc();
