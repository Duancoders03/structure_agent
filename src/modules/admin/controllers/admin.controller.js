const { Product, Order, User, Category, OrderItem } = require('../../../models');
const { Op } = require('sequelize');
const productService = require('../../products/services/product.service');

exports.dashboard = async (req, res) => {
    try {
        const totalProducts = await Product.count();
        const totalOrders = await Order.count();
        const totalUsers = await User.count({ where: { role: 'customer' } });
        
        const sumRevenue = await Order.sum('totalAmount', { where: { paymentStatus: 'paid' } });
        const revenue = sumRevenue ? sumRevenue.toLocaleString('vi-VN') + 'đ' : '0đ';

        const recentOrders = await Order.findAll({
            limit: 5,
            order: [['createdAt', 'DESC']],
            include: [{ model: User }]
        });

        res.render('admin/views/dashboard', {
            layout: 'layouts/admin',
            title: 'Bảng điều khiển',
            activePage: 'dashboard',
            stats: {
                totalProducts,
                totalOrders,
                totalRevenue: revenue,
                newCustomers: totalUsers
            },
            recentOrders
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.products = async (req, res) => {
    try {
        const { search, category, stockStatus } = req.query;
        const products = await productService.getAllProducts({ search, category, stockStatus });
        const categories = await Category.findAll();

        res.render('admin/views/products', {
            layout: 'layouts/admin',
            title: 'Quản lý Sản phẩm',
            activePage: 'products',
            products,
            categories,
            filters: { search, category, stockStatus }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
};

exports.createProduct = async (req, res) => {
    const categories = await Category.findAll();
    res.render('admin/views/products/form', {
        layout: 'layouts/admin',
        title: 'Thêm sản phẩm',
        activePage: 'products',
        isEdit: false,
        categories
    });
};

exports.storeProduct = async (req, res) => {
    try {
        const { name, description, price, stock, imageUrl, categoryId, careInstructions } = req.body;
        await Product.create({
            name,
            description,
            price,
            stock,
            imageUrl,
            categoryId,
            careInstructions: careInstructions ? JSON.parse(careInstructions) : {}
        });
        res.redirect('/admin/products');
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi tạo sản phẩm');
    }
};

exports.editProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        const categories = await Category.findAll();
        res.render('admin/views/products/form', {
            layout: 'layouts/admin',
            title: 'Sửa sản phẩm',
            activePage: 'products',
            isEdit: true,
            product,
            categories
        });
    } catch (error) {
        res.status(404).send('Không tìm thấy sản phẩm');
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { name, description, price, stock, imageUrl, categoryId, careInstructions } = req.body;
        await Product.update({
            name,
            description,
            price,
            stock,
            imageUrl,
            categoryId,
            careInstructions: careInstructions ? JSON.parse(careInstructions) : {}
        }, {
            where: { id: req.params.id }
        });
        res.redirect('/admin/products');
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi cập nhật sản phẩm');
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        await Product.destroy({ where: { id: req.params.id } });
        res.redirect('/admin/products');
    } catch (error) {
        res.status(500).send('Lỗi khi xóa sản phẩm');
    }
};

exports.orders = async (req, res) => {
    try {
        const { search, status, date } = req.query;
        let where = {};

        if (status && status !== 'Tất cả trạng thái') {
            where.status = status.toLowerCase(); // Map frontend text to DB enum if needed
        }

        if (date) {
            where.createdAt = {
                [Op.gte]: new Date(date),
                [Op.lt]: new Date(new Date(date).getTime() + 24 * 60 * 60 * 1000)
            };
        }

        const orders = await Order.findAll({
            where,
            include: [{ 
                model: User,
                where: search ? {
                    [Op.or]: [
                        { fullName: { [Op.iLike]: `%${search}%` } },
                        { email: { [Op.iLike]: `%${search}%` } }
                    ]
                } : {}
            }],
            order: [['createdAt', 'DESC']]
        });

        res.render('admin/views/orders', {
            layout: 'layouts/admin',
            title: 'Quản lý Đơn hàng',
            activePage: 'orders',
            orders,
            filters: { search, status, date }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
};

exports.editOrder = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id, { include: [User] });
        res.render('admin/views/orders/form', {
            layout: 'layouts/admin',
            title: 'Cập nhật đơn hàng',
            activePage: 'orders',
            order
        });
    } catch (error) {
        res.status(404).send('Không tìm thấy đơn hàng');
    }
};

exports.updateOrder = async (req, res) => {
    try {
        await Order.update(req.body, { where: { id: req.params.id } });
        res.redirect('/admin/orders');
    } catch (error) {
        res.status(500).send('Lỗi khi cập nhật đơn hàng');
    }
};

exports.users = async (req, res) => {
    try {
        const { search, role, sort } = req.query;
        let where = {};

        if (search) {
            where[Op.or] = [
                { fullName: { [Op.iLike]: `%${search}%` } },
                { email: { [Op.iLike]: `%${search}%` } }
            ];
        }

        if (role && role !== 'Tất cả vai trò') {
            const roleMap = { 'Khách hàng': 'customer', 'Quản trị viên': 'admin', 'Nhân viên kho': 'staff' };
            where.role = roleMap[role] || role;
        }

        let order = [['createdAt', 'DESC']];
        if (sort === 'Ngày gia nhập (Cũ nhất)') order = [['createdAt', 'ASC']];
        if (sort === 'Tên (A-Z)') order = [['fullName', 'ASC']];

        const users = await User.findAll({ where, order });

        res.render('admin/views/users', {
            layout: 'layouts/admin',
            title: 'Quản lý Người dùng',
            activePage: 'users',
            users,
            filters: { search, role, sort }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
};

exports.createUser = (req, res) => {
    res.render('admin/views/users/form', {
        layout: 'layouts/admin',
        title: 'Thêm người dùng',
        activePage: 'users',
        isEdit: false
    });
};

exports.storeUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.redirect('/admin/users');
    } catch (error) {
        res.status(500).send('Lỗi khi tạo người dùng');
    }
};

exports.editUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        res.render('admin/views/users/form', {
            layout: 'layouts/admin',
            title: 'Sửa người dùng',
            activePage: 'users',
            isEdit: true,
            user
        });
    } catch (error) {
        res.status(404).send('Không tìm thấy người dùng');
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { password, ...updateData } = req.body;
        if (password) updateData.password = password; // bcrypt hook handles hashing
        
        await User.update(updateData, {
            where: { id: req.params.id },
            individualHooks: true // Required for beforeUpdate hook to trigger if we hash there
        });
        res.redirect('/admin/users');
    } catch (error) {
        res.status(500).send('Lỗi khi cập nhật người dùng');
    }
};
