import express from "express"; // import express
import {
  getOrderProducts,
  createOrderProduct,
} from "../controllers/orderProductController.js"; // import the getOrderProducts and createOrderProduct functions from the orderProductController
const router = express.Router(); // create a new router

router.get("/", getOrderProducts); // create a GET route for /order-products
router.post("/", createOrderProduct); // create a POST route for /order-products
//  export the router
export default router;
