import Order from "../models/Order.js"; // import the Order model
import Product from "../models/Product.js"; // import the Product model
import User from "../models/User.js";  // import the User model
import OrderProduct from "../models/OrderProduct.js";  // import the OrderProduct model

//  GET /orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [{ model: Product, through: { attributes: ["quantity"] } }],
    }); // fetch all orders and include associated products
    res.json(orders); // send the orders as a JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // send an error if it occurs
  }
};

// POST /orders
export const createOrder = async (req, res) => {
  try {
    const { userId, products, total } = req.body; // destructure userId, products, and total from the request body

    // check if the user exists
    const userExists = await User.findByPk(userId);
    // if the user does not exist, send a 404 response
    if (!userExists) {
      return res.status(404).json({ message: "User not found" }); // send a 404 response
    }

    const order = await Order.create({ userId, total }); // create a new order

    // create a new order-product association for each product in the order
    await OrderProduct.bulkCreate(
      // map over the products array and return an object with orderId, productId, and quantity
      products.map((p) => ({
        orderId: order.id,
        productId: p.productId,
        quantity: p.quantity,
      }))
    );

    res.status(201).json(order); // send the order as a JSON response
  } catch (error) {
    // send an error if it occurs
    res.status(500).json({ error: error.message });
  }
};
