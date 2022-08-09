const UserModel = require("../models/users.model");
const { buildResponse, buildUser } = require("../utils");
const { APIError } = require("../utils/error");

exports.deposit = async (req, res, next) => {
  try {
    const { deposit } = req.body;
    if (!deposit) {
      return next(
        APIError.badRequest("Deposit field is missing, please try again")
      );
    }
    const amount = Number(deposit);
    if (amount % 5 !== 0) {
      return next(APIError.badRequest("The amount has to be multiple of 5"));
    }
    // const user = UserModel.findByIdAndUpdate(req.userId, {
    //   $inc: {deposit:amount},
    // });
    const user = await UserModel.findById(req.userId);
    if (user) {
      user.deposit = user.deposit + amount;
    }
    await user.save();

    res.json(buildResponse("Your account has been credited"));
  } catch (error) {
    next(error);
  }
};
exports.details = async (req, res, next) => {
  try {
    const userData = await UserModel.findById(req.userId);
    const data = buildUser(userData.toObject());
    res.json(buildResponse("Account Fetched Successfully", data));
  } catch (error) {
    next(error);
  }
};
exports.update = async (req, res, next) => {};
exports.resetDeposit = async (req, res, next) => {
  try {
    await UserModel.findByIdAndUpdate(req.userId, { default: 0 });
    res.json(buildResponse("Your deposit has been reset successfully"));
  } catch (err) {
    next(err);
  }
};
exports.delete_ = async (req, res, next) => {};
