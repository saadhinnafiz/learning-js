//* Ternary Operator

//used for simple true or false checks

// if (condition) {
//     value if true
// } else {
//     value if false
// }

// syntax of ternary operator
// condition ? value if true : value if false

const age = 26;

if (age > 18) {
  console.log("You can drive");
} else {
  console.log("You may not drive yet");
}

//Ternary Operator//
age > 18 ? console.log("You can drive") : console.log("You may not drive yet");

// another way to write it is:

console.log(age > 18 ? "You can drive" : "You may not drive yet");
