const express = require("express")
const { deposit, delete_, update,details } = require("../controllers/users.controller")
const { buyerRequired, userRequired } = require("../middleware/auth.middleware")
const usersRouter = express.Router()


// usersRouter.post("/")
// usersRouter.delete("/")
usersRouter.route("/").get(details).post(update).delete(delete_)
usersRouter.patch("/reset", userRequired, buyerRequired)
usersRouter.put("/deposit",buyerRequired,deposit)






module.exports = usersRouter