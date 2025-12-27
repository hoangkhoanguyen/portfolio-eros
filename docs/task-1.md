## Task 1: Bổ sung cấu hình màu sắc cho theme

### Mục tiêu

Mở rộng hệ thống cấu hình màu sắc của project, bổ sung các biến màu mới ngoài các biến primary (main/light/dark) đã có.

### Yêu cầu chi tiết

1. **Bổ sung các biến màu mới vào hệ thống theme:**

   - `--pallete-background-light`
   - `--pallete-background-dark`
   - `--pallete-surface-light`
   - `--pallete-surface-dark`

2. **Đảm bảo các biến màu này được định nghĩa rõ ràng trong file cấu hình theme.**

   - globals.css
   - themeStore.ts

### Bảng mã màu cho các theme

| Biến màu                   | Default | Green   | Orange  |
| -------------------------- | ------- | ------- | ------- |
| --pallete-background-light | #f6f7f8 | #f8fafc | #fffaf5 |
| --pallete-background-dark  | #101822 | #0f1c15 | #1c1917 |
| --pallete-surface-light    | #ffffff | #ffffff | #ffffff |
| --pallete-surface-dark     | #1a222c | #1b2922 | #292524 |
