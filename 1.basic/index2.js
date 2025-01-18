/*
The global process module:
==========================
The "process" object is a key global in Node.js that provides detailed information 
about the current Node.js process and control over it. It is an instance of "EventEmitter", 
which is defined and exposed by the node:events module (to be covered later in your studies).

Key Points:
- The process object is globally accessible from anywhere in your code without requiring it.
- It offers various properties and methods to interact with the current Node.js process.
- Each Node.js process has built-in functionality accessible through the process module.
- The process object contains properties that provide information about the running process.

For more details, refer to the official documentation: 
Link: https://nodejs.org/api/process.html#process
*/

// Accessing the process object
console.log(typeof process); // Outputs: 'object' (process is an object)

// Uncomment the following line to see the entire process object
// console.log("process object: ", process);  // Uncomment for full exploration

/*
Process Object Properties:

1. .version: Contains the version of your installed Node.js.
Link: https://nodejs.org/api/process.html#processversion
*/
console.log(process.version); // Example output: v16.14.0 

/*
2. .release: Returns metadata for the current Node.js release.
For example, it contains the version and URL of the current release.
*/
console.log(process.release); // Displays the node version and URL links for the current release

/*
3. .platform: Identifies the operating system platform.
It returns values like 'darwin', 'freebsd', 'linux', 'sunos', 'win32' (Windows).
Link: https://nodejs.org/api/process.html#processplatform
*/
console.log(process.platform); // Example output: 'win32'

/*
4. .arch: Provides the CPU architecture for which the Node.js binary was compiled.
Possible values include: 'arm', 'arm64', 'ia32', 'mips', 'x64', etc.
Link: https://nodejs.org/api/process.html#processarch
*/
console.log(process.arch); // Example output: 'x64'

/*
5. .title: Returns the title of the process (e.g., terminal name).
This title can be customized or observed based on the environment.
*/
console.log(process.title); // Example output: 'Windows PowerShell'

/*
6. .pid: Returns the Process ID (PID) of the current process.
This unique ID is used to track and manage the process.
*/
console.log(process.pid); // Example output: 10108

/*
7. .argv: Returns command line arguments passed when the Node.js process was launched.
The first two arguments are typically the path to the node executable and the script file.
Link: https://nodejs.org/api/process.html#processargv
*/
console.log(process.argv);
/*
Example output:
[
  'C:\\YourFullPath\\node.exe',
  'D:\\YourFullPath\\node.js-start\\index2.js'
]
*/

/*
8. .report: The .report property is used to generate diagnostic reports for the current process.
This can help in troubleshooting Node.js applications.
*/
console.log(process.report); // Outputs the report object (may not show useful data directly)

/*
9. .env: Returns an object containing environment variables set when the process was started.
It can include system-level environment variables like PATH, NODE_ENV, etc.
Link: https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs
*/
console.log(process.env); // Outputs the environment variables object

// Sample environment variable properties:
console.log(process.env.COMPUTERNAME); // Outputs your computer hardware name
console.log(process.env.OS); // Example output: 'Windows_NT'
console.log(process.env.USERNAME); // Outputs your computer username

/*
The process object also has many methods for advanced tasks.
Here are a couple of important ones:
*/

// .cwd(): Returns the current working directory of the process.
// This is helpful for understanding the path context of the application.
console.log(process.cwd()); // Example output: 'D:\\YourFullPath\\node.js-start'

/*
Additional methods on the process object:
1. .exitCode: Can be used to set the exit code for the current process.
   - By default, Node.js will exit with a code of 0 unless you specify otherwise.
   - Link: https://nodejs.org/api/process.html#processexitcode

2. .exit(): A method to forcefully terminate the process with an exit code.
   - Link: https://nodejs.org/api/process.html#processexitcode

3. .on('exit'): This is an event listener that listens for the process termination.
   - Useful for cleanup actions before the process shuts down.
   - Link: https://nodejs.org/api/process.html#processexitcode
*/

// Example of using process.exitCode to set a custom exit code before terminating the process
process.exitCode = 1; // Custom exit code, usually indicates failure

// Example of listening to 'exit' event before the process exits
process.on('exit', () => {
  console.log('The process is exiting');
  // Perform cleanup actions here if needed
});