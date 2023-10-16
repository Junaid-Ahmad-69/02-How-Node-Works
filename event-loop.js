
// Node Js Event Loop Working
const fs = require('fs')
const crypto = require('crypto')


// Change the Thread in libuv library
const start = Date.now()
process.env.UV_THREADPOOL_SIZE = 0;
setTimeout(() => console.log("Time 1 Finished"), 0)
setImmediate(() => console.log('Immediate 1 Finished'))


fs.readFile('./starter/test-file.txt', "utf-8", () => {
    console.log("I/O FINISHED");
    console.log("<================================================================>");
    setTimeout(() => console.log("Time 3 Finished"), 3000)
    setTimeout(() => console.log("Time 1 Finished"), 0)
    setImmediate(() => console.log('Immediate 1 Finished'))
    process.nextTick(() => console.log('Process.nextTick'))

    crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512")
    console.log(Date.now() - start, "password encrypted")

    crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512")
    console.log(Date.now() - start, "password encrypted")

    crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512")
    console.log(Date.now() - start, "password encrypted")

    crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512")
    console.log(Date.now() - start, "password encrypted")


    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, "password encrypted")
    })

    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, "password encrypted")
    })

    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, "password encrypted")
    })

    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, "password encrypted")
    })


})


console.log("Top Level Code")
