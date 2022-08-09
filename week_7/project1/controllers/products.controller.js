const ProductModel = require("../models/products.model");
const { buildResponse } = require("../utils");
const { APIError } = require("../utils/error");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await ProductModel.find({}).populate("seller");
    res.json(buildResponse("Product Fetched Successfully", products));
  } catch (err) {
    next(err);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const { cost = 0, amountAvailable, productName } = req.body;
    if (!amountAvailable || !productName) {
      return next(
        APIError.badRequest("AmountAvailable or productName is missing")
      );
    }
    const product = await ProductModel.create({
      cost,
      amountAvailable,
      productName,
      seller: req.userId,
    });

    res
      .status(201)
      .json(buildResponse("Product Created Successfully", product, "product"));
  } catch (err) {
    next(err);
  }
};

exports.editProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = req.body;
    const productToUpdate = await ProductModel.findById(productId).lean();
    if (!productToUpdate) {
      return next(APIError.notFound("No Product found"));
    }

    if (req.userId !== productToUpdate.seller.toString()) {
      return next(
        APIError.unauthorized("You can't update another seller's product")
      );
    }

    await ProductModel.findByIdAndUpdate(productId, product);
    res.json(buildResponse("Product Updated successfully"));
  } catch (err) {
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const productToDelete = await ProductModel.findById(productId).lean();
        if (!productToDelete) {
          return next(APIError.notFound("No Product found"));
        }
    
        if (req.userId !== productToDelete.seller.toString()) {
          return next(
            APIError.unauthorized("You can't delete another seller's product")
          );
        }
    
        await ProductModel.findByIdAndDelete(productId);
        res.json(buildResponse("Product Deleted successfully"));
      } catch (err) {
        next(err);
      }
};
