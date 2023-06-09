const path = require('path');
const connection = require('../database/db');

function getOrders(req, res) {
  const query = 'SELECT * FROM orders';
  connection.query(query, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
}

function getIndexPage(req, res) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
}

module.exports = {
  getOrders,
  getIndexPage,
};
