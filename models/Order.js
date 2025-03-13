import { DataTypes } from "sequelize"; // import the DataTypes object from sequelize
import { sequelize } from "../db/index.js"; // import the sequelize connection object
import User from "./User.js"; // import the User model

// define the Order model
const Order = sequelize.define("Order", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }, // id field
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Users",
            key: "id",
        },
        onDelete: "CASCADE",
    }, // userId field
    total: {
        type: DataTypes.FLOAT,
        allowNull: true,
    }, // total field
});

// a user can have multiple orders
User.hasMany(Order, { foreignKey: "userId", onDelete: "CASCADE" });
// an order belongs to a user
Order.belongsTo(User, { foreignKey: "userId" });

// export the Order model
export default Order;
