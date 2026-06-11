//* Value vs Reference Introduction

/* 

JavaScript differentiates data types into two categories:

-> Primitive values: Number, String, Boolean, Null, Undefined, etc.
-> Complex values: Objects, Arrays

//* Copying Primitive Values

The value is copied directly, and changes to one variable do not affect the other.

*/

let x = 1;
let y = x;

x = 2;

console.log(x); // 2
console.log(y); // 1

//* Copying Strings

let firstPerson = "Mark";
let secondPerson = firstPerson;

firstPerson = "Austin";

console.log(firstPerson); // Austin
console.log(secondPerson); // Mark

// In both cases, the original value is copied, and changes to the original variable do not affect the copied variable.

//* Copying Complex Values:

// When copying complex values, such as objects and arrays, JavaScript behaves differently.
// Instead of copying the value, it copies a reference to the value.
// This means changes to one variable can affect the other .

//Copying Arrays:
const animals = ["dogs", "cats"];
const otherAnimals = animals;

animals.push("llamas");

console.log(animals); // ['dogs', 'cats', 'llamas']
console.log(otherAnimals); // ['dogs', 'cats', 'llamas']

//Copying Objects:
const person = {
  firstName: "Jon",
  lastName: "Snow",
};

const otherPerson = person;

person.firstName = "JOHNNY";

console.log(person); // { firstName: 'JOHNNY', lastName: 'Snow' }
console.log(otherPerson); // { firstName: 'JOHNNY', lastName: 'Snow' }

// changes to the original array or object also affect the copied variable
// This is because both variables reference the same underlying data.

/* 

//* Cloning Arrays
To create a copy of an array without keeping a reference to the original:
-> Spread Operator
-> Array.slice()


//* Spread Operator ...

The spread operator ... is a modern addition to JavaScript that allows you 
to "spread" the values of arrays, objects, and strings. 


How to use:
*/

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers];

// The spread operator ... takes all the elements from the numbers array and spreads them into a new array newNumbers.

console.log(...numbers); // 1, 2, 3, 4, 5
console.log(newNumbers); // [1, 2, 3, 4, 5]

// Checking Equality
const copiedNumbers = numbers;

console.log(numbers === copiedNumbers); // true
console.log(numbers === newNumbers); // false

// copiedNumbers points to the same memory location as numbers , so changes to one affect the other.
// newNumbers is a separate array, so changes to numbers do not affect it.

// Modifying the Original Array
numbers.push(6);

console.log(numbers); // [1, 2, 3, 4, 5, 6]
console.log(copiedNumbers); // [1, 2, 3, 4, 5, 6]
console.log(newNumbers); // [1, 2, 3, 4, 5]

// The newNumbers array remains unchanged, demonstrating that it is a "shallow clone".

//* Array.slice()
// The slice() method can also be used to clone an array:
const numb = [1, 2, 3, 4, 5];
const numbCopy = numb.slice();

console.log(numbCopy); // [1, 2, 3, 4, 5]

//* Cloning Objects:

/*

Just like arrays, objects can be cloned using similar methods.

-> Spread Operator
-> Object.assign()

*/

//* Spread Operator ...

// You can clone objects using the spread operator:

const user = {
  name: "Jon",
  age: 20,
};

const otheruser = { ...user };

// Modify the cloned object
otheruser.age = 21;

console.log(user); // { name: 'Jon', age: 20 }
console.log(otheruser); // { name: 'Jon', age: 21 }

//* Object.assign()
// The Object.assign() method can also be used to clone objects:

const A1 = { a: "2" };
const A2 = Object.assign({}, A1);

console.log(A2); // { a: "2" }

// These methods create shallow clones meaning they copy the top-level properties but not nested objects.

//* Deep cloning

// Cloning an Object with Nested Objects

const person1 = {
  firstName: "Emma",
  car: {
    brand: "BMW",
    color: "blue",
    wheels: 4,
  },
};

// 1. Using the Spread Operator ...

// We can use the spread operator ... to create a shallow copy of the object:

const newPerson = { ...person1 };

// This removes the reference from the outer object, allowing us to change properties
// like firstName without affecting the original:

newPerson.firstName = "Mia";

console.log(person1); // { firstName: 'Emma', car: { brand: 'BMW', color: 'blue', wheels: 4 } }
console.log(newPerson); // { firstName: 'Mia', car: { brand: 'BMW', color: 'blue', wheels: 4 } }

// However, if we change a property of the nested car object:

newPerson.car.color = "red";

console.log(person1); // { firstName: 'Emma', car: { brand: 'BMW', color: 'red', wheels: 4 } }
console.log(newPerson); // { firstName: 'Mia', car: { brand: 'BMW', color: 'red', wheels: 4 } }

// 2. Creating a Deep Clone
// One way to achieve this is by using JSON.stringify and JSON.parse.

const newPerson1 = JSON.parse(JSON.stringify(person1));

newPerson1.firstName = "Mia";
newPerson1.car.color = "red";

console.log(person1); // { firstName: 'Emma', car: { brand: 'BMW', color: 'blue', wheels: 4 } }
console.log(newPerson1); // { firstName: 'Mia', car: { brand: 'BMW', color: 'red', wheels: 4 } }
