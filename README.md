# node.js-start
![Node.JS Logo](/images/nodejs-logo.jpg)

Just a very quick start and a short introduction to Node.js as a full package from coding with Node.js and installing express for loading HTML pages.

# About Node.JS
Node.js is an open-source, cross-platform JavaScript back-end runtime environment that allows developers to build server-side and network applications with JavaScript.
Node.js help us run JavaScript code outside a web browser. Node.js allows you to run JavaScript on the server. The runtime is intended for use outside of a browser context (i.e. running directly on a computer or server OS). As such, the environment omits browser-specific JavaScript APIs and adds support for more traditional OS APIs including HTTP and file system libraries.

# Node.JS History
- was written initially by Ryan Dahl in 2009
- In January 2010, a package manager was introduced for the Node.js environment called npm (Node Package Manager). NPM is designed to make it easy for programmers to publish and share their code with others and also to simplify the installation, updating, and uninstallation of packages
- In July 2011, the first Node.js build supporting Windows was released
- In February 2015, the intent to form a neutral Node.js Foundation was announced. This foundation involves many large companies like GoDaddy, IBM, LinkedIn, Microsoft, Netflix, PayPal, Walmart, Yahoo!, and Amazon Web Services

# Node.js Package Manager (npm)
npm is bundled with Node.js. It runs on the command line as the command npm. It is a package manager that downloads packages into a node_modules folder. You call the downloaded packages through const libraryModule = require("libraryname").

Mozilla Developer Network (MDN) [Node.JS Definition](https://developer.mozilla.org/en-US/docs/Glossary/Node.js)

Node Package Manager (npm) [npm Docs](https://docs.npmjs.com/)

# NodeJS Processing
- A user/client visits an HTTP://URL website on the browser (internet)
- This URL is pointing (linked) to a host server that runs Node.js
- When an HTTP request is received, we can use Node.js to handle this request
- Node.js will read the HTML file(s) from the server's file system
- Then Node.js will send an HTTP response (with an HTML file) to the client
- The client then can view the HTML file using his/her browser

# Installing Node.js
Two different ways to install Node.js
- Through the official website of Node.js: https://nodejs.org/en/. This will install the entire package of Node.js. For any new update, you will need to download the new version and install it again.

- Through using nvm. NVM stands for "Node Version Manager" which is intended to install/manage/update the Node.js. this helps you to install different versions of Node.js in your system and use or activate the version you want to use for each application, or simply update your current Node.js version without the need to re-install it again. For installing Node.js through "nvm", you will need to download the specific version of nvm based on your operating system:

  - nvm package for Mac/Linux => ["NVM GitHub repo for Mac"](https://github.com/nvm-sh/nvm)
  - nvm package for Windows => ["NVM GitHub repo for Windows"](https://github.com/coreybutler/nvm-windows)

After installing the nvm package, you can:
- Run the install command for Node.js to specify the version you want to install:
    > nvm install x.x.x
- You can specify which version you want to use:
    > nvm use x.x.x

When you go Node.js website, you will see two buttons to choose from.
- Current: for the most recent updated version with all the new features
- LTS: for Long Term Support. LTS version is commonly recommended for most users as all its features have been already tested and used for a while

Node.JS and NPM will be installed in your machine, and you can check:
- for node version
    > node -v
    OR
    > node --version

- for npm version
    > npm -v

    OR
    > npm --version

# Running Node.js
- For quick learning and simple practice, you can use REPL (Read Eval Print Loop): Also termed an interactive top-level or language shell. 

It is a simple interactive computer programming environment that takes single user inputs, executes them, and returns the result to the user; a program written in a REPL environment is executed piecewise.:
  - Read - Reads user's input, parses the input into JavaScript data structure, and stores
  it in memory.
  - Eval - Takes and evaluates the data structure.
  - Print - Prints the result.
  - Loop - Loops the above command until the user presses ctrl-c twice.
  
  You can run REPL (the platform to write JS and Node.js code in the command line window):
    - Open your CMD/Terminal window, PowerShell, Git Bach, or ...
    - Then type "node" and enter 
    - You will be in Node.js.js environment where you can start writing your JS code
    - Press CTRL+C twice OR CTRL+D to quit the Node.js mode
- For building full applications, you use your favourite code editor, Yes, VScode :-)

# Node.js Globals
- In the browser, the global object is "window"
  > window.alert("testing");
  > window.console.log("testing");
- In Node.js, the global object is called "global"
  > global.console.log("testing");

[Node.JS API documentation](https://nodejs.org/api/)

# Working with Modules: ECMAScript modules & CommonJS modules
Node.js has two module systems: CommonJS modules and ECMAScript modules.
Link: https://nodejs.org/api/modules.html#modules-commonjs-modules
Link: https://nodejs.org/api/esm.html#modules-ecmascript-modules

## ECMAScript modules:
Are the official standard format to package JavaScript code 
for reuse in the browser or other runtimes. 
Modules are defined using a variety of import and export statements.

import()/export()
import() for importing file code and export() for exporting file code
import() & export() statements are used to refer to an ES module. 

### Example: Using two files "addTwo.mjs" and "app.mjs":
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

You can check this MDN [.mjs versus .js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#aside_%E2%80%94_.mjs_versus_.js)

## CommonJS modules:
Are the original way to package JavaScript code for Node.js. 
In Node.js module system, each file is treated as a separate module. For example, consider a file named foo.js:

## Modules: CommonJS modules:
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
const tools = require('./helper.js');

now the varaible "tools" became an object to give us the access to all the function inside helpers.js
so for example, if helpers.js has these functions: fun1  and fun2
we can access them using:
tools.fun1();
tools.fun2();

## require() and import()
One of the major differences between require() and import() are:
- require() can be called from anywhere inside the program 
whereas import() cannot be called conditionally, it always runs at the beginning of the file.
- To use the require() statement, a module must be saved with .js extension 
as opposed to .mjs when the import() statement is used.
- ES modules are the standard for JavaScript and it's fully supported by all the browsers (was introduced in ES6-2015) and the current versions of node.js,
while CommonJS is the default in Node.js server-side (not for the browsers), 
so it's supported by all versions of node.js since version 14


You can visit the [MDN JavaScript Module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) to learn more about this concept

This is a glimpse about things that will be covered in details later!

# Start Learning
To go through the learning process step by step, you will need to read the files in the following sequence to understand the key points of working with Node.js:
- index1.js
- index2.js
- index3.js
- index4.js
- index5.js
- index6.js
- index7.js
- index8.js
- index.js => is the final file to start the application

NOTES:
- To practice the final two files: index8.js and index.js you need to install the express JS framework, and the steps are written in the comment inside the files
- the folder "node-modules" have been excluded from the repo as its just contains files for the package "express" that you can install

References:
- https://nodejs.dev/en/learn/
- https://www.pluralsight.com/blog/
- https://en.wikibooks.org/wiki/Main_Page
- https://nodejs.org/en/
- https://developer.mozilla.org/en-US/docs/Glossary
- https://stackoverflow.com/questions/
- https://www.javascripttutorial.net/
- https://www.freecodecamp.org/news/
- https://reflectoring.io/
- Tech Talk Youtube channel