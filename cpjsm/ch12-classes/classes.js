//* classes
/* 
Classes Introduction
> A class in JavaScript is a blueprint for creating objects.
> It defines the properties and methods that the objects created from the class will have.
> This makes it easy to create multiple objects with the same structure.

//* Defining a Class

> To define a class, you use the class keyword followed by the class name. 
> Inside the class, you define a constructor method, which is used to 
initialize the object's properties.
*/

//* Example: Defining a Person Class

class Person {
  constructor(name, age, working) {
    this.name = name;
    this.age = age;
    this.working = working;
  }
}
/*
> class Person: This defines a new class called Person.
> constructor(name, age, working): The constructor method initializes the properties of the object. 
The this keyword is used to assign the values to the object's properties.


//* Creating an Instance of a Class

> Once you have defined a class, you can create instances of it using the new keyword. 
> This creates a new object with the structure defined by the class.

*/

// Example: Creating a User Object
let user = new Person("John", 24, true);
console.log(user);

/*
> new Person("John", 24, true): This creates a new instance of the Person class with the 
specified values for name, age, and working.

//* Why Use Classes?
> Using classes allows you to create multiple objects with the same structure 
without having to manually define each one.
>  This is especially useful when you need to create many similar objects, 
such as users or products.
*/

// Example: Creating Multiple Objects

let user1 = new Person("Alice", 30, false);
let user2 = new Person("Bob", 28, true);

console.log(user1); // Person {name: "Alice", age: 30, working: false}
console.log(user2); // Person {name: "Bob", age: 28, working: true}

//* "new" Keyword
/*
> The new keyword in JavaScript is used to create a new object. 
> At its core, the new keyword performs a simple yet powerful function:
-> It creates a new object

//*Creating an Object with new
When you use the new keyword, you create an empty object. 
Here's how you can create an object using the new keyword:
*/

const person = new Object();

// This line of code creates an empty object called person.
// It's equivalent to writing person =.
// You can add properties to this object just like any other object:

person.lastname = "John";
console.log(person.lastname); // prints "John"

// You can also check the type of the person object:
console.log(typeof person); // prints "object"

//* Object Methods & Object() Constructor

// The Object() function is a built-in constructor in JavaScript that allows you to create objects.
// You can also define your own constructor functions to create objects of a specific type.

//* Creating Custom Constructors

function Individual(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;
}

const john = new Individual("John", 23, "Teacher");
console.log(john.name); // prints "John"

// In this example, we created a individual constructor function
// and used the new keyword to create an instance of individual.

//* NEW & THIS (Keywords)
// The new keyword binds this to the new object being created.
// In the Individual constructor function, this refers to the new Individual object.

function Individual(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;
}

//*  Built-in Constructors and Methods
// JavaScript provides several built-in constructors like Date, Array, Number, etc.
// When you use the new keyword with these constructors, you create objects with built-in methods.

const myDate = new Date("June 13, 2026");
console.log(myDate.getFullYear()); // prints 2026

// These constructors provide methods that you can use on the objects they create.
// For example, arrays have methods like pop, push, slice, and splice.

//* Literal Syntax vs. new Keyword

// JavaScript also provides literal syntax for creating objects and arrays,
// which is a shorthand for using the new keyword.

const names = ["wes", "kait"];
console.log(typeof names); // prints "object"
console.log(names instanceof Array); // prints true

// The literal syntax is a more concise way to create objects and arrays,
// but under the hood, they are still objects with methods.

//* "this” Keyword
// The this keyword in JavaScript refers to the object that is executing the current function.
//  It provides a way to access the properties and methods of the object
// within which the function is being executed.

//* Using it in a Function

// Let's explore how this works with a simple example:

function Sentence(words) {
  this.words = words;
  console.log(this);
}

const S = new Sentence("hello there, we are learning about the `this` keyword");

/* 
//* Explanation
1. Function Definition: We define a function Sentence that takes an input parameter words.
2. Assigning Properties: Inside the function, we assign this.words to the input parameter words. 
This means that the words property of the object being created will hold the value passed to the function.
3. Logging this: We use console.log(this) to print the current context of this. 
When the function is called with the new keyword, this refers to the new object being created.
4. Creating an Instance: We create a new instance of Sentence by calling 
new Sentence(...). This creates a new object, and this within the function refers to this new object.

//* What Happens When You Run the Code

> When you run the code, the Sentence function is executed in the context of a new object. 
The this keyword inside the function refers to this new object.
> The console.log(this) statement outputs the new object, showing its properties, 
including words which is set to the string "hello there, we are learning about the this keyword".


//* Key Points to Remember
> Context Matters: The value of this depends on how a function is called. 
In the context of a constructor function (like Sentence), this refers to the new object being created.

> Global Context: If a function is called without an object context (e.g., not as a method or constructor), 
this refers to the global object (or undefined in strict mode).

> Method Context: When a function is called as a method of an object, 
this refers to the object the method is called on.

*/
