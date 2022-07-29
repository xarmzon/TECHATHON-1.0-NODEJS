const { model, Schema } = require("mongoose");

const LedgerSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    interest: {
      type: Number,
      required: true,
    },
    paid: {
      type: Boolean,
      default: false,
      required: true,
    },
    accountId: {
      type: Schema.Types.ObjectId, //ObjectId("62e19a2ed2ae695f60b7cb34")
      ref: "account",
      required: true,
    },
  },
  { timestamps: true }
);

const LedgerModel = model("ledger", LedgerSchema);
module.exports = LedgerModel;
