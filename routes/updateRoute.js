const express = require('express');
const router = express.Router();
const updateController = require('../controllers/updateController');

router.get('/api/read/:id', updateController.getOrderDetails);
router.put('/api/update/:id', updateController.updateOrderDetails);

module.exports = router;