const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    age: Number,
  },
  { timestamps: true }
);

//todo: methods

//todo: virtual
UserSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

//todo: statics

//todo: middleware

const UserModel = model("user", UserSchema);

module.exports = UserModel;
