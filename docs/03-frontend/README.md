# Tài liệu Frontend: GreenLife 🌿

## 1. Công nghệ & Styling
- **Template Engine:** EJS (Embedded JavaScript) với cấu trúc Layout modular.
- **CSS Framework:** TailwindCSS (v3.4+) với các cấu hình custom tokens.
- **Client-side Scripting:** Vanilla JavaScript (ES6+), tập trung vào hiệu năng.
- **Typography:** **Outfit** (Google Fonts) - Phông chữ hiện đại, thanh lịch.

## 2. Hệ thống Thiết kế (Design System)

### 2.1. Bảng màu (Premium Green Palette)
Hệ thống màu sắc được thiết kế để tạo cảm giác thiên nhiên cao cấp và chuyên nghiệp:
- **Primary (Xanh chủ đạo):**
    - `emerald-dark`: `#064e3b` (Deep Forest) - Dùng cho tiêu đề, logo và trạng thái quan trọng.
    - `forest`: `#2d5a27` - Màu xanh tự nhiên cho các thành phần UI.
    - `primary-500`: `#22c55e` - Màu xanh tươi mới cho badge và điểm nhấn.
- **Secondary & Background:**
    - `nature-dark`: `#0a210f` - Nền cho Footer và các section tối màu.
    - `cream`: `#fdfaf6` - Nền chính của toàn trang, giảm mỏi mắt.
- **Accent:**
    - `accent`: `#facc15` (Vàng nắng) - Dùng cho các icon đặc biệt hoặc thông báo ưu đãi.

### 2.2. Thành phần Giao diện (UI Components)
Các class utility được định nghĩa trong `tailwind.css`:
- **Glassmorphism (`.glass`):** Hiệu ứng kính mờ cao cấp với độ mờ lớn (`backdrop-blur-xl`) và đổ bóng tinh tế.
- **Premium Card (`.card-premium`):** Bo góc lớn (`2rem`), hiệu ứng hover zoom và bóng mờ sâu.
- **Gradient Text (`.text-gradient`):** Chuyển sắc từ `emerald-900` sang `emerald-600` cho các tiêu đề quan trọng.

### 2.3. Quy ước Nút bấm (Buttons)
- **Primary Button (`.btn-primary`):** Nền xanh đậm, bo tròn hoàn toàn, có hiệu ứng shadow khi hover và co giãn khi click (`active:scale-95`).
- **Secondary Button (`.btn-secondary`):** Nền trắng, viền xanh mảnh, dùng cho các hành động phụ.

## 3. Hiệu ứng & Tương tác (Animations)
- **Float Animation (`animate-float`):** Hiệu ứng bay nhẹ nhàng cho các hình ảnh cây xanh hoặc thẻ nổi.
- **Fade-in Up (`animate-fade-in-up`):** Hiệu ứng trượt từ dưới lên khi trang được tải.
- **Smooth Scroll:** Cuộn trang mượt mà giữa các section.
- **Sticky Header:** Tự động thu gọn và đổi màu khi người dùng cuộn chuột.

## 4. Giao diện Quản trị (Admin UI) 🛠️

Giao diện Admin được thiết kế tập trung vào hiệu suất công việc với phong cách hiện đại (Clean & Professional):

### 4.1. Cấu trúc Layout Quản trị
- **Collapsible Sidebar (Thanh điều hướng thu gọn):**
    - Chế độ mở rộng (`w-72`): Hiển thị đầy đủ Icon và Nhãn chữ.
    - Chế độ thu gọn (`w-20`): Chỉ hiển thị Icon để tối ưu không gian cho bảng dữ liệu.
    - **Persistence:** Trạng thái đóng/mở được lưu trữ vào `localStorage` (`admin-sidebar-collapsed`), đảm bảo trải nghiệm đồng nhất sau khi tải lại trang.
- **Top Header:**
    - Cao `h-28` với khoảng đệm `pt-8` để tạo sự thông thoáng.
    - Chứa nút Toggle Sidebar, tiêu đề trang động, thông báo và thông tin User.

### 4.2. Thành phần đặc thù Admin
- **Stat Cards (Thẻ thống kê):** Sử dụng các biến thể của `.card-premium` với icon màu sắc (Emerald, Blue, Purple, Orange) để phân loại dữ liệu.
- **Data Tables:** Sử dụng nền trắng, bo góc lớn, phân tách bằng đường kẻ mảnh `slate-50`.

## 5. Cấu trúc Thư mục & Layouts
- `src/views/layouts/main.ejs`: Layout cho khách hàng (Client).
- `src/views/layouts/admin.ejs`: Layout cho quản trị viên (Admin), bao gồm logic Sidebar.
- `styles/tailwind.css`: Định nghĩa các thành phần dùng chung như `.btn-primary`, `.card-premium`, `.glass`.

## 6. Tiêu chuẩn UI/UX
- **Mobile First:** Mọi thành phần đều được thiết kế responsive từ di động.
- **Accessibility:** Đảm bảo độ tương phản màu sắc giữa văn bản và nền.
- **Performance:** Tối ưu hóa render bằng cách hạn chế sử dụng quá nhiều thư viện JS nặng, ưu tiên xử lý bằng CSS và Vanilla JS.

