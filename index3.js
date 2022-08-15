// Events and Callback Functions Concepts:
// As an asynchronous event-driven JavaScript runtime
// Link: https://nodejs.org/en/about/#about-node-js

/*
Process events with "process" object
- The process object is an instance of EventEmitter.
- process.on(...) Listen to an event that can come in many different forms
- using an event name like "exit" and listen to the event using .on() method
- node has many event names than can be used with process.on()
https://nodejs.org/api/process.html#process
Link: https://nodejs.org/api/process.html#process-events
Link: https://nodejs.org/api/process.html#processexitcode
*/

/*
    Events: 
    - "beforeExit" => is emitted when Node.js empties its event loop and has no additional work to schedule.
    - "exit =>  event is emitted when the Node.js process is about to exit as a result of either:
        -  The process.exit() method being called explicitly;
        -  The Node.js event loop no longer having any additional work to perform.

    Trying both events (exit adn beforeExit)
    on Exit Event, we need to run this anonymous function (it's called Callback)
    This function will not run when node.js sees it,
    it's only run when it's called after the exit event occurs at some point in the future

    Builtin Event Syntax:
    process.on(arg1,arg2)
    arg1 => Event Name
    arg2 => listener callback function is invoked based when the event occurs (It is the event handler of the event)

    the listener callback function is an arrow function
*/

// The event below is built-in to node: process.on("exit", callBackFunction)
process.on('exit', function () {
    // do something!
    console.log("Take care"); // This will be the last text to be read as it's only at the end on exit
});

process.on('exit', () => {
    console.log('Good Buy');
});

process.on('beforeExit', () => {
    console.log('Process beforeExit event, so you will read this message before the two exit event messages');
});

console.log("Starting My Application Processing"); // This will be the first text to appear

// Creating our own events from scratch:
/*
On the backend side, Node.js offers us the option to build our custom events using the events module

The event module offers the EventEmitter class, which we'll use to handle our events.

Link: Link: https://nodejs.dev/learn/the-nodejs-event-emitter
*/

/* 
Just a review about constants in JS:
- Are block-scoped, much like variables declared using the let keyword
- The value of a constant can't be changed through reassignment
*/

/*
Working with Modules: ECMAScript modules & CommonJS modules
***********************************************************
Node.js has two module systems: CommonJS modules and ECMAScript modules.
Link: https://nodejs.org/api/modules.html#modules-commonjs-modules
Link: https://nodejs.org/api/esm.html#modules-ecmascript-modules

ECMAScript modules:
===================
Are the official standard format to package JavaScript code 
for reuse in the browser or other runtimes. 
Modules are defined using a variety of import and export statements.

import()/export()
import() for importing file code and export() for exporting file code
import() & export() statements are used to refer to an ES module. 

Example: Using two files "addTwo.mjs" and "app.mjs":
****************************************************
The following example of an ES module exports a function:

// First File: This a module file named "addTwo" with the extension of ".mjs" => addTwo.mjs
// Has the following function
function addTwo(num) {
  return num + 2;
}

// Exporting the function so it will be used when we import this file/function
export { addTwo };

The following example of an ES module imports the function from addTwo.mjs:
// Second File: This a module file named "app" with the extension of ".mjs" => app.mjs
// app.mjs
import { addTwo } from './addTwo.mjs';

// Prints: 6
console.log(addTwo(4));

CommonJS modules:
=================
Are the original way to package JavaScript code for Node.js. 
In Node.js, each file is treated as a separate module. For example, consider a file named foo.js:

Modules: CommonJS modules:
In the Node.js module system, each file is treated as a separate module. 
> JavaScript module is a file that contains a few lines of code written in JavaScript
> Modules are the same as JavaScript Libraries and they are often contains class or list of functions (tools)
> We can use these modules to reduce the number of line of code in one script file. 
So we can also create our custom modules by writing our functions in a separate file then reference it
> Instead of writing the full function(s) body, we can just reference the function name

Like working with packages in Python

For example:
Consider you have two JavaScript file in the same directory:
- main.js: is the main file to run your application
- helper.js: is the utilities files that contains some functions to do your job

In NodeJS, require() is a built-in function to include external modules that exist in separate files.
Inside main.js file, you need to have an access to all the available function inside helper.js file.
In node.js, so we can use the function require() and passing the fileName and assign it to a variable
So the could looks like this:
const tools = require('./helper.js')

now the varaible "tools" became an object to give us the access to all the function inside helpers.js
so for example, if helpers.js has these functions: fun1  and fun2
we can access them using:
tools.fun1();
tools.fun2();

This is a glimpse about things that will be covered in details later!
*/

