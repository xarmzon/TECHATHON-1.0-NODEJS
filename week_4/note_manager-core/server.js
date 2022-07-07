const http = require("http");
const {
  createAccount,
  getAccounts,
  getNotes,
  notFound,
  createNote,
  editAccount,
  editNote,
  deleteAccount,
  deleteNote,
} = require("./handler");

const PORT = 8000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const parsedUrl = new URL(`http://localhost:${PORT}${url}`);
  const endpoint = parsedUrl.pathname;
  const params = parsedUrl.searchParams;
  const method = req.method;

  switch (method) {
    case "GET":
      if (endpoint === "/accounts") {
        getAccounts(req, res, params);
      } else if (endpoint === "/notes") {
        getNotes(req, res, params);
      } else {
        notFound(res, endpoint);
      }
      break;
    case "POST":
      if (endpoint === "/accounts") {
        createAccount(req, res);
      } else if (endpoint === "/notes") {
        createNote(req, res);
      } else {
        notFound(res, endpoint);
      }
      break;
    case "PUT":
      if (endpoint === "/accounts") {
        editAccount(req, res);
      } else if (endpoint === "/notes") {
        editNote(req, res);
      } else {
        notFound(res, endpoint);
      }
      break;
    case "DELETE":
      if (endpoint === "/accounts") {
        deleteAccount(req, res, params);
      } else if (endpoint === "/notes") {
        deleteNote(req, res);
      } else {
        notFound(res, endpoint);
      }
      break;
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// [
// {
//   id: 1,
//   name: "",
//   track: "",
//   createdAt: "",
//   updatedAt: ""
// }
// ]
