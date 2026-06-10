//* Objects

// Objects are fundamental data structures used to store collections of data

// primitive data types storw only a single value
// objects can store multiple values and more complex data

// Object is an unordered collection of related data in the form of key-value pairs

//* Creating an Object

const person = {
  firstName: "john",
  lastName: "Doe",
  age: 25,
  email: "johndoe@ecamplemail.com",
};

/*

- Curly Braces: To create an object, use curly braces {} and assign it to a variable.
- Key-Value Pairs: Inside the object, define key-value pairs ex: firstname: "John"
- Each key in the object is referred to as a property.
- Objects allow us to group related data together, unlike separate variables where each value stands alone:

const firstName = 'John';
const lastName = 'Doe';
const age = 25;

*/

//* Unordered Nature of Objects
// Objects are unordered, meaning the order of properties can change and won't always stay the same as declared
// never write code that relies on the order of object properties. Always access them by their key name

//* Nested Objects and Different Data Types
// Values in an object can be of any type, including other objects. example:

const user = {
  firstName: "john",
  lastName: "Doe",
  age: 25,
  email: "johndoe@ecamplemail.com",
  car: {
    year: 2015,
    color: "red",
  },
};

//* Using Variables as Values

// We can also use variables as values in an object.
// A variable is essentially a container for a value, so we can do the following:

const firstName = "Johnny";

const person1 = {
  firstName: firstName,
};

console.log(person1); // { firstName: 'Johnny' }

//* Shorthand Property Names
// If the key and value have the same name, JavaScript allows us to use shorthand syntax:

const person2 = {
  firstName,
};

console.log(person2); // { firstName: 'Johnny' }

// This shorthand makes the code cleaner and easier to read.

// const name = prompt("Enter first name");
// const age = prompt("Enter age");
// const role = prompt("Enter role");

// Shorthand — clean
// const newUser = { name, age, role };

// Without shorthand — repetitive
// const newUser = { name: name, age: age, role: role };

//* Accessing, Adding, and Updating and Object's Properties
// Objects in JavaScript are collections of key-value pairs
// you can access, add, or update these properties using two main notations: dot notation and square bracket notation.

//* Dot Notation .
// most common way to access, add, or update properties of an object.
// provides a straightforward syntax for interacting with object properties using .

// Accessing Properties

console.log(person.firstName); // "John"

// Adding or Updating Properties
// You can also use dot notation to add new properties or update existing ones:

person.dog = { name: "Fluffy", age: 2 };

// Updating an existing property
person.age = 26;

console.log(person);

//* Square Bracket Notation [ ]

// [ ] is another way to access properties of an object.

// offers more flexibility, especially when dealing with dynamic property names
// or keys that are not valid JavaScript identifiers.

// Accessing Properties
console.log(person1["firstName"]);

//Square bracket notation allows for dynamic property access,
// which is useful when the property name is stored in a variable:

const property = "age";
console.log(person[property]); // 26

//* Handling Unusual Key Names
// Square bracket notation is also necessary when dealing with keys that contain spaces, dashes,
// or other characters not allowed in JavaScript identifiers:

// Adding properties with unusual key names
person["this-is-a-key-with-dashes"] = "value1";
person["this is another key"] = "value2";

console.log(person["this-is-a-key-with-dashes"]); // "value1"
console.log(person["this is another key"]); // "value2"

// Using dot notation with these keys would result in an error
// person.this-is-a-key-with-dashes - error
// person.this is another key - error

//* Object Methods

// They are functions associated with objects
// Simply put, a method is a property of an object that is a function.

// Defining Methods //

// Methods can be defined in two main ways:
// 1-  Assigning a Function to an Object Property

var myObj = {
  myMethod: function (parms) {
    //..do something
  },
};

// OR using shorthand syntax

var myObj2 = {
  myOtherMethod(params) {
    //.. do something else
  },
};

// 2- Using a Function as a Method
// objectName.methodname = functionName;
// Where objectName is an existing object, methodname is the name you are assigning to the method,
// and functionName is the name of the function

// Calling Methods //
// You can call a method in the context of the object as follows:
// object.methodname(params);

// Defining Methods for an Object Type
// You can define methods for an object type by including a method definition in the object constructor function.

// For example, let's define a function that formats and displays the properties of Car objects:

/*
function displayCar() {
  var result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
  pretty_print(result);
}


Adding Methods to an Object Constructor
You can make this function a method of Car by adding the statement:

this.displayCar = displayCar;

So, the full definition of Car would now look like this:
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.displayCar = displayCar;
}

Calling Methods on Objects
You can call the displayCar method for each of the Car objects as follows:
var car1 = new Car("Toyota", "Corolla", 2020, "Alice");
var car2 = new Car("Honda", "Civic", 2019, "Bob");

car1.displayCar();
car2.displayCar();

*/

//
