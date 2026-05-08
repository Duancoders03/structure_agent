---
name: doc-coauthoring
description: Hướng dẫn người dùng qua quy trình làm việc có cấu trúc để cùng soạn thảo tài liệu. Sử dụng khi người dùng muốn viết tài liệu, đề xuất, thông số kỹ thuật, tài liệu quyết định hoặc nội dung có cấu trúc tương tự. Quy trình này giúp chuyển giao ngữ cảnh hiệu quả, tinh chỉnh nội dung qua các lần lặp và xác minh tài liệu có hiệu quả với người đọc. Kích hoạt khi người dùng đề cập đến việc viết tài liệu, tạo đề xuất, dự thảo thông số kỹ thuật hoặc các tác vụ tài liệu tương tự.
---

# Quy trình Cùng Soạn thảo Tài liệu (Doc Co-Authoring)

Skill này cung cấp một quy trình có cấu trúc để hướng dẫn người dùng cùng tạo tài liệu một cách cộng tác. Hãy đóng vai trò là người hướng dẫn tích cực, dẫn dắt người dùng qua ba giai đoạn: Thu thập Ngữ cảnh, Tinh chỉnh & Cấu trúc, và Kiểm thử với Người đọc.

## Khi nào nên Đề xuất Quy trình này

**Điều kiện kích hoạt:**
- Người dùng đề cập đến việc viết tài liệu: "viết tài liệu", "dự thảo đề xuất", "tạo thông số kỹ thuật", "viết báo cáo"
- Người dùng đề cập đến các loại tài liệu cụ thể: "PRD", "tài liệu thiết kế", "tài liệu quyết định", "RFC"
- Người dùng có vẻ như đang bắt đầu một tác vụ viết lách đáng kể

**Lời đề nghị ban đầu:**
Đề xuất với người dùng một quy trình có cấu trúc để cùng soạn thảo tài liệu. Giải thích ba giai đoạn:

1. **Thu thập Ngữ cảnh**: Người dùng cung cấp tất cả ngữ cảnh liên quan trong khi AI đặt các câu hỏi làm rõ.
2. **Tinh chỉnh & Cấu trúc**: Xây dựng từng phần một cách lặp đi lặp lại thông qua brainstorming và chỉnh sửa.
3. **Kiểm thử với Người đọc**: Kiểm tra tài liệu với một phiên AI mới (không có ngữ cảnh trước đó) để tìm ra các điểm mù trước khi người khác đọc.

Giải thích rằng phương pháp này giúp đảm bảo tài liệu hoạt động tốt khi người khác đọc nó. Hỏi xem họ muốn thử quy trình này hay muốn làm việc tự do.

## Giai đoạn 1: Thu thập Ngữ cảnh

**Mục tiêu:** Thu hẹp khoảng cách giữa những gì người dùng biết và những gì AI biết.

### Các Câu hỏi Ban đầu

Bắt đầu bằng cách hỏi người dùng về ngữ cảnh chung (meta-context) của tài liệu:
1. Đây là loại tài liệu gì? (ví dụ: thông số kỹ thuật, tài liệu quyết định, đề xuất)
2. Đối tượng độc giả chính là ai?
3. Tác động mong muốn khi ai đó đọc tài liệu này là gì?
4. Có mẫu (template) hoặc định dạng cụ thể nào cần tuân theo không?
5. Có bất kỳ ràng buộc hoặc ngữ cảnh nào khác cần biết không?

Thông báo cho họ rằng họ có thể trả lời ngắn gọn hoặc đưa ra thông tin theo bất kỳ cách nào thuận tiện nhất.

### Đổ dữ liệu (Info Dumping)

Khuyến khích người dùng đưa ra tất cả ngữ cảnh họ có:
- Nền tảng của dự án/vấn đề.
- Các cuộc thảo luận nhóm liên quan hoặc tài liệu chia sẻ.
- Tại sao các giải pháp thay thế không được sử dụng.
- Ngữ cảnh tổ chức (động lực nhóm, các sự cố trong quá khứ, chính trị).
- Áp lực thời gian hoặc ràng buộc.
- Kiến trúc kỹ thuật hoặc các phụ thuộc.

**Đặt câu hỏi làm rõ:**
Khi người dùng ra tín hiệu đã hoàn thành việc cung cấp thông tin ban đầu, hãy đặt 5-10 câu hỏi để đảm bảo sự hiểu biết.

## Giai đoạn 2: Tinh chỉnh & Cấu trúc

**Mục tiêu:** Xây dựng tài liệu theo từng phần thông qua brainstorming và tinh chỉnh lặp lại.

**Hướng dẫn cho người dùng:**
Giải thích rằng tài liệu sẽ được xây dựng theo từng phần. Đối với mỗi phần:
1. Đặt câu hỏi làm rõ về nội dung cần đưa vào.
2. Brainstorm 5-20 lựa chọn.
3. Người dùng chọn nội dung để giữ lại/loại bỏ/kết hợp.
4. Dự thảo phần đó.
5. Tinh chỉnh qua các chỉnh sửa nhỏ.

### Các bước cho mỗi phần:

**Bước 1: Câu hỏi làm rõ**
Đặt 5-10 câu hỏi cụ thể dựa trên ngữ cảnh và mục đích của phần đó.

**Bước 2: Brainstorming**
Tạo ra 5-20 ý tưởng hoặc điểm nội dung có thể đưa vào.

**Bước 3: Chọn lọc (Curation)**
Hỏi xem điểm nào nên được giữ lại, loại bỏ hoặc kết hợp.

**Bước 4: Kiểm tra lỗ hổng**
Hỏi xem có thiếu sót quan trọng nào cho phần đó không.

**Bước 5: Dự thảo (Drafting)**
Viết nội dung cho phần đó dựa trên các lựa chọn đã chốt.

**Bước 6: Tinh chỉnh Lặp lại**
Chỉnh sửa dựa trên phản hồi của người dùng cho đến khi họ hài lòng.

## Giai đoạn 3: Kiểm thử với Người đọc

**Mục tiêu:** Kiểm tra tài liệu với một AI "mới tinh" (không có ngữ cảnh cuộc hội thoại hiện tại) để xác minh xem nó có dễ hiểu với độc giả không.

### Cách tiếp cận

1. **Dự đoán câu hỏi của độc giả**: Tạo ra 5-10 câu hỏi mà độc giả thực tế sẽ đặt ra.
2. **Kiểm tra với Sub-Agent**: Sử dụng một phiên AI mới để trả lời các câu hỏi đó chỉ dựa trên nội dung tài liệu.
3. **Báo cáo và Khắc phục**: Nếu AI "độc giả" gặp khó khăn hoặc hiểu sai, hãy quay lại giai đoạn tinh chỉnh để sửa các phần đó.

## Đánh giá Cuối cùng

Khi việc kiểm thử hoàn tất, hãy đề nghị người dùng đọc lại lần cuối và xác minh tính chính xác của các chi tiết kỹ thuật.

---

**Mẹo để hướng dẫn hiệu quả:**
- Luôn giữ giọng điệu trực tiếp và theo quy trình.
- Ưu tiên chất lượng hơn tốc độ.
- Mục tiêu là một tài liệu thực sự có giá trị cho người đọc.
