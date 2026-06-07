//variables//

//3 ways to declare variables in js: var, let, const//

//How variables were declared before ES6//
var variableName = "Old school";

//after es6 we have let and const//

//let is the preferred way to declare variables in modern js//

//if you want to change the value of a variable you should use let//
let mutable = "This can change";
mutable = "This has changed";
console.log(mutable);

const immutable = "This cannot change";
/* 
immutable = "This will cause an error"; 
This will cause an error because 
we cannot reassign a value to a constant variable*/
console.log(immutable);

//variables must be unique and cannot be reserved keywords//
//let let = "This will cause an error";

/*variable names can contain 
letters, digits, underscores, and dollar signs
first character must be a letter, underscore, or dollar sign
*/

//some example declarations//
let firstName = "Yaleen";
let otherNames = "Binthi Saadhin";
let lastName = "Nafiz";
const age = 22;
let $ticketPrice = "$120";
const _seatSelected = "8D";

console.log(
  "customer's full name is " + firstName + " " + otherNames + " " + lastName,
  "and she has selected seat " + _seatSelected,
);
