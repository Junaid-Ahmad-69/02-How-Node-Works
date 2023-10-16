// What is require function and where he got the require file ?
// ok require is a function when user run the server it resolved the file or verify the file from node.js and wrapped the file in IIFE function which
// is Immediately Invoked Function Expression which contains the parameter of (require, __dirname, module, __filename and exports) and then execute the
// function at the same time and return exports and make it caching return to server when server run.

// First require see the parameter if parameter does not contains ./ or / or ../ then he search the file from node.js  if not file found it found in local
// folder structure or node module if we require the 3rd party library mean express or slugify if require found ./ ../  then it definitely found the file in
// project folder structure

// If you want to show the IIFE function argument the mean module, filename, dirname and more then use the console.log(arguments)
// '(function (exports, require, module, __filename, __dirname) { ',
//     '\n});'
// console.log(arguments)

// If you want to see the wrapper function of node which load the file before server run then use the code below:
// console.log(require("module").wrapper)

const C = require("./test-module-1")
console.log(typeof C)
// We make the new object because class return the function when we import it.
const C2 = new C()
console.log(C2.add(4,5))

const {add, divide, multiply, sub } = require('./test-module-2')
console.log(divide(4,5))

//Caching
const item = require("./test-module-3")
item()
item()
item()
item()
