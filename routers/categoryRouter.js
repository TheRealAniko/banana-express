import express from "express";
import {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
} from "../controllers/categoryController.js";

const catRouter = express.Router();

catRouter.get("/", getAllCategories);
catRouter.post("/", createCategory);
catRouter.put("/:id", updateCategory);
catRouter.delete("/:id", deleteCategory);

export default catRouter;
