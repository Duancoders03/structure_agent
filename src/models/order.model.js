const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
    orderNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('pending', 'processing', 'shipping', 'completed', 'cancelled'),
        defaultValue: 'pending'
    },
    shippingAddress: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    paymentMethod: {
        type: DataTypes.STRING,
        defaultValue: 'COD'
    },
    paymentStatus: {
        type: DataTypes.ENUM('unpaid', 'paid', 'refunded'),
        defaultValue: 'unpaid'
    },
    notes: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: true
});

module.exports = Order;
