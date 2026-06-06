//Data types//

//primitive data types:

// 1. Numbers: whole numbers and decimal numbers

const stars = 100000000000; // a lot of stars
const pi = 3.14159; // the value of pi

// 2. strings: a sequence of characters

const name = "Thomas Shelby";

//boolean: a value that can be either true or false

const isMarried = true; // Thomas Shelby is married
const isSingle = false; // Thomas Shelby is not married

// 4. null: a value that represents the absence of a value

let reservation = null; // no table assigned yet

// 5. undefined: a value that represents an uninitialized variable

let myNote;
console.log(myNote); // undefined

//6. symbol: a unique and immutable value that can be used as a key for object properties
const id = Symbol("uniqueId");
console.log(id); // Symbol(uniqueId)

//complex data types: objects

const person = {
  name: "James Bond",
  age: "007", //007 as number gives a kind of an error, so I put it in quotes to make it a string
  car: {
    make: "Aston Martin",
    model: "DBS",
    year: 1969,
  },
};
console.log(person.car.make); // Aston Martin

//arrays: a list of values

const movies = ["Casino Royale", "Skyfall", "Spectre"];
console.log(movies[1]); // Skyfall

//typof operator: used to determine the type of a variable

console.log(typeof 42); // "number"
console.log(typeof "Hello!"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object" (a JavaScript quirk!)
console.log(typeof undefined); // "undefined"
console.log(typeof person); // "object"
console.log(typeof movies); // "object"

//self experimentation:

const user = {
  name: "Thomas Shelby",
  age: 39,
  isMarried: true,
  Address: {
    house: "Arrow House",
    Street: "Watery Lane",
    city: "Birmingham",
    country: "England",
  },
};
console.log(`${user.name} is ${user.age} years old`);

if (user.isMarried) {
  console.log(`and is married.`);
} else {
  console.log(`and is not married.`);
}

console.log(`and lives in ${user.Address.city}.`);
