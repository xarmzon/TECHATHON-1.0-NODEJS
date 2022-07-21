const express = require("express");

const app = express();

//todo: app level middleware
// app.use((req, res, next) => {
//   console.log(`Middleware 1: ${req.url}`);
//   // res.send("From Middleware1");
//   next();
// });
// app.use("/users", (req, res, next) => {
//   res.send("Users Route Middleware");
// });
// app.use("/accounts", (req, res, next) => {
//   res.send("/accounts route middleware");
// });

// app.use("/profile",(req,res,next)=>{})

// app.get("/profile",(req,res,next)=>{})
//todo: chaining middleware
// app.put("/profile",(req,res,next)=>{
//   ///sdfdsfsdfs
//   next()
// })
// app.put("/profile",(req,res,next)=>{
//   next()
// })
// app.put("/profile",(req,res,next)=>{
//   res.send("")
// })
// app.post("/users/profile/edit",(req,res,next)=>{
//   next()
// }, (req,res,next)=>{
//   next()
// }, ()=>{})

// app.use("/accounts", (req, res, next) => {
//   res.send("/accounts route middleware2");
// });
// app.method();
//post get put

//todo: router level middleware
app.use((req, res, next) => {});

app.use("/accounts", accountRouter);
app.use("/notes", notesRouter);

//todo: error middleware
// app.get("/users", (req, res) => {
//   // throw "Unknown";
//   res.send("Your messages");
// });

// // app.use((req,res,next)=>{})
// app.use((err, req, res, next) => {
//   // console.log(err.message)
//   res.status(500).json({ msg: "An error occurred in the app" });
// });

//todo: built-in
// express.json
// express.urlenconded
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// www.g.com
app.post("/save", (req, res) => {
  req.file;
  res.status(201).json({ ...req.body });
});

//todo: third-party middleware
// multer
// cors
// express-validator
// express-jwt
//todo: listening for requests
app.listen(8000, () =>
  console.log(`Server Running on http://localhost:${8000}`)
);
