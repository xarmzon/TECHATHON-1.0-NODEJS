const { hashSync, compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const UserModel = require("../models/users.model");
const { buildResponse, buildUser } = require("../utils");
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
    const oldAccount = await UserModel.findOne({ username });
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
    const data = buildUser(newUser.toObject());
    res
      .status(201)
      .json(buildResponse("Account Created Successfully", data, "account"));
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (!user) {
      return next(
        APIError.notFound("Sorry, No Account with that username or password")
      );
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
    const token = sign(payload, secret, { expiresIn: "1hr" });
    const refreshToken = sign(payload, secret, { expiresIn: "7d" });
    user.refreshToken = refreshToken;
    await user.save();

    const data = buildUser(user.toObject());
    res
      .status(200)
      .json(
        buildResponse("Account Logged-in successfully", data, "user", { token })
      );
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
