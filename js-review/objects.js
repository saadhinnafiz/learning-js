//* Objects
// Key-value in curly braces

//example 1

const myObj = { name: "dave" };
console.log(myObj.name);

const anotherobj = {
  alive: true,
  age: 42,
  hobbies: ["eat", "sleep", "code"],
  beverage: {
    morning: "Coffee",
    afternoon: "Iced tea",
  },
  action: function () {
    return `Time for ${this.beverage.morning}`;
  },
};

console.log(anotherobj.hobbies[1]);
console.log(anotherobj.action());

//example 2

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vroooom!";
  },
};

// using generic vehicle object to construct truck object
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
//due to inheritence generic values passed down
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Woooosh!";
};
console.log(car.engine());

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function () {
  return "Battery low...";
};
console.log(tesla.engine());

//Example 3

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};

console.log(Object.keys(band));
console.log(Object.values(band));

// type of loop used to go through an object

for (let job in band) {
  console.log(band[job]);
}

for (let job in band) {
  console.log(`On ${job}, it,s ${band[job]}!`);
}

//destructuring objects

const { vocals, guitar, bass, drums } = band;
console.log(guitar);
console.log(vocals);

// we can pass in these values to a function

function sings({ vocals }) {
  return `${vocals} sings!`;
  console.log(sings(band));
}

console.log(sings(band));
