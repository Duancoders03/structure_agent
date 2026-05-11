# Tài liệu Triển khai (Deployment): GreenLife

## 1. Môi trường Triển khai
- **Local:** Node.js 18+, PostgreSQL 14+.
- **Staging/Production:** Render, Heroku hoặc AWS.

## 2. Cấu hình Docker (Tùy chọn)
- `Dockerfile`: Định nghĩa môi trường chạy Node.js.
- `docker-compose.yml`: Kết nối ứng dụng Express với container PostgreSQL.

## 3. Quy trình Triển khai (CI/CD)
- Sử dụng **GitHub Actions** để tự động chạy kiểm thử khi có code mới được push lên nhánh `main`.
- Tự động deploy lên hosting sau khi các bài kiểm tra vượt qua.

## 4. Biến môi trường (Environment Variables)
Cần cấu hình các biến sau trong quá trình triển khai:
- `PORT`: Cổng chạy ứng dụng.
- `DATABASE_URL`: Đường dẫn kết nối tới PostgreSQL.
- `SESSION_SECRET`: Chuỗi bảo mật cho session.
- `CLOUDINARY_URL`: (Nếu có) Để quản lý hình ảnh.
