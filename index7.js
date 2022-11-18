// Modules and NPM Summary
// ***********************
/*
To quickly summarize what we have learned about "Modules":
*************************************************

Modules are just javascript files that export their code to be used by other files

node.js has many built-in modules, 
which you can use without any further installation
we used these two modules throughout this tutorial:
- fs => To handle the file system
- events => To handle events

Link: https://www.w3schools.com/nodejs/ref_modules.asp

The traditional way to import a module in node.js,
is to use "require" function:
- COMMON JS (CommonJS) [CSJ] => require()

node.js recently (version 14 and later) added support for "ES MODULES" :
- ES MODULES (ES module) [MJS] => import/export syntax

Most node.js are written in vanilla javascript and still use "require"

Hint: The term vanilla script (VanillaJS) is used to refer to the pure JavaScript (or we can say plain JavaScript) without any type of additional library.

Other types/format of modules that belongs to JavaScript:
- The Asynchronous Module Definition (AMD) format:
  is used in browsers with a define function to define modules
- The System.register format:
  was designed to support ES6 modules within ES5
- The Universal Module Definition (UMD) format:
  can be used both in the browser and in Node.js
*/

/*
Modules: CommonJS modules in Action:
We have created a file to imitate the idea of using modules in JS, the file is named "my-module1.js" 
"my-module1.js" might contain some of my functions, classes, objects... to be used here in this file "index7.html"
*/

// Creating a variable for receiving the contents from the file "my-module1.js" 
// Below we are importing all the content of "my-module1.js" to this variable my-module1:
const myModule1 = require('./my-module1');

// Or using this ES6 syntax
// import myModule1, { checkEvenOdd, province } from './my-module1';

const { isPassed } = require('./my-module2');

console.log("\nmyModule1 Object: ", myModule1);
/*
myModule1 Object:  {
  checkEvenOdd: [Function (anonymous)],
  getFactorial: [Function (anonymous)],
  findTotal: [Function: findTotal],
  province: 'Ontario',
  country: 'Canada',
  city: 'Toronto'
}
*/
// if the module file that we are requiring/importing is is completely empty
// "myModule1" will be empty also, so it will console.log and empty object {}
// to make the module useful, we need to import some code from it

console.log(`number 5 is ${myModule1.checkEvenOdd(5)}`); // number 5 is Odd
console.log(`number 8 is ${myModule1.checkEvenOdd(8)}`); // number 8 is Even
console.log(`number 3 is ${myModule1.checkEvenOdd(3)}`); // number 3 is Odd

console.log(`3! is ${myModule1.getFactorial(3)}`); // 3! is 6
console.log(`5! is ${myModule1.getFactorial(5)}`); // 5! is 120
console.log(`0! is ${myModule1.getFactorial(0)}`); // 0! is 1

let myNumbers = [56.89, 90.12, 79.45, 34.56];
console.log(`The total of my numbers (${myNumbers}) is ${myModule1.findTotal(myNumbers)}`);
// The total of my numbers (56.89,90.12,79.45,34.56) is 261.02

console.log(`Our school is in ${myModule1.country}, province ${myModule1.province}, city ${myModule1.city}.`);
// Our school is in Canada, province Ontario, city Toronto.

// Now let's requiring the object from my-module2.js file:
// *******************************************************
const myModule2 = require('./my-module2');

console.log("\nmyModule2 Object: ", myModule2);
/*
myModule2 Object:  {
  school: 'ABC Advanced Learning',
  program: 'Advanced Web Programming',
  year: 2022,
  finAvg: [Function: finAvg],
  isPassed: [Function: isPassed]
}
*/

let avg = myModule2.finAvg(90, 85);
console.log(`
School Name: ${myModule2.school}
Program: ${myModule2.program}
Year: ${myModule2.year}
Average: ${avg}
Status: Since your average is ${avg}, ${myModule2.isPassed(avg) ? "you can move to the next module" : "you will need to do an extra assignment"}
`);

/*
School Name: ABC Advanced Learning
Program: Advanced Web Programming
Year: 2022
Average: 87.5
Status: Since your average is 87.5, you can move to the next module
*/


