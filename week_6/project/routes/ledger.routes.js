const express = require("express");
const {
  allLedgers,
  rent,
  pay,
  deleteLedger,
  getSingleLedger,
} = require("../controllers/ledger.controller");

const ledgerRouter = express.Router();

ledgerRouter.get("/", allLedgers);
ledgerRouter.get("/single/:id", getSingleLedger);

ledgerRouter.post("/rent", rent);
ledgerRouter.post("/pay", pay);
ledgerRouter.delete("/:id", deleteLedger);

module.exports = ledgerRouter;
