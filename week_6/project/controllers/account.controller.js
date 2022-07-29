const {
  createAccountService,
  updateAccountServices,
  getAllAccountsServices,
  deleteAccountServices,
} = require("../services/account.services");

exports.getAllAccounts = async (req, res, next) => {
  try {
    const data = await getAllAccountsServices();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
exports.getAccountByName = async (req, res, next) => {};
exports.updateAccountByAccountNumber = async (req, res, next) => {
  try {
    const data = await updateAccountServices(
      req.params.accountNumber,
      req.body
    );
    if (data) {
      return res.status(200).json(data);
    }
    const error = new Error("No Account Found");
    error.status = 404;
    next(error);
  } catch (error) {
    next(error);
  }
};
exports.createAccount = async (req, res, next) => {
  try {
    const data = await createAccountService(req.body);
    res.status(201).json(data);
  } catch (error) {
    next(error);
    // res.status(500).json({msg:})
    // next()
  }
};
exports.deleteAccountByName = (req, res, next) => {};
// exports.updateAccountAccountNumber = async (req, res, next) => {};
// exports.updateAccountById = async (req, res, next) => {};

exports.deleteAccountByNumber = async (req, res, next) => {
  try {
    const data = await deleteAccountServices(req.params.accountNumber);
    if (data) {
      return res.status(200).json({ msg: "Account Deleted Successfully" });
    }
    const err = new Error("Sorry! the account you're looking for does'nt exit");
    err.status = 404;
    next(err);
  } catch (error) {
    next(error);
  }
};
