import { Sequelize } from "sequelize"; // Import Sequelize ORM
import dotenv from "dotenv"; // Import dotenv to read .env file

// Load environment variables from .env file
dotenv.config();

// Create a new Sequelize instance and connect to the database using the DATABASE_URL
export const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres", // Specify the database dialect
    logging: false, // Disable SQL logging in the console for cleaner output
});

// Function to establish database connection
export const connectDB = async () => {
    try {
        // Test the database connection
        await sequelize.authenticate();
        console.log("Database connected successfully.");
    } catch (error) {
        // Log an error if the connection fails and exit the process
        console.error("Database connection failed:", error);
        process.exit(1); // Exit with failure code
    }
};

// Function to sync all models with the database
export const syncModels = async () => {
    try {
        // Import the User model (already defined)
        const User = (await import("../models/User.js")).default;
        const Order = (await import("../models/Order.js")).default; // import the Order model
        // TODO: Hey banana-gang, you can import your models here (e.g., Product, Category, Order)

        // Sync all models with the database
        await sequelize.sync({ alter: true }); // Use { force: true } only for testing to drop and recreate tables
        console.log("Models synced successfully.");
    } catch (error) {
        // Log an error if syncing fails
        console.error("Model sync failed:", error);
        process.exit(1); // Exit with failure code
    }
};

// NOTE: If we need to add custom model associations or initialization logic,
// we can add it here in a separate function or extend syncModels as needed.
// Maybe for defining relationships.
