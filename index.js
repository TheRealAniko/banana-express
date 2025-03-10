import express from "express"; // import express
import cors from "cors"; // import cors
import dotenv from "dotenv"; // import dotenv
import { connectDB } from "./db/index.js"; // import connectDB function
import errorHandler from "./middleware/errorHandler.js"; // import errorHandler middleware
import catRouter from "./routers/categoryRouter.js";

dotenv.config(); // load environment variables

const app = express(); // create an express app
app.use(cors()); // middleware cors  enable CORS for all requests
app.use(express.json()); // middleware for JSON parsing

const PORT = process.env.PORT || 8080; // set the port

// create a route
app.get("/", (req, res) => {
    res.send("hello world from nodejs!!!!!");
}); //msg from nodejs

app.use(errorHandler); // error handler middleware

app.use("/categories", catRouter);

// connect to db and start server
const startServer = async () => {
    await connectDB(); // connect to the database
    app.listen(PORT, () =>
        console.log(
            `server running on port ${PORT} ->  http://localhost:${PORT}/`
        )
    ); // server port 5000
};

// start the server
startServer();
