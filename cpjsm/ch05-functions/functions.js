//* FUNCTIONS

// It is a block of code designed to perform a particular task.
// They allow the code to be called many times without repetition.
// A function represents some code in the program.

/*
//*function declaration consists of:
- The function keyword (reserved JavaScript keyword)
- followed by the function name
- list iof parameters in parentheses ()
- and a block of code enclosed in {}
*/

// Function Expression
function square(number) {
  return number * number;
}

//* Calling Functions

// Calling functions actually performs the specified actions.

//example:
console.log(square(5)); // 25

// We can store this value from a function in a variable to use them.

const result = square(6);
console.log(result); // 36

//* Exercise:
/*
Write a function called greet that takes a name as a parameter 
and returns a greeting message.
Expected result: Hello, Saadhin!
*/

// const name = prompt("Enter your name");

function greet(name) {
  return "Hello, " + name;
}

if (name !== "" && name !== null) {
  // can be shortened to if (name) {} since "" and null are falsy values
  console.log(greet(name));
} else {
  console.log("Hi there!");
}

/*
Write a function called celsiusToFahrenheit that takes 
a temperature in Celsius and returns the equivalent in Fahrenheit.
*/

function celsiusToFahrenheit(temperature) {
  return (temperature * 9) / 5 + 32;
}

let currentTemp = celsiusToFahrenheit(30);
console.log("The temperature is " + currentTemp + " degrees fahrenheit");

//------------------------------------------------------------//

//*Declaring and Invoking Functions//

//*Function Declaration

function name1(parameters) {
  // statements
}

//* Function Expression

let name2 = function (parameters) {
  // statements
};

//* Arrow Function Expression

let name3 = (params) => {};

//* Invoking a function

let sayHi = (name) => {
  console.log(`Hi, ${name}`);
};

sayHi("Sev");

// a more typical way would be:

let welcomeMessage = (username) => {
  return `Hi, ${username}`;
};

const greeting = welcomeMessage("Yaleen");

console.log(greeting);

//------------------------------------------------------------//

//* Function Return
// Every function in JS returns undefined unless specified.

const add = (a, b) => {
  return a + b;
};

const sum = add(2, 2);
console.log(sum);

const returnBools = () => {
  return true;
  return false;
};

const trueOrFalse = returnBools();
console.log(trueOrFalse);
//only returns true as return statement stops function execution immidiately unless recalled

//------------------------------------------------------------//

//* More on arrow functions:

//when a function has only a single return statement:

const subtract = (c, d) => c - d;

const balance = subtract(10, 5); //
console.log(balance);

//------------------------------------------------------------//

//* Parameters vs Arguments:

//*Parameters:
// Parameters are used when defining a function
// They are the names created in the function definition
// Its like avariable thats only meaningful inside the function

//*Arguments:
// The real values passed to the function when making function call

const logAge = (name, age) => {
  console.log(`${name} is ${age} years old.`);
};

logAge("Joe", 25);

const notifications = (firstname, unread) => {
  console.log(`Welcome back ${firstname}! You have ${unread} notifications.`);
};

notifications("Jenny", 10);

//* Tips on naming functions:

/*
1. Use Action Words

name should start with a verb that describes what it does.


Good Examples:
--------------
function getUserData() {} // Retrieves user data
function sendEmail() {}   // Sends an email
function calculateTotal() {} // Calculates total price
function fetchPosts() {}  // Fetches posts from an API

Bad Examples:
--------------
function userData() {}   // Not clear what this does
function email() {}      // Is it sending, receiving, or formatting an email?
function total() {}      // What about the total? Calculating it? Displaying it?


2. Use camelCase for Function Names

Tip : Use PascalCase FirstLetterCapitalized only for class names in JavaScript.

3. Keep Function Names Short but Descriptive

4. Prefix Functions Based on Their Purpose

5. Avoid Generic Function Names

6. Use Booleans in Function Names for Yes/No Checks

is → isLoggedIn()
has → hasPermission()
can → canEditProfile()
should → shouldShowModal()

7. Keep Function Names Consistent

8. Avoid Abbreviations and Cryptic Names


Summary

Use action words to describe what the function does
Follow camelCase for naming functions
Keep names short but meaningful (3-5 words max)
Use prefixes to indicate purpose (e.g., get, set, is, has)
Avoid generic names like doStuff() or processData()
Use is, has, can for boolean-returning functions
Stay consistent in naming conventions
Avoid abbreviations or cryptic names

*/
