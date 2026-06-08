//* Strings

//* Creating Strings

const single = "This is a string written inside of single quotes.";
const double = "This is a string written inside of double quotes.";
const backticks = `This is a string written inside of backticks.`;

/* 

-> Single and Double Quotes: Strings created with single ' ' 
and double quotes " " are the same. We can call them simple or 
basic strings. They represent static textual values.

->Backticks: Strings created with backticks `` provide extended 
functionality. They are dynamic and allow us to execute JavaScript 
logic inside them.

*/

const backtick = `${2 + 2}`; // 4
//Everything inside $ is evaluated as JavaScript logic.
//Therefore, 2 + 2 returns 4, rather than the string '2 + 2'.

//You can also make function calls inside a `` string:
const sum = (a, b) => a + b;
const total = `The sum is ${sum(2, 2)}`;

console.log(total);

//* Multiline Strings with Backticks ``

//Backtick strings can span multiple lines:

const numbers = `
1
2
3
4
`;
console.log(numbers);

//* Handling Quotes Inside Strings

//using backticks `` simplifies this:

const greeting = `Hi, I'm John, "Johnny John".`;

//* Length and Basic Properties

// To find the length of a string, you can use the .length property:

const name = "Ronaldo";

console.log(`your name has ${name.length} letters`); // 4

//Accessing Characters in a String
console.log(name[0]);

//To get the last letter of a string:
console.log(name[name.length - 1]);

//*Changing the Case of a String:

// string.toLowerCase()
// string.toUpperCase()

// These methods allow you to convert to all lowercase / uppercase letters

const mixedCaseString = "Hello! hoW are You?";

console.log(mixedCaseString.toLowerCase());
console.log(mixedCaseString.toUpperCase());

// Finding Substrings in a String

// str.indexOf()

const exampleString = "I love ducks, he said, ducks are great!";

console.log(exampleString.indexOf("ducks")); // 7
console.log(exampleString.indexOf("Ducks")); // -1 if nothing can be found.

// The optional second parameter allows us to search starting from the given position.
//starting from 8:
console.log(exampleString.lastIndexOf("ducks")); // 23

// includes()

//If to check only if a string contains a substring and not its position
//simply returns true or false

console.log(exampleString.includes("ducks")); // true

//str.startsWith() & str.endsWith()

//check if a string starts or ends with a specific substring:

console.log(exampleString.startsWith("I")); // true
console.log(exampleString.endsWith("ducks")); // false

//some practical uses:

// Form validation

const email = "username@gmail.com";
if (email.includes("@")) {
  console.log("Valid email");
}

//Checking file types

const filename = "photo.png";
if (filename.includes("jpg") || filename.includes("png")) {
  console.log("Valid Image file");
}

// Filtering search results
const title = "Cloud Hosting for Pros";
const searchTerm = "cloud";
if (title.toLowerCase().includes(searchTerm.toLowerCase())) {
  console.log("Match found");
} else {
  console.log("No matches found");
}

//* Getting a Substring

// Getting a Substring

// The best method for getting a substring of a string is str.slice().
// extract a portion of a string based on specified start and end positions.

// str.slice(start, end)
// returns the part of the string from start to (but not including) end
// If the end parameter is omitted, slice() extracts to the end of the string.

console.log(exampleString.slice(2, 6)); //love
console.log(exampleString.slice(7));

//practical uses

//Extracting file extension
const extension = filename.slice(-3);
console.log(extension);

//Getting domain from email
const atPosition = email.indexOf("@");
const domain = email.slice(atPosition + 1); // "gmail.com"
console.log(domain);

//* Splitting strings

// split a string into multiple substrings.
// split() is used

//Splitting a Word into Characters

//To split a word into individual characters, you can use an empty string as the separator:

const pet = "dog";

console.log(pet.split("")); // ["d", "o", "g"]

// Splitting a Sentence into Words

//use a space character as the separator:

const sampleString = "The quick brown fox jumps over the lazy dog.";

console.log(sampleString.split(" ")); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

//* The result of both examples is an array [ ]

//allowing you to easily manipulate and analyze parts of the original string.

//examples

//Processing CSV data

const csvRow = "James,Manchester,UK,Developer";
const fields = csvRow.split(",");
console.log(fields[0]);
console.log(fields[2]);

//Getting filename without extension
const uploadFile = "profile-photo.jpg";
const parts = uploadFile.split(".");
console.log(parts[0]); // "profile-photo"

//Counting words in a text
const text = "The quick brown fox";
const wordCount = text.split(" ").length;
console.log(wordCount); // 4

//* Reverse, Repeat, and Trim a String

// There isn't a built-in string method that reverses a string directly.
// Arrays have a reverse() method.

/*
Split the string into an array of characters.
Reverse the newly created array.
Join the array back into a string.
*/

//Reversing a string - classic interview question
const word = "hello";
const reversed = word.split("").reverse().join("");
console.log(reversed); // "olleh"

//Repeat - string.repeat() method

const dogSays = "woof";

console.log(dogSays.repeat(5)); // "woofwoofwoofwoofwoof"

// Trim - trim() method
// to clean up extra spaces

const str = "      Hello World!";
console.log(str.trim());
