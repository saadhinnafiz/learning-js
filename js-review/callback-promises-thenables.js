//* fetch API requires a disucssion of..
//* Callbacks, Promises, Thenables and Async/Await

//* Callbacks: Functions that are passed to other func as parameters

function firstFunction(parameters, callback) {
  //do stuff
  callback();
}

// AKA "callback hell"

// firstFunction(para, function () {
//   secondFunction(para, function () {
//     thirdFunction(para, function () {
//     });
//   });
// });

//* Promises solve this
//* 3 states: Pending, Fulfilled, Rejected
// Promises will deliver async code, JS is usually syncronus, meaning doing one thing at a time
// A promise is like you go ahead I'll catch up
// So a promise can be pending while some other js code executes

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Resolved the promise");
  } else {
    reject("NO! Rejected the promise");
  }
});

console.log(myPromise); // Promise {<fulfilled>: 'Resolved the promise'}
// instead to get value out of promise we need to chain

//example by using thenables

myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.error(err);
  });

// big reason for using fetch api is requestibg datat from a other server
// what can happen is we need to wait till the data comes
// so we need to tell our code hey wait for this and then do this after we get it

// before we work with fetch one more example:

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("MyNextPromise resolved");
  }, 5000);
});

myNextPromise.then((value) => {
  console.log(value);
});

myPromise.then((value) => {
  console.log(value);
});

// countdown example:

const delay = (msg, ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(msg), ms);
  });

delay("3", 1000)
  .then((value) => {
    console.log(value);
    return delay("2", 1000);
  })
  .then((value) => {
    console.log(value);
    return delay("1", 1000);
  })
  .then((value) => {
    console.log(value);
  });

//* Pending State of Promises

// fetch() immediately returns a Promise in PENDING state
// data hasn't arrived yet
// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users); // Promise {<pending>}

const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json(); // parse raw response into usable JavaScript data
  })
  .then((data) => {
    // data is now an array of user objects
    data.forEach((user) => {
      console.log(user); // logs each user one by one
    });
  });

console.log(users);

// * Any code written OUTSIDE the .then() chain runs immediately
// * JavaScript does not wait for the fetch to complete before moving on
// * This means you cannot use fetched data outside of the .then() chain
// * All logic that depends on the fetched data must live inside .then()

//* async/await is a better way
// it lets you write async code that looks synchronous and avoids this confusion.
