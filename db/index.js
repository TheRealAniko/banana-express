import { Sequelize } from "sequelize"; // import Sequelize
import dotenv from "dotenv"; // import dotenv to read .env file

dotenv.config(); // load environment variables

// create a new Sequelize instance and connect to the database
export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres", // specify
  logging: false, // disable SQL logging in the console
});

// connect to the database
export const connectDB = async () => {
  try {
    // test the database connection
    await sequelize.authenticate();
    //  log a message if the connection is successful
    console.log("database connected successfully.");
  } catch (error) {
    // log an error if the connection
    console.error("database connection failed:", error);
    process.exit(1); // exit process on failure
  }
};
