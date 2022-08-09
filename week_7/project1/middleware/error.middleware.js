const { APIError } = require("../utils/error");

exports.notFound = (req, res, next) => {
  next(APIError.notFound("Route Not Found"));
};

exports.errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({ msg: err.message || "Unknown Error" });
};
