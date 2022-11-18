// File System (fs) Continued:
// Continuing with the second way of calling and using only specific functions
/*
The "fs" module provides a lot of very useful functionality to access and interact with the file system.

There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it:

fs module general:
Link: https://nodejs.dev/learn/the-nodejs-fs-module

fs module read files:
Link: https://nodejs.dev/en/learn/reading-files-with-nodejs/

With import Way:
import { readFile } from 'fs';
*/

// requiring the full fs modules with all its built-in functions(methods)
const fs = require('fs');
console.log(fs); // long object with all its members ...

/*
We will also use:
- readFile() => asynchronous method => Asynchronously reads the entire contents of a file.
- readFileSync() => synchronous method
*/

// readFile() => asynchronous method
fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("\ntest.txt content :\n", data);
});

// readFileSync() => synchronous method
try {
    const data = fs.readFileSync('./temp.txt', 'utf8');
    console.log("\ntemp.txt content :\n", data);
} catch (err) {
    console.error(err);
}

/*
Notice that the text below "Learning about readFile and readFileSync"
will be printed before test.txt contents but not before temp.txt contents
*/
console.log("Learning about readFile and readFileSync");

/*
One final way to read from a file is using promise based solution
Promises are asynchronous and non-blocking.
it has much cleaner code when compared to callbacks, in the next file...
*/