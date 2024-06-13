/*
Loading HTML page in the browser with Node.js server
Complete Code Example From:
https://nodejs.org/en/learn/getting-started/introduction-to-nodejs#an-example-nodejs-application
*/

// Import the native node module "HTTP" using require() "CommonJS":
const http = require('node:http');

// Calling "readFile" from the "fs" module
const { readFile } = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// Create our CallBack function separately just to simplify the code structure:
function callBackFun(request, response) {
    // console.log(response);

    /*
   With Node.js, we can use the "header" to inform the Node.js server about some details when we request 
   a response from Node.js. In other words, what type of data we want to see in the response. Types of responses could be: plain text, HTML content, JSON objects, cookies, etc.

   Send/set the type of response 
   that we need to receive from the server, with details about the request such as what type of data the client, user, or request wants in the response.
   The header tells the server details about the request, such as what type of data the client, user, or request wants in the response.

   We can also use "writeHead()" which involves more options:
   Syntax: response.writeHead(statusCode[, statusMessage][, headers])
    > The status code is a 3-digit HTTP status code, like 404. 
    > The last argument, headers, are the response headers. 
    > Optionally, one can give a human-readable statusMessage as the second argument.
    Link: https://nodejs.org/api/http.html#responsewriteheadstatuscode-statusmessage-headers
  */
    // We set the Content-Type header:
    // using => 'text/plain' => will display the html content as literal text
    // using => 'text/html' => will render the html elements  
    // 'contentType' is 'text/html'
    response.setHeader('Content-Type', 'text/html'); // will be used by default anyway
    /* 
    readFile() function:
    Returns: <Promise> Fulfills upon a successful read with the contents of the file.
    Link: https://nodejs.org/api/fs.html#filehandlereadfileoptions
    >  readFile('./index.html', (err, data) => {})
    >  readFile('./index.html', 'utf-8', (err, data) => {})
    >  readFile('./index.html', null, (err, data) => {})
    */
    readFile('./home.html', (err, data) => {
        // If error throw the exception error 
        if (err) {
            // we can throw an error
            // throw err;
            console.error(`Error: ${err}`);
            response.statusCode = 500; // Internal Server Error
            // Link: https://nodejs.org/api/http.html#responsestatuscode
            /* 
            - 400 => Bad Request
            This status code indicates that the server cannot process the request due to a client error
            
            - 500 => Internal Server Error
            This status code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request. It is typically used for general server-side errors. 
            If the "readFile()" function fails, 
            it usually indicates a server-side issue: file not found, permissions issue, etc...
            */
            // response.end();
        } else {
            response.write(data);
            // response.end();
        }

        // combine the two statement to only one at the end:
        response.end();
        /*
       This method is required to finish/terminate our request after Node.js sends us the required response. It signals to the server that all of the response headers and body have been sent; that the server should consider this message complete. The method, response.end(), MUST be called on each response.

       If we don't use this method, the server will still keep waiting for another request from the client, as you will see the browser URL still shows the loading.
       Link: https://nodejs.org/api/http.html#responseenddata-encoding-callback
       */
    });
} // callBackFun()
/*
1. The "Server" object called "server" returned by "createServer()" is an EventEmitter. 
So below is just shorthand for creating a server object and then adding the listener later:

Code Sample From Node:
*********************
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

OR: Create the Server:
*********************
Any Node.js web server application will at some point have to create a web server object. 
This is done by using "createServer".
The createServer() method of http creates a new HTTP server and returns it.
*/

/*
2. In order to actually serve requests, the listen method needs to be called on the server object. 
In most cases, all you'll need to pass to listen is the port number you want the server to listen on. There are some other options too, so consult the documentation.
*/
http.createServer(callBackFun).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});




