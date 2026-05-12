const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

router.get('/', adminController.dashboard);

// Products
router.get('/products', adminController.products);
router.get('/products/create', adminController.createProduct);
router.post('/products/create', adminController.storeProduct);
router.get('/products/:id/edit', adminController.editProduct);
router.post('/products/:id/edit', adminController.updateProduct);
router.post('/products/:id/delete', adminController.deleteProduct);

// Orders
router.get('/orders', adminController.orders);
router.get('/orders/:id/edit', adminController.editOrder);
router.post('/orders/:id/edit', adminController.updateOrder);

// Users
router.get('/users', adminController.users);
router.get('/users/create', adminController.createUser);
router.post('/users/create', adminController.storeUser);
router.get('/users/:id/edit', adminController.editUser);
router.post('/users/:id/edit', adminController.updateUser);

module.exports = router;
