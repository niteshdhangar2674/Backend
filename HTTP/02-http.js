
const http = require("http");

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","application/json");

    if(req.url =="/login"){
        req.statusCode = 401;
        return res.end(
            JSON.stringify({
                error:"Invaild crendetial"
            })
        )
    }

    if(req.url=="/dashboard"){
        res.statusCode = 200;
        return res.end(
            JSON.stringify({
                message:"Welcome to your dashboard"
            })
        )
    }

    res.statusCode = 404;

    res.end(
        JSON.stringify({
            error:"Route not found"
        })
    )
})

server.listen(3000,()=>{
    console.log("server is running on port 3000")
})