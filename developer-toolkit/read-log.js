const fs =require("node:fs");


const log = fs.readFileSync("logs/app.log","utf8");

console.log(log);

const lines = log.split('\n');

console.log(lines);

const errors = lines.filter(line=>line.includes("ERROR"));

console.log("Total lines" , lines.length);

console.log("Erorrs " , errors.length);