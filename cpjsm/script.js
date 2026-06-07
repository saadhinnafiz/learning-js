//*Operators - There are several types

//Arithmetic Operators:

console.log(5 + 3); // 8

/* 
+ is the operartor
5 is the left operand
3 is the right operand
resulting in 8
*/

//Comparison Operators

console.log(5 > 3); // true

//Logical Operators

console.log(true && false); //false - (in && operators both has to be true to result in true)

//Assignment operators

let w = 5;
console.log((w += 3)); //8

//Conditional (Ternary) Operator

let result = 5 > 3 ? "Yes" : "No";
console.log(result); //yes

//-----------------------------------------------------------------------------------------//

//* Arithmetic Operators Demo in JavaScript

// Addition (+)
const sum = 10 + 5;
console.log("Addition: 10 + 5 =", sum); // Output: 15

// Subtraction (-)
const difference = 20 - 7;
console.log("Subtraction: 20 - 7 =", difference); // Output: 13

// Multiplication (*)
const product = 6 * 4;
console.log("Multiplication: 6 * 4 =", product); // Output: 24

// Division (/)
const quotient = 15 / 3;
console.log("Division: 15 / 3 =", quotient); // Output: 5

// Modulus (%) - Remainder after division
const remainder = 17 % 5;
console.log("Modulus: 17 % 5 =", remainder); // Output: 2

// Exponentiation (**)
const power = 3 ** 3;
console.log("Exponentiation: 3 ** 3 =", power); // Output: 27

// Increment (++)
let incrementValue = 5;
incrementValue++; // Equivalent to incrementValue = incrementValue + 1
console.log("Increment: 5++ =", incrementValue); // Output: 6

// Decrement (--)
let decrementValue = 8;
decrementValue--; // Equivalent to decrementValue = decrementValue - 1
console.log("Decrement: 8-- =", decrementValue); // Output: 7

//-----------------------------------------------------------------------------------------//

//* Comparison Operators Demo in JavaScript

const x = 10;
const y = 5;
const z = "10"; // A string with the same value as x

// Greater than (>)
console.log("Is x > y? ", x > y); // true (10 is greater than 5)

// Greater than or equal to (>=)
console.log("Is x >= y? ", x >= y); // true (10 is greater than 5)

// Less than (<)
console.log("Is y < x? ", y < x); // true (5 is less than 10)

// Less than or equal to (<=)
console.log("Is y <= x? ", y <= x); // true (5 is less than 10)

// Loose equality (==) - Compares values, but ignores types
console.log("Is x == z? ", x == z); // true (10 == "10" because == allows type conversion)

// Strict equality (===) - Compares both value and type
console.log("Is x === z? ", x === z); // false (10 is a number, "10" is a string)

// Loose inequality (!=) - Checks if values are different, ignoring type
console.log("Is x != z? ", x != z); // false (10 == "10" due to type coercion)

// Strict inequality (!==) - Checks if values OR types are different
console.log("Is x !== z? ", x !== z); // true (10 is a number, "10" is a string)

// always better to use strict equality because loose equality is unpredictable (=== and !===)

//-----------------------------------------------------------------------------------------//

//*Logical Operators

/*
Logical operators are used to combine 2 or more conditions in JavaScript
Operators: ||(OR), && (AND), !(NOT).
*/

//&& checks whether all operands are truthy valyes. if they are it returns true, else flase
console.log("AND Operator &&");

console.log(true && false); // false
console.log(true && true); // true
console.log(false && false); // false
console.log(true && true && false); // false
console.log(true && true && true && true); // true

/* 
The double vertical (||) bar is known as OR  operator. 
It checks whether at least one operand is a truthy value.
If at least one is truthy value returns true else false
*/

console.log("OR Operator ||");

console.log(true || false); //true
console.log(true || true); // true
console.log(false || false); //false
console.log(true || false || false || false); //true

/* 
The exclamation mark ! - is known as NOT  operator. It reverses the boolean result of a condition
*/

console.log("NOT Operator !");

console.log(!true); //false
console.log(!false); //true

//-----------------------------------------------------------------------------------------//

//* Assignment Operators

//It assigns a value to its left operand based on the value of right operand

//Basic Assignment Operator: =
const value = 5; // The number 5 is assigned to the variable "number"
console.log(value);

/* 
Compound Assignment Operators:

We can combine assignment operator with one of the arithmatic operators 
to perform an operation and assignment in one step:
*/
console.log("Compound Assignment");

let number = 5;

number += 5; // same as number = number + 5 → 10
console.log(number); // 10

number -= 5; // same as number = number - 5 → 5
console.log(number); // 5

number *= 5; // same as number = number * 5 → 25
console.log(number); // 25

number /= 5; // same as number = number / 5 → 5
console.log(number); // 5

//String Concatenation with Assignment
//he addition assignment can also be used with strings//
console.log("String Concatenation ");

let string = "Hello";
// string += ", I am Sev"; --> Hello, I am Sev

//but this way is better for that
console.log(`${string}, I am yaleen`);
