---
name: frontend-design
description: Hướng dẫn thiết kế giao diện người dùng hiện đại, thẩm mỹ và tối ưu trải nghiệm (UX).
---

# Quy trình Thiết kế Frontend (Frontend Design)

Skill này đảm bảo các sản phẩm giao diện luôn đạt tiêu chuẩn cao về thẩm mỹ và hiệu dụng.

## Nguyên tắc Thiết kế

### 1. Thẩm mỹ Cao cấp (Premium Aesthetics)
- Sử dụng bảng màu hài hòa (nên dùng HSL thay vì mã hex cơ bản).
- Ưu tiên Dark Mode nếu phù hợp.
- Typography: Sử dụng các font hiện đại từ Google Fonts (Inter, Roboto, Outfit).
- Hiệu ứng: Sử dụng glassmorphism, gradients mịn mượt.

### 2. Trải nghiệm Tương tác (Interactivity)
- Thêm micro-animations khi hover hoặc click.
- Đảm bảo phản hồi tức thì cho hành động của người dùng (loading states, success/error messages).
- Chuyển động mượt mà (transitions/animations).

### 3. Khả năng Đáp ứng (Responsiveness)
- Thiết kế ưu tiên cho di động (Mobile-first).
- Kiểm tra hiển thị trên nhiều kích thước màn hình khác nhau.
- Đảm bảo các thành phần không bị vỡ khi thay đổi kích thước.

### 4. Code sạch & Thành phần (Components)
- Chia nhỏ UI thành các components có thể tái sử dụng.
- Sử dụng biến CSS (CSS Variables) cho màu sắc, khoảng cách để dễ quản lý.
- Đặt tên class theo tiêu chuẩn (BEM hoặc tương đương).

## Công cụ hỗ trợ
- Sử dụng `generate_image` để lấy cảm hứng thiết kế nếu cần.
- Luôn comment giải thích các đoạn CSS phức tạp bằng tiếng Việt.
