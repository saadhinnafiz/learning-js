//* Numbers in JavaScript

const myNumber = 67;
const myFloat = 67.67;
const myString = "67 ";
//an integer is a whole number
//javascript considers both int and floats to be number data tyoes

console.log(myNumber);
console.log(myFloat);
console.log(myString);

console.log(myNumber === myString);

// we can change a string to number data type with number function
console.log(Number(myString) === myNumber);

//undefined and values that cant be converted will return NaN (Not a Number)

//boolean data will return 1 or 0
console.log(Number(true)); //1
console.log(Number(false)); //0

//* Number methods:

//* The Number.isInteger() method:
// determines whether the passed value is an integer.

console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myFloat));

//* The Number.pasrseFloat() method
// parses an argument and returns a floating point number.
//If a number cannot be parsed from the argument, it returns NaN

const userId = "2026anyaforger";
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(userId));
//this method removes non numeric char and converts other data types to numeric data types.

//* The toFixed() method
// formats a number according to how many decimal points you provide as the parameter
console.log(myFloat.toFixed(1));
// returns rounded up trailing decimals
// returns a string data

//* The Number.pasrseInt() method
// Parses a string argument and returns an int

console.log(Number.parseInt(myString));

//* The toString() method:
// returns a string representing the number

console.log(myFloat.toString());

//* We can get the benefits of several methods at once by chaining them together
// chaining = using several methods chained together

console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

//* the Number.isNaN() method
// determins whether the passed value is a NaN AND its type is Number

Number.isNaN();

console.log(Number.isNaN("Dave"));

//* global isNaN() function determines whether a value is NaN or not
// does not check if value passed is a number data type

console.log(isNaN("Dave"));

//* Math Methods

// read from mdn
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

const randomUserId = Math.trunc(Math.random() * 10000);
console.log(randomUserId);
