const express = require("express")
const { deposit, delete_ } = require("../controllers/users.controller")
const usersRouter = express.Router()


usersRouter.route("/").post(update).delete(delete_)
usersRouter.post("/deposit",deposit)




module.exports = usersRouter