---
name: fix-bug
description: Quy trình tìm kiếm nguyên nhân gốc rễ và sửa chữa lỗi phần mềm một cách an toàn.
---

# Quy trình Sửa lỗi (Fix Bug)

Skill này giúp tiếp cận việc sửa lỗi một cách khoa học, tránh việc "sửa chỗ này hỏng chỗ kia".

## Các bước thực hiện

### Bước 1: Tái hiện lỗi (Reproduction)
- Thu thập thông tin: Lỗi xảy ra khi nào? Ở môi trường nào? Input là gì?
- Tạo kịch bản tái hiện: Viết một đoạn code nhỏ hoặc mô tả các bước để lỗi luôn xuất hiện.
- **Quan trọng**: Không bắt đầu sửa nếu chưa tái hiện được lỗi.

### Bước 2: Phân tích nguyên nhân gốc rễ (RCA)
- Kiểm tra log, stack trace.
- Sử dụng các công cụ debug để theo dõi giá trị biến.
- Đặt câu hỏi "Tại sao?" 5 lần để tìm ra nguyên nhân sâu xa thay vì chỉ sửa triệu chứng.

### Bước 3: Triển khai giải pháp (Surgical Fix)
- Sửa lỗi một cách "phẫu thuật": Chỉ thay đổi những gì thực sự cần thiết.
- Tuân thủ quy định comment tiếng Việt để giải thích lý do tại sao đoạn code đó gây lỗi.

### Bước 4: Kiểm tra hồi quy (Regression Testing)
- Đảm bảo lỗi đã biến mất.
- Đảm bảo các tính năng liên quan vẫn hoạt động bình thường.
- (Khuyến nghị) Viết Unit Test cho trường hợp lỗi này để nó không bao giờ lặp lại.

## Lưu ý
- Nếu là lỗi nghiêm trọng, hãy báo cáo ngay cho người dùng về mức độ ảnh hưởng.
- Lưu lại nhật ký sửa lỗi nếu cần thiết trong `docs/`.
