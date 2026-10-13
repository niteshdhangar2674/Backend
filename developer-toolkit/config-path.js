// by default available 5 globle items in each js module  
// module, __filename, __dirname, require, exports

const path = require("node:path");

const configPath = path.join(__dirname,"data","config.json");

console.log(configPath);
// console.log(__dirname);
// console.log(__filename);

