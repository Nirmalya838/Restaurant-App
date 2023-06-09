const path = require('path');
const connection = require('../database/db');

function createOrder(req, res) {
  const { table, dish, price } = req.body;
  const query = 'INSERT INTO orders (`table`, dish, price) VALUES (?, ?, ?)';
  connection.query(query, [table, dish, price], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.sendFile(path.join(__dirname, '../views', 'success.html'));
  });
}

module.exports = {
  createOrder,
};
