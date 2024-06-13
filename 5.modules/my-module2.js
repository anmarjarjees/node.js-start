// NOTE: This file is being used with "index2.js"
// Creating this file to serve/act as a module
// a module is code that we group together for the purposes of sharing and reuse.

/*
NOTE: 
To make the code of this file useful or accessed by others files,
we need to export them
*/



// in this file "my-module2.js", we're exporting on thing that contains values (properties) and functions (methods)


/*  
using ES module syntax (export), 
which is a more modern approach introduced in Node.js v14 and later.
*/
export const school = "ABC Advanced Learning";
export const program = "Advanced Web Programming";
export const year = 2022;

export function findAvg(x, y) {
  return (x + y) / 2;
}

export function isPassed(x) {
  return x >= 60 ? true : false;
}

export const verifyEvenOdd = (number) => {
  if (number % 2 == 0) return "Even";
  else return "Odd";
}



// console.log("The object exports: ", exports); // The object exports: { }
// console.log("The object module.exports: ", module.exports); // The object module.exports: { }

// module.exports = attach/assign any thing to module.exports to be used by others files


// Attaching a literal object that can have multiple properties and methods
// In such case, we can use one module.exports syntax
// Link: https://nodejs.org/dist/latest-v16.x/docs/api/modules.html#moduleexports

// Below attaching a literal object that has two properties and one method