const v = require("./out/printer");
const add = (a, b) => {
  console.log(`addition: ${a} + ${b}=> ${a + b}`);
};
const sub = (a, b) => {
  console.log(`addition: ${a} - ${b}=> ${a - b}`);
};

v.printName("Techathon");

module.exports = {
  t: add,
};
