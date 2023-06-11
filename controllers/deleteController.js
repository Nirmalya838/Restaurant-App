const path = require('path');
const connection = require('../database/db');
const Order = require('../models/Order');

async function deleteOrder(req, res) {
  try {
    const orderId = req.params.id;
    const order = await Order.findByPk(orderId);
    if (!order) {
      res.status(404).send('Order not found');
      return;
    }
    await order.destroy();
    res.sendFile(path.join(__dirname, '../views', 'delete.html'));
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  deleteOrder,
};
