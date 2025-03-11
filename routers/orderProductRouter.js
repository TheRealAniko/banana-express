import express from "express"; // import express
import { getOrderProducts } from "../controllers/orderProductController.js";  //  import getOrderProducts from the orderProductController

const router = express.Router(); // create a new router

router.get("/", getOrderProducts);  // create a GET route for /order-products


//  export the router
export default router;
