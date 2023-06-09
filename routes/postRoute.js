const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/api/create', postController.createOrder);

module.exports = router;





