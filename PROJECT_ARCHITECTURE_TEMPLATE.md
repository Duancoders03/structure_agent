# Kiến trúc Dự án: GreenLife (Node.js + EJS + TailwindCSS)

## 1. Công nghệ Sử dụng (Tech Stack)
- **Backend:** Node.js (Express framework).
- **Template Engine:** EJS (Embedded JavaScript).
- **Styling:** TailwindCSS.
- **Database:** PostgreSQL.
- **ORM:** Sequelize để quản lý Schema và Migrations.

## 2. Cấu trúc Thư mục (Project Structure)
Dự án được tổ chức theo kiến trúc **Modular (Module-based Architecture)** để đảm bảo tính đóng gói, dễ mở rộng và quản lý theo từng domain nghiệp vụ.

```text
/
├── src/
│   ├── config/             # Cấu hình hệ thống (Database, Env, Cloudinary...)
│   ├── modules/            # Các module chức năng (Domain-driven modules)
│   │   ├── admin/          # Module quản trị (Admin Dashboard)
│   │   │   ├── controllers/# Xử lý yêu cầu cho module admin
│   │   │   ├── services/   # Logic nghiệp vụ của admin
│   │   │   ├── routes/     # Định nghĩa các tuyến đường của admin
│   │   │   └── views/      # Các file EJS cụ thể cho admin
│   │   ├── home/           # Module trang chủ
│   │   ├── products/       # Module quản lý sản phẩm
│   │   └── auth/           # Module xác thực người dùng
│   ├── routes/             # Router trung tâm (Centralized routes)
│   ├── models/             # Định nghĩa các Model (Sequelize Schema) dùng chung
│   ├── middlewares/        # Các bộ lọc trung gian (Auth, Validation...)
│   ├── utils/              # Các hàm tiện ích (Helpers) dùng chung
│   ├── views/              # Template dùng chung (layouts, partials)
│   ├── public/             # Tài nguyên tĩnh (css, js, images)
│   ├── app.js              # Điểm khởi đầu của ứng dụng (Express app)
│   └── server.js           # Khởi tạo server và lắng nghe kết nối
├── styles/                 # Chứa file CSS nguồn cho Tailwind
├── tailwind.config.js      # Cấu hình TailwindCSS
├── .env                    # Biến môi trường
├── package.json            # Quản lý dependencies và scripts
└── README.md
```

## 3. Luồng Xử lý Dữ liệu
1. **Request:** Người dùng gửi yêu cầu từ trình duyệt.
2. **Middleware:** Các middleware dùng chung (tại `src/middlewares`) kiểm tra quyền truy cập hoặc log dữ liệu.
3. **Central Router:** Yêu cầu đi qua `src/routes/index.js` để định hướng về module tương ứng.
4. **Module Router:** Định hướng yêu cầu tới Router của từng module (tại `src/modules/{module}/routes`).
5. **Controller:** Router chuyển hướng yêu cầu tới Controller tương ứng trong module.
6. **Service:** Controller gọi Service trong cùng module để xử lý logic nghiệp vụ chi tiết.
7. **Model:** Service tương tác với Model chung (tại `src/models`) để truy xuất/cập nhật Database.
8. **Response:** Controller nhận dữ liệu từ Service, đổ vào EJS Template của module (`src/modules/{module}/views`) hoặc template dùng chung (`src/views`) và trả về HTML.

## 4. Tích hợp TailwindCSS
- **Source:** `styles/tailwind.css` chứa các directive Tailwind.
- **Build Script:** Sử dụng lệnh `npx tailwindcss -i ./styles/tailwind.css -o ./src/public/css/main.css --watch` trong quá trình phát triển.
- **Config:** File `tailwind.config.js` được cấu hình để quét toàn bộ file `.ejs` trong thư mục `src/modules/` và `src/views/`.

## 5. Quy tắc Phát triển cho AI Agent
- Luôn ưu tiên viết logic xử lý dữ liệu trong `services` của từng module.
- Các thành phần giao diện dùng chung phải được đặt trong `src/views/partials`.
- Khi tạo tính năng mới, hãy tạo một module mới trong `src/modules/` thay vì viết vào các folder chung.
- Đảm bảo tính độc lập giữa các module, chỉ chia sẻ các tài nguyên thực sự dùng chung qua các thư mục tại gốc `src/` (models, utils...).
