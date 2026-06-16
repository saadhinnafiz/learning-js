//* JavaScript Classes

// A class is a blueprint for creating objects

class Pizza {
  // Constructor runs when you create a new instance
  // It sets up the initial properties
  constructor(pizzaType, pizzaSize, pizzaCrust) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = pizzaCrust;
  }
  // Method: a function inside a class
  // 'this' refers to the specific object (in this case, myPizza)
  bake() {
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
  }
}

// Create a new instance of the Pizza class with 'new' keyword
// Constructor is called automatically here
const myPizza = new Pizza("pepperoni", "small", "thin");

// Call the bake method on myPizza
myPizza.bake();
// Output: Baking a small pepperoni thin crust pizza
myPizza.bake();
console.log(myPizza.type);

// example 2

class Drinks {
  constructor(drinkSize) {
    this.size = drinkSize;
    this.type = "Espresso";
  }
  getType() {
    return this.type;
  }
  setType(drinkType) {
    this.type = drinkType;
  }
}

class SpecialtyDrink extends Drinks {
  constructor(drinkSize) {
    super(drinkSize);
    this.type = "Blue Lagoon";
  }
  collect() {
    console.log(
      `Youe order for ${this.type} ${this.size} is ready to be collected`,
    );
  }
}

const mySpecialDrink = new SpecialtyDrink("medium");
mySpecialDrink.collect();

//* Factiry Function
// another way to create an object in JavaScript

function burgerFactory(burgerSize) {
  const patty = "beef";
  const size = burgerSize;

  return {
    make: () => console.log(`Making a ${size} double cheese ${patty} burger.`),
  };
}

const myBurger = burgerFactory("large");
myBurger.make();

// example 3

class Person {
  constructor(name, age, working) {
    this.name = name;
    this.age = age;
    this.working = working;
  }
}

// Example: Creating a User Object
let user = new Person("John", 24, true);
console.log(user);

// Using classes allows you to create multiple objects with the same structure
// without having to manually define each one.

// Example: Creating Multiple Objects
let user1 = new Person("Alice", 30, false);
let user2 = new Person("Bob", 28, true);

console.log(user1); // Person {name: "Alice", age: 30, working: false}
console.log(user2); // Person {name: "Bob", age: 28, working: true}
