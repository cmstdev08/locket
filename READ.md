# 🚀 SỔ TAY VẬN HÀNH & HƯỚNG DẪN KỸ THUẬT HỆ THỐNG - ANH TUẤN iOS (V2.6)

> **Cẩm nang toàn diện dành riêng cho Boss Admin Anh Tuấn**: Quản trị website bán **Locket 60s VIP**, **Caption & Khung Viền Widget**, **Duy Trì DNS Vĩnh Viễn**, hệ thống duyệt đơn tự động, bắn thông báo Telegram, khóa máy chống share key và hướng dẫn đổi Repository 1-click.

---

## 📌 MỤC LỤC CHI TIẾT
1. [Bảng Điều Khiển Quản Trị Trực Quan (/admin)](#1-bảng-điều-khiển-quản-trị-trực-quan-admin)
2. [Hệ Thống Duyệt Đơn & Báo Cáo Doanh Thu](#2-hệ-thống-duyệt-đơn--báo-cáo-doanh-thu)
3. [Cấu Hình Bot Telegram Nhận Đơn Hàng & Bill Tức Thì](#3-cấu-hình-bot-telegram-nhận-đơn-hàng--bill-tức-thì)
4. [Cơ Chế Khóa Riêng Từng Nút DNS Độc Lập](#4-cơ-chế-khóa-riêng-từng-nút-dns-độc-lập)
5. [Cơ Chế Chống Dùng Chung Key (Khóa Thiết Bị - Device Lock)](#5-cơ-chế-chống-dùng-chung-key-khóa-thiết-bị---device-lock)
6. [Hệ Thống Marketing Tăng Doanh Số (Flash Sale, Lucky Wheel, Social Proof)](#6-hệ-thống-marketing-tăng-doanh-số-flash-sale-lucky-wheel-social-proof)
7. [Tra Cứu Đơn Hàng & Lấy Key VIP Dành Cho Khách](#7-tra-cứu-đơn-hàng--lấy-key-vip-dành-cho-khách)
8. [Sao Lưu & Khôi Phục Hệ Thống 1-Click (Backup & Restore JSON)](#8-sao-lưu--khôi-phục-hệ-thống-1-click-backup--restore-json)
9. [Hướng Dẫn Đổi Code Sang Repository Mới (Tự Động 100%)](#9-hướng-dẫn-đổi-code-sang-repository-mới-tự-động-100)
10. [Lưu Ý Kỹ Thuật Khi Đẩy Code Git (Conflict & Rebase)](#10-lưu-ý-kỹ-thuật-khi-đẩy-code-git-conflict--rebase)

---

## 1. BẢNG ĐIỀU KHIỂN QUẢN TRỊ TRỰC QUAN (/admin)

Bạn có thể quản trị toàn bộ hệ thống bằng giao diện đồ họa tại đường dẫn:
👉 **`https://tên-miền-của-bạn/admin`** *(hoặc mở trực tiếp file `admin.html`)*

### 🔐 Tài khoản Admin mặc định:
* **Tên đăng nhập:** `anhtuaan08` (hoặc SĐT `0898376962`)
* **Mật khẩu:** `Tuantran@310` (hoặc `admin2026@anhtuan`)
* **Đổi tài khoản:** Bạn có thể đổi Username & Mật khẩu **vô hạn lần** tại Tab **"Hạ Tầng & Admin Acc"** bất cứ lúc nào!

### 🗂️ Cấu trúc 9 Tab chức năng trong Admin:
1. 🧾 **Hóa Đơn & Đơn Hàng (`orders`)**: Xem ảnh bill chuyển khoản, duyệt đơn, cấp key tự động cho khách, báo cáo doanh thu thực tế.
2. 🎧 **Vé Hỗ Trợ & Khách (`tickets`)**: Quản lý phản hồi, thắc mắc của khách, có nút bấm **Chat Zalo** trực tiếp với khách trong 1 click.
3. 🔑 **Quản Lý Access Keys (`keys`)**: Thêm key mới, khóa Username chính chủ, xem số lượng thiết bị đã kích hoạt, nút **Reset Thiết Bị**.
4. 🌐 **Cấu Hình & Khóa DNS (`dns`)**: Công tắc khóa riêng từng nút DNS (Gold, 60s, Root CA) hoặc khóa tổng toàn hệ thống.
5. 💳 **Ngân Hàng & QR (`bank`)**: Đổi số tài khoản VCB, MoMo, tên chủ thẻ — mã QR chuyển khoản ngoài web khách tự cập nhật ngay.
6. 📦 **Gói Bán & Bảo Trì (`packages`)**: Bật/tắt bảo trì từng gói (YouTube, Spotify, Locket), chỉnh sửa giá bán Flash Sale, giá gốc.
7. 🎟️ **Mã Giảm Giá (`vouchers`)**: Tạo và quản lý mã giảm giá (ví dụ: `ANHTUAN`, `VIP20`, `SINHVIEN`).
8. 📢 **Popup & Marketing (`popup`)**: Bật/tắt Popup chào mừng, cấu hình đồng hồ đếm ngược Flash Sale, công tắc Vòng quay may mắn và Thông báo mua hàng ảo.
9. ⚙️ **Hạ Tầng & Admin Acc (`system`)**: Đổi tài khoản admin, cấu hình GitHub Token, cấu hình Telegram Bot và Sao lưu/Khôi phục hệ thống 1-click.

---

## 2. HỆ THỐNG DUYỆT ĐƠN & BÁO CÁO DOANH THU

Khi khách thanh toán chuyển khoản và gửi biên lai trên web:
1. Đơn hàng tự động bay vào Tab **Hóa Đơn & Đơn Hàng** trong Admin với trạng thái **"Chờ Duyệt"**.
2. **Xem ảnh bill**: Bấm vào nút **"Xem Bill"** để phóng to ảnh chụp màn hình chuyển khoản của khách.
3. **Cấp Key tự động**:
   * Bấm nút **"⚡ Cấp & Khóa Key Nhanh Cho Khách"**.
   * Hệ thống tự động tạo 1 mã Key VIP mới dạng `Locket60s-09xxxxxxxxx`, tự động khóa vào SĐT của khách và chuyển trạng thái đơn sang **"Đã Duyệt"**.
4. **Báo cáo doanh thu thời gian thực**:
   * **Tổng Doanh Thu Đã Thu**: Tự động tính tổng tiền từ tất cả các đơn hàng đã duyệt thành công.
   * **Doanh Thu Hôm Nay**: Thống kê số tiền thu được trong ngày.

---

## 3. CẤU HÌNH BOT TELEGRAM NHẬN ĐƠN HÀNG & BILL TỨC THÌ

Khi có đơn hàng mới hoặc khách gửi Ticket hỗ trợ, hệ thống tự động bắn 1 tin nhắn thông báo về điện thoại của Admin.

### Thông tin Bot hiện tại của bạn:
* **Bot Token:** `9054468692:AAFcOoaVyU4Wv1_ndqH5qIXmT5wMZD-EqLo`
* **Chat ID Admin:** `7705653131`

### Cấu hình trong Admin (Tab "Hạ Tầng & Admin Acc"):
* **Bật/Tắt Bot**: Gạt công tắc "Bật Bot Toàn Hệ Thống".
* **Tùy chọn thông báo**: Có thể tick chọn báo khi có Đơn hàng mới và/hoặc báo khi có Vé hỗ trợ.
* **Nút Test Bot**: Bấm **"Gửi Thử Tin Nhắn Test Về Telegram"** để kiểm tra bot có đang hoạt động tốt hay không.

---

## 4. CƠ CHẾ KHÓA RIÊNG TỪNG NÚT DNS ĐỘC LẬP

Trong Tab **"Cấu Hình & Khóa DNS"**, Admin có toàn quyền bật/tắt riêng lẻ 3 nút tải DNS trên trang chủ:
1. 🔒 **Khóa Riêng Nút DNS Locket Gold** (`lockGold`): Chỉ nút tải Locket Gold bị khóa (`Khóa Gold 🔒`), các nút khác khách vẫn tải bình thường.
2. 🔒 **Khóa Riêng Nút DNS Locket 60s** (`lock60s`): Chỉ nút tải DNS 60s bị khóa.
3. 🔒 **Khóa Riêng Nút Chứng Chỉ Root CA** (`lockCa`): Chỉ nút tải Root CA bị khóa.
4. 🛡️ **Công Tắc Khóa Tổng** (`isLocked`): Khóa toàn bộ cả 3 nút khi cần bảo trì server gấp.

---

## 5. CƠ CHẾ CHỐNG DÙNG CHUNG KEY (KHÓA THIẾT BỊ - DEVICE LOCK)

Để bảo vệ doanh thu cho Admin và chống việc 1 khách mua key rồi share cho bạn bè:
* Mỗi khi khách nhập Access Key vào web, hệ thống nhận diện mã định danh thiết bị duy nhất của máy khách (`deviceFingerprint`).
* **Giới hạn mặc định**: Mỗi Key chỉ cho phép kích hoạt trên **1 thiết bị duy nhất** (trừ tài khoản Master).
* **Nếu khách share key sang máy thứ 2**: Web lập tức chặn lại và báo: *"Key này đã kích hoạt trên 1 thiết bị khác! Vui lòng liên hệ Admin để đổi máy."*
* **Xử lý khi khách đổi iPhone mới**:
  * Admin vào Tab **Quản Lý Access Keys**.
  * Tại dòng Key của khách, cột **Thiết Bị** hiển thị `1/1 máy`.
  * Bấm nút **"🔄 Reset"** — thiết bị về 0 ngay lập tức, khách có thể nhập lại key trên máy mới bình thường!

---

## 6. HỆ THỐNG MARKETING TĂNG DOANH SỐ (FLASH SALE, LUCKY WHEEL, SOCIAL PROOF)

### 1. Đồng Hồ Flash Sale Đếm Ngược & Thanh Suất Còn Lại:
* Hiển thị ngay trên phần Bảng giá dịch vụ: Đồng hồ đếm ngược `Giờ : Phút : Giây` đến 23:59:59 kèm thanh tiến độ: *"Đã bán 17/20 suất • Chỉ còn 3 suất VIP hôm nay!"*.
* Thúc đẩy tâm lý sợ bỏ lỡ (FOMO) giúp khách chốt đơn nhanh gấp đôi.
* Bật/Tắt và chỉnh sửa số suất còn lại ảo trong Admin (Tab **Popup & Marketing**).

### 2. Vòng Quay May Mắn (Lucky Wheel):
* Nút tròn nổi góc trái màn hình: **"🎁 Vòng Quay May Mắn (1 Lượt Miễn Phí)"**.
* Mở vòng quay 6 ô sinh động: *Giảm 10k, Giảm 20k, Giảm 50k, Giảm 15%, Thêm Lượt, Key Dùng Thử 2 Giờ*.
* Quay trúng voucher: Web **tự động áp dụng mã giảm giá** vào form mua hàng của khách.
* Quay trúng Key dùng thử: Web cấp ngay 1 mã `TRIAL_XXXXX` có hạn 2 tiếng để khách test ngay DNS / Locket. Mỗi khách được quay 1 lần/ngày.

### 3. Thông Báo Mua Hàng Ảo (Social Proof Toast):
* Thỉnh thoảng góc màn hình trượt ra thông báo nhỏ (18 giây/lần):
  *"Khách hàng 098****215 (Hà Nội) vừa kích hoạt thành công Gói Locket 60s VIP (Vĩnh Viễn) • Đã xác minh ✓"*
* Giúp tạo độ uy tín cao, khách mới nhìn vào sẽ an tâm chuyển khoản thanh toán.

---

## 7. TRA CỨU ĐƠN HÀNG & LẤY KEY VIP DÀNH CHO KHÁCH

* Trên thanh menu trên cùng có nút: **"🔍 Tra Cứu Đơn"**.
* Khách chỉ cần nhập **Số điện thoại** hoặc **Mã đơn hàng** (ví dụ: `AT_771492`):
  * Nếu đang duyệt: Báo *"⏳ Đang chờ Admin duyệt bill"*.
  * Nếu Admin đã duyệt: Web hiển thị thẻ chúc mừng kèm **Mã Key VIP** của khách, kèm nút **"Copy Key"** và nút **"⚡ Kích Hoạt Luôn"** (bấm vào là tự động điền key và mở khóa toàn bộ tính năng VIP trên máy khách ngay lập tức mà không cần gõ tay).

---

## 8. SAO LƯU & KHÔI PHỤC HỆ THỐNG 1-CLICK (BACKUP & RESTORE JSON)

Nằm trong Tab **"Hạ Tầng & Admin Acc"**:
* 📥 **Tải File Sao Lưu Hệ Thống (.JSON)**: Tải file `locket_backup_YYYY-MM-DD.json` về máy tính chứa toàn bộ: Cấu hình website, danh sách Access Key, lịch sử đơn hàng, vé hỗ trợ.
* 📤 **Nhập & Khôi Phục Dữ Liệu**: Chọn file JSON dự phòng trên máy tính để khôi phục lại 100% dữ liệu phòng khi có sự cố.

---

## 9. HƯỚNG DẪN ĐỔI CODE SANG REPOSITORY MỚI (TỰ ĐỘNG 100%)

Hệ thống đã được lập trình **động 100%**, không bị gắn chết cứng vào repository cũ. Khi bạn muốn đổi sang Repository mới trên GitHub (ví dụ: `taikhoan-moi/locket-vip`):

### ⚠️ Lưu ý duy nhất:
* Repo mới **BẮT BUỘC phải để chế độ `Public` (Công khai)** để Shadowrocket trên iPhone của khách có thể tải được file cấu hình.

### 📝 Cách đổi sang Repo mới:
1. **Cách 1: Đổi trực tiếp trên trang Admin (10 giây)**:
   * Vào `/admin` $\rightarrow$ Tab **Hạ Tầng & Admin Acc**.
   * Tại ô **Repo Name**, sửa thành: `taikhoan-moi/locket-vip`.
   * Bấm nút xanh **"LƯU LÊN GITHUB"** ở góc trên cùng là xong!
   * Toàn bộ link tải DNS, link ShadowRocket, link tạo file module cho khách sẽ **tự động chuyển hướng sang repo mới ngay lập tức**.
2. **Cách 2: Nếu chuyển remote Git trên máy tính**:
   ```bash
   git remote set-url origin https://github.com/taikhoan-moi/locket-vip.git
   git push -u origin master
   ```

---

## 10. LƯU Ý KỸ THUẬT KHI ĐẨY CODE GIT (CONFLICT & REBASE)

Vì website có tính năng **tự động ghi file trực tiếp lên GitHub** mỗi khi khách tạo Caption/Khung viền hoặc Admin lưu cấu hình trên web, nên kho GitHub có thể có commit mới trước máy tính của bạn.

👉 **Nếu bạn gõ `git push` bị báo lỗi `[rejected] fetch first`:**
Chỉ cần chạy lệnh sau trên Terminal:
```bash
git pull --rebase origin master
git push origin master
```

---
*Bản quyền hệ thống thuộc về **Boss Anh Tuấn iOS** - 2026*
