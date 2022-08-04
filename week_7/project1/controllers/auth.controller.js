const { hashSync, compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const UserModel = require("../models/users.model");
const { buildResponse } = require("../utils");
const { APIError } = require("../utils/error");

exports.register = async (req, res, next) => {
  try {
    const { username, password, role = "buyer" } = req.body;
    if (!username || !password) {
      return next(
        APIError.customError(
          "Username and/or Password field missing. Please try again",
          400
        )
      );
    }
    const oldAccount = UserModel.findOne({ username });
    if (oldAccount) {
      return next(
        APIError.customError(
          "An Account with the supplied username already exist...",
          409
        )
      );
    }
    const hashPassword = hashSync(password, 12);
    const newUser = await UserModel.create({
      username,
      role,
      password: hashPassword,
    });

    res.status(201).json(buildResponse("Account Created Successfully"));
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (!user) {
      return next(APIError.notFound("Sorry, No Account with that username"));
    }
    if (!password) {
      return next(
        APIError.customError("Sorry, Invalid password for this user", 400)
      );
    }
    const validPassword = compareSync(password, user.password);
    if (!validPassword) {
      return next(
        APIError.customError("Sorry, Invalid password for this user", 400)
      );
    }
    const secret = process.env.JWT_SECRET_TOKEN;
    const payload = { id: user._id, role: user.role };
    const token = sign(payload, secret, { expireIn: "1h" });
    const refreshToken = sign(payload, secret, { expiredIn: "7d" });
    user.refreshToken = refreshToken;
    await user.save();

    res
      .status(200)
      .json(
        buildResponse("Account Logged-in successfully", user, "user", { token })
      );
  } catch (error) {
    next(error);
  }
};
