// Practice of using objects

// object = a collection of related properties or methods
// can represent real world objects (people, products, places)
// object = {key:value,function()}

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log(`Hi I'm ${this.firstName}!`);
  },
  eat: function () {
    console.log(`I am eating a krabby patty`);
  },
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 42,
  isEmployed: false,
  sayHello: function () {
    console.log(`Hey I'm ${this.firstName}...`);
  },
  eat: function () {
    console.log(`I am eating a chicken shawarma`);
  },
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.sayHello();
person2.sayHello();
person1.eat();
person2.eat();
