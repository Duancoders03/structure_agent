const express = require('express');
const router = express.Router();

// Import individual module routes
const homeRoutes = require('../modules/home/routes/home.routes');
const productRoutes = require('../modules/products/routes/product.routes');
const cartRoutes = require('../modules/cart/routes/cart.routes');
const adminRoutes = require('../modules/admin/routes/admin.routes');

// Use routes
router.use('/', homeRoutes);
router.use('/shop', productRoutes);
router.use('/cart', cartRoutes);
router.use('/admin', adminRoutes);
// router.use('/auth', authRoutes);
// router.use('/admin', adminRoutes);

module.exports = router;
