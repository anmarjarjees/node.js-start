// Events and Callback Functions Concepts:
// As an asynchronous event-driven JavaScript runtime
// Link: https://nodejs.org/en/about/#about-node-js

/* 
Class: EventEmitter
Link: https://nodejs.org/api/events.html#class-eventemitter
*/

/*
Process events with "process" object
- The process object is an instance of EventEmitter.
- process.on(...) Listen to an event that can come in many different forms
- using an event name like "exit" and listen to the event using .on() method
- node has many event names than can be used with process.on()
- The syntax: process.on('even-name',callbackFunction)
https://nodejs.org/api/process.html#process
Link: https://nodejs.org/api/process.html#process-events
Link: https://nodejs.org/api/process.html#processexitcode
*/

/*
    Events: 
    - "beforeExit" => is emitted (pronounced) when Node.js empties its event loop and has no additional work to schedule.
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
// syntax: process.on('even-name', callbackFunction)
// The event below is built-in to node: process.on("exit", function(){ })
process.on('exit', function () {
    // do something!
    console.log("Take care"); // This will be the last text to be read as it's only at the end on exit
});

// Or with Arrow function:
process.on('exit', () => {
    console.log('Good Buy');
});

// The event below is built-in to node: process.on("beforeExit", callBackFunction)
process.on('beforeExit', () => {
    console.log('Process beforeExit event, so you will read this message before the two exit event messages');
});

console.log("Starting My Application Processing"); // This will be the first text to appear

/*
Using node native CommonJS syntax OR ES6 module syntax
*/

/*
require() and import()
*/

// Creating our own custom events from scratch:
// ********************************************
/*
On the backend side, Node.js offers us the option to build our custom events using the events module

The event module offers the EventEmitter class, which we'll use to handle our events.

Link: https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter
*/

/* 
Just a quick recap about the keywords "const" and "let" in JS:
- Are both "block-scoped"
- "let" and "const" have the same features, but the value of a constant can't be changed through reassignment
*/

/*
NOTE:
We are using the node native method "require()",
we will have the following notification:
"But File is a CommonJS module; it may be converted to an ES module.ts(80001)"

Two Ways:
- CommonJS module => using require() function (The classical native node function)
- ES module => using "import" (The modern ES6 statement)
*/

// First: Importing "EventEmitter" from "events" module that it's built-in to node.js
// Using CommonJS module way:
const EventEmitter = require('events');

// Or using ES module way:
// import EventEmitter from 'events';
/*
The destructuring assignment syntax can also be used to declare the constant EventEmitter, 
we don't have to use this syntax although it gives us a clear idea 
that we need to destruct exactly the function/class "EventEmitter"
*/
// const { EventEmitter } = require('events');

// testing:
// console.log("Testing1: ", EventEmitter1);
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