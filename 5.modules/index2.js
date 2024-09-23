/*
NPM: is a package manager for the JavaScript programming language maintained by npm, Inc.
npm is the default package manager for the JavaScript runtime environment Node.js.

npm, Inc., was founded in 2014 and acquired by GitHub (a subsidiary of Microsoft) in 2020.

Notice that when you install Node.js, it also installs npm. Just as we use "pip" to install Python packages, npm is a tool that allows us to install remote packages for our JavaScript applications to be used in our own code.

Using the "import" statement:
*************************
In order to use the ES Module "import" statement, follow these steps:

Step #1: Create and prepare a package.json file.
This document contains all the necessary information for your project. 
It must be valid JSON, not just a JavaScript object literal.
Links:
- Package.json and file extensions: https://nodejs.org/api/packages.html#packagejson-and-file-extensions
- npm CLI documentation: https://docs.npmjs.com/cli/v8/configuring-npm/package-json
- npm init command: https://docs.npmjs.com/cli/v6/commands/npm-init

To skip the interactive prompts, you can use the "y" flag for the default options. This will create a JSON package file in the root folder of your application without any questions:
> npm init -y

The command will create a JSON file named "package.json" with the following default contents:
{
  "name": "node.js-start",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

This JSON file contains metadata about our application and the list of dependencies we installed for our app.

Step #2: Add this property:
"type": "module"

Notice that by default it's set to:
"type": "commonjs"
*/

// Importing individual functions and values from my-module1.js
import { verifyEvenOdd, isPassed, school, program, year } from './my-module2.js';

// Importing the entire module object from my-module2.js
import * as myModule2 from './my-module2.js';

// Logging imported values and functions
console.log("\nFunctions and Values from my-module1.js:");
console.log(`number 5 is ${verifyEvenOdd(5)}`); // Check if number 5 is odd or even

// Logging school information using imported values
console.log(`Our school is ${school}, program ${program}, year ${year}.`);

console.log("\nFunctions and Values from my-module2.js:");
// Displaying values from the imported myModule2
console.log(`School Name: ${myModule2.school}`);
console.log(`Program: ${myModule2.program}`);
console.log(`Year: ${myModule2.year}`);

// Calculating and displaying average
let avg = myModule2.findAvg(90, 85);
console.log(`Average: ${avg}`);

// Checking if the student has passed based on the average
console.log(`Status: Since your average is ${avg}, ${myModule2.isPassed(avg) ? "you can move to the next module" : "you will need to do an extra assignment"}`);