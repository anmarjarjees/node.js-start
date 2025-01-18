/* 
Serve multiple pages and allow users to navigate between them, 
we can modify the previous code to handle different routes for each page. 
*/

// Import the native Node module "HTTP" using require() (CommonJS):
const http = require('node:http'); // Import the HTTP module to create a web server

// Call "readFile" from the "fs" module
const { readFile } = require('fs'); // Import readFile function from the fs module to read files

const hostname = '127.0.0.1'; // Localhost IP address for testing
const port = 3000; // Port number on which the server will listen

// Create our callback function separately just to simplify the code structure:
function callBackFun(request, response) {

    // Set the Content-Type header to 'text/html'
    response.setHeader('Content-Type', 'text/html'); // Default content type is set to HTML.

    // Default to home page
    let filePath = './index.html'; // Default file path for the home page

    // Optionally, we can use this code structure:
    /* 
    let filePath;
    if (request.url === '/' || request.url === '/home') {
        filePath = './index.html';
    } else if (request.url === '/about') {
        filePath = './about.html';
    } else if (request.url === '/contact') {
        filePath = './contact.html';
    } else {
        filePath = './404.html'; // For unspecified URLs, serve a 404 page
    }
    */

    // for testing:
    // Log the requested URL and determined file path
    console.log(`Request URL: ${request.url}, Serving file: ${filePath}`);

    // Check the request.url to determine which page to serve
    // Determine the file to serve based on the URL
    if (request.url === '/about') {
        // Set filePath to about page:
        filePath = './about.html';
    } else if (request.url === '/learn') {
        // Set filePath to learn page:
        filePath = './learn.html';
    } else if (request.url === '/style.css') {
        filePath = './style.css'; // Serve styles.css for /styles.css request
        // Set Content-Type to 'text/css' for CSS files:
        response.setHeader('Content-Type', 'text/css');
    } else {
        filePath = './404.html'; // For unspecified URLs, serve a 404 page
    }

    // Read the appropriate file and send its content as the response
    readFile(filePath, (err, data) => {
        // If error throw the exception error 
        if (err) {
            console.error(`Error: ${err}`); // Log the error for debugging
            response.statusCode = 500; // Internal Server Error
            // Customize the end() message:
            response.end('<h1>Internal Server Error</h1>'); // Provide user-friendly error message
        } else {
            // Set status code based on file:
            response.statusCode = (filePath === './404.html') ? 404 : 200;
            response.end(data); // Send the file content as the response.
        }
    });
} // callBackFun()

// Create the server using the callback function
const server = http.createServer(callBackFun);

// Start listening for incoming requests
server.listen(port, hostname, () => {
    // Log message indicating the server is running:
    console.log(`Server URL: http://${hostname}:${port}/`);
});