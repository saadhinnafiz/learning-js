//* Array Methods

// variety of built-in methods that allow you to manipulate their data
//such as adding or removing elements at certain positions

//* Basic Array Methods

const names = ["Jon", "Bob", "David"];

//array.push(value); - Adds a new element to the end of the array.
names.push("Mark");
console.log(names); // ["Jon", "Bob", "David", "Mark"];

// array.pop(); - Removes the last element of an array and returns it.
const lastElement = names.pop();
console.log(lastElement); // "Mark"
console.log(names); // ["Jon", "Bob", "David"]

// array.shift() - Removes the first element of an array and returns it.
const firstElement = names.shift();
console.log(firstElement); // "Jon"
console.log(names); // ["Bob", "David"]

// array.unshift(value) - Adds a new value to the start of an array and returns the new length.
names.unshift("Dean");
console.log(names); // ["Dean", "Bob", "David"]

// array.splice(start, deleteCount, ...items) -
//Adds or removes elements from any position in an array.

names.splice(1, 0, "Jenny");
console.log(names); // ["Dean", "Jenny", "Bob", "David"]

// array.slice(start, end) - Creates a new array containing elements from
// the start index up to, but not including, the end index.
const slicedNames = names.slice(1, 3);
console.log(slicedNames); // ["Jenny", "Bob"]

//* Advanced Array Methods

// concat(...items) - Returns a new array with all members of the current one and adds items to it.

const moreNames = ["Eve", "Frank"];
const allNames = names.concat(moreNames);
console.log(allNames);

// indexOf(item, pos) - Looks for an item starting from position pos, returns the index if found or -1 if not found.

const searchName = names.indexOf("Frank");
console.log(searchName); //-1 if no match found

const findName = allNames.indexOf("Eve"); // 4
console.log(findName); //-1 if no match found

console.log(names.indexOf("Bob")); // 1

// lastIndexOf(item, pos) - Same as indexOf() but starts from the end.

console.log(names.lastIndexOf("Bob")); // 1

// includes(value) - Returns true if the array contains the value, otherwise returns false.

console.log(names.includes("Sev")); // false
console.log(names.includes("David")); // true **is case sensitive.

// find(func) - Returns the first element for which func returns a truthy value.

const foundName = names.find((name) => name.startsWith("D"));
console.log(foundName);

// filter(func) - Filters elements through func, returning all values that make it return true.
const filteredNames = names.filter((name) => name.length > 3);
console.log(filteredNames);

// findIndex(func) - Like find, but returns the index of the first matched element.
const index = names.findIndex((name) => name.startsWith("J"));
console.log(index);

// forEach(func) - Calls func for every element. Does not return anything.

names.forEach((name) => console.log(name));

// map(func) - Creates a new array from the results of calling func for every element.

const uppercasedNames = names.map((name) => name.toUpperCase());
console.log(uppercasedNames);

// sort(func) - Sorts the array in-place and returns it.
names.sort();
console.log(names);

// reverse() - Reverses the array and returns it.

names.reverse();
console.log(names);

// split(by) - Converts a string to an array.

const str = "apple, banana, cherry";
const fruits = str.split(",");
console.log(fruits);

// join(by) - Converts an array to a string.
const fruitString = fruits.join(", ");
console.log(fruitString); // "apple, banana, cherry"

// reduce(func, initialValue) - Calculates a single value over the array by calling func for each element.

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

// some(func) - Returns true if all elements pass the test implemented by func.
const allLongNames = names.every((name) => name.length > 2);
console.log(allLongNames); // true

// fill(value, start, end) - Fills the array with a repeating value from index start to end.
const filledArray = new Array(3).fill("Hello");
console.log(filledArray);
