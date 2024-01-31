// Using Promises based solution to read file:
// Link: https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs#reading-files-with-nodejs
// Promises are asynchronous and non-blocking
// Promises will simplify our code compared to callbacks 
// importing only readFile from promises namespace by using destructing 
const { readFile } = require('fs').promises;

/*
To recap we can require the full fs modules "promises" with all its built-in functions(methods)
const fs = require('node:fs/promises');
OR:
const fs = require('promises');
*/
// The classical way that work with all node.js versions:
async function getFile() {
    const myText = await readFile('./test.txt', 'utf-8');
    console.log("getFile() function:", myText);
}

/*
NOTE:
With high/recent versions of node (version 14 and later), 
we can use this function with top level await,
which means we can skip the keyword "sync"
and just use "await" to resolve the promise:
const myFile = await readFile('./test.txt', 'utf-8');
*/

getFile();


/*
We can also add the try/catch or if condition... 
as we did before in case if any error happens when reading file

Consider the logic below according to Node documentation (same page)
*/

// calling the "fs" for promises:
const fs = require('node:fs/promises');

// using the full structure with try/catch:
async function example() {
    try {
        const data = await fs.readFile('./temp.txt', { encoding: 'utf8' });
        console.log("example() function:", data);
    } catch (err) {
        console.log(err);
    }
}
example();

// Notice that the following console statement will be printed first:
console.log("\n\nTwo Examples of using Async/Await:");
console.log("**********************************\n");