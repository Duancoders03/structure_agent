# Hướng dẫn Phát triển Backend: GreenLife

## 1. Cấu trúc Thư mục (Project Structure)
```text
src/
├── controllers/    # Tiếp nhận request & Render EJS
├── services/       # Chứa logic nghiệp vụ (Service Layer)
├── models/         # Định nghĩa Schema & Relationships (Sequelize)
├── views/          # Templates EJS (Partials, Layouts, Pages)
├── routes/         # Khai báo các Web Routes
├── middlewares/    # Kiểm tra Auth, Validation, Logging
├── config/         # Cấu hình DB, Passport, Session
└── public/         # Tài sản tĩnh (CSS, JS, Images)
```

## 2. Web Routes & Controller Mapping
Tất cả các route trả về HTML thông qua `res.render()`.

| Phân hệ | Route | Controller | Service liên quan |
| :--- | :--- | :--- | :--- |
| **User** | `/` | `HomeController` | `ProductService` |
| | `/shop` | `ProductController` | `ProductService` |
| | `/cart` | `CartController` | `Session/CartService` |
| | `/checkout`| `OrderController` | `OrderService`, `PaymentService` |
| **Admin**| `/admin` | `AdminController` | `DashboardService` |
| | `/admin/products` | `AdminProductController` | `ProductService` |

## 3. Chi tiết Service Layer (Kịch bản code)
- **ProductService:**
    - `list(params)`: Trả về sản phẩm kèm phân trang và lọc.
    - `getDetail(slug)`: Trả về thông tin cây + CareGuide liên quan.
- **CartService (Logic Session):**
    - `sync(sessionCart, dbUser)`: Hợp nhất giỏ hàng khi người dùng đăng nhập.
- **OrderService:**
    - `placeOrder(data)`: Tạo Order, OrderItems và trừ tồn kho (Transaction-safe).

## 4. Quy trình Phát triển Database
1. **Thiết kế Model:** Tạo file trong `src/models/`.
2. **Migration:** Luôn tạo file migration để đồng bộ lên Server/Team.
    - `npx sequelize-cli migration:generate --name add-column-to-product`
3. **Seeding:** Dùng `src/seeders/` để tạo dữ liệu cây cảnh phong phú cho môi trường Dev.

## 5. Xử lý Lỗi & Logging
- **Global Error Handler:** Middleware bắt các lỗi 404, 500 và render trang lỗi thân thiện.
- **Logger:** Sử dụng `morgan` cho request logging.
