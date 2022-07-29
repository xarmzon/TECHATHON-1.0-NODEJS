const { Schema, model } = require("mongoose");

const SettingsSchema = new Schema({
  maxAmount: {
    type: Number,
    default: 5000,
    required: true,
  },
  interest: {
    type: Number,
    default: 5,
    required: true,
  },
  lastAccountNumber: {
    type: Number,
    required: true,
    default: 100000000000000,
  },
});

const SettingsModel = model("setting", SettingsSchema);
module.exports = SettingsModel;
