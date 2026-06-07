// Logic and Control Flow //

//If Statements//

/*
//*If statement:
An If statement consists of a condition that is 
evaluated to either true or false and a block of code.
If the condition is true then the code inside the block will run.
Otherwise its going to be skipped. 

//* If-else statement:
If statements can also have else if and else statements. 
For any reason if the "If" part of the code is skipped we can
check for another set of conditions using else if.

//* Else Statement:
An else statement does not have a condition.
If nothing is matched, else is executed.
Simply, if none of the other conditions evaluate to true, else runs.

*/

//example: Night club entry

const age = 84;

if (age >= 40) {
  console.log("Aren't you a little too old to be here..? Enjoy I guess");
} else if (age > 18) {
  console.log("You may enter, Welcome");
} else if (age === 18) {
  console.log("Welcome! You just turned 18, lucky you!");
} else {
  console.log("Go Home before I call the police!");
}
