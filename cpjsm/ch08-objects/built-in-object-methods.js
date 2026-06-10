//* Built in Object Methods

// All objects in JavaScript inherit from the parent Object constructor
// which offers several built-in methods to simplify object manipulation
// object methods are static and used directly on the Object constructor

//* Key Built-in Object Methods

// Object.create()
// creates a new object linked to the prototype of an existing object.
// This is useful for extending objects without duplicating code.

const role = {
  title: "developer,",
  type: "full-time",
  isOpen: true,
  showDetails() {
    const status = this.isOpen
      ? "is open for applications"
      : "is not open for applications";
    console.log(`The ${this.title} role is ${this.type} and ${status}.`);
  },
};

const designer = Object.create(role);
designer.title = "designer";

designer.showDetails(); // The designer role is full-time and is open for applications.

// Object.keys()
// returns an array of an object's keys, allowing you to iterate over them or check their count.

const team = {
  leader: "Alice",
  developer: "Bob",
  designer: "Charlie",
  tester: "Dana",
};

const keys = Object.keys(team);
console.log(keys); // ["leader", "developer", "designer", "tester"]

keys.forEach((key) => {
  console.log(`${key}: ${team[key]}`);
});

// Object.values()
// Returns an array of an object's values, useful for iterating over or analyzing data.

const device = {
  brand: "Samsung",
  model: "Galaxy S21",
  year: 2021,
};

const values = Object.values(device);
console.log(values);

// Object.entries()
// returns a nested array of an object's key-value pairs, allowing for easy iteration and manipulation.

const software = {
  name: "Photoshop",
  version: "2021",
  license: "Commercial",
};

const entries = Object.entries(software);
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Object.assign()
// copies values from one object to another, useful for merging objects.
const personalDetails = { firstName: "Jane", lastName: "Doe" };
const jobDetails = { position: "Manager", company: "Tech Inc" };

const profile = Object.assign({}, personalDetails, jobDetails);
console.log(profile); // {firstName: "Jane", lastName: "Doe", position: "Manager", company: "Tech Inc"}

// Object.freeze()
// prevents modifications to an object's properties and values, ensuring immutability.

const settings = { theme: "light", notifications: true };
Object.freeze(settings);

settings.theme = "dark"; // No effect
console.log(settings); // {theme: "light", notifications: true}

// Object.seal()
// prevents new properties from being added to an object but allows modification of existing properties.

const account = { username: "user123", password: "pass123" };
Object.seal(account);

account.password = "newpass"; // Allowed
account.email = "user@example.com"; // Not allowed
console.log(account); // {username: "user123", password: "newpass"}

// Object.getPrototypeOf()
// retrieves the prototype of an object, useful for understanding inheritance and prototype chains.

const gadgets = ["laptop", "tablet", "smartphone"];
console.log(Object.getPrototypeOf(gadgets) === Array.prototype); // true
