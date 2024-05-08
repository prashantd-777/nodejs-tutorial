const fs = require("node:fs/promises");

console.log("first");

fs.readFile("./file.txt", "utf-8").then(data => console.log("data is::", data)).catch(error => console.log("error is::", error));

console.log("second");

async function readFile() {
    try {
        const data = await fs.readFile("./file.txt", "utf-8");
        console.log("file data is::", data);
    } catch(error) {
        console.log("file error::", error);
    }
}

readFile();

// const fs = require("node:fs");

// console.log("first");
// const fileContents = fs.readFileSync("./file.txt", "utf-8");

// console.log("file contents", fileContents);
// console.log("second");

// fs.readFile("./file.text", "utf-8", (error, data) => {
//     if(error) {
//         console.log("error is::", error)
//     } else {
//         console.log("data is::", data)
//     }
// })