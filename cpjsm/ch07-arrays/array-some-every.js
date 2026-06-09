//* Array.some() & Array.every()

// used to test whether some or all elements in an array pass a specified test.

//* Array.some()
// some() method tests whether at least one element in the array passes the test
// It returns true if the callback function returns a truthy value for any array element

// Example: Checking for Even Numbers

var numbers = [1, 3, 5, 8, 9];

// Check if there is at least one even number
var hasEvenNumber = numbers.some(function (number) {
  return number % 2 === 0;
});

console.log(hasEvenNumber); // true

//* Array.every()

//tests whether all elements in the array pass the test implemented by the provided function.

// returns true if the callback function returns a truthy value for every array element;
// otherwise, it returns false.

// Example: Checking for All Positive Numbers

var numbers = [1, 3, 5, 8, 9];

var allPositive = numbers.every(function (number) {
  return number > 0;
});

console.log(allPositive);

/*

How They Work:

- some(): Returns true if at least one element passes the test.
- every(): Returns true if all elements pass the test.

*/
