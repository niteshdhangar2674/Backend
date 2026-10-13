const fs = require("fs");

fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    console.log("File read successfully!");
})