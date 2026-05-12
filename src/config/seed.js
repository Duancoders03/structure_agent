const db = require('../models');

const seedDatabase = async () => {
    try {
        await db.sequelize.sync({ force: true });
        console.log('Database synced for seeding.');

        // 1. Create Categories
        const categories = await db.Category.bulkCreate([
            { name: 'Cây trong nhà', slug: 'cay-trong-nha', description: 'Cây thích hợp trồng trong điều kiện thiếu sáng.' },
            { name: 'Cây văn phòng', slug: 'cay-van-phong', description: 'Cây trang trí bàn làm việc, lọc không khí tốt.' },
            { name: 'Cây lọc không khí', slug: 'cay-loc-khong-khi', description: 'Cây có khả năng lọc bụi và độc tố.' },
            { name: 'Xương rồng & Sen đá', slug: 'xuong-rong-sen-da', description: 'Cây mọng nước, dễ chăm sóc.' }
        ]);

        // 2. Create Products
        await db.Product.bulkCreate([
            {
                name: 'Cây Lưỡi Hổ',
                price: 150000,
                description: 'Cây lọc không khí cực tốt, dễ chăm sóc.',
                stock: 50,
                categoryId: categories[2].id,
                imageUrl: 'https://images.unsplash.com/photo-1599591037488-826013634991?auto=format&fit=crop&q=80&w=400',
                careInstructions: { light: 'Bóng râm', water: '1 lần/tuần', temp: '20-30°C' }
            },
            {
                name: 'Cây Kim Tiền',
                price: 250000,
                description: 'Mang lại tài lộc và may mắn cho gia chủ.',
                stock: 30,
                categoryId: categories[1].id,
                imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=400',
                careInstructions: { light: 'Vừa phải', water: '10 ngày/lần', temp: '18-28°C' }
            },
            {
                name: 'Sen Đá Kim Cương',
                price: 85000,
                description: 'Vẻ đẹp lung linh như kim cương.',
                stock: 100,
                categoryId: categories[3].id,
                imageUrl: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e5f?auto=format&fit=crop&q=80&w=400',
                careInstructions: { light: 'Nắng nhiều', water: '1 lần/tuần', temp: '15-35°C' }
            }
        ]);

        // 3. Create Admin User
        await db.User.create({
            fullName: 'Quản trị viên',
            email: 'admin@greenlife.vn',
            password: 'password123',
            role: 'admin'
        });

        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
