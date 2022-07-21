const express = require("express")
const notesRouter = express.Router();
notesRouter.get("/", (req, res, next) => {});
notesRouter.post("/", (req, res, next) => {});
notesRouter.put("/", (req, res, next) => {});
notesRouter.delete("/", (req, res, next) => {});

module.exports = notesRouter