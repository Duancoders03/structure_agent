exports.index = (req, res) => {
    // Mock cart data
    const cartItems = [
        { id: 1, name: 'Cây Lưỡi Hổ', price: 150000, quantity: 1, imageUrl: 'https://images.unsplash.com/photo-1599591037488-dc79493956a2?q=80&w=500&auto=format&fit=crop' },
        { id: 2, name: 'Cây Monstera', price: 450000, quantity: 2, imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=500&auto=format&fit=crop' }
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 30000;
    const total = subtotal + shipping;

    res.render('cart/views/index', {
        title: 'Giỏ hàng - GreenLife',
        cartItems,
        subtotal,
        shipping,
        total
    });
};
