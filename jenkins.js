const fs = require('fs');
const http = require('http');
const path = require('path');

//Using the event emitter api
const server = http.createServer((req,res)=>{
        //conditional rendering
        if(req.url === '/'){
            fs.readFile("./index.html",(error,data)=>{
                res.end(data)
            })
        } else if (req.url === '/'){
            fs.readFile('./puzzle2.html',(error,data)=>{
                res.end(data)
            })
        } else if (req.url=== '/'){
            fs.readFile('./puzzle3.html',(error,data)=>{
                res.end(data)
            })
        } else if (req.url=== '/'){
            fs.readFile('./puzzle4.html',(error,data)=>{
                res.end(data)
            })
        } else if (req.url=== '/'){
            fs.readFile('./puzzle5.html',(error,data)=>{
                res.end(data)
            })
        } else if (req.url=== '/'){
            fs.readFile('./puzzle6.html',(error,data)=>{
                res.end(data)
            })
        } else if (req.url=== '/'){
            fs.readFile('./puzzle7.html',(error,data)=>{
                res.end(data)
            })
        } else if (req.url=== '/'){
            fs.readFile('./puzzle8.html',(error,data)=>{
                res.end(data)
            })
        } else if (req.url=== '/'){
            fs.readFile('./puzzle9.html',(error,data)=>{
                res.end(data)
            })
        } else if (req.url=== '/'){
            fs.readFile('./welcome.html',(error,data)=>{
                res.end(data)
            })
        } else{
            fs.readFile('./404.html',(error,data)=>{
            res.end(data)
            })
        }
})

server.listen(5000)