const fs = require("node:fs");

const readable = fs.createReadStream("data/homepage.log",{
    encoding:"utf-8",
    highWaterMark:100,
})

readable.on("data",(chunk)=>{
    console.log("recived a chunk : ");
    console.log(JSON.stringify(chunk));
})

readable.on("error",(err)=>{
 console.log("read failed : ",err.message);
})

readable.on("end",()=>{
    console.log("Finished reading the file!");
})