/*
IMPORTING PACKAGE(S) FROM ONLINE RESOURCES:
*******************************************
After learning how to import code from our own custom modules,
we need to learn how to import code from other online resources.
Yes, the same idea applies when we install packages for our Python application like Flask.

In Node.js, we can import code from the world via npm (Node Package Manager) as well.
*/

/*
The steps for installing a module:
**********************************

Step #1: Create and prepare package.json file
This document contains all you need to know about what's required in your package.json file. 
It must be actual JSON, not just a JavaScript object literal.
Link: https://nodejs.org/api/packages.html#packagejson-and-file-extensions
Link: https://docs.npmjs.com/cli/v8/configuring-npm/package-json
Link: https://docs.npmjs.com/cli/v6/commands/npm-init

Using the "y" flag for the default options
If you don't add it, Node.js will ask you some questions about your name, app, etc.
This will create a JSON package file in the root folder of the application without asking any questions:
> npm init -y

The command will create a JSON file named "package.json"
with the following default contents:
{
  "name": "node.js-start",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

This JSON file contains metadata about our application 
and the list of dependencies that we installed for our app.

Step #2: Installing the required package
In this tutorial, we will import (download/install) "Express"
a minimal web application framework written in JavaScript
and hosted within the Node.js runtime environment.
It is a back-end web application framework for Node.js, 
released as free and open-source software under the MIT License.

Link: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs
Link: https://expressjs.com/

> npm install express 

After running the command, the changes are:
- The "package.json" file has been modified by adding the new dependency "express":
  "dependencies": {
    "express": "^4.18.1"
  }
  This is important, similar to using a `requirements.txt` file in Python, so all the packages/dependencies can be called and installed at once on another machine.
- A new folder named "node_modules" (we don't modify the code inside this folder).
- A new JSON file named "package-lock.json."
*/

// Step #3: Import the package by name into our code file:
// Link: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#helloworld_express
const express = require('express');
const { readFile } = require('fs');

/*
After requiring the Express framework and saving it to the variable express,
we can start building our full-stack web app, so we have:
- A server (Node.js) that will live on a URL (HTTP://URL).
- When a request is made to this URL, the server will respond with some HTML.
*/

/*
Creating an instance of an Express app
- This instance (object) will help us create different URLs and endpoints
and help the user navigate through the browser.
- We define code to handle these requests.
*/
const app = express();

// app is an instance of express.

// Using the app.get() method to request some data from the browser
// No updating or modifying is involved with the .get() method

/*
The app.get() method specifies a callback function 
that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root.

.get(arg1, arg2)
arg1: the URL/path for the user to navigate to (like /about or /music/rock or...),
for the root URL (the home page) => /

arg2: the callback function, which handles the event (just a URL request).
We can use an anonymous function that takes two arguments (parameters).
These parameters are given to us by Express:
- request <=> By Express => User's incoming data
- response object <=> By Express => User's outgoing data

In this simple example, we don't have input from the user, like searching for something or authentication info.
*/
app.get("/", (request, response) => {
  // Write our code to handle this request
  // We need to have our simple HTML page ready
  // Reading/calling the HTML home page based on the root:
  readFile('./home.html', 'utf-8', (err, html) => {
    if (err) {
      // If there is an error, we can handle it by sending this response:
      response.status(500).send('Sorry, we cannot finish your request due to server issues');
      return; // Prevent further execution
    }
    // Using the response object to send the HTML file from the server to the client browser:
    response.send(html);
  });
});

// Finally, telling our Express app to start listening for incoming requests
// Using the .listen() method that takes
// arg1: defining a port, normally comes from a Node environment variable
/*
In the code below, we are passing the value of "process.env.PORT" if it can be accessed or available,
otherwise the default value of "3000" will be used.
The value of "process.env.PORT" will be undefined on your computer. 
Cloud hosts like Heroku, Google App, or Azure use the "PORT" environmental variable
to determine which port your server should listen to for routing to work properly.
*/
// arg2: arrow function to do the task when the port is available
app.listen(process.env.PORT || 3000, () => console.log(`Our application is ready and listening on http://localhost:3000`));

/*
Your application will run on your local machine: http://localhost:3000.
But using callback functions in a big application can lead to performance issues,
so it's better to use promises in future examples.
*/

// Link: https://expressjs.com/en/starter/hello-world.html
