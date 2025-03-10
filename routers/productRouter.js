import express from "express";
import {
  getProducts,
  createProduct,
  getProductByID,
  updateProduct,
  deleteProduct,
} from "../controllers/products.js";
import { validateBody } from "../middleware/somemiddleware.js";
import { productSchema } from "../schemas/productSchema.js";

const productRouter = express.Router();

// GET /products & POST /products
productRouter
  .route("/")
  .get(getProducts)
  .post(validateBody(productSchema), createProduct);

// GET /products/:id, PUT /products/:id & DELETE /products/:id
productRouter
  .route("/:id")
  .get(getProductByID)
  .put(validateBody(productSchema), updateProduct)
  .delete(deleteProduct);

export default productRouter;
