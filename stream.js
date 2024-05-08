const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file.txt", {
    encoding: "utf-8",
    highWaterMark: 2
});
const writableStream = fs.createWriteStream("./file2.txt");

// readableStream.on("data", (chunk) => {
//     console.log("chunk data is::", chunk);
//     writableStream.write(chunk);
// });

// readableStream.pipe(writableStream)

readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));


