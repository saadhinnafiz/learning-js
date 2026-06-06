//Objects - are used to group related data and functions together.

// 1. Assigning values to an object

const name = "John";
const age = 25;
//We can group these variables into an object:

const user = {
  name: "Jhon",
  age: 25,
};
console.log(user);

//2. Extract values from an object

console.log(user.name); // Output: John
console.log(user.age); // Output: 25

//3. Adding new properties to an object

user.email = "jhon@example.com";
console.log(user);

/*******************************/

//Interactive activity//

const person = {
  name: "Saya",
  age: 24,
  isMarried: false,
  hobbies: ["reading", "travelling", "skydiving"],
};

console.log(person.name); //saya
console.log(person.age); //24
console.log(person.hobbies[2]);
