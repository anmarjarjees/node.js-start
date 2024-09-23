// Using Promises based solution to read file:
// Link: https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs#reading-files-with-nodejs
// Promises are asynchronous and non-blocking.
// Promises will simplify our code compared to callbacks.

// Importing only readFile from the promises namespace by using destructuring
// Accessing the promises API of the fs module:
const { readFile } = require('fs').promises;

/*
To recap, we can require the full fs module "promises" with all its built-in functions (methods):
const fs = require('node:fs/promises'); // This imports all promise-based methods.
OR:
const fs = require('promises'); // This will not work; the correct way is above.
*/

// The classical way that works with all Node.js versions:
async function getFile() {
    // Await the resolution of the readFile promise to get file contents.
    const myText = await readFile('./test.txt', 'utf-8');
    console.log("getFile() function:", myText); // Logs the content of test.txt.
}

/*
NOTE:
With recent versions of Node (version 14 and later),
we can use this function with top-level await,
which means we can skip the keyword "async" and just use "await" to resolve the promise:
const myFile = await readFile('./test.txt', 'utf-8');
This feature allows for more straightforward code in certain situations.
*/

// Calls the async function to read the file.
getFile();

/*
We can also add the try/catch block or if condition...
as we did before in case any error happens when reading the file.
Consider the logic below according to Node documentation (same page).
*/

// Calling the "fs" for promises:
const fs = require('node:fs/promises'); // Importing the promise-based fs module again for demonstration.

// Using the full structure with try/catch for error handling:
async function example() {
    try {
        // Await the reading of temp.txt
        const data = await fs.readFile('./temp.txt', { encoding: 'utf8' });
        console.log("example() function:", data); // Logs the content of temp.txt if successful.
    } catch (err) {
        // If there's an error, log it.
        console.log("Error reading temp.txt:", err);
    }
}

// Calls the example function to read the file
example();

// Notice that the following console statement will be printed first:
// This will run before the file read operations
console.log("\n\nTwo Examples of using Async/Await:");
console.log("**********************************\n");
