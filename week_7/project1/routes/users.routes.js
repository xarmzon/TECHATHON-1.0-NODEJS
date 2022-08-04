const express = require("express")
const { deposit, delete_, update,details } = require("../controllers/users.controller")
const { buyerRequired } = require("../middleware/auth.middleware")
const usersRouter = express.Router()


// usersRouter.post("/")
// usersRouter.delete("/")
usersRouter.route("/").get(details).post(update).delete(delete_)

usersRouter.put("/deposit",buyerRequired,deposit)






module.exports = usersRouter