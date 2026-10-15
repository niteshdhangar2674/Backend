const fs = require("node:fs");

const writeStream = fs.createWriteStream("output/homeLogDest.log");

writeStream.write("Daily sales Reports\n");
writeStream.write("==========\n");
writeStream.write("Orders: 250\n");
writeStream.write("status : completed!");

writeStream.end();

writeStream.on("finish",()=>{
    console.log("report written successfully!");
});

writeStream.on("error",(err)=>{
    console.log("write failed : ",err.message);
})