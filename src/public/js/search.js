const searchInput = document.getElementById('quick-search');
const resultsDiv = document.getElementById('search-results');

if (searchInput) {
    searchInput.addEventListener('input', async (e) => {
        const query = e.target.value;
        if (query.length < 2) {
            resultsDiv.classList.add('hidden');
            return;
        }

        try {
            const response = await fetch(`/shop/api/search?query=${query}`);
            const products = await response.json();

            if (products.length > 0) {
                resultsDiv.innerHTML = products.map(product => `
                    <a href="/shop/${product.id}" class="flex items-center gap-4 p-4 hover:bg-emerald-50 transition-colors border-b border-gray-50 last:border-0">
                        <img src="${product.imageUrl}" class="w-12 h-12 rounded-lg object-cover">
                        <div>
                            <div class="font-bold text-sm">${product.name}</div>
                            <div class="text-xs text-emerald-600">${product.price.toLocaleString('vi-VN')}đ</div>
                        </div>
                    </a>
                `).join('') + `
                    <button type="submit" class="w-full p-3 text-center text-xs font-bold text-gray-500 bg-gray-50 hover:bg-gray-100">
                        Xem tất cả kết quả
                    </button>
                `;
                resultsDiv.classList.remove('hidden');
            } else {
                resultsDiv.innerHTML = '<div class="p-4 text-sm text-gray-500">Không tìm thấy sản phẩm nào.</div>';
                resultsDiv.classList.remove('hidden');
            }
        } catch (error) {
            console.error('Search error:', error);
        }
    });

    // Close results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !resultsDiv.contains(e.target)) {
            resultsDiv.classList.add('hidden');
        }
    });
}
