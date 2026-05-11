# Tài liệu Kiểm thử (Testing): GreenLife

## 1. Chiến lược Kiểm thử
Đảm bảo hệ thống hoạt động ổn định từ việc truy xuất dữ liệu cây cảnh đến quy trình thanh toán đơn hàng.

## 2. Các cấp độ Kiểm thử
- **Unit Testing:** Kiểm tra các hàm logic trong `services` (ví dụ: tính toán phí vận chuyển, giảm giá).
    - Công cụ: Mocha/Chai hoặc Jest.
- **Integration Testing:** Kiểm tra sự kết nối giữa Controller, Service và Database (PostgreSQL).
- **UI/UX Testing:** Kiểm tra tính đáp ứng (Responsive) trên các thiết bị di động và trình duyệt khác nhau.

## 3. Các kịch bản trọng yếu (Critical Test Cases)
- **Luồng mua hàng:** Tìm sản phẩm -> Thêm vào giỏ -> Thanh toán thành công.
- **Phân quyền:** Chỉ Admin mới được truy cập trang Dashboard quản trị.
- **Validation:** Đảm bảo dữ liệu nhập vào (email, số điện thoại) là hợp lệ.
