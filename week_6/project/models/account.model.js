const { Schema, model } = require("mongoose");

const AccountSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const AccountModel = model("account", AccountSchema);

module.exports = AccountModel;
