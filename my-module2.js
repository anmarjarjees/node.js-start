// NOTE: This file is being used with "index7.html"
// Creating this file to serve/act as a module
// a module is code that we group together for the purposes of sharing and reuse.

/*
NOTE: 
To make the code of this file useful or accessed by others files,
we need to export them
*/

/*
If you want to export a complete object in one assignment 
instead of building it one property at a time, 
assign it to module.exports as shown below 
(you can also do this to make the root of the exports object a constructor or other function):

adding module.exports to reference the object that going to receive our code
module.exports is a property of the module object in node.js. module
This special object which is included in every JavaScript file in the node.js

so "module.exports" will tell node.js which part of code (objects, functions, varaibles) to be exported from the given/current file to become available to other files:
*/

console.log("The object module: ", module);
/*
 Module {
  id: '.',
  path: 'D:\\YourFullPath\\node.js-start',
  exports: {},
  filename: 'D:\\YourFullPath\\node.js-start\\my-module.js',
  loaded: false,
  children: [],
  paths: [
    'D:\\YourFullPath\\node.js-start\\node_modules',
    'D:\\YourFullPath\\node_modules',
    etc..
  ]
}
*/

// console.log("The object exports: ", exports); // The object exports: { }
// console.log("The object module.exports: ", module.exports); // The object module.exports: { }

// module.exports = attach/assign any thing to module.exports to be used by others files


// Attaching a literal object that can have multiple properties and methods
// In such case, we can use one module.exports syntax
// Link: https://nodejs.org/dist/latest-v16.x/docs/api/modules.html#moduleexports

// in this file "my-module2.js", we're exporting on thing that contains values (properties) and functions (methods)

// Below attaching a literal object that has two properties and one method
module.exports = {
  school: "ABC Advanced Learning",
  program: "Advanced Web Programming",
  year: 2022,
  finAvg: function (x, y) {
    return (x + y) / 2;
  },
  isPassed: function (x) {
    return x >= 60 ? true : false;
  }
}

/*
exports
The exports variable is available within a module's file-level scope, and is assigned the value of module.exports before the module is evaluated.

module.exports.hello = true; // Exported from require of module
exports = { hello: false };  // Not exported, only available in the module
*/