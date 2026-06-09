//* Array.filter()

// used to create a new array containing elements that pass a specified test.

// efficient way to filter out unwanted elements from an array.

// Filtering Positive Numbers

const numbers = [-10, 0, -2, 15, -36, 25]; // Array of positive and negative integers

// Using filter to get positive numbers

const positiveNumbers = numbers.filter((number) => number >= 0);
console.log("Positive numbers: " + positiveNumbers);

// Using a For Loop to Filter

// think of the filter() method as a more concise and readable
// alternative to using a for loop for filtering:
// what filter() is doing under the hood, the manual way before filter() existed.

var positiveNumbersUsingLoop = []; // Array to store positive numbers

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 0) {
    positiveNumbersUsingLoop.push(numbers[i]);
  }
}

console.log("Positive numbers using loop: " + positiveNumbersUsingLoop); // [0, 15, 25]

// Example: Rewarding Employees with Overtime

const employeesData = [
  { name: "Sebastian Zuñiga", overtime: 5 },
  { name: "Cardi Vee", overtime: 10 },
  { name: "George Lopez", overtime: 12 },
];

const selectedEmployees = employeesData.filter(
  (employee) => employee.overtime >= 7,
);
console.log(selectedEmployees);

// Example: Filtering Cities by Population

let cities = [
  { name: "Los Angeles", population: 2200000 },
  { name: "New York", population: 8000000 },
  { name: "Chicago", population: 6900098 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1535079 },
];

const filteredCities = cities.filter((city) => city.population > 6000000);
console.log(filteredCities);

filteredCities.forEach((city) =>
  console.log("Filtered Cities Data: " + city.name),
);
