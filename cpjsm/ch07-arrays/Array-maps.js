//* Array.map()

// used to create a new array by applying a function to each element of an existing array.

/*
difference between array.map() and array.forEach() is that the map() 
method allocates memory to store and return a new array, while forEach() 
does not allocate memory and returns undefined.

- The forEach() method is used for executing a function on each array element without 
returning a new array

- map() returns a new array with the results of applying a function to each element.

*/

// How to use

// Example - A local shop's inventory;

const inventory = [
  { price: 5, name: "eggs" },
  { price: 5, name: "ham" },
  { price: 5, name: "mayo" },
  { price: 5, name: "bread" },
  { price: 5, name: "sweets" },
];

// A customer asks for a list of all the inventory they have

const requestFullInventory = inventory.map((item) => item);
console.log(requestFullInventory); // requestFullInventory is filled with the inventory that we have
