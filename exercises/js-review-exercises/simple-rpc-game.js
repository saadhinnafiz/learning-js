// simple rock paper scissor game

const options = ["rock", "paper", "scissors"];
let playerOne = "paper";
let computer = options[Math.floor(Math.random() * options.length)];

if (playerOne === computer) {
  console.log("Tie Game!");
} else if (playerOne === "rock") {
  if (computer === "paper") {
    console.log("You Lose!");
  } else {
    console.log("You Win!");
  }
} else if (playerOne === "paper") {
  if (computer === "scissors") {
    console.log("You Lose!");
  } else {
    console.log("You Win!");
  }
} else if (playerOne === "scissors") {
  if (computer === "rock") {
    console.log("You Lose!");
  } else {
    console.log("You Win!");
  }
}
