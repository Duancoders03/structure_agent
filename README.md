# GreenLife - Hệ thống Bán hàng Cây cảnh Trực tuyến 🌿

**GreenLife** là một nền tảng thương mại điện tử hiện đại, chuyên cung cấp trải nghiệm mua sắm cây xanh trực tuyến cao cấp. Dự án được xây dựng trên bộ khung **Structure Agent** để tối ưu hóa sự phối hợp giữa con người và AI.

## 🚀 Tổng quan Dự án
- **Mục tiêu:** Kết nối người dùng với không gian sống xanh thông qua giao diện thẩm mỹ và hệ thống hỗ trợ chăm sóc cây thông minh.
- **Tech Stack chính:** Node.js, EJS, TailwindCSS, PostgreSQL (Sequelize ORM).
- **Trạng thái:** Đã hoàn thiện tài liệu thiết kế & kiến trúc (Giai đoạn Docs).

## 📂 Hệ thống Tài liệu Đồng nhất

Dưới đây là bản đồ dẫn đường cho toàn bộ dự án, đảm bảo tính nhất quán giữa yêu cầu, thiết kế và triển khai:

### 1. Yêu cầu & Tính năng
- **[Yêu cầu Dự án](PROJECT_REQUIREMENTS.md):** Tầm nhìn, mục tiêu thiết kế (Nature-inspired) và các User Stories.
- **[Tính năng Cốt lõi](docs/features/core-features.md):** Chi tiết về bộ lọc thông minh, trang Smart Care và hệ thống Admin.

### 2. Kiến trúc & Kỹ thuật
- **[Mẫu Kiến trúc](PROJECT_ARCHITECTURE_TEMPLATE.md):** Cấu trúc thư mục MVC + Service Layer, luồng xử lý dữ liệu.
- **[Thiết kế Hệ thống](docs/01-system-design/README.md):** Sơ đồ Database PostgreSQL, các bảng dữ liệu chính.
- **[Tài liệu Backend](docs/02-backend/README.md):** Chi tiết ORM (Sequelize), Migrations và API Routes.

### 3. Giao diện & Trải nghiệm (UI/UX)
- **[Tài liệu Frontend](docs/03-frontend/README.md):** Quy chuẩn thiết kế (Design System), bảng màu (Forest Green), quy tắc nút bấm cho Client & Admin.

### 4. Kiểm thử & Triển khai
- **[Kế hoạch Kiểm thử](docs/04-testing/README.md):** Chiến lược test luồng mua hàng và phân quyền.
- **[Hướng dẫn Triển khai](docs/05-deployment/README.md):** Cấu hình Docker và biến môi trường.

## 🛠️ Quy tắc Đồng nhất (Convention)
- **Ngôn ngữ:** Code bằng Tiếng Anh, Comment bằng Tiếng Việt.
- **Thiết kế:** Luôn ưu tiên Tailwind Utility classes, tuân thủ bảng màu Forest Green đã định nghĩa.
- **Database:** Mọi thay đổi schema phải thông qua Sequelize Migrations.

## 🛠️ Hướng dẫn Khởi chạy (Quick Start)

1. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

2. **Cấu hình môi trường:**
   - Tạo file `.env` (đã có sẵn mẫu trong repo).
   - Đảm bảo PostgreSQL đang chạy và khớp với cấu hình trong `.env`.

3. **Build CSS (Tailwind):**
   ```bash
   npm run build:css
   ```

4. **Chạy ứng dụng (Development):**
   ```bash
   npm run dev
   ```

---
*Dự án được phát triển với sự hỗ trợ của Antigravity AI - Luôn duy trì tính nhất quán và cấu trúc chuẩn.*
