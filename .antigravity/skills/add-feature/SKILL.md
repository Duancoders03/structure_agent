---
name: add-feature
description: Quy trình phát triển tính năng mới từ khâu tiếp nhận yêu cầu đến khi hoàn thành mã nguồn và kiểm thử.
---

# Quy trình Thêm Tính năng Mới (Add Feature)

Skill này hướng dẫn AI và nhà phát triển cách tiếp cận việc xây dựng tính năng mới một cách hệ thống, đảm bảo tính nhất quán với kiến trúc hiện tại.

## Khi nào sử dụng

- Khi nhận được yêu cầu phát triển một chức năng mới.
- Khi cần mở rộng các module hiện có.
- Khi xây dựng các API hoặc UI components mới.

## Quy trình Thực hiện

### Bước 1: Phân tích & Thu thập Ngữ cảnh
- **Xác định mục tiêu**: Tính năng này giải quyết vấn đề gì cho người dùng?
- **Kiểm tra sự phụ thuộc**: Tính năng này có ảnh hưởng đến các module hiện có không?
- **Đối chiếu Kiến trúc**: Đọc `PROJECT_ARCHITECTURE_TEMPLATE.md` để đảm bảo thiết kế mới phù hợp với cấu trúc chung.

### Bước 2: Thiết kế Giải pháp
- **Đề xuất Technical Design**: Mô tả các thay đổi về Schema DB (nếu có), API endpoints, và logic xử lý.
- **Phân rã tác vụ**: Chia tính năng lớn thành các bước nhỏ dễ kiểm soát.
- **Xác nhận với người dùng**: Trình bày giải pháp và đợi phản hồi trước khi gõ code.

### Bước 3: Triển khai Mã nguồn
- **Tuân thủ Code Style**: Luôn viết comment tiếng Việt ngắn gọn theo `.antigravity/rules/code-style.md`.
- **Viết code sạch**: Đảm bảo tính tái sử dụng và dễ hiểu.
- **Tạo mockup/data mẫu**: Sử dụng dữ liệu giả nếu cần thiết để kiểm thử nhanh.

### Bước 4: Kiểm thử & Hoàn thiện
- **Unit Test**: Kiểm tra các hàm logic quan trọng.
- **Integration Test**: Đảm bảo tính năng mới hoạt động trơn tru với toàn bộ hệ thống.
- **Review**: Tự soát lỗi lại một lần cuối trước khi bàn giao.

## Lưu ý quan trọng
- Luôn cập nhật tài liệu (`PROJECT_REQUIREMENTS.md` hoặc `docs/`) nếu tính năng mới làm thay đổi dòng chảy của dự án.
- Ưu tiên sự đơn giản và hiệu quả.
