import express from "express"; // import express
import { getOrders, createOrder } from "../controllers/orderController.js"; // import the getOrders controller function
import { validateRequest } from "../middleware/validateRequest.js"; // import the validateRequest middleware
import { orderSchema } from "../schemas/orderSchemas.js"; // import the orderSchema

const router = express.Router(); // create a new router

router.get("/", getOrders); // GET /orders - get all orders
router.post("/", validateRequest(orderSchema), createOrder); // POST /orders - create a new order
// export the router
export default router;
