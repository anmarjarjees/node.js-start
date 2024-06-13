/*
NPM: is a package manager for the JavaScript programming language maintained by npm, Inc.
npm is the default package manager for the JavaScript runtime environment Node.js.

npm, Inc., is a company founded in 2014. It was acquired by GitHub, a subsidiary of Microsoft, in 2020
was acquired by GitHub then recently Microsoft

Notice that when you install node.js it install npm also, so as we use "pip" to install Python packages, npm is a tool that we can use to install a remote packages for our JS applications to be used in our own code


Using "import" statement:
*************************
In order to use ES Module "import" statement:

Step#1: create and prepare package.json file
This document is all you need to know about what's required in your package.json file. 
It must be actual JSON, not just a JavaScript object literal.
Link: https://nodejs.org/api/packages.html#packagejson-and-file-extensions
Link: https://docs.npmjs.com/cli/v8/configuring-npm/package-json
Link: https://docs.npmjs.com/cli/v6/commands/npm-init

using "y" flag for the default options
if you don't add it, node.js will ask you some questions about your name, app, etc..
This will create a JSON package file in the root folder of the application without having it ask any questions:
> npm init -y

The command will create a json file named "package.json"
with the following default contents:
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

This JSON file contains meta data about our application 
and the list dependencies that we installed for our app

Step#2: Add this property:
"type": "module"

Notice that by default it's:
"type": "commonjs"
*/

// Importing individual functions and values from my-module1.js
import { verifyEvenOdd, isPassed, school, program, year } from './my-module2.js';

// Importing the entire module object from my-module2.js
import * as myModule2 from './my-module2.js';

// Logging imported values and functions
console.log("\nFunctions and Values from my-module1.js:");
console.log(`number 5 is ${verifyEvenOdd(5)}`); // number 5 is Odd

console.log(`Our school is ${school}, program ${program}, year ${year}.`);

console.log("\nFunctions and Values from my-module2.js:");
console.log(`School Name: ${myModule2.school}`);
console.log(`Program: ${myModule2.program}`);
console.log(`Year: ${myModule2.year}`);

let avg = myModule2.findAvg(90, 85);
console.log(`Average: ${avg}`);
console.log(`Status: Since your average is ${avg}, ${myModule2.isPassed(avg) ? "you can move to the next module" : "you will need to do an extra assignment"}`);