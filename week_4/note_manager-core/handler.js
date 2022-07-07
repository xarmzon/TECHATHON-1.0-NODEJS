const fs = require("fs");
const promiseFs = fs.promises;

exports.createAccount = (req, res) => {
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", () => {
    fs.readFile("./accounts.json", (err, acc) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error occurred while creating the user");
        return;
      }
      const parsedAccounts = JSON.parse(acc.toString());

      const parsedData = JSON.parse(data);
      parsedData.id = parsedAccounts.length + 1;
      const date = new Date().toISOString();
      parsedData.createdAt = date;
      parsedData.updatedAt = date;

      parsedAccounts.push(parsedData);

      const newUser = JSON.stringify(parsedAccounts);

      fs.writeFile("./accounts.json", newUser, (err) => {
        if (err) {
          res.statusCode = 500;
          res.end("Error occurred while creating the user");
          return;
        }
        res.statusCode = 201;
        res.end("Your account has been created successfully");
      });
    });
  });
};

exports.getAccounts = async (req, res, params) => {
  try {
    console.log(params);
    const accounts = await promiseFs.readFile("./accounts.json");

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(accounts.toString());
  } catch (error) {
    console.log(`Reading User Error: ${error.message}`);
    res.statusCode = 500;
    res.end("Sorry, something went while retrieving the data");
  }
  // fs.readFile("./accounts.json", (err, data) => {
  //   if (err) {
  //     res.statusCode = 500;
  //     res.end("Sorry, something went while retrieving the data");
  //     return;
  //   }
  //   res.statusCode = 208;
  //   res.writeHead(206, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(data.toString()));
  // });
};
exports.editAccount = (req, res) => {
  let userDataString = "";
  req.on("data", (chunk) => {
    userDataString += chunk;
  });
  req.on("end", () => {
    const userDataObj = JSON.parse(userDataString.toString());
    if (!userDataObj.id) {
      res.statusCode = 400;
      res.end("Please supply an ID for the account details");
      return;
    }
    fs.readFile("./accounts.json", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end(
          "An error occurred while updating your account. Please try again later"
        );
        return;
      }
      const accounts = JSON.parse(data.toString());
      const userData = accounts.find(
        (account) => account.id === userDataObj.id
      );
      if (!userData) {
        res.statusCode = 404;
        res.end(
          "Sorry, we can't find the account you're looking for. Please try again with another id"
        );
        return;
      }

      for (const key in userDataObj) {
        userData[key] = userDataObj[key];
      }
      userData.updatedAt = new Date().toISOString();
      const oldAccountsWithoutUser = accounts.filter(
        (account) => account.id !== userDataObj.id
      );
      const newAccountsWithUser = [...oldAccountsWithoutUser, userData];
      const newAccountsWithUserString = JSON.stringify(newAccountsWithUser);
      fs.writeFile("./accounts.json", newAccountsWithUserString, (err) => {
        if (err) {
          res.statusCode = 500;
          res.end(
            "An error occurred while updating your account. Please try again later"
          );
          return;
        }
        res.end("Your Account has been updated successfully");
      });
    });
  });
};
exports.deleteAccount = (req, res, params) => {
  const hasId = params.has("id");
  if (!hasId) {
    res.statusCode = 400;
    res.end("Please supply the account ID as parameter");
    return;
  }
  const id = params.get("id");
  fs.readFile("./accounts.json", "utf-8", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("An error occurred while deleting the account");
      return;
    }
    const accounts = JSON.parse(data);
    const newAccountsWithoutUser = accounts.filter(
      (account) => account.id !== parseInt(id)
    );
    const newAccountsWithoutUserString = JSON.stringify(newAccountsWithoutUser);
    fs.writeFile("./accounts.json", newAccountsWithoutUserString, (err) => {
      res.statusCode = 500;
      res.end("An error occurred while deleting the account");
      return;
    });
    res.end("Your Account has been deleted successfully");
  });
};

exports.createNote = () => {};
exports.getNotes = () => {};
exports.editNote = () => {};
exports.deleteNote = () => {};

exports.notFound = (res, endpoint) => {
  const msg = `Sorry! The endpoint ${endpoint} doesn't exist on our server.`;
  res.statusCode = 404;
  res.end(msg);
};

// module.exports = {
//   createAccount,
//   getAllAccounts,
//   deleteAccount,
//   createNote,
//   getAllNotes,
//   deleteNote,
// };
