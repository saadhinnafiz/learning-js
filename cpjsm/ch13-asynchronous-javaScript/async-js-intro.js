//* Asynchronous JavaScript

// Understanding the difference between Synchronous and async JavaScript

//* Synchronous JavaScript

// Synchronous JavaScript is code that is executed line by line
// with each task completing instantly.
// There is no delay in the execution of tasks for these lines of code.

// Here's an example of synchronous JavaScript:

const functionOne = () => {
  console.log("Function One");

  functionTwo();

  console.log("Function One, Part 2");
};

const functionTwo = () => {
  console.log("Function Two");
};

functionOne();

// Output:
// Function One
// Function Two
// Function One, Part 2

// The code executes in a straightforward manner.
// First, 'Function One' is logged.
// Then, functionTwo is invoked, logging 'Function Two'.
// Finally, back in functionOne, 'Function One, Part 2' is logged.
// The execution is linear and predictable.

//* Asynchronous JavaScript

const funcOne = () => {
  console.log("Function One"); // 1

  funcTwo();

  console.log("Function One, Part 2"); // 2
};

const funcTwo = () => {
  setTimeout(() => console.log("Function Two"), 2000); // 3
};

funcOne();

// Output:
// Function One
// Function One, Part 2
// (after a two-second delay)
// Function Two

/*
In funcTwo, instead of a normal console.log, we use setTimeout to simulate a delay,
similar to fetching data from a server.
The setTimeout function schedules 'Function Two' to be logged after a 2000-millisecond delay.
When you run the script, 'Function One' and 'Function One, Part 2' are logged immediately.
After a two-second delay, 'Function Two' is logged.

//* Why doesn't JavaScript wait?
JavaScript is designed to be non-blocking.
If the engine waited for every time-consuming task, it could lead to unresponsive applications
This non-blocking behavior allows the JavaScript engine to continue executing other code
while waiting for asynchronous tasks to complete.

//* What is asynchronous JavaScript?
> Asynchronous JavaScript involves code where some tasks take time to complete.
> These tasks run in the background while the JavaScript engine 
continues executing other lines of code.
> When the result of the asynchronous task is available, it is then used in the program.

//* Key Takeaways:
-> Synchronous JavaScript: Executes code line by line, waiting 
for each task to complete before moving on.

-> Asynchronous JavaScript: Allows tasks to run in the background, 
enabling the engine to continue executing other code. 
-> This is essential for handling tasks like network requests 
without freezing the application.

*/
