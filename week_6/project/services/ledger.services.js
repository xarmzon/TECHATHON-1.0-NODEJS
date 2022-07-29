const LedgerModel = require("../models/ledger.model");
const SettingsModel = require("../models/settings.model");

const getAllLedgerServices = async () => {
  const ledgers = await LedgerModel.find();
  return { msg: "Ledgers fetched successfully", ledgers };
};
const createLedgerService = async (data) => {
  const { accountId, amount } = data;
  const settings = await SettingsModel.findOne();
  const newLedger = await LedgerModel.create({
    accountId,
    amount,
    interest: settings.interest,
  });
  return {
    ledger: newLedger,
    msg: "A rent ledger has been created successfully",
  };
};

const getSingleLedgerService = async (id) => {
  const ledger = await LedgerModel.findById(id).populate("accountId");
  return { ledger, msg: "Fetch successfully" };
};

module.exports = {
  createLedgerService,
  getAllLedgerServices,
  getSingleLedgerService,
};
