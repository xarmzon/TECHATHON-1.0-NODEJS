const http = require("http");

const options = new URL("http://localhost:8000");
console.log(options);
//todo: GET data
// const req = http.request(options, (res) => {
//   let data = "";
//   console.log(`Status Code: ${res.statusCode}`);
//   console.log(`Status Message: ${res.statusMessage}`);
//   console.log(`Headers: ${JSON.stringify(res.headers)}`);
//   res.setEncoding("utf-8");
//   res.on("data", (chunk) => {
//     data += chunk;
//   });
//   res.on("end", () => {
//     console.log(`\n---------Data Start-------------\n`);
//     console.log(data);
//     console.log(`\n---------Data End---------------\n\n`);
//   });
// });

// req.end();

//todo: POST data
// const data = JSON.stringify({
//   name: "Rasta",
//   track: "Nodejs",
//   date: new Date().toISOString(),
// });

// const options = {
//   hostname: "localhost",
//   host: "localhost:8000",
//   port: "8000",
//   pathname: "/",
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Content-Length": data.length,
//   },
// };

// const req = http.request(options, (res) => {
//   let data = "";
//   console.log(`Status Code: ${res.statusCode}`);
//   console.log(`Status Message: ${res.statusMessage}`);
//   console.log(`Headers: ${JSON.stringify(res.headers)}`);
//   res.setEncoding("utf-8");
//   res.on("data", (chunk) => {
//     data += chunk;
//   });
//   res.on("end", () => {
//     console.log(`\n---------Data Start-------------\n`);
//     console.log(data);
//     console.log(`\n---------Data End---------------\n\n`);
//   });
// });

// req.write(data);
// req.end();
