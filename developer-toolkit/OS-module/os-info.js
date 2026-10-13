const os = require("node:os");

console.log("======= System information =======");

console.log("Hostname : ",os.hostname());
console.log("Oprating System : ",os.type());
console.log("Platform : ",os.platform());
console.log("OS release : ",os.release());
console.log("Architecture : ",os.arch());