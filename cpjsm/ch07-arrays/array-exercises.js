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
