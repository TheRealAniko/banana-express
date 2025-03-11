import express from "express"; // import express
import cors from "cors"; // import cors
import dotenv from "dotenv"; // import dotenv
import { connectDB, syncModels } from "./db/index.js"; // import connectDB function
import errorHandler from "./middleware/errorHandler.js"; // import errorHandler middleware
import catRouter from "./routers/categoryRouter.js";
import userRouter from "./routers/userRouter.js"; // import userRouter
import productRouter from "./routers/productRouter.js";
import orderRouter from "./routers/orderRouter.js"; // import the orderRoutes
import orderProductRouter from "./routers/orderProductRouter.js"; // import the orderProductRoutes

dotenv.config(); // load environment variables

const app = express(); // create an express app
app.use(cors()); // middleware cors  enable CORS for all requests
app.use(express.json()); // middleware for JSON parsing

const PORT = process.env.PORT || 8080; // set the port

// create a route
app.get("/", (req, res) => {
  res.send("hello world from nodejs!!!!!");
});

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/categories", catRouter);
app.use("/orders", orderRouter); // use the orderRoutes
app.use("/order-products", orderProductRouter); // use the orderProductRoutes

// NOTE: Hey Banana-gang, its me again. Feel free to use the next space to add your own routers!

// end router section
app.use(errorHandler); // error handler middleware

// connect to db and start server
const startServer = async () => {
  try {
    await connectDB(); // connect to the database
    await syncModels(); // sync all models
    app.listen(PORT, () =>
      console.log(`server running on port ${PORT} -> http://localhost:${PORT}/`)
    );
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

// start the server
startServer();
