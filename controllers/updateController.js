const path = require('path');
const connection = require('../database/db');

function getOrderDetails (req, res) {
    const orderId =req.params.id;
    const query = `SELECT * FROM orders WHERE id = ${orderId}`;
    connection.query(query, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
        return;
      }
      const order = results[0];
      res.json(order);
    });
  }
  
  function updateOrderDetails (req, res) {
    const orderId = req.params.id;
    const { table, dish, price } = req.body;
    const query = 'UPDATE orders SET `table` = ?, dish = ?, price = ? WHERE id = ?';
    connection.query(query, [table, dish, price, orderId], (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.sendFile(path.join(__dirname, '../views', 'update.html'));
    });
  };

  module.exports = {
    getOrderDetails,
    updateOrderDetails,
  }