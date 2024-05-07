const fs = require("node:fs");

console.log("first");
const fileContents = fs.readFileSync("./file.txt", "utf-8");

console.log("file contents", fileContents);
console.log("second");

fs.readFile("./file.text", "utf-8", (error, data) => {
    if(error) {
        console.log("error is::", error)
    } else {
        console.log("data is::", data)
    }
})