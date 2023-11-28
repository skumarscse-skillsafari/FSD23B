// console.log(module);
// console.log(module.exports);
// console.log(__dirname); // absolute path of currently working directory
// Syntax
// let varName = require("/path")
let fruitsArr = require("./array.js");
let { displayAge } = require("./function.js");
let { userDetails, userInfo } = require("./object.js");
let { city, company } = require("./variable.js");
console.log(fruitsArr);
displayAge(23);
console.log(userDetails);
console.log(userInfo);
console.log(city);
console.log(company);
// let {fruitsArr} = fruitsArr
