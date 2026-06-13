//* Promises:

/*

> provide a more readable and manageable way to handle asynchronous 
operations compared to callback functions.

> Promises help you avoid "callback hell" and make it easier to 
handle both successful and failed asynchronous operations.

//* Promises are objects that represent the eventual completion (or failure) of an asynchronous operation

//*Creating a Promise

>Creating the promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Got the user');
        resolve({ user: 'Adrian' });
    }, 2000);
});

> Getting the data from the promise
promise.then((user) => {
    console.log(user);
});

> A promise is created using the Promise constructor, which takes 
a function with resolve and reject parameters.

> Inside the promise, you perform your asynchronous operation. 
If successful, call resolve with the result.

> Use .then() to handle the resolved value of the promise.

//* Handling Errors with Promises

> Promises also make it easy to handle errors. 
> You can replace resolve with reject to simulate an error:

> Creating the promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Got the user');
        >resolve({ user: 'Adrian' });<
        reject('Error');
    }, 2000);
});

> Getting the data from the promise
> .then gives us the result of the resolve and .catch gives us the result of the reject
promise.then((user) => {
    console.log(user);
}).catch((error) => {
    console.log(error);
});

Use .catch() to handle errors when the promise is rejected.

*/

//* Refactoring Callback Hell with Promises

console.log(1);

const fetchUser = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the user");
      resolve(username);
    }, 2000);
  });
};

const fetchUserPhotos = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the photos");
      resolve(["photo1", "photo2"]);
    }, 2000);
  });
};

const fetchPhotoDetails = (photo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the photo details");
      resolve("details...");
    }, 2000);
  });
};

// Calling the functions with promises
fetchUser("Adrian")
  .then((user) => fetchUserPhotos(user))
  .then((photos) => fetchPhotoDetails(photos[0]))
  .then((detail) => console.log(detail))
  .catch((error) => console.log(error));

console.log(2);

// Each function returns a promise, allowing you to chain them using .then().
// This approach is much cleaner and easier to read compared to nested callbacks.
// The .catch() method at the end handles any errors that occur in the promise chain.

//* Key Takeaways
// Promises provide a more readable and manageable way to handle asynchronous operations.
// They allow you to chain operations and handle errors gracefully.
// Promises help avoid callback hell, making your code easier to maintain.
