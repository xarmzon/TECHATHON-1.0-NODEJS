const express = require("express")
const productsRouter = express.Router()


productsRouter.post("/register")
productsRouter.post("/login")
productsRouter.post("/logout")
productsRouter.post("/refreshToken")



module.exports = productsRouter