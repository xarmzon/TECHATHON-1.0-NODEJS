const express = require("express");
const {
  getAccountByName,
  createAccount,
  deleteAccount,
  deleteAccountByName,
  updateAccountByAccountNumber,
  getAllAccounts,
  deleteAccountByNumber,
} = require("../controllers/account.controller");

const accountRouter = express.Router();

accountRouter.get("/", getAllAccounts);
accountRouter.post("/", createAccount);
accountRouter.put("/:accountNumber", updateAccountByAccountNumber);
accountRouter.get("/name/:name", getAccountByName);
accountRouter.delete("/:accountNumber", deleteAccountByNumber);

module.exports = accountRouter;
