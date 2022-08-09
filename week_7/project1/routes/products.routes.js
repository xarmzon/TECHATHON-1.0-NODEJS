const express = require("express");
const {
  deleteProduct,
  createProduct,
  editProduct,
  getProducts,
} = require("../controllers/products.controller");
const {
  sellerRequired,
  userRequired,
} = require("../middleware/auth.middleware");
const productsRouter = express.Router();

productsRouter.get("/", getProducts);
productsRouter.post("/", userRequired, sellerRequired, createProduct);
productsRouter.put("/:productId", userRequired, sellerRequired, editProduct);
productsRouter.delete(
  "/:productId",
  userRequired,
  sellerRequired,
  deleteProduct
);

module.exports = productsRouter;
