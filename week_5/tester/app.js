const express = require("express");

const app = express();

// //todo: middleware
// app.use("/accounts", () => {},()=>{});
// app.use("/notes", () => {});

// //todo: app router
// app.use(() => {});
// app.all("/endpoint", () => {});
// app.get("/endpoint", (req,res,next) => {}, (req,res)=>{}, (req,res,next)=>{});
// app.get("/accounts")

// app.post("/endpoint", () => {});
// app.put("/endpoint", () => {});
// app.delete("/endpoint", () => {});
// app.patch("/endpoint", () => {});
// app
//   .route("/endpoint/:end", (req,res) => {})
//   .get(() => {})
//   .post(() => {})
//   .put(() => {})
//   .patch(() => {})
//   .delete(() => {});
// ///todo: endpoint/?id=3
// //todo: modular router
// const noteRouter = express.Router;
// noteRouter.use(() => {});
// noteRouter.route().get().post().put().patch().delete();

// app.use(noteRouter);
// app.use("/endpoint", noteRouter);

// const accountRouter = express.Router

const handleRq = (req, res) => {
  res
    .status(200)
    .json({ name: "Rasta", msg: "Hello, welcome to Rasta's House" });
};
const handleRq2 = (req, res) => {
  res
    .status(200)
    .json({ name: "Green", msg: "This is users endpoint/path/route:::" });
};

app.get("/", handleRq);
app.get("/users", handleRq2);

// http://localhost:8000/
// http://localhost:8000/users
//todo: listen for requests from clients/users
app.listen(8000, () =>
  console.log(`Server Running on http://localhost:${8000}`)
);
