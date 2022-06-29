const http = require("http");
const path = require("path");
const fs = require("fs");

const PORT = 8000;
const HOST = "127.0.0.1" || "localhost";

const server = http.createServer((req, res) => {
  let data = "";
  console.log(req.method);
  console.log(req.url);
  req.on("data", (chunk) => {
    data += chunk;
    console.log(chunk.toString());
  });
  req.on("end", () => {
    const parsedData = JSON.parse(data);
    const loc = path.resolve(
      "..",
      "files",
      `${parsedData.name}.${parsedData.ext}`
    );
    fs.writeFile(loc, data, (err) => {
      if (err) {
        res.end("Error Saving your data");
        console.log(err.message);
      } else {
        res.end("File Saved Successfully");
      }
    });

    // res.end("Data Saved");
  });
});

server.listen(PORT, () => {
  console.log(`Serving Running on ${HOST}:${PORT}`);
});
