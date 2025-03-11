import express from "express"; // import express
import { getOrders } from "../controllers/orderController.js"; // import the getOrders controller function

const router = express.Router(); // create a new router

router.get("/", getOrders); // GET /orders - get all orders

// export the router
export default router;
