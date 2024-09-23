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
console.log("Hello World!"); // Outputs: Hello World!

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
Global objects:
These objects are available in all modules
Node.js has several built-in global identifiers:
- Some are true globals, visible everywhere
- Others are pseudo-globals, inherent to every module

Namespaces limit variable scope, similar to packages in Java.
// Link for quick reference on Namespaces: 
// https://en.wikibooks.org/wiki/Introduction_to_Programming_Languages/Scoping_with_Namespaces

// Built-in globals in Node.js: 
// Link: https://nodejs.org/api/globals.html

True Globals List:
******************
1. global - The global namespace:
   - The global object "global" is a namespace available throughout the entire Node.js process
   - Setting a property to this namespace makes it globally visible within the running process

2. process - The Node.js built-in process module:
   - Provides information about, and control over, the current Node.js process
   - Example: const process = require('node:process');
   - Link: https://nodejs.org/api/process.html#process

3. console - The Node.js built-in console module:
   - Wraps various STDIO (Standard Input/Output) functionalities in a browser-like way

4. setTimeout(), clearTimeout(), setInterval(), clearInterval():
   - The built-in timer functions are globals

Pseudo-Globals List:
********************
- The following variables may appear to be global but are not
- They exist only in the scope of modules (the module scope)
- These objects are available in all modules
- They are included at the module level in every module

1. module, module.exports, exports:
   - These objects pertain to the Node.js module system
   - Link: https://nodejs.org/api/modules.html#module

2. __filename: Contains the path of the currently executing file
   - Note: This is not defined while running the Node.js REPL
   - Link: https://nodejs.org/api/modules.html#__filename

3. __dirname: Contains the path to the root directory of the currently executing script
   - Also not present in the Node.js REPL
   - Link: https://nodejs.org/api/modules.html#__dirname

4. require(): A built-in function, exposed per-module, 
   that allows other valid modules to be included
   - Link: https://nodejs.org/api/modules.html#requireid

5. exports: A reference to module.exports that is shorter to type
   - See the section about the exports shortcut for details on when to use exports and when to use module.exports
   - Link: https://nodejs.org/api/modules.html#exports

For the full list of global objects:
Link: https://nodejs.org/api/globals.html#global-objects
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
console.log("Total:", total); // Outputs the result of the addition
