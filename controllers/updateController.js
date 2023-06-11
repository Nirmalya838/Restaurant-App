const path = require('path');
const connection = require('../database/db');
const Order = require('../models/Order');

async function getOrderDetails(req, res) {
  try {
    const orderId = req.params.id;
    const order = await Order.findByPk(orderId);
    if (!order) {
      res.status(404).send('Order not found');
      return;
    }
    res.json(order);
  } catch (error) {
    console.error('Error retrieving order:', error);
    res.status(500).send('Internal Server Error');
  }
}

async function updateOrderDetails(req, res) {
  try {
    const orderId = req.params.id;
    const { table, dish, price } = req.body;
    const order = await Order.findByPk(orderId);
    if (!order) {
      res.status(404).send('Order not found');
      return;
    }
    order.table = table;
    order.dish = dish;
    order.price = price;
    await order.save();
    res.sendFile(path.join(__dirname, '../views', 'update.html'));
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  getOrderDetails,
  updateOrderDetails,
};
