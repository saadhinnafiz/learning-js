//* scope in JS

//What is Scope and Why Do We Need It?

// allows us to know where we have access to our variables
// it shows us the accessibility of variables, functions, and objects in some particular part of the code.

/*

//* Why Limit Visibility?

- Security: Limiting the visibility of variables provides a level of security to your code.
- Efficiency: It helps improve efficiency, track bugs, and reduce them.
- Naming Conflicts: It solves the problem of naming variables.


//* Types of Scope

-> Global Scope
-> Local Scope
-> Block Scope ( only with let and const )

- Variables defined inside a function are in local scope.
- variables defined outside of a function are in the global scope .
- Each function, when invoked, creates a new scope.

*/

//* Global Scope

//When you start writing in a JavaScript document, you're already in the global scope.

const name = "Adrian";

// Variables written inside the global scope can be accessed and altered in any other scope.

const logName = () => {
  console.log(name);
};

logName(); // Adrian

/*

Advantages of Using Global Variables
- Accessibility: You can access the global variable from all the functions or modules in a program.
- Consistency: Ideally used for storing "constants" as it helps you keep the consistency.
- Data Sharing: Useful when multiple functions are accessing the same data.

Disadvantages of Using Global Variables
- Memory Usage: Too many variables declared as global remain in memory until program execution is completed, 
which can cause out-of-memory issues.
- Unpredictable Results: Data can be modified by any function, leading to unpredictable results in 
multi-tasking environments.
- Refactoring Challenges: If global variables are discontinued due to code refactoring, you will need to 
change all the modules where they are called.

*/

/*

//* Local Scope:

Variables defined inside a function are in the local scope.

Advantages of Using Local Variables
- Data Integrity: The use of local variables offers a guarantee that the values of variables 
will remain intact while the task is running.
- Naming Flexibility: You can give local variables the same name in different functions because 
they are only recognized by the function they are declared in.
- Memory Efficiency: Local variables are deleted as soon as any function is over, releasing the memory space they occupy.


Disadvantages of Using Local Variables
- Limited Scope: They have a very limited scope. If you need to use a variable in a parent scope, declare it there.


*/

// Global Scope

const someFunction = () => {
  // Local Scope #1

  const anotherFunction = () => {
    // Local Scope #2
  };
};

/*

//* Block Scope

Block statements like if, for, and while loops don't create a new scope with var.

However, variables defined with const or let have block scope, meaning they are only 
available inside the block of code where they are created.

*/

if (true) {
  var name1 = "Adrian"; // global scope
  let likes = "Coding"; // block scope
  const skills = "JavaScript and PHP"; // block scope
}

console.log(name1); // logs 'Adrian'
console.log(likes); // Uncaught ReferenceError: likes is not defined
console.log(skills); // Uncaught ReferenceError: skills is not defined

// What is More Useful?

// Both local and global variables are important. However, a large number
// of global variables can occupy a lot of memory and make changes difficult to track.

// It's advisable to avoid declaring unnecessary global variables and always
// declare variables in the scope where you intend to use them .
