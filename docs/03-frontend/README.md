# Tài liệu Frontend: GreenLife

## 1. Công nghệ & Styling
- **Template Engine:** EJS (Embedded JavaScript).
- **CSS Framework:** TailwindCSS.
- **Client-side Scripting:** Vanilla JavaScript (ES6+).
- **Icons:** FontAwesome hoặc Lucide Icons.

## 2. Hệ thống Thiết kế (Design System)

### 2.1. Bảng màu (Color Palette)
- **Client (Nature-inspired):** Mang lại cảm giác thư giãn, xanh mát.
    - `Primary`: `#2D5A27` (Forest Green) - Dùng cho nút chính, logo.
    - `Secondary`: `#8FBC8F` (Dark Sea Green) - Dùng cho các thẻ, background nhẹ.
    - `Accent`: `#DAA520` (Goldenrod) - Dùng cho các điểm nhấn, khuyến mãi.
    - `Surface`: `#FCFBF4` (Cream) - Dùng cho nền trang web.
- **Admin (Professional & Clean):** Tập trung vào hiệu suất và sự rõ ràng.
    - `Primary`: `#1E293B` (Slate 800) - Thanh sidebar và tiêu đề.
    - `Success`: `#10B981` (Emerald 500) - Nút "Thêm mới", "Lưu".
    - `Danger`: `#EF4444` (Red 500) - Nút "Xóa", "Hủy".
    - `Warning`: `#F59E0B` (Amber 500) - Trạng thái "Đang xử lý".

### 2.2. Quy ước Nút bấm (Button Components)
Sử dụng các lớp Tailwind chuẩn để đảm bảo tính đồng nhất:
- **Primary Button:** `bg-forest-green text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all` (Client) hoặc `bg-slate-800 text-white rounded-md` (Admin).
- **Secondary Button:** `border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white`.
- **Danger Button:** `bg-red-500 text-white hover:bg-red-600` (Chủ yếu dùng trong Admin).
- **Ghost/Link Button:** `text-gray-600 hover:text-forest-green transition-colors`.

### 2.3. Typography
    - Heading: *Montserrat* hoặc *Outfit*.
    - Body: *Inter* hoặc *Roboto*.

## 3. Cấu trúc Components (Partials)
- `header.ejs`: Thanh điều hướng và giỏ hàng nhanh.
- `footer.ejs`: Thông tin liên hệ và link mạng xã hội.
- `plant-card.ejs`: Thẻ hiển thị sản phẩm cây (bao gồm tên, giá, và badge mức độ chăm sóc).
- `care-indicators.ejs`: Các icon hiển thị nhu cầu nước/ánh sáng.

## 4. Giao diện Quản trị (Admin UI)
- **Layout:** Sidebar cố định bên trái, Header chứa thông báo và thông tin user, Content thay đổi bên phải.
- **Tables:** Sử dụng bảng trắng với border mảnh, có phân trang và bộ lọc nhanh.
- **Badges:** Trạng thái đơn hàng (Mới: Blue, Đã giao: Green, Đã hủy: Red).

## 5. Hiệu ứng & Tương tác
- **Hover effects:** Phóng to nhẹ hình ảnh cây khi di chuột qua.
- **Lazy loading:** Tối ưu hóa việc tải hình ảnh cây cảnh.
- **AJAX Cart:** Thêm vào giỏ hàng và cập nhật mini-cart mà không cần load lại trang (gửi yêu cầu đến server-side và nhận phản hồi để cập nhật UI nhanh).
