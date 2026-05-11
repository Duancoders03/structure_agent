# Kiến trúc Dự án: GreenLife (Node.js + EJS + TailwindCSS)

## 1. Công nghệ Sử dụng (Tech Stack)
- **Backend:** Node.js (Express framework).
- **Template Engine:** EJS (Embedded JavaScript).
- **Styling:** TailwindCSS.
- **Database:** PostgreSQL.
- **ORM:** Sequelize để quản lý Schema và Migrations.

## 2. Cấu trúc Thư mục (Project Structure)
Dự án được tổ chức theo mô hình **MVC** (Model-View-Controller) kết hợp với **Service Layer** để đảm bảo tính mở rộng và dễ bảo trì.

```text
/
├── src/
│   ├── config/             # Cấu hình hệ thống (Database, Env, Cloudinary...)
│   ├── core/               # Lớp xử lý logic nghiệp vụ
│   │   ├── controllers/    # Điều hướng yêu cầu và phản hồi
│   │   ├── models/         # Định nghĩa cấu trúc dữ liệu (Schema)
│   │   ├── services/       # Logic nghiệp vụ chi tiết (Business Logic)
│   │   └── utils/          # Các hàm tiện ích dùng chung
│   ├── interface/          # Lớp giao diện người dùng
│   │   ├── views/          # Các file template EJS (.ejs)
│   │   │   ├── partials/   # Thành phần dùng chung (header, footer, nav)
│   │   │   ├── layouts/    # Bố cục khung của trang
│   │   │   └── pages/      # Các trang cụ thể (home, product, cart)
│   │   └── public/         # Tài nguyên tĩnh (đã qua xử lý)
│   │       ├── css/        # File CSS đã build từ Tailwind
│   │       ├── js/         # Client-side JavaScript
│   │       └── images/     # Hình ảnh sản phẩm và UI
│   ├── routes/             # Định nghĩa các tuyến đường (Web & API)
│   ├── middlewares/        # Các bộ lọc trung gian (Auth, Error handling)
│   └── app.js              # Điểm khởi đầu của ứng dụng
├── styles/                 # Chứa file CSS nguồn cho Tailwind
│   └── tailwind.css
├── tailwind.config.js      # Cấu hình TailwindCSS
├── .env                    # Biến môi trường
├── package.json            # Quản lý dependencies và scripts
└── README.md
```

## 3. Luồng Xử lý Dữ liệu
1. **Request:** Người dùng gửi yêu cầu từ trình duyệt.
2. **Middleware:** Kiểm tra quyền truy cập hoặc log dữ liệu.
3. **Router:** Chuyển hướng yêu cầu tới Controller tương ứng.
4. **Controller:** Gọi Service phù hợp để xử lý logic.
5. **Service:** Tương tác với Model để truy xuất/cập nhật Database.
6. **Response:** Controller nhận dữ liệu từ Service, đổ vào EJS Template và trả về HTML cho trình duyệt.

## 4. Tích hợp TailwindCSS
- **Source:** `styles/tailwind.css` chứa các directive `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`.
- **Build Script:** Sử dụng lệnh `npx tailwindcss -i ./styles/tailwind.css -o ./src/interface/public/css/main.css --watch` trong quá trình phát triển.
- **Config:** File `tailwind.config.js` được cấu hình để quét toàn bộ file `.ejs` trong thư mục `src/interface/views/`.

## 5. Quy tắc Phát triển cho AI Agent
- Luôn ưu tiên viết logic xử lý dữ liệu trong `services` thay vì viết trực tiếp trong `controllers`.
- Đảm bảo các component EJS trong `partials` có tính tái sử dụng cao.
- Sử dụng các lớp utility của Tailwind thay vì viết CSS tùy chỉnh trừ khi thực sự cần thiết.
