## Task 2: Cập nhật màu sắc cho các thành phần sử dụng biến theme mới

### Điều kiện thực hiện

- Chỉ thực hiện sau khi đã hoàn thành và commit Task 1 (bổ sung các biến màu theme mới).

### Mục tiêu

Cập nhật các thành phần UI để sử dụng các biến màu theme mới vừa được bổ sung ở Task 1, đảm bảo đồng bộ giao diện và dễ dàng chuyển đổi theme.

### Yêu cầu chi tiết

1. **Cập nhật màu nền (background) của các thành phần sau để sử dụng các biến theme mới:**

   - Header: sử dụng biến `--pallete-background-light` hoặc `--pallete-background-dark` tùy theo theme.
   - Background của các trang Blogs và Projects: sử dụng biến `--pallete-background-light` hoặc `--pallete-background-dark`.
   - Project Card và Blog Card: sử dụng biến `--pallete-surface-light` hoặc `--pallete-surface-dark`.
   - Các thành phần khác có liên quan đến background/surface, cân nhắc chuyển sang dùng biến mới nếu phù hợp.

2. **Đảm bảo các thành phần này không còn hardcode mã màu mà sử dụng biến theme đã định nghĩa.**

3. **Kiểm tra lại giao diện trên cả 2 theme (sáng/tối hoặc các theme khác nếu có) để đảm bảo màu sắc hiển thị đúng mong đợi.**

### Ghi chú

- Không thay đổi logic hoặc layout, chỉ cập nhật về mặt màu sắc.
- Nếu phát hiện thành phần nào chưa có biến màu phù hợp, ghi chú lại để bổ sung ở task sau.

### Kết quả mong đợi

- Tất cả các thành phần liên quan đã sử dụng biến màu theme mới.
- Giao diện đồng bộ, dễ dàng chuyển đổi theme mà không bị lỗi màu sắc.
