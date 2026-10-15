const fs = require("node:fs");
const writeStream = fs.createWriteStream("data/server.log");

let i = 0;
let totalLine = 500_000;

function writeNext() {
  let canContinue = true;

  while (i < totalLine && canContinue) {
    i++;

    let level = i % 100 === 0 ? "ERROR" : i % 20 === 0 ? "WARN" : "INFO";

    let line =
      `${new Date().toISOString()} ${level} ` +
      ` Request ${i} processed sucessfully!\n`;
       
      canContinue = writeStream.write(line);

     
  }
   if (!canContinue) {
writeStream.once("drain", writeNext);
return;
}

if (i === totalLine) {
writeStream.end();
}
}

writeStream.on("finish",()=>{
    console.log(`Generated ${totalLine} log entries`);
});


writeStream.on("error",(err)=>{
    console.log("Error : ",err.message);
});


writeNext();


