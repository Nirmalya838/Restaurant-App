const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  table: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dish: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Order;
