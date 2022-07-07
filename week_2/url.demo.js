const http = require("http");

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(`http://localhost${req.url}`);
  console.log(parsedUrl);
  res.end("Hello");
});

server.listen(8080, () => {
  console.log(`Server Running on port 8080`);
});
