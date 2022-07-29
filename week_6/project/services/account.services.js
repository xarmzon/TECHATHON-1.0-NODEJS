const AccountModel = require("../models/account.model");
const SettingsModel = require("../models/settings.model");

const createAccountService = async (data) => {
  let settings = await SettingsModel.findOne();
  if (!settings) {
    settings = await SettingsModel.create({ interest: 5 });
  }
  const accountNumber = settings.lastAccountNumber + 1;
  const newAccount = await AccountModel.create({
    name: data.name,
    address: data.address,
    accountNumber,
  });
  settings.lastAccountNumber = accountNumber;

  await settings.save();

  return { msg: "Account Created Successfully", account: newAccount };
};

const updateAccountServices = async (accountNumber, data) => {
  const account = await AccountModel.findOneAndUpdate({ accountNumber }, data, {
    new: true,
  });
  return account;
};

const getAllAccountsServices = async () => {
  const accounts = await AccountModel.find({});
  return accounts;
};

const deleteAccountServices = async (accountNumber) => {
  const deletedAccount = await AccountModel.findOneAndDelete({ accountNumber });
  return deletedAccount;
};

module.exports = {
  createAccountService,
  updateAccountServices,
  getAllAccountsServices,
  deleteAccountServices,
};
