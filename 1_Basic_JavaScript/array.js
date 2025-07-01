array = [3, 9, 3, 5, 6, 8, 2, 1, 4, 7];
// You Must Know about these thing in array
// 1. forEach() method
// 2. map() method
// 3. filter() method
// 4. find() method
// 5. findIndex() method
// indexOf() method

//! forEach() method: The forEach() method is a built-in array method in JavaScript that executes a provided function once for each array element.

// Basic Syntax
arr.forEach(function (currentValue, index, array) {
  // your code here
});
// currentValue: The current element being processed
// index (optional): The index of the current element
// array (optional): The array that forEach() is being applied to

// Example 1:
const fruits = ["apple", "banana", "cherry"];

// Using forEach to log each fruit
fruits.forEach(function (fruit) {
  console.log(fruit);
});
// Output: apple banana cherry

// Example 2: Using Index Parameter
const colors = ["red", "green", "blue"];
colors.forEach((color, index) => {
  console.log(`Color at position ${index} is ${color}`);
});
// Output:
// Color at position 0 is red
// Color at position 1 is green
// Color at position 2 is blue

// Example 3: Modifying Elements (with caution)
const numbers = [1, 2, 3, 4];
const doubled = [];
numbers.forEach((number) => {
  doubled.push(number * 2);
});
console.log(doubled); // [2, 4, 6, 8]

//! map(): The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// Basic Syntax
const newArray = arr.map(function (currentValue, index, array) {
  // return element for new array
});
// currentValue: The current element being processed
// index (optional): The index of the current element
// array (optional): The array that map() is being applied to

// Example 1:
const numb = [1, 2, 3, 4];

numbers.map((number) => {
  return number; // return element for new array --> # Output: [1, 2, 3, 4]
});
numbers.map((number) => {
  return number * 2; // return element for new array --> # Output: [2, 4, 6, 8]
});
numbers.map((number) => {
  return number + 3; // return element for new array --> # Output: [4, 5, 6, 7]
});

// Example 2: Complex Transformation
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];
const saleProducts = products.forEach((product) => {
  return {
    name: product.name,
    price: product.price * 0.9, // 10% discount
  };
});
console.log(saleProducts);
// Output:
// [
//   { name: 'Laptop', price: 900 },
//   { name: 'Phone', price: 450 },
//   { name: 'Tablet', price: 270 }
// ]

//! filter(): The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Basic Syntax
let filterArray = arr.filter(function (currentValue, index, array) {
  // return true or false
});
// currentValue: The current element being processed
// index (optional): The index of the current element
// array (optional): The array that filter() is being applied to

// Example 1:
const filterArr = [1, 2, 3, 4, 5];

const evenNumbers = filterArr.filter((number) => {
  return number % 2 === 0;
});
const negativeNumbers = filterArr.filter((number) => {
  return number < 0;
});
const oddNumbers = filterArr.filter((number) => {
  return number % 2 !== 0;
});

// Example 2:
const filterProducts = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 300, inStock: true },
];
const availableProducts = filterProducts.filter((product) => product.inStock);
console.log(availableProducts);
//Output:
// [
//   { name: 'Laptop', price: 1000, inStock: true },
//   { name: 'Tablet', price: 300, inStock: true }
// ]
const price = filterProducts.filter((product) => {
  return product.price >= 500 && product.inStock;
})
console.log(price);
//Output:
// [
//   { name: 'Laptop', price: 1000, inStock: true }
// ]


// find(): The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

// Basic Syntax
let findArray = arr.find(function (currentValue, index, array) {
  // return true or false
});
// currentValue: The current element being processed
// index (optional): The index of the current element
// array (optional): The array that find() is being applied to

// Example 1:
const findArr = [1, 2, 3, 4, 5];
const evenNumber = findArr.find((number) => {
  return number % 2 === 0;
});
console.log(evenNumber); // Output: 2

// Example 2: Finding an Object 
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Bob' }
const user2 = users.find((u) => u.name === 'Bob');
console.log(user2);  // Output: { id: 2, name: 'Bob' }

