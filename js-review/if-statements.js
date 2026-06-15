//* Conditionals: If Statements

/*

syntax:

if (condition) {
    run some code
} else {
    run this code
}

*/

//example 1:

let customerIsBanned = true;
let soup = "chicken noodle soup";
let reply;
if (customerIsBanned) {
  reply = "No soup for you!";
} else if (soup) {
  reply = `Here is your order of ${soup}`;
} else {
  reply = `Sorry we are out of soup`;
}

console.log(reply);

// exaple 2:

let testScore = 30;
let grade;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else {
  grade = "F";
}

if (grade === "F") {
  console.log(`You failed`);
} else {
  console.log(`Congrats! Your final grade is ${grade}`);
}
