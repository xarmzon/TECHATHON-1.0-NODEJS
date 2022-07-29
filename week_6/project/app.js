const express = require("express");
const connectDB = require("./config/db");
const accountRouter = require("./routes/account.routes");
const ledgerRouter = require("./routes/ledger.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to RentMoney Api" });
});

app.use("/api/v1/accounts", accountRouter);
app.use("/api/v1/ledgers", ledgerRouter);
// app.use("/api/v1/auth", authRouter);

app.all("*", (req, res, next) => {
  const err = new Error("Sorry, Route not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ msg: err.message || "Unknown Error" });
});

const PORT = 8000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server Running on port: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

startServer();
