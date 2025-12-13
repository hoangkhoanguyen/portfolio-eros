# Tài liệu mô tả dự án Portfolio cá nhân kèm Blog

## 1. Mục tiêu dự án

- Xây dựng website portfolio cá nhân, giới thiệu bản thân, kỹ năng, dự án nổi bật.
- Tích hợp blog cá nhân để chia sẻ kiến thức, kinh nghiệm.
- Giao diện hiện đại, responsive, hỗ trợ dark/light mode, đa ngôn ngữ.

---

## 2. Công nghệ sử dụng

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS** (tùy biến theme, responsive)
- **Zustand** (quản lý state theme)
- **Lucide React** (icon)
- **vaul** (Drawer UI)
- **Class Variance Authority (CVA)** (quản lý variant cho UI)
- **PostCSS** (xử lý CSS)
- **ESLint** (chuẩn hóa code)
- **React Context** (chia sẻ state UI)

---

## 3. Cấu trúc thư mục src/

- **app/**: Thư mục chính cho routing và layout của Next.js (App Router)

  - `globals.css`: CSS toàn cục.
  - `layout.tsx`: File layout gốc cho toàn bộ app.
  - `page.tsx`: Trang chủ (home page).
  - `about-me/`, `blogs/`, `projects/`: Các route động, mỗi thư mục chứa file `page.tsx` riêng cho từng trang.

- **components/**: Thư mục chứa toàn bộ UI component của dự án, tổ chức theo nhóm chức năng/phạm vi sử dụng. Quy ước các thư mục con 1 cấp như sau:

  - `ui/`: Các UI element nhỏ, tái sử dụng nhiều nơi (button, drawer, ...).
  - `layout/`: Các thành phần layout cấp cao như `Header.tsx`, `Footer.tsx`, các switcher (`LanguageSwitcher.tsx`, `PaletteSwitcher.tsx`, `ThemeToggle.tsx`).
  - `features/`: Các component đặc thù cho từng tính năng hoặc trang, ví dụ `features/home-page/` chứa các section chính của trang chủ (`HeroSection.tsx`, ...).
  - `shared/`: Dự kiến chứa các component dùng chung cho nhiều tính năng/trang (hiện tại để trống).

  > Khi thêm component mới, hãy chọn đúng nhóm phù hợp để mọi người dễ tìm kiếm, tái sử dụng và mở rộng về sau.

- **lib/**: Tiện ích, hàm helper (`utils.ts`).

  > Khi phát triển đến các thư viện nội bộ hoặc cần tổ chức lại, sẽ bổ sung quy ước chi tiết cho thư mục này sau.

- **providers/**: Các provider context (ví dụ: `theme-provider.tsx`).

- **store/**: Quản lý state toàn cục (Zustand, ví dụ: `themeStore.ts`).

---

Tài liệu này giúp mọi thành viên nắm tổng quan dự án, công nghệ, cấu trúc, quy ước trong dự án.
