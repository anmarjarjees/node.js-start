/*
The global process module:
==========================
Another important global to use is "process"
- The process object provides information about, and control over, the current Node.js process.
- The process object is an instance of "EventEmitter" which is a class that is defined and exposed by the node:events module (as we will see later...)
- The process object is a global object and can be accessed from anywhere/module (without requiring it)
- process object also provides various properties to interact with
- process object has several methods, we will use .on() to deal with events
- Each Node.js process has a set of built-in functionality, accessible through the global process module.
- The process object additionally contains a variety of properties that allow you to access information about the running process.
- process object gives us access to the currently running node process

Link: https://nodejs.org/api/process.html#process
*/

// process => gives access to the currently running node process
console.log(typeof process); // object
// console.log("process object: ", process); // out all the process object

// Node.js Process Properties

// .version: contains the version of your installed/used node.js
// Link: https://nodejs.org/api/process.html#processversion
console.log(process.version); // v16.14.0 

// .release: returns the metadata for the current node release
console.log(process.release); // display your node version and the URL links for the current release

// .platform: returns platform of the process: 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'
// .platform returns a string identifying the operating system platform for which the Node.js binary was compiled.
// Link: https://nodejs.org/api/process.html#processplatform
console.log(process.platform); // win32

// .arch: The operating system CPU architecture for which the Node.js binary was compiled.
// Possible values are: 'arm', 'arm64', 'ia32', 'mips','mipsel', 'ppc', 'ppc64', 's390', 's390x', and 'x64'
// Link: https://nodejs.org/api/process.html#processarch
console.log(process.arch); // x64

console.log(process.title); // Windows PowerShell

// .pid: (Process ID) returns an integer value specifying the PID of the process.
console.log(process.pid); // 10108

// .argv: returns commands line arguments as an array
// returns an array containing the command-line arguments passed when the Node.js process was launched
// Link: https://nodejs.org/api/process.html#processargv 
console.log(process.argv);
/*
[
  'C:\YourFullPath\node.exe',
  'D:\YourFullPath\node.js-start\\index2'
]
*/

// .report: is an object whose methods are used to generate diagnostic reports for the current process
console.log(process.report);


// .env: returns an object containing the user environment.
console.log(process.env); // the long env object

// env object properties samples:
console.log(process.env.COMPUTERNAME); // Your computer hardware name
console.log(process.env.OS); // 'Windows_NT
console.log(process.env.USERNAME); // YourComputerUserName

/*
process object has many different methods also,
many of them deal with advanced aspects of an application
*/
// process.cwd() => returns the 'Current Working Directory' of the process
console.log(process.cwd()); // D:\YourFullPath\node.js-start
