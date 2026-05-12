const sequelize = require('../config/database');
const Product = require('./product.model');
// Import other models here

const db = {
    sequelize,
    Product,
};

module.exports = db;
