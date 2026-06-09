//* Array.includes()
// used to determine whether an array contains a specific value.
// checks if an array contains a certain value and returns true or false based on the result.

// Example: Checking for a Book in a Bookshelf
var bookshelf = [
  "Moby Dick",
  "Little Women",
  "The Great Gatsby",
  "Pride And Prejudice",
];

if (bookshelf.includes("Moby Dick")) {
  console.log("The book you were looking for was found.");
} else {
  console.log("Couldn't find the book sorry :<");
}

/*

How It Works: 

- includes() method scrolls through the entire array and returns true once it
finds the first instance of the value it received.

- If the value is not found , it returns false.

useful tool for data validation and search operations in JavaScript.

*/
