//Exercise 1 — Basic Array Operations

// Filter out only the students who passed (grade 60 and above)
// From the passing students, get just their names as an array
// Log how many students passed
// Find the first student with a grade above 90

const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 42 },
  { name: "Charlie", grade: 91 },
  { name: "Diana", grade: 58 },
  { name: "Ethan", grade: 76 },
];

const passed = students.filter((student) => student.grade >= 60);
console.log(passed);

const passedStudents = passed.map((student) => student.name);
console.log(passedStudents);

const passedNumber = passedStudents.length;
console.log(passedNumber);

const highDistinction = students.find((student) => student.grade >= 90);
console.log(highDistinction);
// Exercise 2 — Working with Numbers

const transactions = [150, -50, 200, -75, 300, -100, 50];

// Do the following:

// Filter out only the deposits (positive numbers)
// Filter out only the withdrawals (negative numbers)
// Calculate the total of all deposits using reduce
// Calculate the total of all withdrawals using reduce
// Calculate the final balance (total deposits + total withdrawals)

const deposit = transactions.filter((number) => number > 0);
console.log(deposit);

const withdrawals = transactions.filter((number) => number < 0);
console.log(withdrawals);

const totalDeposit = deposit.reduce((acc, curr) => acc + curr, 0);
console.log(totalDeposit);

const totalWithdraw = withdrawals.reduce((acc, curr) => acc + curr, 0);
console.log(totalWithdraw);

const balance = totalDeposit + totalWithdraw;
console.log(balance);
