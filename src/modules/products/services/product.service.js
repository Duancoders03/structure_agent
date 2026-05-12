const { Product, Category } = require('../../../models');
const { Op } = require('sequelize');

class ProductService {
    async getAllProducts(query = {}) {
        const { search, category, stockStatus } = query;
        let where = {};

        if (search) {
            where[Op.or] = [
                { name: { [Op.iLike]: `%${search}%` } },
                { description: { [Op.iLike]: `%${search}%` } }
            ];
        }

        if (category && category !== 'Tất cả danh mục') {
            where['$Category.name$'] = category;
        }

        if (stockStatus) {
            if (stockStatus === 'Còn hàng') where.stock = { [Op.gt]: 10 };
            if (stockStatus === 'Sắp hết') where.stock = { [Op.between]: [1, 10] };
            if (stockStatus === 'Hết hàng') where.stock = 0;
        }

        return await Product.findAll({
            where,
            include: [{ model: Category }],
            order: [['createdAt', 'DESC']]
        });
    }

    async getProductById(id) {
        return await Product.findByPk(id, {
            include: [{ model: Category }]
        });
    }

    async getStats() {
        const totalProducts = await Product.count();
        const lowStock = await Product.count({ where: { stock: { [Op.lt]: 10 } } });
        return { totalProducts, lowStock };
    }
}

module.exports = new ProductService();
