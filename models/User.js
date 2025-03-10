import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../db/index.js';

// using sequelize to define a basic user structure, yay!
const User = sequelize.define('User', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
name: {
    type: DataTypes.STRING,
    allowNull: false,
},
email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
},
password: {
    type: DataTypes.STRING,
    allowNull: false,
},
}, {
  timestamps: true, // Adds createdAt and updatedAt
});

export default User;
