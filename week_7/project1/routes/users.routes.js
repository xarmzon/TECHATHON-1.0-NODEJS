const express = require("express")
const usersRouter = express.Router()


usersRouter.post("/register")
usersRouter.post("/login")
usersRouter.post("/logout")
usersRouter.post("/refreshToken")



module.exports = usersRouter