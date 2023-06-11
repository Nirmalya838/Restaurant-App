const path = require('path');
const connection = require('../database/db');
const Order = require('../models/Order');

async function createOrder(req, res) {
  try {
    const { table, dish, price } = req.body;
    const order = await Order.create({ table, dish, price });
    res.sendFile(path.join(__dirname, '../views', 'success.html'));
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  createOrder,
};
