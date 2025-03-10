import Product from "../models/Product.js";

// GET all products
export const getProduct = async (req, res) => {
  try {
    const products = await Product
      .findAll
      // { include: "" }
      (); // set relational table e.g. "notes"
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE product
export const createProduct = async (req, res) => {
  try {
    const {
      body: { name, description, price },
    } = req;

    if (!name || !description || price === undefined) {
      return res
        .status(400)
        .json({ error: "Name, description, and price are required" });
    }

    const product = await Product.create({ name, description, price });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET product by ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(
      id
      //     {
      //   include: "", // set relational table e.g. "notes"
      // }
    );

    if (!product) return res.status(404).json({ error: "Product not found" });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE product
export const updateProduct = async (req, res) => {
  try {
    const {
      body: { name, description, price },
      params: { id },
    } = req;
    if (!name || !description || price === undefined)
      return res
        .status(400)
        .json({ error: "name, description, and price are required" });
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    await product.update(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE product
export const deleteProduct = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    const productName = product.name;
    await product.destroy();
    res.json({ message: `Product ${productName} deleted successfully` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
