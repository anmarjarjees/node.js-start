/* 
The entry point for a Node.js application is typically "index.js".
If the main file is named "index.js", you can run it by typing: node .
The "." points to the root directory of the current app.
Command: > node . 
*/

// If the file has a different name like "app.js":
// Command: > node app.js

/* 
NOTE: Node.js assumes (by default) that your files have the .js extension, 
so you can skip it. Just type: 
> node myFilename
> node app
*/

/*
When you type console.log() in a JavaScript program that runs in the browser,
it creates a nice entry in the Browser Console.

In Node.js, it provides a console module with various useful ways
to interact with the command line. However, Node.js cannot display details
beyond two levels of nested objects by default.
*/
console.log("Hello World!"); // Output: Hello World!

/*
console.log() works well with simple/complex objects in any web browser; 
we can go as deep as we want. In Node.js, console.log() behaves differently:
*/
const obj = {
    name: 'Alex',
    age: 35,
    person1: {
        name: 'Tony',
        age: 50,
        person2: {
            name: 'Allen',
            age: 21,
            person3: {
                name: 'Sam',
                age: 23,
            },
        },
    },
};

// Note: In Node.js, complex objects may not display fully. 
// It will output all the members till "person3", showing "person3: [Object]".
console.log(obj);

/*
The Command Line Interface/Terminal Window doesn't support a professional UI 
for displaying all the deepest details or nested objects.

For this reason, Node.js prints only three levels, and anything beyond will be [Object].
*/

// The best way to preserve a pretty print of nested objects is to use JSON.stringify().
// .stringify(): Converts a JavaScript value to a JSON string.
console.log(JSON.stringify(obj, null, 3));
// where 3 is the number of spaces used for indentation for better readability.

/*
5. exports: A reference to module.exports that is shorter to type
   - See the section about the exports shortcut for details on when to use exports and when to use module.exports
   - Link: https://nodejs.org/api/modules.html#exports

For the full list of global objects:
Link: https://nodejs.org/api/globals.html#global-objects
*/

/*
Global Objects in Node.js:
***************************
- These objects are accessible throughout the entire Node.js process.
- They are available in the global context, meaning you can access them from anywhere in the Node.js process.

Built-in globals in Node.js: 
Link: https://nodejs.org/api/globals.html

Global Objects:
****************
These objects are available globally across all files and modules in the Node.js process.

1. global:
   - The global object itself, accessible from any file or module.
   - Any property added to the global object becomes globally accessible throughout the Node.js process.

   - Example: 
     global.myVar = 'hello'; 
     // myVar is now globally available.

2. process:
   - Provides information about and control over the current Node.js process.
   - You can access process-related data such as environment variables, exit codes, the current working directory, and more.
   - Link: https://nodejs.org/api/process.html#process

   - Example:
     const process = require('node:process');
     console.log(process.env.NODE_ENV); // Output: environment variable NODE_ENV  

3. console:
   - A built-in object used for logging information to the standard output (stdout) and standard error (stderr).
   
   - Example:
     console.log('Hello, Node.js!');

4. Timer Functions (setTimeout, clearTimeout, setInterval, clearInterval):
   - Built-in timer-related functions that are available globally.
   - setTimeout(): Calls a function after a specified delay (in milliseconds).
   - setInterval(): Repeatedly calls a function at specified intervals (in milliseconds).
   - clearTimeout() and clearInterval() are used to cancel these timers.
   
   - Example:
     setTimeout(() => { console.log('This runs after 1 second'); }, 1000);
     setInterval(() => { console.log('This runs every 2 seconds'); }, 2000);


Module-Scope Objects (or Built-in Module Variables):
***************************************************
These objects are not globally scoped, but they are automatically available in every module in Node.js.

Module-Scope Objects:
************************
1. module, module.exports, exports:
   - These objects are specific to each module in Node.js.
   - `module.exports` is the actual object that is used to export functions or values from the module.
   - `exports` is a reference to `module.exports` and is a shorthand for exporting functionality. However, **assigning a new value to `exports` will break the reference to `module.exports`**.
   - Link: https://nodejs.org/api/modules.html#module
   
   - Example:
     module.exports = function() { console.log('Hello!'); };
     // or equivalently:
     exports.greet = function() { console.log('Hello!'); };
     
     // Notice that if we reassign exports:
     // exports = { some: 'value' }
     // It will break the reference to module.exports.
     

2. __filename:
   - Contains the absolute path of the currently executing file (the file where the code is running).
   - Link: https://nodejs.org/api/modules.html#__filename

   - Example:
     console.log(__filename); // Output: the full path of the current file
   

3. __dirname:
   - Contains the directory name of the currently executing file.
   - Link: https://nodejs.org/api/modules.html#__dirname

   - Example:
     console.log(__dirname); // Output: the directory path of the current file
   

4. require():
   - A built-in function that allows you to import other Node.js modules or external packages into your code.
   - Link: https://nodejs.org/api/modules.html#requireid

   - Example:
     const fs = require('fs'); // Requires the built-in 'fs' module for file operations

NOTE:
These global and module-scope objects are automatically available in all modules, but their use is limited to specific scopes:
- **Global objects** can be accessed from anywhere in the Node.js process.
- **Module-scope objects** are available within the context of each module and help manage module-specific functionality.

Understanding the scope and behavior of these objects is crucial when organizing and writing your Node.js applications, as it will help prevent potential conflicts or unintended side effects.

For more detailed documentation on global objects and built-in module variables:
- Global objects: https://nodejs.org/api/globals.html#global-objects
- Modules and module-scope variables: https://nodejs.org/api/modules.html#module
*/


