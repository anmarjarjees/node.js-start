/*
The global process module:
==========================
The "process" object is an important global in Node.js that provides information about 
and control over the current Node.js process. It is an instance of "EventEmitter", 
which is defined and exposed by the node:events module (to be covered later).

Key Points:
- The process object is globally accessible from anywhere in your code without requiring it.
- It offers various properties and methods to interact with the current Node.js process.
- Each Node.js process has built-in functionality accessible through the process module.
- The process object contains properties that provide information about the running process.

For more details, refer to the official documentation: 
Link: https://nodejs.org/api/process.html#process
*/

// Accessing the process object
console.log(typeof process); // Outputs: 'object'

// Uncomment the following line to see the entire process object
// console.log("process object: ", process); 

// Node.js Process Properties

// .version: contains the version of your installed Node.js
// Link: https://nodejs.org/api/process.html#processversion
console.log(process.version); // Example output: v16.14.0 

// .release: returns metadata for the current Node.js release
console.log(process.release); // Displays the node version and URL links for the current release

// .platform: identifies the operating system platform ('darwin', 'freebsd', 'linux', 'sunos', 'win32')
// Link: https://nodejs.org/api/process.html#processplatform
console.log(process.platform); // Example output: 'win32'

// .arch: provides the CPU architecture for which the Node.js binary was compiled
// Possible values include: 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x64'
// Link: https://nodejs.org/api/process.html#processarch
console.log(process.arch); // Example output: 'x64'

// .title: returns the title of the process (e.g., terminal name)
console.log(process.title); // Example output: 'Windows PowerShell'

// .pid: returns the Process ID (PID) of the current process
console.log(process.pid); // Example output: 10108

// .argv: returns command line arguments as an array
// This contains the command-line arguments passed when the Node.js process was launched
// Link: https://nodejs.org/api/process.html#processargv 
console.log(process.argv);
/*
Example output:
[
  'C:\\YourFullPath\\node.exe',
  'D:\\YourFullPath\\node.js-start\\index2.js'
]
*/

// .report: an object whose methods generate diagnostic reports for the current process
console.log(process.report); // Outputs the report object (may not show useful data directly)

// The process module provides the .env property, hosting all environment variables set at process start
// Link: https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs

// .env: returns an object containing the user environment variables
console.log(process.env); // Outputs the environment variables object

// Sample environment variable properties:
console.log(process.env.COMPUTERNAME); // Outputs your computer hardware name
console.log(process.env.OS); // Example output: 'Windows_NT'
console.log(process.env.USERNAME); // Outputs your computer username

/*
The process object also has many methods, many of which deal with advanced aspects of an application.
*/

// .cwd(): returns the current working directory of the process
console.log(process.cwd()); // Example output: 'D:\\YourFullPath\\node.js-start'