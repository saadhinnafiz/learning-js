"use strict";
//* JSON: JavaScript Object Notation

// used to send and receive data
// JSON is a text format that is completely language independent
// meaning JSON is used to send and rcv data in many languages, not just js

// example: sending data from webapp and a server

const myObj = {
  name: "Sev",
  hobbies: ["eat", "sleep", "football"],
  hello: function () {
    console.log(`Hello my name is ${this.name}`);
  },
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

//* If we want to take this object and send it as json:

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
//json does not send functions

console.log(typeof sendJSON);

//* when we rcv JSON

const rcvJSON = JSON.parse(sendJSON);
console.log(rcvJSON); //back to an object
