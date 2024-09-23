// NOTE: This file is being used with "index2.js"
// Creating this file to serve/act as a module
// A module is code that we group together for the purposes of sharing and reuse

/*
NOTE: 
To make the code of this file useful or accessible by other files,
we need to export them.
*/

/* 
In this file "my-module2.js", 
we're exporting one thing that contains values (properties) and functions (methods).
*/

/*  
Using ES module syntax (export), 
which is a more modern approach introduced in Node.js v14 and later.
*/
export const school = "ABC Advanced Learning"; // A constant representing the name of the school.
export const program = "Advanced Web Programming"; // A constant representing the program offered by the school.
export const year = 2022; // A constant indicating the current year or program year.

export function findAvg(x, y) {
  // Function to calculate the average of two numbers.
  return (x + y) / 2;
}

export function isPassed(x) {
  // Function to determine if a score is passing (60 or above).
  return x >= 60 ? true : false;
}

export const verifyEvenOdd = (number) => {
  // Function to check if a number is even or odd.
  if (number % 2 === 0) return "Even"; // Returns "Even" if the number is divisible by 2.
  else return "Odd"; // Returns "Odd" otherwise.
}

// Console logs below are commented out, but they could be used for debugging:
// console.log("The object exports: ", exports); // This would show the exported values and functions.
// console.log("The object module.exports: ", module.exports); // This would show the current exports object.

// We can attach/assign anything to module.exports to be used by other files.
// This can be useful for more complex structures or when exporting a single object.

// Attaching a literal object that can have multiple properties and methods
// In such a case, we can use one module.exports syntax.
// Link: https://nodejs.org/dist/latest-v16.x/docs/api/modules.html#moduleexports

// Below is an example of attaching a literal object that has two properties and one method (this part could be filled in).
// Example:
// module.exports = {
//   school: school,
//   program: program,
//   findAvg: findAvg
// };