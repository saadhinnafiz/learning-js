//* async / await
// A cleaner way to handle asynchronous code compared to .then() chains
// async functions always return a Promise
// await pauses execution INSIDE the async function until the Promise resolves
// await can only be used inside an async function

const myUsers = {
  userList: [], // starts as empty array — gets populated after fetch completes
};

// async function that fetches users from an API
const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users"); // waits for HTTP response
  const jsonUserData = await response.json(); // waits for response to be parsed into JSON
  return jsonUserData; // returns data — but since this is async, it returns a Promise
};

// async functions can call other async functions using await
const anotherFunction = async () => {
  const data = await myCoolFunction(); // waits for myCoolFunction's Promise to resolve
  myUsers.userList = data; // now we have the actual data
  console.log(myUsers.userList); // logs the populated array — runs AFTER fetch completes
};

anotherFunction(); // starts the async process — does not block the code below

// * This logs an empty array — NOT a bug
// * anotherFunction() is async — JavaScript does not wait for it to finish
// * This line runs immediately while the fetch is still in progress
// * By the time fetch completes, this line has already executed
console.log(myUsers.userList); // [] — empty because fetch hasn't completed yet

// * Key rule — any code that depends on async data must live INSIDE the async function
// * Code outside runs immediately without waiting

//Examples:

//* Async Workflow Example
// A practical example of fetching data, transforming it, and using it

const getAllUserEmails = async () => {
  // Step 1 — fetch all users from the API
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // Step 2 — parse the response into usable JavaScript data
  const jsonUserData = await response.json();

  // Step 3 — transform the data — extract only the emails using map
  // map returns a new array of just the email strings
  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });

  // Step 4 — pass the processed data to another function
  postToWebPage(userEmailArray);
};

// Separate function responsible for displaying/using the data
// keeps concerns separated — fetching and displaying are two different jobs
const postToWebPage = (data) => {
  console.log(data); // in a real app this would update the DOM
};

getAllUserEmails(); // kicks off the whole workflow

// * This is a clean async workflow pattern used in real applications
// * fetch → parse → transform → display
// * Each step is clearly separated and easy to follow
// * postToWebPage is a regular function — no need to be async since it just uses the data

//example
//2nd parameter of fetch is always a Object

const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com", {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });
  const jsonJokeData = await response.json();

  console.log(jsonJokeData);
};

getDadJoke();
