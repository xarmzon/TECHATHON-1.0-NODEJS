const http = require("http");
const {
  createAccount,
  getAllAccounts,
  getAllNotes,
  notFound,
} = require("./handler");

const PORT = 8000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const parsedUrl = new URL(`http://localhost:${PORT}${url}`);
  const endpoint = parsedUrl.pathname;
  const params = parsedUrl.searchParams;
  console.log(endpoint);
  const method = req.method;
  res.end("no");
  //   switch (method) {
  //     case "GET":
  //       if (endpoint === "/accounts") {
  //         getAllAccounts();
  //       } else if (endpoint === "/notes") {
  //         getAllNotes();
  //       } else {
  //         notFound();
  //       }
  //       break;
  //   }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