// Example of using the global object
global.console.log("Hello World using global.console.log()!");
// In Browsers => window.console.log();

// To set up an actual global variable in Node.js across all files, we create it on the global object
// Assigning a variable "myTopic" as a custom property to the "global" object
global.myTopic = "node.js Quick Start";
// This allows us to access this property anywhere in our code.
console.log("Our global variable 'myTopic' :", myTopic);
/*
"Global Variables" can be used/accessed inside another module (JS file) within the same project (app),
but we still need to import/require the .js file that contains the global variable declaration first.
*/


// The environment variable "NODE_ENV" needs to be set beforehand for testing:
process.env.NODE_ENV = 'development'; // We can set environment variables manually
console.log(process.env.NODE_ENV); // Output: development

// Display file and directory names for reference
console.log("File Name => " + __filename); // Displays the full path of the current file
console.log("Directory Name => " + __dirname); // Displays the directory of the current file

console.log("Module => ", module); // Run this to see all the properties of the module object
// We can also use module.filename, which is equivalent to __filename:
console.log("File Name => " + module.filename); // File Name => D:\YourFullPath\index1.js

// The require function can be treated as a first-class function.
// Here, we are passing require as an argument to console.log to show its value.
console.log("Require Function() => ", require);
/*
Output will show the internal definition of the require function, illustrating that
functions in JavaScript can be treated like values.
*/

/*
IMPORTANT NOTES about JavaScript:
- JavaScript is "synchronous" by default 
- It is "single-threaded".
This means that code cannot create new threads and run in parallel.
Link: https://nodejs.org/en/learn/asynchronous-work/javascript-asynchronous-programming-and-callbacks

Callbacks:
A callback is a simple function that's passed as a value to another function,
and will only be executed when the event happens. 
We can do this because JavaScript has first-class functions, 
which can be assigned to variables and passed around to other functions
(called higher-order functions).
*/

// Practice with built-in timer functions: setTimeout() and setInterval()
function greet1() {
    console.log("Hello and welcome to node.js!");
}

// Using setTimeout to call our "greet1" function after 2 seconds
// setTimeout(cb, ms);
setTimeout(greet1, 2000);

// Another callback function for demonstration
function greet2() {
    console.log("Hello, this message will not be printed if you clear the timer :-(");
}

// Using setTimeout to call our "greet2" function after 2 seconds
// Saving the returned value of setTimeout() to a variable "timer"
// This allows us to clear the timer later using clearTimeout()
let timer = setTimeout(greet2, 2000);

// clearTimeout(t) => t is the timer returned by the setTimeout() function
clearTimeout(timer); // This prevents greet2 from executing.

// setInterval(cb, ms) keeps calling the cb every ms
function keepGoing() {
    console.log("Never give up, keep learning and you will see the difference suddenly!");
}

// For demonstration, we will use an arrow function for setInterval
let repeat = setInterval(() => {
    console.log("Never give up, keep learning and you will see the difference suddenly!");
}, 2000);
// NOTE: Press CTRL + C to stop the execution of setInterval()

// To stop the setInterval from printing, use clearInterval
clearInterval(repeat); // This prevents the interval from continuing

/*
To summarize:
- Require is a function and a first-class citizen in JavaScript.
- Functions can be assigned to variables, passed as arguments, and returned from other functions.
*/

// Example of a simple function
function add(num1, num2) {
    return num1 + num2;
}

// Below we assign the function to a variable, without calling it
let sum = add; // Just a reference to the function
let total = sum(5, 7); // Now we call the function using the reference
console.log("Total:", total); // Output: the result of the addition
