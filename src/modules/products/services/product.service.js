const Product = require('../../../models/product.model');

class ProductService {
    async getAllProducts(search = '', filters = {}) {
        let products = [
            { id: 1, name: 'Cây Lưỡi Hổ', price: 150000, category: 'Lọc không khí', light: 'Thấp', water: 'Ít', imageUrl: 'https://images.unsplash.com/photo-1599591037488-dc79493956a2?q=80&w=500&auto=format&fit=crop' },
            { id: 2, name: 'Cây Monstera', price: 450000, category: 'Nội thất', light: 'Trung bình', water: 'Vừa', imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=500&auto=format&fit=crop' },
            { id: 3, name: 'Xương Rồng Bát Tiên', price: 120000, category: 'Dễ chăm sóc', light: 'Cao', water: 'Rất ít', imageUrl: 'https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?q=80&w=500&auto=format&fit=crop' },
            { id: 4, name: 'Cây Kim Tiền', price: 200000, category: 'Phong thủy', light: 'Trung bình', water: 'Ít', imageUrl: 'https://images.unsplash.com/photo-1620127252536-03bdfcf6d5c3?q=80&w=500&auto=format&fit=crop' },
        ];

        if (search) {
            products = products.filter(p => 
                p.name.toLowerCase().includes(search.toLowerCase()) || 
                p.category.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (filters.light) {
            products = products.filter(p => p.light === filters.light);
        }

        if (filters.water) {
            products = products.filter(p => p.water === filters.water);
        }

        return products;
    }

    async getProductById(id) {
        const products = await this.getAllProducts();
        return products.find(p => p.id === parseInt(id));
    }
}

module.exports = new ProductService();
