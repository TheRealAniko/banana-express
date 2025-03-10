import express from "express";
import {
  getProducts,
  createProduct,
  getProductByID,
  updateProduct,
  deleteProduct,
} from "../controllers/products.js";

const productRouter = express.Router();

// GET /products & POST /products
productRouter.route("/").get(getProducts).post(createProduct);

// GET /products/:id, PUT /products/:id & DELETE /products/:id
productRouter
  .route("/:id")
  .get(getProductByID)
  .put(updateProduct)
  .delete(deleteProduct);

export default productRouter;
