//* Async/Await

// a modern addition to JavaScript that simplifies working with promises.

// Async/await provides a more intuitive and readable way to handle asynchronous operations

// Async/await is a syntactic sugar built on top of promises.

// It allows you to write asynchronous code that looks and behaves like synchronous code,
// which makes it easier to read and maintain.

/*

//*Advantages

> Readability: Asynchronous functions using async/await resemble synchronous functions,
making them easier to understand.

> Error Handling: You can use try/catch blocks to handle errors, similar to synchronous code.

*/

//Example:

const fetchNumber = async () => {
  return 25;
};

fetchNumber().then((result) => {
  console.log(result); // should log 25
});

// The fetchNumber function is declared with the async keyword, which means it returns a promise.
// Inside the function, return 25; is equivalent to return Promise.resolve(25);.
// The .then() method is used to handle the resolved value of the promise.

/*

//* Await

> The await keyword is used to pause the execution of an async function until 
a promise is fulfilled. It can only be used inside an async function.

-> Non-blocking: Using await does not block the entire program; 
it only pauses the execution of the async function until the promise is resolved.

//* Refactoring with Async/Await

Let's refactor our previous example with callbacks and promises using async/await:

*/

const displayData = async () => {
  try {
    const user = await fetchUser("Adrian");
    const photos = await fetchUserPhotos(user);
    const detail = await fetchPhotoDetails(photos[0]);

    console.log(detail);
  } catch (error) {
    console.error(error);
  }
};

/*
> The displayData function is declared with the async keyword, 
allowing the use of await within it.
> Each await expression pauses the function execution until 
the promise is resolved, making the code appear synchronous.
> A try/catch block is used to handle any errors that might 
occur during the asynchronous operations.

//* Key Takeaways

> Async/Await: Provides a cleaner and more readable way to work with promises.

> Await: Pauses the execution of an async function until a promise is resolved, 
without blocking the entire program.

> Error Handling: Use try/catch blocks to handle errors in a manner 
similar to synchronous code.

*/
