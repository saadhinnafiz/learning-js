// Coding challenge #1

// write code rhat will return a random letter from your name

// attempt 1

const name = "Generic Cumberbatch";

const nameLetters = name.split("");
const randomIndex = Math.floor(Math.random() * nameLetters.length);
const randomLetter = nameLetters[randomIndex];
console.log(randomLetter);

// attempt 2

const username = "Dave";
const randomNumber = Math.floor(Math.random() * username.length);
const randomValue = username.charAt(randomNumber);
console.log(randomValue);
