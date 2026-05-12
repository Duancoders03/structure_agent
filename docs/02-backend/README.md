# Hướng dẫn Phát triển Backend: GreenLife

## 1. Cấu trúc Thư mục (Project Structure)
```text
src/
├── modules/        # Các module chức năng (Ví dụ: admin, home, products...)
│   ├── {module}/
│   │   ├── controllers/ # Tiếp nhận request & Render EJS của module
│   │   ├── services/    # Logic nghiệp vụ riêng của module
│   │   ├── routes/     # Khai báo các Routes của module
│   │   └── views/      # Templates EJS riêng của module
├── routes/         # Router trung tâm (Centralized routing)
├── models/         # Định nghĩa Schema (Sequelize Models) dùng chung
├── middlewares/    # Kiểm tra Auth, Validation, Logging
├── utils/          # Helpers dùng chung
├── views/          # Layouts và Partials dùng chung
├── public/         # Tài sản tĩnh (CSS, JS, Images)
├── config/         # Cấu hình DB, Passport, Session
├── app.js          # Khởi tạo Express App
└── server.js       # Điểm khởi đầu Server
```

## 2. Web Routes & Controller Mapping
Tất cả các route trả về HTML thông qua `res.render()`.

| Phân hệ | Route | Controller | Service/Logic |
| :--- | :--- | :--- | :--- |
| **User** | `/` | `HomeController` | `ProductService` |
| | `/shop` | `ProductController` | `ProductService` |
| | `/cart` | `CartController` | `Session/CartService` |
| | `/checkout`| `OrderController` | `OrderService` |
| **Admin**| `/admin` | `AdminController.dashboard` | Lấy stats & đơn hàng gần đây |
| | `/admin/products` | `AdminController.products` | List + Filter (Sequelize Op) |
| | `/admin/products/create` | `AdminController.storeProduct`| Xử lý Create + CareGuide JSON |
| | `/admin/products/:id/edit`| `AdminController.updateProduct`| Xử lý Update theo ID |
| | `/admin/orders` | `AdminController.orders` | Quản lý trạng thái & Shipping |
| | `/admin/users` | `AdminController.users` | Quản lý Account & Phân quyền |

## 3. Chi tiết Service Layer (Kịch bản code)
- **ProductService:**
    - `list(params)`: Trả về sản phẩm kèm phân trang và lọc.
    - `getDetail(slug)`: Trả về thông tin cây + CareGuide liên quan.
- **CartService (Logic Session):**
    - `sync(sessionCart, dbUser)`: Hợp nhất giỏ hàng khi người dùng đăng nhập.
- **OrderService:**
    - `placeOrder(data)`: Tạo Order, OrderItems và trừ tồn kho (Transaction-safe).

## 4. Cơ sở dữ liệu (Database Layer) 🗄️

Hệ thống sử dụng **PostgreSQL** kết hợp với **Sequelize ORM** để quản lý dữ liệu thông qua **Migrations**.

### 4.1. Cấu hình Sequelize CLI
- Dự án sử dụng `.sequelizerc` để định cấu hình đường dẫn cho models, migrations và seeders.
- File cấu hình DB chính nằm tại `src/config/config.js`, hỗ trợ đọc biến môi trường từ `.env`.

### 4.2. Quy trình Phát triển Database
1. **Tạo Migration mới:**
   - `npx sequelize-cli migration:generate --name {tên_migration}`
2. **Chạy Migration:**
   - `npx sequelize-cli db:migrate` (Cập nhật database lên bản mới nhất)
3. **Hoàn tác Migration:**
   - `npx sequelize-cli db:migrate:undo` (Hoàn tác 1 bước gần nhất)

### 4.3. Seeding Dữ liệu
- **Seeder tập trung:** Dự án sử dụng script `src/config/seed.js` để khởi tạo dữ liệu mẫu nhanh chóng.
- **Lệnh chạy:** `node src/config/seed.js`
- **Lưu ý:** Script seed sẽ thực hiện `sync({ force: true })` nên chỉ dùng cho môi trường Development.

### 4.4. Bảo mật & Validation
- **Password Hashing:** Tự động băm mật khẩu bằng `bcryptjs` thông qua các hook trong Model User.
- **Validation:** Kiểm tra định dạng Email, giá tiền và số lượng tồn kho ngay tại lớp Model.

## 5. Xử lý Lỗi & Logging
- **Global Error Handler:** Middleware bắt các lỗi 404, 500 và render trang lỗi thân thiện.
- **Logger:** Sử dụng `morgan` cho request logging trong môi trường dev.
