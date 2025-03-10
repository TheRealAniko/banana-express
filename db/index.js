import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.PG_URI);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to datavase established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
};

export default sequelize;
