# Yêu cầu Dự án: GreenLife - Hệ thống Bán hàng Cây cảnh Trực tuyến

## 1. Tổng quan Dự án
**GreenLife** là một nền tảng thương mại điện tử cao cấp chuyên cung cấp các loại cây cảnh trong nhà và ngoài trời. Mục tiêu là tạo ra một trải nghiệm mua sắm "xanh", thư giãn và hiện đại, giúp người dùng dễ dàng tìm kiếm và chăm sóc không gian sống của họ.

## 2. Mục tiêu Thiết kế (Aesthetics & UX)
- **Phong cách:** Hiện đại, tối giản, mang hơi hướng thiên nhiên (Eco-friendly).
- **Màu sắc:** Sử dụng bảng màu xanh lá (Emerald, Forest Green), trắng kem (Cream) và màu đất (Earth tones). Sử dụng Gradient mềm mại.
- **Hiệu ứng:** 
    - Sử dụng **Glassmorphism** cho các panel thông tin.
    - **Micro-animations:** Hiệu ứng hover nhẹ nhàng trên các chậu cây, loading mượt mà.
    - **Typography:** Sử dụng các font hiện đại như *Outfit* hoặc *Montserrat*.

## 3. Các Tính năng Chính

### 3.1. Phân hệ Khách hàng
1. **Trang chủ (Home):**
    - Hero section ấn tượng với hình ảnh cây xanh chất lượng cao.
    - Danh mục nổi bật (Cây văn phòng, Cây quà tặng, Cây lọc không khí).
2. **Cửa hàng (Shop/Catalog):**
    - Bộ lọc thông minh: Theo điều kiện ánh sáng, nhu cầu nước, kích thước, và mức độ dễ chăm sóc.
    - Chế độ xem lưới (Grid) và danh sách (List).
3. **Chi tiết Sản phẩm:**
    - Gallery hình ảnh thực tế.
    - Thông số kỹ thuật & Hướng dẫn chăm sóc (Light, Water, Temp).
    - Đánh giá từ khách hàng.
4. **Giỏ hàng & Thanh toán:**
    - Quy trình thanh toán tinh gọn, bảo mật.
    - Tích hợp mã giảm giá.
5. **Tài khoản cá nhân:**
    - Quản lý đơn hàng, địa chỉ nhận hàng.
    - Danh sách cây yêu thích (Wishlist).

### 3.2. Phân hệ Quản trị (Admin Dashboard)
1. **Quản lý Kho hàng:** Thêm/sửa/xóa sản phẩm, cập nhật số lượng tồn kho.
2. **Quản lý Đơn hàng:** Theo dõi trạng thái vận chuyển, xử lý thanh toán.
3. **Thống kê:** Biểu đồ doanh thu và xu hướng sản phẩm được yêu thích.

## 4. Câu chuyện Người dùng (User Stories)
1. **Là khách hàng**, tôi muốn tìm kiếm cây theo điều kiện "ít ánh sáng" vì căn hộ của tôi không có nhiều cửa sổ.
2. **Là khách hàng**, tôi muốn đọc hướng dẫn chăm sóc trước khi mua để đảm bảo tôi có thể giữ cây sống tốt.
3. **Là người mới chơi cây**, tôi muốn xem các "Combo khởi đầu" để dễ dàng làm xanh không gian.
4. **Là quản trị viên**, tôi muốn nhận thông báo khi một loại cây sắp hết hàng để kịp nhập thêm.

## 5. Yêu cầu Kỹ thuật
- **Frontend:** HTML5, CSS3 (Tailwind CSS), JavaScript (ES6+).
- **Backend:** Node.js (Express), EJS Template Engine.
- **Database:** PostgreSQL (Sequelize ORM).
- **Cấu trúc:** Linh hoạt, Responsive trên mọi thiết bị (Mobile, Tablet, Desktop).
- **SEO:** Tối ưu title, meta description và cấu trúc heading cho các trang sản phẩm.
