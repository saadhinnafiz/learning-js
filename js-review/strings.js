//* Basics Summary on Strings

let myVariable = "Mathematics";
console.log(typeof myVariable);

// the length property
console.log("Please submit your assignemts from the link below".length);

//* string methods

// .charAt method
//position count starts from 0
console.log(myVariable.charAt(5)); // asking for charater at the position

// .indexOf method
console.log(myVariable.indexOf("at"));
//tells us position of the first occurance within the string

// .lastIndexOf method
console.log(myVariable.lastIndexOf("at"));
//tells us position of the last occurance within the string

// .slice method
console.log(myVariable.slice(5, 8));
// accepts starting and ending position parameters
// returns char from start position to end position
// returned result does not include the ending position

// .toUpperCase()
console.log(myVariable.toUpperCase());
// does not require a parameter
// unlike length property method still needs () at the end

// .toLowerCase()
console.log(myVariable.toLowerCase());
// same as .toUpper()

// .includes method
console.log(myVariable.includes("div")); //false
console.log(myVariable.includes("mat")); //true
// returns boolean data
// if char or group of char is not inside the string returns false
// if they are inside the string it returns true

// .split method
console.log(myVariable.split("e"));
// splits the string wherever the character we provide occurs
// returns the resulting multiple strings within an array
// e is not invluded in the split
console.log(myVariable.split(""));
// providing empty quotes as the split char returns every char as a seperate string
console.log("john,Joe,Peter".split(","));
// if string is a list of comma seperated values and seperate wherever a comma occurs
// each value is represented as its own string in the resulting array
console.log("You may start your exams".split(" "));
// if string is a sentence and seperate wherever a space occurs
// each word is represented as its own string in the resulting array

// read on more methods from here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
