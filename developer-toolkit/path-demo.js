const path = require("node:path");

const filePath = path.join("users","ndr" ,"desktop","projects","chatApp","index.js");

console.log(filePath);

console.log("Absolute path : ", path.resolve(filePath));