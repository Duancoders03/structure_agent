const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

router.get('/', adminController.dashboard);
router.get('/products', adminController.products);
router.get('/orders', adminController.orders);
router.get('/users', adminController.users);

module.exports = router;
