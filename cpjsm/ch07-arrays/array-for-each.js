//* array.forEach

// used to execute a function for each element in an array

// This method provides a cleaner and more readable alternative
// to the traditional for loop for certain use cases.

let names = ["Jon", "Jenny", "Johnny"];

names.forEach((value, index) => {
  console.log(index, value);
  // ...
});

// Using a Named Function as a Callback
// Instead of writing the function inline you can define it separately and pass it in:
function logArrayElement(element, index) {
  console.log(index, element);
}

names.forEach(logArrayElement);

// Return Value
// This method returns undefined and is not chainable
// can't call another method on the array after using forEach.

let returnValue = names.forEach(function (value) {
  console.log(value);
});

console.log(returnValue); // undefined

// How to use it - example

let sum = 0;
const numbers = [65, 44, 12, 4];

numbers.forEach((number) => {
  sum += number;
});

console.log(sum); // 125

// The array.forEach method is a powerful tool for iterating over arrays,
// providing a clean and expressive way to perform actions on each element.
