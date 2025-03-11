import Order from "../models/Order.js"; // import the Order model
import Product from "../models/Product.js"; // import the Product model
import User from "../models/User.js"; // import the User model
import OrderProduct from "../models/OrderProduct.js"; // import the OrderProduct model
import { sequelize } from "../db/index.js"; // import sequelize

//  GET /orders
export const getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({
            include: [
                { model: Product, through: { attributes: ["quantity"] } },
            ],
        }); // fetch all orders and include associated products

        // if no orders are found, send a 404 response
        if (!orders.length) {
          return res.status(404).json({ message: "No orders found" });
        }
        res.json(orders); // send the orders as a JSON response
    } catch (error) {
        res.status(500).json({ error: error.message }); // send an error if it occurs
    }
};

// POST /orders
export const createOrder = async (req, res) => {
    const transaction = await sequelize.transaction(); // start transaction

    try {
        const { userId, products, total } = req.body; // destructure the userId, products, and total from the request body

        // ensure the user exists before creating the order
        const userExists = await User.findByPk(userId);
        // if the user does not exist, send a 404 response
        if (!userExists) {
            return res.status(404).json({ message: "User not found" });
        }

        // step 1: create the order first
        const order = await Order.create({ userId, total }, { transaction });

        // if the order creation fails, rollback the transaction
        if (!order || !order.id) {
            await transaction.rollback(); //  rollback transaction in case of error
            return res.status(500).json({ message: "Failed to create order" }); // send an error message
        }

        // step 2: insert products into OrderProduct using the correct order ID
        const orderProducts = products.map((p) => ({
            orderId: order.id, // ensure this uses the correct order ID
            productId: p.productId,
            quantity: p.quantity,
        }));

        // insert order products
        await OrderProduct.bulkCreate(orderProducts, { transaction });

        // step 3: commit transaction if everything is successful
        await transaction.commit();

        // send a success message
        res.status(201).json({ message: "Order created successfully", order });
    } catch (error) {
        await transaction.rollback(); // rollback transaction in case of error
        console.error("Order creation errr:", error); // log the error to the console
        res.status(500).json({ error: error.message }); // send an error if it occurs
    }
};

// GET /orders/:id
export const getOrderById = async (req, res) => {
    try {
        // find the order by its primary key (id) and include associated products
        const order = await Order.findByPk(req.params.id, {
            include: [
                { model: Product, through: { attributes: ["quantity"] } },
            ],
        });
        // if the order does not exist, send a 404 response
        if (!order) return res.status(404).json({ message: "Order not found" });
        // send the order as a JSON response
        res.json(order);
    } catch (error) {
        // send an error if it occurs
        res.status(500).json({ error: error.message });
    }
};
// PUT /orders/:id
export const updateOrder = async (req, res) => {
    try {
        // destructure the userId, products, and total from the request body
        const { userId, products, total } = req.body;
        // destructure the orderId from the request parameters
        const orderId = req.params.id;

        // check if the order exists
        const order = await Order.findByPk(orderId);
        // if the order does not exist, send a 404 response
        if (!order) return res.status(404).json({ message: "Order not found" });

        // check if user exists
        const userExists = await User.findByPk(userId);
        // if the user does not exist, send a 404 response
        if (!userExists)
            return res.status(404).json({ message: "User not found" });

        // update order details
        await order.update({ userId, total });

        // remove existing order products
        await OrderProduct.destroy({ where: { orderId } });

        // insert updated products
        await OrderProduct.bulkCreate(
            products.map((p) => ({
                orderId: order.id,
                productId: p.productId,
                quantity: p.quantity,
            }))
        );

        // send a success message
        res.status(200).json({ message: "Order updated successfully" });
    } catch (error) {
        // send an error if it occurs
        res.status(500).json({ error: error.message });
    }
};

// DELETE /orders/:id
export const deleteOrder = async (req, res) => {
    try {
        // find the order by its primary key (id)
        const order = await Order.findByPk(req.params.id);
        // if the order does not exist, send a 404 response
        if (!order) return res.status(404).json({ message: "Order not found" });

        // delete the order
        await order.destroy();
        // send a success message
        res.json({ message: "Order deleted successfully" });
    } catch (error) {
        // send an error if it occurs
        res.status(500).json({ error: error.message });
    }
};
