import { DataTypes } from "sequelize";
import { sequelize } from "../db/index.js";

const Category = sequelize.define(
    "Category",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        tableName: "categories",
        timestamps: false,
    }
);

console.log("🔍 Starte Category.sync()...");

Category.sync({ alter: true })
    .then(() => console.log("✅ Category table synced"))
    .catch((error) => console.error("❌ Error syncing Category table:", error));

export default Category;
