const { connect } = require("mongoose");

const connectDB = async () => {
  await connect("mongodb://localhost:27017/RentMoney");
  console.log("DB Connected...");
};

module.exports = connectDB;
