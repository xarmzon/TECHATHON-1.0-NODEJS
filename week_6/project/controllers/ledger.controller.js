const {
  createLedgerService,
  getAllLedgerServices,
  getSingleLedgerService,
} = require("../services/ledger.services");

const allLedgers = async (req, res, next) => {
  try {
    const data = await getAllLedgerServices();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getSingleLedger = async (req, res, next) => {
  try {
    const data = await getSingleLedgerService(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const rent = async (req, res, next) => {
  try {
    const data = await createLedgerService(req.body);
    return res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};
const pay = async (req, res, next) => {
  res.json({ msg: "Pay" });
};
const deleteLedger = async (req, res, next) => {
  res.json({ msg: "Delete", id: req.params.id });
};

module.exports = {
  rent,
  allLedgers,
  deleteLedger,
  pay,
  getSingleLedger,
};
