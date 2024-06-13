// NOTE: This file is being used with "index1.js"
// Creating this file to serve/act as a module
// a module is code that we group together for the purposes of sharing and reuse.

/*
NOTE: 
To make the code of this file useful or accessed by others files,
we need to export them
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

// console.log("The object exports: ", exports); // The object exports: { }
// console.log("The object module.exports: ", module.exports); // The object module.exports: { }

// exports (instead of module.exports)
// "exports" is a reference to the module.exports that is shorter to type.
// attach / assign any thing to module.exports to be used by others files
/*
In each module, the module free variable is a reference to the object representing the current module. 
For convenience, module.exports is also accessible via the exports module-global. 
module is not actually a global but rather local to each module.
*/
// Link: https://nodejs.org/dist/latest-v16.x/docs/api/modules.html#exports

/*
The module.exports object is created by the Module system. 
Sometimes this is not acceptable; 
Many want their module to be an instance of some class. 
To do this, assign the desired export object to module.exports. 
Assigning the desired object to exports will simply rebind the local exports variable, which is probably not what is desired.
Check the code in "my-module2.js" file about using module.exports
*/

// In this file "my-module1.js", we're exporting functions and values individually
// CommonJS Syntax => exports.functionName() { }
exports.checkEvenOdd = (number) => {
    if (number % 2 == 0) return "Even";
    else return "Odd";
}

// Below is the same function but with ES Module:
// ES Module Syntax => export function functionName() { }
/*
export function checkEvenOdd(number) {
    if (number % 2 == 0) return "Even";
    else return "Odd";
}
*/

exports.getFactorial = (number) => {
    let factorial = 1;
    for (let i = number; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
}

// OR writing the same logic in two steps:
// Step1: Creating the function
const findTotal = (tempArray) => {
    let total = 0;
    for (let i = 0; i < tempArray.length; i++) {
        total += tempArray[i];
    }
    return total;
}
// Step2: Attach it to "exports"
exports.findTotal = findTotal;

// We can pass values:
const provinceName = "Ontario";
// passing "province" instead of "provinceName" It doesn't have to be the same as the original variable name:
exports.province = provinceName;

// Or in one line:
exports.country = "Canada";
exports.city = "Toronto";

// Another way:
// Attaching a literal object that can have multiple properties and methods

/*
If you want to export a complete object in one assignment 
instead of building it one property at a time, 
assign it to module.exports as shown below 
(you can also do this to make the root of the exports object a constructor or other function):

adding module.exports to reference the object that going to receive our code
module.exports is a property of the module object in node.js. module
This special object which is included in every JavaScript file in the node.js

so "module.exports" will tell node.js which part of code (objects, functions, variables) to be exported from the given/current file to become available to other files:
*/

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