const productService = require('../../products/services/product.service');

exports.dashboard = (req, res) => {
    res.render('admin/views/dashboard', {
        layout: 'layouts/admin',
        title: 'Bảng điều khiển',
        activePage: 'dashboard',
        stats: {
            totalProducts: 24,
            totalOrders: 156,
            totalRevenue: '45.200.000đ',
            newCustomers: 12
        }
    });
};

exports.products = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.render('admin/views/products', {
            layout: 'layouts/admin',
            title: 'Quản lý Sản phẩm',
            activePage: 'products',
            products
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.orders = (req, res) => {
    res.render('admin/views/orders', {
        layout: 'layouts/admin',
        title: 'Quản lý Đơn hàng',
        activePage: 'orders'
    });
};

exports.users = (req, res) => {
    res.render('admin/views/users', {
        layout: 'layouts/admin',
        title: 'Quản lý Người dùng',
        activePage: 'users'
    });
};
