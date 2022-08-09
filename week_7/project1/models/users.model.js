const { model, Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    deposit: {
      type: Number,
      required: true,
      default: 0,
    },
    role: {
      type: String,
      required: true,
      default: "seller",
      enum: ["seller", "buyer"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserModel = model("users", UserSchema);

module.exports = UserModel;
