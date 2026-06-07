//*Truthy expressions always evaluate to boolean true.

//*Falsy expressions always evaluate to boolean false.

//Only 6 falsy values, all others are true.

/*
//* Falsy Values

1- false - boolean false
2- 0 - Number zero
3- ' ', " ", ` ` - empty string
4- null
5- undefined
6- NaN

//* an empty object {} or an empty array [] is NOT a falsey value
*/

//* Truthy Values
// All values that are not falsy.

const value = "hi";

if (value) {
  console.log("truthy");
} else {
  console.log("falsy");
}
