import express from "express";
import productRouter from "./routers/productRouter.js";
import { connectDB } from "./db/index.js";
import { Product } from "./models/Product.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// Router with prefixes
app.use("/products", productRouter);

const startServer = async () => {
  await connectDB();
  await Product.sync({ alter: true });
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

startServer();
