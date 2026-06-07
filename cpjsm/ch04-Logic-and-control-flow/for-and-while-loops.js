//* 'for' and 'while' Loops

// FOR LOOP

/*

for ([initialization]; [condition]; [final - expression]) {
  statement
}

1- Initialization: Executed once before the loop starts. 
It's typically used to define and set up your loop variable.

2- Condition: Evaluated at the beginning of every loop iteration and will 
continue as long as it evaluates to true. If the condition is false at the start of the iteration,
the loop will stop executing.

3- Final-expression: Executed at the end of each loop iteration, 
prior to the next condition check, and is usually used to 
increment or decrement your loop counter.


*/

for (let i = 0; i < 10; i++) {
  console.log(i);
}

/*

1- Initialization: We initialize our variable i = 0 because we start counting from 0. 
"i" stands for index and is a standard for loop variables.

2- Condition: We set our condition to i < 10. Before each loop execution, 
it checks if i is less than ten. If i is equal to or greater than 10, the loop terminates.

3- Final-expression: We use i++, which is shorthand for i = i+ 1. Each iteration increases i by one.

*/

//While Loops
//It will continue to execute block of code as long as specified condition is true

/*
while (condition) {
    statement
}

*/

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// Infinite while Loop

/*

- A while loop can also become an infinite loop if the condition never evaluates to false.
- Be cautious to ensure that the loop has a way to terminate:


while (true) {
    This will run forever unless there's a break statement
}
*/
