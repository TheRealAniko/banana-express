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

// POST /order-products
export const createOrderProduct = async (req, res) => {
  try {
    const { orderId, productId, quantity } = req.body; // destructure orderId, productId, and quantity from the request body

    // ensure order exists
    const order = await Order.findByPk(orderId); // find the order by its primary key (id)
    if (!order) return res.status(404).json({ message: "Order not found" }); // if the order does not exist, send a 404 response

    // ensure product exists
    const product = await Product.findByPk(productId); // find the product by its primary key (id)
    if (!product) return res.status(404).json({ message: "Product not found" }); // if the product does not exist, send a 404 response

    // create OrderProduct entry
    const orderProduct = await OrderProduct.create({
      orderId,
      productId,
      quantity,
    });

    // send the order product as a JSON response
    res.status(201).json(orderProduct);
  } catch (error) {
    // send an error if it occurs
    res.status(500).json({ error: error.message });
  }
};
