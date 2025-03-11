import express from "express";
import { validateRequest } from "../middleware/validateRequest.js";
import { categorySchema } from "../schemas/categorySchema.js";
import {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
} from "../controllers/categoryController.js";

const catRouter = express.Router();

catRouter.get("/", getAllCategories);
catRouter.post("/", validateRequest(categorySchema), createCategory);
catRouter.put("/:id", validateRequest(categorySchema), updateCategory);
catRouter.delete("/:id", deleteCategory);

export default catRouter;
