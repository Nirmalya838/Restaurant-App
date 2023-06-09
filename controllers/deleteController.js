const path = require('path');
const connection = require('../database/db');

function deleteOrder(req, res) {
  const orderId = req.params.id;
  const query = 'DELETE FROM orders WHERE id = ?';
  connection.query(query, [orderId], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.sendFile(path.join(__dirname, '../views', 'delete.html'));
  });
}

module.exports = {
  deleteOrder,
};
