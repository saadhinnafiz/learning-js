//* Logical Operators - Detailed

//* && Operator
/*
checks whether two operands are truthy values. If they are truthy,
it returns true, otherwise it returns false.  
*/

const age = 19;
const isCool = true;

if (age > 18 && isCool) {
  //is cool itself is considered a truthy value so no need for ===
  console.log("You may enter!");
} else {
  console.log("You cannot enter!");
}
//so we can focus on the logical operators.

console.log(age > 18 && isCool); // output is true bc both are truthy.
console.log("Truthy" && 1 && "Test" && 999); //output is 999
/* 
&& evaluates operands from left to right. if true it mvoes on to next value
if false it returns the original value of that operand.
if all is true then last operand is returned
*/

console.log("Truthy" && 0 && "Test" && 999);
//output is 0; as 0 is falsey it stops and returns 0.

//* AND returns the first falsy value or the last truthy value if no falsy value is found

//*****************************************************************************/

//* OR Operator ||

//Checks whether any operands are truthy and returns the first truthy value it encounters.

console.log("Truthy" || 0 || "test" || 9999); // output is truthy because its the first truthy value.

console.log("" || 0 || null || undefined); // if all values are falsy then it retuns the last falsy value.

//* OR will return the fitst truthy value or the last one if no truthy value is found.

//* NOT Operator (!)
//It reverses the boolean result of a condition

console.log(!0); // result is true
console.log(!"Test"); // result is false

//Best way to check if a value is truthy or falsy

console.log(Boolean("TEST")); //true
console.log(Boolean(null)); //false
