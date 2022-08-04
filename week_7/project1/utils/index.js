exports.buildResponse = (msg, data, field = "data", others = {}) => {
  return {
    msg,
    [field]: data,
    ...others,
  };
};
