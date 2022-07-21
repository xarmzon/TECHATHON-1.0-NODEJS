const express = require("express");

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to Week_6 API" });
});

app.post("/users", (req, res, next) => {});
app.put("/users", (req, res, next) => {});
app.delete("/users", (req, res, next) => {});

app.use((err, req, res, next) => {
  console.log(`Error(${err.name}): ${err.message}`);
  res.status(err.status || 500).json({ msg: err.message });
});

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server running....`);
  });
};

start();
