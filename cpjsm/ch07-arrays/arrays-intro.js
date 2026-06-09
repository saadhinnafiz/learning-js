//* Arrays

//fundamental data structure used to store ordered collections of elements.

//This is how we declare an array, the most important part here is the square brackets [ ]:

const months = ["January", "February", "March", "April"];

//*Accessing Elements

console.log(months[1]); //February

//*Modifying Elements

//We can replace an element:
months[2] = "February part 2"; // [ 'January', 'February part 2', 'Not March', 'April' ]
console.log(months);

//Or add a new one to the array:
months[4] = "May"; // [ 'January', 'February', 'Not March', 'April', 'May' ]
console.log(months);

//*Array Length
// The total count of the elements in the array is its length:

console.log(months.length); // 5

//* Storing Different Types
//An array can store elements of any type:

const arr = [
  "Apple",
  { name: "John" },
  true,
  function () {
    console.log("hello");
  },
];

//*Looping Through Arrays
//often need to loop through all the elements of an array.
// That's where the for loop comes in handy:
for (let i = 0; i < months.length; i++) {
  console.log(months[i]);
}
