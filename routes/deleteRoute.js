const express = require('express');
const router = express.Router();
const deleteController = require('../controllers/deleteController');

router.delete('/api/delete/:id', deleteController.deleteOrder);

module.exports = router;
