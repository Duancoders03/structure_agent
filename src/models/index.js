const sequelize = require('../config/database');
const Product = require('./product.model');
const User = require('./user.model');
const Category = require('./category.model');
const Order = require('./order.model');
const OrderItem = require('./orderItem.model');

// Associations
Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Order.hasMany(OrderItem, { foreignKey: 'orderId' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });

Product.hasMany(OrderItem, { foreignKey: 'productId' });
OrderItem.belongsTo(Product, { foreignKey: 'productId' });

const db = {
    sequelize,
    Product,
    User,
    Category,
    Order,
    OrderItem
};

module.exports = db;
