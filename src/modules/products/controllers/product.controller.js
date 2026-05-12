const productService = require('../services/product.service');

exports.index = async (req, res) => {
    try {
        const { search, light, water } = req.query;
        const products = await productService.getAllProducts(search, { light, water });
        res.render('products/views/index', {
            title: search ? `Kết quả tìm kiếm cho "${search}"` : 'Cửa hàng - GreenLife',
            products,
            search,
            currentFilters: { light, water }
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.detail = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        if (!product) return res.status(404).render('404', { title: 'Không tìm thấy sản phẩm' });
        
        res.render('products/views/detail', {
            title: `${product.name} - GreenLife`,
            product
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.searchAPI = async (req, res) => {
    try {
        const { query } = req.query;
        const products = await productService.getAllProducts(query);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
