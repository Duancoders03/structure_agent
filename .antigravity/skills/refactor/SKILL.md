---
name: refactor
description: Cải thiện cấu trúc mã nguồn mà không làm thay đổi hành vi bên ngoài của hệ thống.
---

# Quy trình Tái cấu trúc (Refactoring)

Skill này hướng dẫn cách làm sạch code, giảm nợ kỹ thuật (technical debt) và tăng khả năng mở rộng.

## Khi nào cần Refactor?
- Khi thấy code bị lặp lại (vi phạm DRY).
- Khi một hàm hoặc class gánh vác quá nhiều trách nhiệm (vi phạm Single Responsibility).
- Khi code quá khó hiểu hoặc khó bảo trì.
- Khi cần chuẩn bị cho một tính năng mới sắp triển khai.

## Các bước thực hiện

### 1. Chuẩn bị
- Đảm bảo đã có Unit Test bao phủ chức năng hiện tại.
- Xác định mục tiêu cụ thể: Làm gọn hàm, tách component, hay tối ưu logic?

### 2. Thực hiện từng bước nhỏ (Small Steps)
- Không thay đổi quá nhiều thứ cùng một lúc.
- Sau mỗi thay đổi nhỏ, hãy chạy lại test để đảm bảo không làm hỏng tính năng cũ.

### 3. Áp dụng các kỹ thuật Refactor
- **Extract Method**: Tách các đoạn code phức tạp ra thành hàm riêng.
- **Rename**: Đặt lại tên biến/hàm cho rõ nghĩa hơn.
- **Simplify Conditionals**: Làm gọn các câu lệnh `if/else` lồng nhau.
- **Move logic**: Đưa logic về đúng vị trí (ví dụ: từ Controller vào Service).

### 4. Review & Kiểm chứng
- Tự kiểm tra lại xem code mới có thực sự sạch hơn không.
- Đảm bảo hiệu suất không bị giảm sút.
- Comment giải thích cấu trúc mới bằng tiếng Việt.

## Nguyên tắc vàng
- "Nếu nó không hỏng, đừng sửa" - Chỉ refactor khi thực sự mang lại giá trị lâu dài.
- Luôn giữ cho code đơn giản nhất có thể.
