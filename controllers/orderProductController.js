import OrderProduct from "../models/OrderProduct.js"; // import the OrderProduct model
import Order from "../models/Order.js"; //  import the Order model
import Product from "../models/Product.js"; // import the Product model

// GET /order-products
export const getOrderProducts = async (req, res) => {
  try {
    // find all order products and include associated order and product
    const orderProducts = await OrderProduct.findAll({
      include: [{ model: Order }, { model: Product }],
    });
    // send the order products as a JSON response
    res.json(orderProducts);
  } catch (error) {
    // send an error if it occurs
    res.status(500).json({ error: error.message });
  }
};
