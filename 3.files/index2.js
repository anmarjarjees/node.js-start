// File System (fs) Continued:
// Continuing with the second way of calling and using only specific functions
/*
The "fs" module provides a lot of very useful functionality to access and interact with the file system.

There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it:

fs module general:
Link: https://nodejs.org/api/fs.html#file-system

fs module read files:
Link: https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs

With import Way:
import { readFile } from 'fs'; // This is ES6 syntax; use it if your environment supports ES modules.
*/

// Requiring the full fs module with all its built-in functions (methods)
const fs = require('fs');
console.log(fs); // Logs the full fs object, displaying all its available methods...

/*
We will also use:
- readFile() => asynchronous method => Asynchronously reads the entire contents of a file.
- readFileSync() => synchronous method => Reads the entire contents of a file, blocking the event loop until complete.
*/

// readFile() => asynchronous method
fs.readFile('./test.txt', 'utf8', (err, data) => {
    // If there's an error, log it and exit the callback function.
    if (err) {
        console.error("Error reading test.txt:", err);
        return; // Exit early if an error occurs.
    }
    // If successful, log the contents of the file.
    console.log("\ntest.txt content:\n", data);
});

// readFileSync() => synchronous method
try {
    // Blocking call to read the file synchronously"
    const data = fs.readFileSync('./temp.txt', 'utf8');
    console.log("\ntemp.txt content:\n", data); // Log the contents of temp.txt.
} catch (err) {
    // If an error occurs while reading the file, log it:
    console.error("Error reading temp.txt:", err);
}

/*
Notice that the text below "Learning about readFile and readFileSync"
will be printed before the test.txt contents but not before the temp.txt contents.
This illustrates the difference between asynchronous (readFile) and synchronous (readFileSync) methods.
*/
console.log("Learning about readFile and readFileSync");

/*
One final way to read from a file is using a promise-based solution.
Promises are asynchronous and non-blocking.
Using promises results in much cleaner code compared to callbacks. We will explore this in the next file...
*/