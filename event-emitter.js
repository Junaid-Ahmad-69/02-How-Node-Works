const emitter = require('events')
const myEmitter = new emitter();
const fs = require('fs');
const http = require("http")


const start = Date.now();
myEmitter.on("newMessage", () => {
    console.log('please check inbox')
})

myEmitter.on("Stock", (value, time) => {
    const time2 = time - start;
    // fs.readFile("./starter/test-file.txt", "utf-8", (err, data) => {
    //     console.log("read successfully", data)
        console.log(`There are ${value} packages are available in stock and its takes total time ${time2} to run`)

    // })
})
myEmitter.emit("Stock", 78, Date.now())

const server = http.createServer();
server.on("request", (req, res) => {
    console.log(req.url)
    console.log("Request Send");
    res.end("Request received")
})
server.on("close", ()=>{
    console.log("close")
})
server.emit("close")

server.listen(9090, '127.0.0.1', ()=>{
    console.log("Waiting for server to start...")
})