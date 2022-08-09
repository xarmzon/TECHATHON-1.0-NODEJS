const { APIError } = require("../utils/error");
const { verify, JsonWebTokenError } = require("jsonwebtoken");
exports.userRequired = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return next(APIError.unauthenticated());
    }
    const token = authorization.split(" ")[1];
    const payload = verify(token, process.env.JWT_SECRET_TOKEN);
    req.userId = payload.id;
    req.userRole = payload.role;
    next();
  } catch (error) {
    let err = error;
    if (error instanceof JsonWebTokenError) {
      err = APIError.badRequest("Invalid or Expired Token Supplied");
    }
    next(err);
  }
};
exports.buyerRequired = async (req, res, next) => {
  try {
    const isBuyer = req.userRole === "buyer";
    if (!isBuyer) {
      return next(
        APIError.unauthorized("Only buyer is allowed to access this endpoint")
      );
    }
    next();
  } catch (error) {
    next(error);
  }
};
exports.sellerRequired = async (req, res, next) => {
  try {
    const isSeller = req.userRole === "seller";
    if (!isSeller) {
      return next(APIError.unauthorized());
    }
    next();
  } catch (error) {
    next(error);
  }
};
