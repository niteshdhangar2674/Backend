const fs = require("node:fs");

fs.writeFileSync("logs/errorLogs.log","ERROR : login faild \n");

fs.appendFileSync("logs/errorLogs.log","INFO : user LoggrdIN \n");

fs.appendFileSync("logs/errorLogs.log","SUCCESS : Add to card successfully \n")

fs.copyFile("logs/errorLogs.log","reports/app-backup.log",(err)=>{
    if(err){
       console.log("Copy failed", err.message);
       return; 
    }
    console.log("Backup created successfully");
})