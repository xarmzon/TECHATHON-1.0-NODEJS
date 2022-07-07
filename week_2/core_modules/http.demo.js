const http = require("http");
const path = require("path");
const fs = require("fs");

//todo: Properties
const methods = http.METHODS;
const statusCodes = http.STATUS_CODES;
// console.log(methods);
// console.log(statusCodes);

//todo: Making request
// const options = {
//   hostname: "www.google.com",
//   path: "/",
//   method: "GET",
// };

// const options2 = new URL("http://www.google.com/?q=Nodejs");
// console.log(options2);

// const myReq = http.request(options, (res) => {
//   console.log(`STATUS: ${res.statusCode}`);
//   res.on("data", (chunk) => {
//     console.log(`Data: ${chunk}\n`);
//   });
//   res.on("end", () => {
//     console.log("Data End... Processing the data.. Done!");
//   });
//   res.on("");
// });

// myReq.on("error", (err) => {
//   console.log(`Request Error: ${err.message}`);
// });
// myReq.end();

//todo: Create a server
// host: localhost || 127.0.0.1
// http.createServer((request,response)=>{}).listen(,callback)
// http
//   .createServer((request, response) => {
//     // console.log(req)
//     // Sends a chunk of the response body
//     response.write("Hello World!");

//     // Signals the server that all of
//     // the response headers and body
//     // have been sent
//     response.end("Hello Techathon");
//   })
//   .listen(3000, () => {
//     console.log("Server Running");
//   }); // Server listening on port 3000

const PORT = 8000;
const HOST = "127.0.0.1" || "localhost";

// const listener = (req, res) => {
//   console.log(req.method);
//   console.log(req.url);
//   console.log(new URL(`http://${HOST}:${PORT}${req.url}`));
//   res.writeHead(200, { "Content-Type": "application/json" });
//   //res.statusCode = 200;
//   //res.setHeader('Content-Type', 'application/json');
//   res.end(JSON.stringify({ community: "Techathon", track: "NodeJS" }));
// };
// const myServer = http.createServer(listener);
// myServer.listen(PORT, HOST, () => {
//   console.log(`Serving Running on ${HOST}:${PORT}`);
// });

//todo: reading Data
const server = http.createServer((req, res) => {
  let data = "";
  console.log(req.method);
  console.log(req.url);
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", () => {
    console.log(`\n---------Data Start-------------`);
    console.log(data);
    console.log(`\n---------Data End---------------\n`);
    res.end("Data Saved");
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Serving Running on ${HOST}:${PORT}`);
});
