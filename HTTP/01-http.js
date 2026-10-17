const http = require("node:http");

const server = http.createServer((req,res)=>{
    console.log("Method : ", req.method);
    console.log("URL",req.url);
    console.log("Headers : ",req.headers);

    res.writeHead(200,{
        "content-type":"text/plain",
    });

    res.end("Request reacived successfully!");
})


server.listen(3000,()=>{
    console.log("server is running on port 3000");
})