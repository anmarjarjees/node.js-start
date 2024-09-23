// NOTE: This file is being used with "index1.js"
// Creating this file to serve/act as a module
// A module is a collection of code that we group together for the purposes of sharing and reuse.

/*
NOTE: 
To make the code of this file accessible to other files,
we need to export them.
This allows other files to import and use the functionalities defined in this module.
*/

console.log("The object module: ", module);
/*
 Module {
  id: '.',
  path: 'D:\\YourFullPath\\node.js-start',
  exports: {},
  filename: 'D:\\YourFullPath\\node.js-start\\my-module.js',
  loaded: false,
  children: [],
  paths: [
    'D:\\YourFullPath\\node.js-start\\node_modules',
    'D:\\YourFullPath\\node_modules',
    etc..
  ]
}
*/

// The module object contains important information about the current module,
// such as its ID, path, and exports object that will hold our exported functions/values.

// console.log("The object exports: ", exports); // The object exports: { }
// console.log("The object module.exports: ", module.exports); // The object module.exports: { }

/*
The 'exports' object is a shortcut to the 'module.exports' object.
You can use 'exports' to add properties or methods that you want to make available
to other modules. 
This is a common practice to simplify the syntax for exporting multiple items.
*/
// Link: https://nodejs.org/dist/latest-v16.x/docs/api/modules.html#exports

/*
The 'module.exports' object is created by the Module system. 
If you want your module to export a specific object or class instance,
you should directly assign it to 'module.exports'.
This ensures that the exported value is what you intend it to be.
Check the code in "my-module2.js" file about using module.exports
*/

// In this file "my-module1.js", we're exporting functions and values individually.
// CommonJS Syntax => exports.functionName = function() { }
exports.checkEvenOdd = (number) => {
  // Function to check if a number is even or odd
  if (number % 2 === 0) return "Even"; // Checks divisibility by 2
  else return "Odd"; // Returns "Odd" if not even
}

// Below is the same function but with ES Module syntax:
// ES Module Syntax => export function functionName() { }
/*
export function checkEvenOdd(number) {
    if (number % 2 == 0) return "Even";
    else return "Odd";
}
*/

exports.getFactorial = (number) => {
  // Function to calculate the factorial of a number
  let factorial = 1; // Initialize factorial result
  for (let i = number; i > 0; i--) {
    factorial *= i; // Multiply current number
  }
  return factorial; // Return the factorial result
}

// OR writing the same logic in two steps:
// Step 1: Creating the function
const findTotal = (tempArray) => {
  let total = 0; // Initialize total
  for (let i = 0; i < tempArray.length; i++) {
    total += tempArray[i]; // Add each element to total
  }
  return total; // Return the total sum
}
// Step 2: Attach it to "exports"
exports.findTotal = findTotal; // Export the findTotal function

// We can also pass values:
const provinceName = "Ontario"; // Define a province name
// Passing "province" instead of "provinceName" allows flexibility in naming:
exports.province = provinceName; // Export the province name

// Or in one line:
exports.country = "Canada"; // Export country name
exports.city = "Toronto"; // Export city name

// Another way:
// Attaching a literal object that can have multiple properties and methods

/*
If you want to export a complete object in one assignment
instead of building it one property at a time,
assign it to 'module.exports'. This can be used to export classes or instances.
'module.exports' is a property of the module object in Node.js.
*/

// This special object is included in every JavaScript file in Node.js.
// Thus, 'module.exports' will tell Node.js which part of the code (objects, functions, variables)
// to be exported from the current file to become available to other files.

/*
 Module {
  id: '.',
  path: 'D:\\YourFullPath\\node.js-start',
  exports: {},
  filename: 'D:\\YourFullPath\\node.js-start\\my-module.js',
  loaded: false,
  children: [],
  paths: [
    'D:\\YourFullPath\\node.js-start\\node_modules',
    'D:\\YourFullPath\\node_modules',
    etc..
  ]
}
*/