/*
One of the major differences between require() and import() are:
- require() can be called from anywhere inside the program 
whereas import() cannot be called conditionally, it always runs at the beginning of the file.
- To use the require() statement, a module must be saved with .js extension 
as opposed to .mjs when the import() statement is used.
- ES modules are the standard for JavaScript and it's fully supported by all the browsers (was introduced in ES6-2015) and the current versions of node.js,
while CommonJS is the default in Node.js server-side (not for the browsers), 
so it's supported by all versions of node.js since version 14
*/

// First: Importing "EventEmitter" from "events" module that it's built-in to node.js
const EventEmitter = require('events');
/*
The destructuring assignment syntax can also be used to declare the constant EventEmitter, 
we don't have to use this syntax although it gives us a clear idea 
that we need to destruct exactly the function/class "EventEmitter"
*/
// const { EventEmitter } = require('events');

// testing:
console.log("Testing1: ", EventEmitter1);
console.log("Testing: ", EventEmitter);

/*
Testing:  <ref *1> [Function: EventEmitter] {
  once: [AsyncFunction: once],
  on: [Function: on],
  getEventListeners: [Function: getEventListeners],
  EventEmitter: [Circular *1],
  usingDomains: false,
  captureRejectionSymbol: Symbol(nodejs.rejection),
  captureRejections: [Getter/Setter],
  EventEmitterAsyncResource: [Getter],
  errorMonitor: Symbol(events.errorMonitor),
  defaultMaxListeners: [Getter/Setter],
  setMaxListeners: [Function (anonymous)],
  init: [Function (anonymous)],
  listenerCount: [Function (anonymous)]
}
*/

// creating our custom event emitter object:
const myEventEmitter = new EventEmitter();

/*
Now we can use our event emitter object "myEventEmitter" with these two methods:
- .emit() is used to trigger an event
- .on() is used to add a callback function that's going to be executed when the event is triggered 
*/

/*
Let's create an event named "start", 
This "start" event will be triggered/emitted using .emit() method.
This "start" event has a callback function to just logging to the console: Our event has been started!
*/

// register a callback function for our custom event "myEventEmitter"
// the code inside this function will be executed when we run the event using .emit() method
myEventEmitter.on('start', () => {
    console.log('Our event has been started!');
})

// After registering our event, we can call/run our event
myEventEmitter.emit('start'); // Our event has been started!
// running our event one more time:
myEventEmitter.emit('start'); // Our event has been started!
// again:
myEventEmitter.emit('start'); // Our event has been started!

// one more time:
const myEventEmitter2 = new EventEmitter();
myEventEmitter2.on("drive", () => {
    console.log("Drive safety");
});

myEventEmitter2.emit("drive");


// or with arguments:
const myEventEmitter3 = new EventEmitter();

// We can also pass multiple arguments:
myEventEmitter3.on('meeting', (where, date, start, end) => {
    console.log(`Our meeting will be on ${where} on ${date} from ${start} to ${end}`);
});

myEventEmitter3.emit('meeting', "Zoom", "2022-12-10", "10:00 AM", "4:00 PM");

/*
Besides the two methods above,
The EventEmitter object also exposes several other methods to interact with events, like
- once(): add a one-time listener
- removeListener() / off(): remove an event listener from an event
- removeAllListeners(): remove all listeners for an event 
*/