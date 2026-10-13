const fs = require("fs");
const path = require("path");
const folder = "./reports";
fs.readdir(folder,(err,files)=>{
 if(err){
    console.log("Error: ",err.message);
    return;
 }

 const jsFiles = files.filter(file=>path.extname(file).toLowerCase()===".js");

 console.log(jsFiles);

})