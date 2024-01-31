// The entry point to a node.js application is "index.js" file
// so if the main file name is only "index", we can run it just by typing: node .
// "." as we are pointing to the root directory of the current app
// > node .

// Otherwise if the file has another name like "app.js":
// > node app.js

/*
NOTE: node.js assumes (by default) that your files have the .js extension, so you can skip the extension :-)
just type: 
> node myFilename
> node app
*/

/*
When you type console.log() into a JavaScript program that runs in the browser, 
that is going to create a nice entry in the Browser Console.

In Node.js a similar, it provides a console module which provides tons of very useful ways
to interact with the command line. But Node.js cannot or show the details after two levels of nested objects
*/
console.log("Hello World!"); // Hello World!
/* 
console.log() works well with simple/complex objects in any web browser, we can go deeper as much as we want. 
console.log() has different behaviour in Node.js:
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
console.log(obj); // Node.js will output all the members till "person3" it will output: person3: [Object]
/* 
The Command Line Interface/Terminal Window doesn't support a professional UI for displaying all the deepest details or tne deepest nested objects.

For this reason, node prints only three levels, and anything beyond will be [Object]
*/

// The best way to do so, while preserving the pretty print, is to use JSON.stringify()
// .stringify(): Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
console.log(JSON.stringify(obj, null, 3));
// where 2 is the number of spaces to use for indentation.

/*
Global objects:
These objects are available in all modules. Node.js has a number of built-in global identifiers:
Some of these are true globals, being visible everywhere; 
others exist at the module level, but are inherent to every module, 
thus being pseudo-globals.

Just to have a quick idea about "Namespaces", 
Namespaces are named program regions used to limit the scope of variables inside the program. 
It's exactly like using "namespaces" in C# or like using "packages" in Java :-)

They are used in many programming languages to create a separate region for a group of variables, functions, classes, etc. 
Link: https://en.wikibooks.org/wiki/Introduction_to_Programming_Languages/Scoping_with_Namespaces


The built-in globals in Node.js
Link: https://nodejs.org/api/globals.html

True Globals List:
******************
1. global - The global namespace:
> the global object "global" is a namespace that is available throughout the entire node process 
> setting a property to this namespace makes it globally visible within the running process.

2. process - The Node.js built-in process module:
Provides information about, and control over, the current Node.js process.
Example: const process = require('node:process');
Link: https://nodejs.org/api/process.html#process

3. console - The Node.js built-in console module
which wraps various STDIO (Standard Input Output) functionality in a browser-like way. 

4. setTimeout(), clearTimeout(), setInterval(), clearInterval():
The built-in timer functions are globals

Pseudo-Globals List: 
********************
- The following variables may appear to be global but are not
- They exist only in the scope of modules (the module scope)
- These objects are available in all modules 
- They are included at the module level in every module

1. module, module.exports, exports:
These objects all pertain to the Node.js module system
Link: https://nodejs.org/api/modules.html#module

2. __filename: this keyword contains the path of the currently executing file.
Note that this is not defined while running the Node.js REPL.
Link: https://nodejs.org/api/modules.html#__filename

3. __dirname: - Like __filename, this keyword contains the path to the root directory of the currently executing script. Also not present in the Node.js REPL.
Link: https://nodejs.org/api/modules.html#__dirname

4. require(): this function is a built-in function, exposed per-module, 
that allows other valid modules to be included.
Link: https://nodejs.org/api/modules.html#requireid

5. exports: A reference to the module.exports that is shorter to type. See the section about the exports shortcut for details on when to use exports and when to use module.exports.
Link: https://nodejs.org/api/modules.html#exports

For the full list:
Link: https://nodejs.org/api/globals.html#global-objectss
*/

/*
The main global object named "global"
the namespace of "global" is available throughout the entire node process

- namespace console
The console module provides a simple debugging console 
that is similar to the JavaScript console mechanism provided by web browsers.
"global.console"

Like JS in the browser, no need to write: window.console.log()
as window is a global object, we can just write: console.log()
or alert() instead of window.alert(), or confirm() instead of window.confirm()

Same idea with nodejs

global.console => since global is global :-) => we can ignore writing it
so we can just type "console.log()" instead of typing "global.console.log()"
*/

