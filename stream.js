// In Node.js, a "stream" is a fundamental concept used for working with data
// in a more efficient and scalable way. Streams are a way to read from or write
// to a source or destination incrementally, rather than reading or writing all the data at once.
// They are especially useful when dealing with large datasets or when you want to start processing
// data as soon as it becomes available, without waiting for the entire data to be loaded into memory.


// Node.js has four types of streams:
// 1) Readable Streams: These are used for reading data from a source, such as a file, an HTTP request, or other input streams.
//     Readable streams allow you to read data in chunks as it becomes available, which can be more memory-efficient and responsive, especially for large files.

// 2) Writable Streams: These are used for writing data to a destination, such as a file, an HTTP response, or other output streams.
//     Writable streams allow you to write data in chunks, making it useful for sending large amounts of data without consuming too much memory.

// 3) Duplex Streams: These are streams that can both read from and write to the same object. They combine the features of both readable and writable
//     streams and are often used in scenarios like network sockets.

// 4) Transform Streams: These are a special type of duplex stream designed for data transformation. You can use transform streams to modify
//     data as it passes through the stream, making them useful for tasks like data compression, encryption, or parsing.


const fs = require('fs');
const server = require('http').createServer();

server.on("request", (req, res) => {
    //Solution 1
    // fs.readFile("test-file.txt", (err, data) => {
    //     if(err) console.log(err);
    //     res.end(data)
    // })


    //Solution 2
    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data', chunk => {
    //     res.write(chunk)
    // });
    // readable.on('end', () => {
    //     res.end();
    // })
    // readable.on('error', err => {
    //     console.log(err)
    //     res.statusCode = 500;
    //     res.end("File not found")
    // })
    // The above solution is good but hava a bugs its load the data more fast and efficient way we have a chance to loss the data
    // which is called a back pressure .

    //Solution no 3
    const readable  = fs.createReadStream("test-file.txt")
    readable.pipe(res)
})
server.listen(8000, "127.0.0.1", () => {
    console.log("Listening the port 8080")
})























