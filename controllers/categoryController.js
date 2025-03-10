import Category from "../models/Category.js";

// ✅ GET /categories
export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        console.error("❌ Error retrieving categories:", error);
        res.status(500).json({ message: "Server error." });
    }
};

// ✅ POST /categories
export const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) return res.status(400).json({ message: "Name is required" });

        const newCategory = await Category.create({ name });
        res.status(201).json(newCategory);
    } catch (error) {
        console.error("❌ Error creating category:", error);
        res.status(500).json({ message: "Server error." });
    }
};

// ✅ PUT /categories/:id
export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const category = await Category.findByPk(id);
        if (!category)
            return res.status(404).json({ message: "Category not found" });

        category.name = name;
        await category.save();

        res.json(category);
    } catch (error) {
        console.error("❌ Error updating category:", error);
        res.status(500).json({ message: "Server error." });
    }
};

// ✅ DELETE /categories/:id → Kategorie löschen
export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await Category.findByPk(id);
        if (!category)
            return res.status(404).json({ message: "Category not found" });

        await category.destroy();
        res.json({ message: "Category successfully deleted" });
    } catch (error) {
        console.error("❌ Error deleting category:", error);
        res.status(500).json({ message: "Server error." });
    }
};
