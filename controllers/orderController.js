import Order from "../models/Order.js";  // import the Order model
import Product from "../models/Product.js"; // import the Product model

//  GET /orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [{ model: Product, through: { attributes: ["quantity"] } }],
    }); // fetch all orders and include associated products
    res.json(orders);   // send the orders as a JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // send an error if it occurs
  }
};
