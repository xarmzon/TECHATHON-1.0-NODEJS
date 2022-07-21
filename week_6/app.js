const express = require("express");
const UserModel = require("./users.model");
const { connect } = require("mongoose");

const app = express();

const PORT = 8000;

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to Week_6 API" });
});

app.post("/users", async (req, res, next) => {
  //   const newUser1 = new UserModel({
  //     firstName: "Rasta",
  //     lastName: "Xarm",
  //     username: "xarmzon",
  //     password: "x!icanttellyou",
  //     age: "56",
  //   });
  //   await newUser1.save()

  //   const newUser = await UserModel.create({
  //     firstName: "Rasta",
  //     lastName: "Xarm",
  //     username: "xarmzon",
  //     password: "x!icanttellyou",
  //     age: "5",
  //   });
  const newUser = await UserModel.create(req.body);
  //   console.log(newUser);
  res.status(201).json({ msg: "User created successfully" });
});
app.get("/users", async (req, res, next) => {
  //   const users = await UserModel.find({ username: "xarmzon" });
  const users = await UserModel.find();
  res.status(200).json({ users, msg: "Users fetch successfully" });
});
app.put("/users/:username", async (req, res, next) => {
  //   const user = await UserModel.findOne({ username: req.params.username });
  //   if (!user) {
  //     res
  //       .status(404)
  //       .json({ msg: "User not found. Please try again with a valid username" });
  //     return;
  //   }
  //   const reqKeys = Object.keys(req.body);
  //   for (const k of reqKeys) {
  //     user[k] = req.body[k];
  //   }
  //   await user.save();
  await UserModel.findOneAndUpdate({ username: req.params.username }, req.body);

  res.status(200).json({ msg: "User updated successfully" });
});
app.delete("/users/:id", async (req, res, next) => {
  await UserModel.findByIdAndDelete(req.params.id);
  await UserModel.deleteOne(filter);
  await UserModel.deleteMany({ username: "rasta" });
  res.status(200).json({ msg: "User deleted successfully" });
});

app.use((err, req, res, next) => {
  console.log(`Error(${err.name}): ${err.message}`);
  res.status(err.status || 500).json({ msg: err.message });
});

const start = async () => {
  await connect("mongodb://localhost:27017/db_name");
  app.listen(PORT, () => {
    console.log(`Server running....`);
  });
};

start();
