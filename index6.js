// Using Promises based solution to read file:
// Promises are asynchronous and non-blocking
// Promises will simplify our code compared to callbacks 
// importing only readFile from promises namespace by using destructing 
const { readFile } = require('fs').promises;

// The classical way that work with all node.js versions:
async function getFile() {
    const myText = await readFile('./test.txt', 'utf-8');
    console.log(myText);
}

/*
NOTE:
With high/recent versions of node (version 14 and later), 
we can use this function with top level await,
which means we can skip the keyword "sync" and just use "await" to resolve the promise:
const myFile = await readFile('./test.txt', 'utf-8');
*/

getFile();

/*
We can also add the try/catch or if condition... as we did before in case if any error happens when reading file
*/