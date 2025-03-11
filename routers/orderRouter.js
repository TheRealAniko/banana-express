import express from "express"; // import express
import {
  getOrders,
  createOrder,
  getOrderById,
  deleteOrder
} from "../controllers/orderController.js"; // import the getOrders controller function
import { validateRequest } from "../middleware/validateRequest.js"; // import the validateRequest middleware
import { orderSchema } from "../schemas/orderSchemas.js"; // import the orderSchema

const router = express.Router(); // create a new router

router.get("/", getOrders); // GET /orders - get all orders
router.post("/", validateRequest(orderSchema), createOrder); // POST /orders - create a new order
router.get("/:id", getOrderById); // GET /orders/:id - get order by id
router.delete("/:id", deleteOrder); // DELETE /orders/:id - delete order by id

// export the router
export default router;
