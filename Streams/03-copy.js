const fs = require("node:fs");

const sourceStream = fs.createReadStream("data/homepage.log");
const destinationStream = fs.createWriteStream("output/homepage.log");

sourceStream.on("error",(err)=>{
    console.log("read souece file failed! ",err.message);
})

destinationStream.on("error",(err)=>{
    console.log("destination Error",err.message);
})

sourceStream.pipe(destinationStream);

destinationStream.on("finish",()=>{
    console.log("file copy completed!");
})