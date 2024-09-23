// Events and Callback Functions Concepts:
// As an asynchronous event-driven JavaScript runtime
// Link: https://nodejs.org/en/about/#about-node-js

/* 
Class: EventEmitter
Link: https://nodejs.org/api/events.html#class-eventemitter
*/

/*
Process events with the "process" object
- The process object is an instance of EventEmitter, meaning it can emit events and listen for them.
- process.on(...) allows you to listen for events that can come in many forms, 
  enabling asynchronous programming.
- Use an event name like "exit" and listen to the event using the .on() method.
- Node.js has many event names that can be used with process.on(), such as "exit" and "beforeExit".
- The syntax is: process.on('event-name', callbackFunction).
- Link: https://nodejs.org/api/process.html#process
- Link: https://nodejs.org/api/process.html#process-events
*/

// Events: 
// - "beforeExit": emitted when Node.js empties its event loop and has no additional work to schedule.
// - "exit": emitted when the Node.js process is about to exit due to:
//     - The process.exit() method being called explicitly.
//     - The Node.js event loop no longer having any additional work to perform.

// Trying both events (exit and beforeExit):
// The exit event requires running a callback function, which will execute only when the event occurs.
// Built-in Event Syntax: process.on(arg1, arg2)
// arg1 => Event Name
// arg2 => listener callback function that is invoked when the event occurs (the event handler).

// Listening for the exit event
process.on('exit', function () {
    // This will be the last message displayed on exit
    console.log("Take care");
});

// Using an arrow function for the exit event
process.on('exit', () => {
    // This will also run on exit, after the previous message
    console.log('Goodbye');
});

// Listening for the beforeExit event
process.on('beforeExit', () => {
    console.log('Process beforeExit event, you will see this message before the exit messages.');
});

// This will be the first text to appear
console.log("Starting My Application Processing");

/*
Using node native CommonJS syntax OR ES6 module syntax
*/

// Creating our own custom events from scratch:
// ********************************************
// On the backend side, Node.js offers the option to build custom events using the events module.
// The event module provides the EventEmitter class, which we'll use to handle our events.
// Link: https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter

/*
Recap on the two keywords "const" and "let" in JavaScript:
- Both are block-scoped, meaning they are limited to the block in which they are defined.
- "const" creates a constant reference that cannot be reassigned, while "let" allows reassignment.
*/

// NOTE:
// When using require(), you may see a notification:
// "But File is a CommonJS module; it may be converted to an ES module.ts(80001)"

// Two Ways to Import:
// - CommonJS module using require()
// - ES module using import

/*
Note on module systems: require() and import()
In Node.js, modules can be included using two syntaxes: require() and import.
- Using "require()" indicates that you are working with a CommonJS module, 
  which is the traditional module system in Node.js.
- Using "import" indicates an ES module, which is part of the modern JavaScript syntax.
*/

// Importing "EventEmitter" from the 'events' module, which is built-in to Node.js
const EventEmitter = require('events'); // CommonJS way

// Or using ES module way (if your environment supports it):
// import EventEmitter from 'events'; // Uncomment this line if using ES modules

/*
The destructuring assignment syntax can also be used to declare the constant EventEmitter.
This allows you to extract the EventEmitter class directly from the 'events' module.
While not necessary, it can provide clearer code by explicitly indicating
what you are importing. For example:

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

Example: If you want to trigger a notification whenever a user logs in, you could use .emit() to send the event.
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
Besides the two methods above, the EventEmitter object also exposes several other methods to interact with events, such as:
- once(): adds a one-time listener, which is invoked only the first time the event is emitted.
- removeListener() / off(): removes a specific event listener.
- removeAllListeners(): removes all listeners for an event.

These methods allow you to manage your event listeners efficiently and prevent memory leaks.
*/