// File System:
/*
The fs module:
**************
Node.js has a built-in file system module called "fs".
> Provides a lot of very useful functionality to access and interact with the file system.
> We can use "fs" to perform CRUD operations on files/folders.
> There is no need to install it; being part of Node.js core, it can be used by simply requiring it.
> The fs module has many methods for manipulating folders/files in the system.
> All the methods are asynchronous by default, but they can also work synchronously by appending Sync.
> fs can operate in a blocking or non-blocking way.

Link: https://nodejs.org/en/learn/manipulating-files/nodejs-file-stats
Link: https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs
*/

// We have a text file named test.txt

/*
For this quick demo, we will learn how to read a file from the system:
- fs.readFile(): Reads the content of a file. Related: fs.read().
- fs.readFileSync(): Same as readFile() but operates synchronously.

The simplest way to read a file in Node.js is to use the fs.readFile() method, 
passing it the file path, encoding, and a callback function that will be called with the file data (and the error).
Alternatively, you can use the synchronous version, fs.readFileSync().

The only two functions we will use from the fs module for now are:
- readFile
- readFileSync
*/

// **** The first way: 
/*
Creating two constant variables/functions: 
> readFile
> readFileSync 
to require these two fs functions using "Object Destructuring".
(Please refer to my repo "ECMAScript6" for more clarification)
Link: https://github.com/anmarjarjees/ECMAScript6/blob/main/Part2-Arrays-Methods/02.destructuring.html
In this case, we can only use or have access to these two functions: readFile() and readFileSync().
They must be named exactly as the original functions in the fs module.
*/
const { readFile, readFileSync } = require('fs');
console.log(readFile); // [Function: readFile]
console.log(readFileSync); // [Function: readFileSync]

// **** The second way: 
// Requiring the full fs module with all its built-in functions (methods).
const fs = require('fs');
console.log(fs); // Logs the full fs object with all its members...

/*
The first difference between the two ways above is: What to use
- First Way: we can import only the functions we need.
- Second Way: we get access to all functions, even those we don't use.

The second difference between the two ways above is: How we can use them
- First Way: calling the two functions immediately.
Example:
const data1 = readFileSync('FileName', 'Encoding');
const data2 = readFile('FileName', 'Encoding');

- Second Way: calling the fs object to access the two methods.
Example:
const data1 = fs.readFileSync('FileName', 'Encoding');
const data2 = fs.readFile('FileName', 'Encoding');
// OR access any other function:
const data2 = fs.anotherMethod(...);

We will practice both to clarify the idea:
*/

/*
Blocking vs Non-Blocking
Link: https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/
Any function that ends with "Sync" means "blocking".
sync <===> blocking
This means that the function, like "readFileSync", needs to finish its work before any other code can run.

Link: https://nodejs.org/en/learn/asynchronous-work/overview-of-blocking-vs-non-blocking#blocking
*/

// Starting with the first way of calling and using specific functions
// Read the file: readFileSync(Path, Encoding)
// NOTE: Synchronously reads the entire contents of a file.
const txt = readFileSync('./test.txt', 'utf-8'); // Passing the path and encoding

console.log("\ntest.txt content:\n", txt); // Outputs the content of test.txt
// Reading a file can take a long time in real situations with large files.

// So the console code below will not execute until the file is finished reading.
console.log("\nYou will read me after loading your file using 'readFileSync' function");

// Let's try the same function "readFileSync" with a try/catch block to handle potential errors:
// So we can catch any error that occurs during the file read operation.
/*
With try/catch block:
The catch block will catch the error and display an error message.
The rest of the application code will continue to run.

It's considered a good coding practice to wrap our code with a try/catch block.
*/

// Link: https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs#reading-files-with-nodejs
try {
    // You can try to change the file name to test the catch() block.
    const quote = readFileSync('./temp.txt', 'utf-8');
    console.log("\ntemp.txt content:\n", quote); // The text content...
} catch (err) {
    console.error("This Error: ", err); // Outputs the error if reading fails.
}

console.log("****************************************************************");
/*
Now we can make our code non-blocking (working asynchronously)
by just using readFile() instead of readFileSync().

readFile(arg1, arg2, arg3)
arg1 and arg2 are the same arguments as with readFileSync().
arg3 is a callback function that is called after reading the file.
This function accepts two arguments:
    - First Argument: error object if the operation fails.
    - Second Argument: the content of the file when the operation succeeds.

So the rest of the code will be executed first 
then the callback function when the file is ready.
*/

// NOTE: Asynchronously reads the entire contents of a file.
readFile('./test.txt', 'utf-8', (err, data) => {
    // If there is an error, we log the error message.
    if (err) {
        console.error("Sorry, the file cannot be read: ", err);
        return; // Exit the callback to prevent further execution.
    }
    // If no errors => Display the file content.
    // NOTE: **With "readFile", this console.log statement will run "SECOND":**
    console.log("\ntest.txt content:\n", data);
    /*
    NOTE: If there is no such file, the callback will be invoked with an error, 
    and 'data' will be undefined.
    */
});

// NOTE: **With "readFile", this console.log statement will run "FIRST":**
console.log("You will read me without the need of waiting for loading your file, even before :-)");

// For testing error handling, we put a wrong file name "template.txt".
readFile('./template.txt', 'utf-8', (err, data) => {
    // If there is an error, log the error message and terminate the function.
    if (err) {
        console.error("Sorry, the file cannot be read: ", err);
        return; // Prevent further execution in case of an error.
    }
    console.log("\ntemp.txt content:\n", data); // Log the content if successful.
});