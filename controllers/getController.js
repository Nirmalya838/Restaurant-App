const path = require('path');
const connection = require('../database/db');
const Order = require('../models/Order');

async function getOrders(req, res) {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    console.error('Error retrieving orders:', error);
    res.status(500).send('Internal Server Error');
  }
}

function getIndexPage(req, res) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
}

module.exports = {
  getOrders,
  getIndexPage,
};
