//strings are a sequence of characters
//3 ways to create a string
let str1 = "Hello World"; //double quotes
let str2 = "Hello World"; //single quotes
let str3 = `Hello World`; //backticks (template literals) - allows for multi-line strings and string interpolation

//You might choose single quotes if your string contains double quotes:

const quote = 'She said, "JavaScript is amazing!"';

//You might choose double quotes if your string contains single quotes:

const contraction = "It's a great day to learn JavaScript!";

/* You might choose backticks if your string 
contains both single and double quotes, 
or if you want to use string interpolation: */

// 1- embeded variables or expressions using ${} syntax
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, Alice!"

// 2- create multi-line strings
const multiline = `this is the first line.
And this is the second line.`;
console.log(multiline);

// 3- combine text dynamically:

const items = 3;
const price = 20;
const total = `you bought ${items} items for $${items * price}.`;
console.log(total); // "you bought 3 tiems for $60"
