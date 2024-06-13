/* 
Serve multiple pages and allow users to navigate between them, 
we can modify the previous code to handle different routes for each page. 
*/
// Import the native Node module "HTTP" using require() (CommonJS):
const http = require('node:http');

// Call "readFile" from the "fs" module
const { readFile } = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// Create our CallBack function separately just to simplify the code structure:
function callBackFun(request, response) {

    // Set the Content-Type header to 'text/html'
    response.setHeader('Content-Type', 'text/html'); // will be used by default anyway

    // Default to home page
    let filePath = './index.html'; // Default to home page
    // we can also use this code:

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
    // Determine the file to serve based on the URL
    if (request.url === '/about') {
        filePath = './about.html';
    } else if (request.url === '/learn') {
        filePath = './learn.html';
    } else if (request.url === '/style.css') {
        filePath = './style.css'; // Serve styles.css for /styles.css request
        response.setHeader('Content-Type', 'text/css'); // Set Content-Type to 'text/css' for CSS file
    }
    else {
        filePath = './404.html'; // For unspecified URLs, serve a 404 page
    }

    // Read the appropriate file and send its content as the response
    readFile(filePath, (err, data) => {
        // If error throw the exception error 
        if (err) {
            console.error(`Error: ${err}`);
            response.statusCode = 500; // Internal Server Error
            // Customize the end() message:
            response.end('<h1>Internal Server Error</h1>');
        } else {
            response.statusCode = (filePath === './404.html') ? 404 : 200;
            response.end(data);
        }
    });
} // callBackFun()

const server = http.createServer(callBackFun);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
