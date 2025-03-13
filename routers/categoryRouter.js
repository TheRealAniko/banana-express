import express from "express";
import { validateRequest } from "../middleware/validateRequest.js";
import { categorySchema } from "../schemas/categorySchema.js";
import {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
} from "../controllers/categoryController.js";

const catRouter = express.Router();

catRouter.get("/", getAllCategories);
catRouter.get("/:id", getCategoryById);
catRouter.post("/", validateRequest(categorySchema), createCategory);
catRouter.put("/:id", validateRequest(categorySchema), updateCategory);
catRouter.delete("/:id", deleteCategory);

export default catRouter;
