const createUser = (username, password) => {
  console.log(`---New Account---\n Username:${username}\nPassword:${password}`);
};
const deleteUser = (username) => {
  console.log(`---Deleted Account---\n Username:${username}\nGoodbye!!!`);
};

// module.exports = createUser;
module.exports = {
  createUser,
  deleteUser,
};
// createUser("RastaXarm", "I_wont_tell_you");
// deleteUser("techathon");
