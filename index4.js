// File System:
/*
The fs module:
**************
node.js has a built-in file system module called "fs"
> provides a lot of very useful functionality to access and interact with the file system.
> we can use "fs" to do the CRUD operation against files/folders system
> there is no need to install it. Being part of the Node.js core, it can be used by simply requiring it:
> fs module has many methods for manipulating folders/files in the system
> all the methods are asynchronous by default, but they can also work synchronously by appending Sync
> fs can do other things in a blocking or non-blocking way

Link: https://nodejs.org/en/learn/manipulating-files/nodejs-file-stats
Link: https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs
*/

// We have a text file named test.txt

/*
For this quick demo, we will learn how to read a file from the system:
- fs.readFile(): read the content of a file. Related: fs.read()
- fs.readFileSync(): the same as readFile() but with a synchronous way of coding

The simplest way to read a file in Node.js is to use the fs.readFile() method, 
passing it the file path, encoding and a callback function that will be called with the file data (and the error):
Alternatively, you can use the synchronous version fs.readFileSync():

The only two functions that we need to use for now from (fs) module are:
- readFile()
- readFileSync()

There are two different techniques/way of coding to access/use [require] these function in out current application:
Importing only the two functions from the file system module (fs):
- readFile
- readFileSync
*/

// **** The first way: 
/*
Creating two constant variables / functions: 
> readFile
> readFileSync 
to requiring these two (fs) functions "readFile" and "readFileSync"
By using "Object Destructing" 
(Please refer to my repo "ECMAScript6" for more clarification)
Link: https://github.com/anmarjarjees/ECMAScript6/blob/main/Part2-Arrays-Methods/02.destructuring.html
In such case we can only use or have access to only these two functions: readFile() and readFileSync()
and yes they have to be the same name exactly as the original functions in the "fs" module
*/
const { readFile, readFileSync } = require('fs');
console.log(readFile); // [Function: readFile]
console.log(readFileSync); // [Function: readFileSync]

// **** The second way: 
// requiring the full fs modules with all its built-in functions(methods)
const fs = require('fs');
console.log(fs); // long object with all its members ...
// We will not use "fs" object in this file, later...


/*
The first difference between the two ways above is: What to use
- First Way: we can import two functions which are the only functions that we need to use
- Second Way: will give us all the functions even if we need to use only two

The second difference between the two ways above is: How can we use them
- First Way: calling the two functions immediately
Example:
const data1 = readFileSync('FileName', 'Encoding');
const data2 = readFile('FileName', 'Encoding');

- Second Way: calling the module object "fs" then we can access the two methods:
Example:
const data1 = fs.readFileSync('FileName', 'Encoding');
const data2 = fs.readFile('FileName', 'Encoding');
// OR access any other function:
const data2 = fs.anotherMethod(...);

We will practice both to clarify the idea:
*/

/*
Blocking vs Non-Blocking
Link: Link: https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/
Any function that ends with "Sync" it means "blocking"
sync <===> blocking
which means this function like in our current example "readFileSync" 
needs to finish its work/job/duty before any other code can run 

Link: https://nodejs.org/en/learn/asynchronous-work/overview-of-blocking-vs-non-blocking#blocking
*/

// Starting with the first way of calling and using only specific functions
// Read the file: readFileSync(Path, Encoding)
// NOTE: Synchronously reads the entire contents of a file.
const txt = readFileSync('./test.txt', 'utf-8'); // passing the path, the encoding


console.log("\ntest.txt content :\n", txt); // Hello, there! We are working on node.js!...
// Reading a file can take a long time in real situation when we have huge file

// so the console code below will not be executed before finishing reading the file
console.log("\nYou will read me after loading your file");

// Let's try the same function "readFileSync" with try/catch block in case if the operations fails:
// So we can catch the error:
/*
With try/catch block:
catch will catch the error and display the error message
and the reset of the application coe will continue to run

without try/catch, JS will throw the error message and the application will stop from running

It's considered a good coding practice to wrap our code with try/catch block
*/
try {
    // You can try to change the file name to test the catch() block
    const quote = readFileSync('./temp.txt', 'utf-8');
    console.log("\ntemp.txt content :\n", quote); // the text content...
} catch (err) {
    console.error("This Error: ", err);
}

console.log("****************************************************************");
/*
Now we can make our code non-blocking (working asynchronously)
by just using readFile() instead of readFileSync();

readFile(arg1, arg2, arg3)
arg1 and arg2 are the same arguments as with readFileSync()
arg3 is a callback function that is called after reading of a file
This function accepts two arguments and having the access to them:
    - First Argument: error object if the operation fails
    - Second Argument: the content of the file when operation succeeds

So the rest of the code will be executed first 
then the callback function when the file is ready
*/
// NOTE: Asynchronously reads the entire contents of a file.
readFile('./test.txt', 'utf-8', (err, data) => {
    // If error throw the exception error 
    if (err) throw err;
    // If no errors => Display the file content
    console.log("\ntest.txt content :\n", data);
    /*
    NOTE: if there is no such file, node.js will output "undefined"
    as we haven't write the code if there is an error yet
    */
});

console.log("You will read me without the need of waiting for loading your file, even before :-)");

readFile('./temp.txt', 'utf-8', (err, data) => {
    // Display the file content
    console.log("\ntemp.txt content :\n", data);
    /*
    NOTE: if there is no such file, node.js will output "undefined"
    as we haven't write the code if there is an error yet
    */
});

// Now we should enhance our code by taking the advantage of the "err" arguments with if condition:
// for testing the if error => I put wrong name "template.txt"
readFile('./template.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Sorry the file cannot be read: ", err);
        return;
    }
    console.log("\ntemp.txt content :\n", data);
});