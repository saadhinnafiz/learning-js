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

const name = prompt("Enter your name");

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
