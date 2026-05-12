const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/', productController.index);
router.get('/api/search', productController.searchAPI);
router.get('/:id', productController.detail);

module.exports = router;
