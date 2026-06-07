//Null - is a special value that represents "no value" or an "empty value" or "Unkown value"
//It is intentionally assigned to a variable to indicate that it has no value

let age = null; //this means "age is unknown or empty"
console.log(age); //null

//It is not an object (although typeof null returns "object" due to a historical quirk)

/*
Undefined - is the default value for variables 
that have beend declared but not assigned a value
*/

let x;
console.log(x); //undefined

let empty = null;
let notSet;

console.log(typeof empty); // "object" (a JavaScript quirk!)
console.log(typeof notSet); // "undefined"
