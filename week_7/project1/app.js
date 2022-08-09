const express = require("express");
const dotenv = require("dotenv");
const { startDB } = require("./config/db");
const authRouter = require("./routes/auth.routes");
const usersRouter = require("./routes/users.routes");
const productsRouter = require("./routes/products.routes");
const { notFound, errorHandler } = require("./middleware/error.middleware");
const { userRequired } = require("./middleware/auth.middleware");

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/users", userRequired, usersRouter);
app.use("/products", productsRouter);
app.all("*", notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    await startDB();
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};
start();
