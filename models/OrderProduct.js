import { DataTypes } from "sequelize"; // import the DataTypes object from sequelize
import { sequelize } from "../db/index.js"; // import the sequelize connection object
import Order from "./Order.js"; // import the Order model
import Product from "./Product.js"; // import the Product model

// define the OrderProduct model
const OrderProduct = sequelize.define("OrderProduct", {
  // define the fields of the OrderProduct model

  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  }, // this is the quantity of the product
});

// define many-to-many relationships
Order.belongsToMany(Product, { through: OrderProduct });
Product.belongsToMany(Order, { through: OrderProduct });

export default OrderProduct; // export the OrderProduct model
