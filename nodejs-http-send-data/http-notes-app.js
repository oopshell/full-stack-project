const http = require('http');
const fs = require('fs');
// const path = require('path');

const notes = require("./notes.json");

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end(JSON.stringify(notes));
        return;
    }
    if (req.url === "/" && req.method === "POST") {
        let body = "";
        // req.on listening for event "data" and "end"
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const data = JSON.parse(body);
            notes.push(data);

            fs.writeFile("notes.json", (err) => {
                if (err) {
                    console.log(err);
                    res.end("error");
                    return;
                }
                // res.end(JSON.stringify(notes));
                res.end("Notes added successfully");
            })
        })
    }
})

server.listen(3000, () => {
    console.log("Server started successfully");
    console.log("Listening on 3000");
    console.log("...");
});
