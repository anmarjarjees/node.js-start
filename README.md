# node.js-start
![Node.JS Logo](/images/nodejs-logo.jpg)

Just a very quick start and short introduction of node.js as full package from coding with node and installing express for loading html pages.

# About Node.JS
Node.js is a an open-source, cross-platform JavaScript back-end runtime environment that allows developers to build server-side and network applications with JavaScript.
Node.js help us as run JavaScript code outside a web browser. Node.js allows you to run JavaScript on the server. The runtime is intended for use outside of a browser context (i.e. running directly on a computer or server OS). As such, the environment omits browser-specific JavaScript APIs and adds support for more traditional OS APIs including HTTP and file system libraries.

# Node.JS History
- was written initially by Ryan Dahl in 2009
- In January 2010, a package manager was introduced for the Node.js environment called npm (Node Package Manager). NPM is designed to make it easy for programmers to publish and share their code with others and also to simplify installation, updating, and uninstallation of packages
- July 2011, the first Node.js build supporting Windows was released
- In February 2015, the intent to form a neutral Node.js Foundation was announced. This foundation involves many large companies like: GoDaddy, IBM, LinkedIn, Microsoft, Netflix, PayPal, Walmart, Yahoo!, and Amazon Web Services

# Node Package Manager (npm)
npm is bundled with Node.js. It runs on the command line as the command npm. It is a package manager that downloads packages into a node_modules folder. You call the downloaded packages through const libraryModule = require("libraryname").

Mozilla Developer Network (MDN) [Node.JS Definition](https://developer.mozilla.org/en-US/docs/Glossary/Node.js)

Node Package Manager (npm) [npm Docs](https://docs.npmjs.com/)

# NodeJS Processing
- A uer/client visits an HTTP://URL website on the browser (internet)
- This URL is pointing (linked) to a host server that runs node.js
- When HTTP request is received, we can use node.js to handle this request
- node.js will read the HTML file(s) from th server's file system
- Then node.js will send an HTTP response (with HTML file) to the client
- The client then can view the HTML file using his/her browser

# Installing Node.js
Two different ways to install Node.js
- Through the official website of Node.js: https://nodejs.org/en/. This will install the entire package of node. For any new update you will need to download the new version and install it again.
- Through using nvm. NVM stands for "Node Version Manager" which is intended to install/manage/update the node.js. this helps you to install different versions of node in your system and use or active the version you want to use for each application, or simply update your current nodejs version without the need to re-install it again. For installing node.js through "nvm", you will need to download the specific version of nvm based on your operating system:

  - nvm package for Mac/Linux => ["NVM GitHub repo for Mac"](https://github.com/nvm-sh/nvm)
  - nvm package for Windows => ["NVM GitHub repo for Windows"](https://github.com/coreybutler/nvm-windows)

After installing nvm package, you can:
- Run the install command for node to specify the version you want to install:
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
- For quick learning and simple practice, you can use REPL (Read Eval Print Loop): Also termed an interactive top level or language shell. 
  It is a simple interactive computer programming environment that takes single user inputs, executes them, and returns the result to the user; a program written in a REPL environment is executed piecewise.:
    - Read - Reads user's input, parses the input into JavaScript data-structure, and stores
    in memory.
    - Eval - Takes and evaluates the data structure.
    - Print - Prints the result.
    - Loop - Loops the above command until the user presses ctrl-c twice.
  
  You can run REPL (the platform to write JS and node code in command line window):
    - Open your CMD/Terminal window, powershell, Git Bach, or ...
    - Then type "node" and enter 
    - You will be in nodejs environment where you can start writing your JS code
    - Press CTRL+C twice OR CTRL+D to quit the node mode
- For building full applications, you use your favourite code editor, Yes, VScode :-)

# Node Globals
- In the browser, the global object is "window"
- In node.js, the global object is called "global"

[Node.JS API documentation](https://nodejs.org/api/)

# Start Learning
To go through the learning process step by step, you will need to read the files in the following sequence to understand the key points of working with node.js:
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
- To practice the final two files: index8.js and index.js you need to install express JS framework, and the steps are written in the comment inside the files
- the folder "node-modules" have been excluded from the repo as its just contains files for the package "express" that you can install