---
name: code-review
description: Tiêu chuẩn và quy trình kiểm tra mã nguồn để đảm bảo chất lượng, bảo mật và hiệu suất.
---

# Quy trình Review Mã nguồn (Code Review)

Skill này thiết lập các tiêu chuẩn để đánh giá mã nguồn, giúp duy trì tính ổn định và sạch sẽ cho dự án.

## Tiêu chí Review

### 1. Tính đúng đắn & Logic
- Code có thực sự giải quyết được vấn đề không?
- Có các trường hợp biên (edge cases) nào chưa được xử lý không?
- Logic có bị dư thừa hoặc gây lãng phí tài nguyên không?

### 2. Phong cách Lập trình (Style & Convention)
- **Comment**: Có viết bằng tiếng Việt và ngắn gọn không?
- **Đặt tên**: Tên biến/hàm có mang tính mô tả cao (bằng tiếng Anh) không?
- **Cấu trúc**: Code có tuân thủ cấu trúc của dự án không?

### 3. Hiệu suất & Bảo mật
- Có các truy vấn database nào quá chậm không (Check `postgres-patterns`)?
- Có rò rỉ dữ liệu hoặc lỗi bảo mật tiềm tàng (SQL Injection, XSS) không?
- Việc xử lý các mảng/đối tượng lớn có tối ưu không?

### 4. Khả năng Bảo trì
- Hàm có quá dài không (nên < 30 dòng)?
- Có bị vi phạm nguyên tắc DRY (Don't Repeat Yourself) không?
- File có quá cồng kềnh không?

## Cách phản hồi Review
- Luôn mang tính xây dựng và tích cực.
- Giải thích rõ **tại sao** cần thay đổi thay vì chỉ bảo "làm thế này đi".
- Khen ngợi những đoạn code tốt để khích lệ tinh thần.

## Lệnh kích hoạt
- Khi người dùng yêu cầu: "Review giúp mình đoạn code này" hoặc "Kiểm tra chất lượng file X".
