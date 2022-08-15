/*
After learning how to import code from our own custom modules,
we need to learn how to import code form other online resources?
Yes, the same idea when we install packages for our python application like flask

In node.js we can import code from the world via npm (Node Package Manager)

NPM: is a package manager for the JavaScript programming language maintained by npm, Inc.
npm is the default package manager for the JavaScript runtime environment Node.js.

npm, Inc., is a company founded in 2014. It was acquired by GitHub, a subsidiary of Microsoft, in 2020
was acquired by GitHub then recently Microsoft

Notice that when you install node.js it install npm also, so as we use "pip" to install Python packages, npm is a tool that we can use to install a remote packages for our JS applications to be used in our own code
*/

/*
The steps for installing a module:
**********************************

Step#1: create and prepare package.json file
This document is all you need to know about what's required in your package.json file. 
It must be actual JSON, not just a JavaScript object literal.
Link: https://nodejs.dev/learn/the-package-json-guide
Link: https://docs.npmjs.com/cli/v8/configuring-npm/package-json
Link: https://docs.npmjs.com/cli/v6/commands/npm-init

using "y" flag for the default options
if you don't add it, node.js will ask you some questions about your name, app, etc..
This will create a JSON package file in the root folder of the application without having it ask any questions:
> npm init -y

The command will create a json file named "package.json"
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

This JSON file contains meta data about our application 
and the list dependencies that we installed for our app

Step#2: installing the required package
With node.js in this tutorial, we will import (download/install) "Express"
installing express which a minimal web application framework written in JavaScript
and hosted within the Node.js runtime environment.
So it is a back end web application framework for Node.js, released as free and open-source software under the MIT License.

Link: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs

Link: https://expressjs.com/

>  npm install express 

After running the command, changes are:
- the "package.json" file has been changed by adding the new dependency "express":
  "dependencies": {
    "express": "^4.18.1"
  }

  This important like using requirements.txt file in Python so all the packages/dependencies can called and installed at once in other machine
- a new folder named "node_modules" (We don't modify the code inside this folder)
- a new json file named "package-lock.json"
*/

// Step#3: import the package by name into our code file:
// Link: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#helloworld_express
const express = require('express');
const { readFile } = require('fs');

/*
After requiring the express framework and save it to variable express,
we can start building our full-stack web app, so we have:
- A server (node.js) that will live on a URL (HTTP://URL)
- When makes a request to this URL, The server will response with some HTML
*/

/*
Creating an instance of an express app
- this instance (object) will help us to create different urls and endpoints
and this will help the user to navigate through the browser
- we define code to handle these requests
*/
const app = express();

// app is an instance of express.

// testing:
// console.log(app);

// using app as we used with flask python framework

// using get() method to request some data from the browser
// so no updating or modifying are involved with .get() method

/*
The app.get() method specifies a callback function 
that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root.

.get(arg1, arg2)
arg1: the url/path for the user to navigate to (like /about or /music/rock or...)
for the root url (the home page) => /

arg2: the callback function, it's like an event for every request to this url
so this function will handle the event (which is just a url request)
we can use anonymous function that takes two arguments (parameters)
These parameters are given to us by express
- request <=> By Express => User's incoming data
- response object <=> By Express => User's Outgoing data

In this simple example, we don't have an input from the user, like searching for something, authentication info
*/
app.get("/", (request, response) => {
  // Write our code to handle this request
  // We need to have our simple HTML page ready
  // reading/calling the html home page based on the root:
  readFile('./home.html', 'utf-8', (err, html) => {
    if (err) {
      // if there is an error, we can handle it by sending this response:
      response.status(500).send('Sorry, we cannot finish your request due to server issues');
      /*
      using the status code of 500 => a server error
      */
    }
    // using the response object to send the html file from the server to the client browser:
    response.send(html);
  });
});

// Finally telling our express app to start listening to the incoming requests
// using .listen() method that takes
// arg1: defining a port, normally comes from a node environment variable
/*
In the code below, we are passing the value of "process.env.PORT" if it can be accessed or available,
otherwise the default value of "3000" will be used.
The value of "process.env.PORT" will be undefined on your computer. 
Cloud hosts like Heroku, Google App, or Azure use the "PORT" environmental variable.object
to determine which port your server should listen to for the routing to work properly. 
*/
// arg2: arrow function to do the task when the port is available
app.listen(process.env.PORT || 3000, () => console.log(`Our application is ready and listening on http://localhost:3000`));

/*
Your application will run on your local machine: http://localhost:3000
But using callback function in a big application can lead to performance issues,
so it's better to use promises than using callback in the next example
*/

// Link: https://expressjs.com/en/starter/hello-world.html