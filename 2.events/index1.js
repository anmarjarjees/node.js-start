/*
Events and Callback Functions Concepts:
========================================
Node.js is an asynchronous, event-driven JavaScript runtime. 
The core concept behind Node.js is that it operates based on events and callback functions, allowing for non-blocking, scalable applications.
Link: https://nodejs.org/en/about/#about-node-js
*/

/* 
Class: EventEmitter
=====================
The EventEmitter class is the core class for handling events in Node.js. It allows us to bind event listeners to specific events and emit events, triggering those listeners. 
Link: https://nodejs.org/api/events.html#class-eventemitter
*/

/*
Process events with the "process" object
========================================
The "process" object in Node.js is an instance of the EventEmitter class, 
which means it can emit and listen for events.
- The process object provides key lifecycle events like "exit" and "beforeExit" 
that are crucial for managing the Node.js process.
- We can use "process.on(eventName, callback)" 
to listen for various events in the process lifecycle.

For more details, refer to the official process events documentation:
- Link: https://nodejs.org/api/process.html#process
- Link: https://nodejs.org/api/process.html#process-events
*/

/*
// Events Examples:
- "beforeExit": emitted when Node.js empties its event loop and has no additional work to schedule.
- "exit": emitted when the Node.js process is about to exit due to:
   - The process.exit() method being called explicitly.
   - The Node.js event loop no longer having any additional work to perform.
*/

// Trying both events (exit and beforeExit):
// The exit event requires running a callback function, which will execute only when the event occurs.
// Built-in Event Syntax: process.on(arg1, arg2)
// arg1 => Event Name
// arg2 => listener callback function that is invoked when the event occurs (the event handler).

// Listening for the exit event
process.on('exit', function () {
  // This message will be the last one displayed on exit:
  console.log("Take care");
});

// Another "exit" listener using an arrow function for the exit event
process.on('exit', () => {
  // This will run on exit after the previous message:
  console.log('Goodbye');
});

// Listen for the "beforeExit" event
process.on('beforeExit', () => {
  console.log('Process beforeExit event, we will see this message before the exit messages.');
});

// This will be the first text to appear
// Log a message to indicate the app is running
console.log("Starting My Application Processing");

/*
Using node native CommonJS syntax OR ES6 module syntax
======================================================
Node.js supports both CommonJS (require) and ES6 (import) module systems. 
While CommonJS is more commonly used, we can switch to ES6 module syntax with proper configuration.
*/

/*
Creating custom events from scratch:
*************************************
Node.js provides the EventEmitter class, which allows us to create and handle our custom events.
This is helpful for managing specific functionality in our application.
Link: https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter
*/

/*
Recap on the two keywords "const" and "let" in JavaScript:
- Both are block-scoped, meaning they are limited to the block in which they are defined.
- "const" creates a constant reference that cannot be reassigned, while "let" allows reassignment.
*/

// NOTE:
// When using require(), we may see a notification:
// "But File is a CommonJS module; it may be converted to an ES module.ts(80001)"

// Two Ways to Import:
// - CommonJS module using require()
// - ES module using import

/*
Note on module systems: require() and import()
===============================================
In Node.js, modules can be included using two syntaxes:
- "require()" is the CommonJS syntax, which is the traditional module system.
- "import" is the ES6 module syntax, part of modern JavaScript, supported in newer Node.js versions with specific configurations.
*/

// Importing "EventEmitter" from the 'events' module, which is built-in to Node.js
const EventEmitter = require('events'); // CommonJS way

// Alternatively, if using ES6 module system (if supported):
// import EventEmitter from 'events'; // Uncomment this line if using ES modules

/*
The destructuring assignment syntax can also be used to declare the constant EventEmitter.
This allows us to extract the EventEmitter class directly from the 'events' module.
While not necessary, it can provide clearer code by explicitly indicating
what we are importing. For example:

const { EventEmitter } = require('events'); // Destructuring assignment
*/

// Testing the EventEmitter class
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

// Creating our custom event emitter object
const myEventEmitter = new EventEmitter();

/*
Now we can use our event emitter object "myEventEmitter" with these two methods:
- .emit() to trigger an event.
- .on() to add a callback function that's executed when the event is triggered.

Example: If we want to trigger a notification whenever a user logs in, we could use .emit() to send the event.
*/

// Creating an event named "start"
// This event will be triggered using .emit() method.
myEventEmitter.on('start', () => {
  console.log('Our event has been started!'); // This message appears when the event is triggered.
});

// Triggering the custom "start" event
myEventEmitter.emit('start'); // Our event has been started!
myEventEmitter.emit('start'); // Triggering again
myEventEmitter.emit('start'); // Triggering once more

// Another custom event example
const myEventEmitter2 = new EventEmitter();
myEventEmitter2.on("drive", () => {
  console.log("Drive safely"); // This message appears when the "drive" event is triggered.
});

// Emitting the "drive" event
myEventEmitter2.emit("drive");

// Custom event with arguments
const myEventEmitter3 = new EventEmitter();
myEventEmitter3.on('meeting', (where, date, start, end) => {
  console.log(`Our meeting will be on ${where} on ${date} from ${start} to ${end}`);
});

// Emitting the "meeting" event with arguments
myEventEmitter3.emit('meeting', "Zoom", "2022-12-10", "10:00 AM", "4:00 PM");

/*
EventEmitter Methods:
====================
Besides ".on()" and ".emit()", 
the EventEmitter class exposes several useful methods for managing events:

- ".once()" adds a listener that will be called only once, the first time the event is emitted.
- ".removeListener()" or ".off()" removes a specific event listener.
- ".removeAllListeners()" removes all listeners for a particular event.

These methods provide flexible event management, ensuring we can control and optimize memory usage by removing unnecessary listeners.

Example:
*/

const emitter = new EventEmitter();

// One-time listener
emitter.once('greet', () => {
  console.log('Hello once!'); // This will only be called the first time the 'greet' event is emitted
});

emitter.emit('greet');
emitter.emit('greet'); // This won't trigger the listener again because it's a one-time listener

// Remove a specific listener
const greetListener = () => {
  console.log('This should not appear if removed.');
};

emitter.on('greet', greetListener);
emitter.removeListener('greet', greetListener); // Removes the greetListener

emitter.emit('greet'); // The listener is removed, so this won't display anything

// Remove all listeners for an event
emitter.removeAllListeners('greet'); // Removes all listeners for the 'greet' event
emitter.emit('greet'); // No output, as all listeners have been removed