//* Array.reduce()

// used to reduce an array to a single value by iterating over its elements and applying a function.

//  starts with all the elements from an array
// terates over them, and computes them to a single value
// powerful for tasks like summing numbers , finding maximum values , and more.

// Example: Calculating Total Price:

const groceryItems = [29, 12, 45, 35, 87, 110];

const total = groceryItems.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(total); // 318

/* 
How reduce() Works:
- Accumulator: The initial value (in this case, 0) that accumulates the results of the function.
- CurrentValue: The current element being processed in the array.

The reduce method takes two arguments:
- A callback function that runs for each element in the array.
- The initial value of the accumulator.

*/

// Example: Sum of Numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const totalOf = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(totalOf); // 55

// Simplifying with ES6

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
);
console.log(sum); // 55

// Exercise: Find Maximum Value

const values = [5, 2, 3, 1, 2];

const findMax = (acc, val) => (val > acc ? val : acc);

const maximumNumber = values.reduce(findMax);

console.log(maximumNumber); // 5

// More practice

const num = [1, -1, 2, 3];

let addedNum = num.reduce((acc, curr) => acc + curr, 0);
console.log(addedNum);