global.console.log("Hello World using global.console.log()!");
// in Browsers => window.console.log();

// check another use of global below:
/*
The scope of the variable can determine whether it has a global/file scope, a function (local) scope, or block scope (var vs let). Please refer to my notes about variable scope in my two JavaScript repos.

How to setup an actual global variable in nodejs across all nodejs files?
- To set up a global variable, we need to create it on the global object
*/
// we are assigning a variable "myTopic" as a custom property "myTopic" to the "global" object
global.myTopic = "node.js Quick Start";
// so we can access this property anywhere in our code
console.log("Our global variable 'myTopic' :", myTopic);
/*
"Global Variables" can be used/accessed inside another module (JS file) within the same project (app),
still we need to import/require the .js file that contains the global variable declaration first
*/

console.log("File Name => " + __filename); // D:\YourFullPath\node.js-start\index1.js
console.log("Directory Name => " + __dirname); // D:\YourFullPath\

console.log("Module => ", module); // Run it to see all the module object properties
// so we can use module.filename same as __filename:
console.log("File Name => " + module.filename); // File Name => D:\YourFullPath\index1.js

// Passing a function "require" as an argument (treating require function as a value) 
// [Please check the comments and code example below about about the First-class Function if you need a review]
console.log("Require Function() => " + require);
/*
Require Function() => 
function require(path) {
      return mod.require(path);
}
*/

// Or to check all the members use the "comma" instead of "+" to avoid the concatenating:
console.log("Require Function() => ", require);

/*
TWO IMPORTANT NOTE to remember about JavaScript:
- JavaScript is "synchronous" by default 
- It is "single threaded"
This means that code cannot create new threads and run in parallel.

Link: https://nodejs.org/en/learn/asynchronous-work/javascript-asynchronous-programming-and-callbacks
Callbacks:
A callback is a simple function that's passed as a value to another function,
and will only be executed when the event happens. 
We can do this because JavaScript has first-class functions, 
which can be assigned to variables and passed around to other functions
(called higher-order functions)

Let's practice these global functions:
setTimeout(), clearTimeout(), setInterval(), clearInterval()
Link: https://nodejs.org/api/timers.html#class-timeout
*/

// create our "greet1" function to be used as a callback function
function greet1() {
    console.log("Hello and welcome to node.js!");
}
// using setTimeout to call our "greet1" function after 2 seconds:
// setTimeout(cb,ms);
setTimeout(greet1, 2000);

// create our "greet2" function to be used as a callback function
function greet2() {
    console.log("Hello, this message will not be printed if you clear the time :-(");
}

// using setTimeout to call our "greet2" function after 2 seconds:
// This time are saving the returned value of setTimeout() "NodeJS.Timeout" to "timer"
// The only reason for saving the returned value to a variable 
// is if you want to clear the time using clearTimeout()
let timer = setTimeout(greet2, 2000);

// clearTimeout(t) => where t is the timer returned by the setTime() function
clearTimeout(timer);


// setInterval(cb, ms)
// keep calling the cb every ms
function keepGoing() {
    console.log("Never give up, keep learning and you will see the difference suddenly!");
}

// Just for learning and more demo, we will not use the above keepGoing() function
// instead we will use cb as an arrow function 
let repeat = setInterval(() => {
    console.log("Never give up, keep learning and you will see the difference suddenly!");
}, 2000);
// NOTE: press CTRL + C to stop the execution of setInterval()

// The same logic with "clearInterval" as with "clearTimeout"

clearInterval(repeat); // This will prevent the setInterval() from keep printing the message

/*
Just to review:
Yes, require() is a function. Don't forget that in JS functions are first-class citizenship
Functions in JavaScript are first-class objects (or "first-class citizens").
They are being able to be:
- assigned to a variable
- passed around as a function argument
- returned from a function, 
- treated as a value of other types
 and more...
 Basically, first-class citizenship simply means "being able to do what everyone else can do."

 Link: https://www.pluralsight.com/blog/data-professional/javascript-functions-as-first-class-objects

 Link: https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
 Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

 Look at the example below:
 */

function add(num1, num2) {
    return num1 + num2;
}

// Below we don't want to use add() function just reference (refer to) the function
let sum = add; // just add without ( and )
let total = sum(5, 7);


