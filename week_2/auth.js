const loginUser = (username) => {
  console.log(`Account Login successfully, your username is: ${username}`);
};
const logoutUser = (username) => {
  console.log(
    `Account with the username '${username}' has been logged out successfully`
  );
};

module.exports = {
  loginUser,
};
