const path =require("node:path");

const filePath = "app/upload/invoice.pdf";

console.log("Full path :" , filePath);

console.log("File name : ",path.basename(filePath));

console.log("Extension : ",path.extname(filePath));

console.log("Directory : ",path.dirname(filePath));