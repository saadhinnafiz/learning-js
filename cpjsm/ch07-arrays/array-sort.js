//* Array.sort()

// used to sort the elements of an array

// useful for organizing data in a specific order .

// By default, it sorts the elements as strings in alphabetical and ascending order

// Example: Sorting an Array of Names

var names = ["Anne", "Carl", "Bob", "Dean"];

// Sort the array alphabetically

names.sort();

console.log(names);

// To sort numbers correctly, you need to provide a comparison function:
var numbers = [10, 2, 5, 1, 9];

// Sort numbers in ascending order

numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 5, 9, 10]

/* 
How It Works:

- Strings: By default, sort() arranges strings in alphabetical order.

- Numbers: To sort numbers correctly, use a comparison function that defines the sort order.


*/
