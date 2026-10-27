# 🚀 SỔ TAY VẬN HÀNH & HƯỚNG DẪN KỸ THUẬT - ANH TUẤN iOS

> Tài liệu hướng dẫn chi tiết dành riêng cho Admin quản trị hệ thống bán **Locket 60s VIP**, **Caption & Khung Viền Widget**, quản lý mã bản quyền và đổi kho mã nguồn (Repository).

---

## 📌 MỤC LỤC
1. [Hướng Dẫn Đổi Code Sang Repo Mới](#1-hướng-dẫn-đổi-code-sang-repo-mới)
2. [Quản Lý & Cấp Mã Access Key Cho Khách](#2-quản-lý--cấp-mã-access-key-cho-khách)
3. [Cấu Hình Bot Telegram Nhận Đơn Hàng & Bill](#3-cấu-hình-bot-telegram-nhận-đơn-hàng--bill)
4. [Cơ Chế Chống Share File (Khóa UID Máy Khách)](#4-cơ-chế-chống-share-file-khóa-uid-máy-khách)
5. [Cổng Thanh Toán QR & Bảng Giá](#5-cổng-thanh-toán-qr--bảng-giá)
6. [Lưu Ý Quan Trọng Khi Đẩy Code (Git Push)](#6-lưu-ý-quan-trọng-khi-đẩy-code-git-push)

---

## 1. HƯỚNG DẪN ĐỔI CODE SANG REPO MỚI

Khi bạn muốn chuyển toàn bộ dự án từ `cmstdev08/locket` sang một Repository mới:

### ⚠️ Điều kiện tiên quyết:
- **Repo mới BẮT BUỘC phải để chế độ `Public` (Công khai).**
- *Lý do:* Shadowrocket trên iPhone của khách hàng tải file script qua đường dẫn `https://raw.githubusercontent.com/...`. Nếu để `Private`, Shadowrocket sẽ bị chặn (lỗi 404).

### 📝 Các bước thực hiện:
1. Tạo Repo mới trên GitHub (Ví dụ: `tên-bạn/locket-vip`).
2. Nhắn cho tôi (AI Assistant) tên repo mới, tôi sẽ tự động cập nhật:
   - File `index.html`: Cập nhật `defaultGhRepo` và các link cấu hình tải sẵn.
   - Các file `.sgmodule` và `.config` tĩnh có sẵn trong thư mục gốc.
3. Cập nhật lại trong Cài đặt Admin web:
   - Bấm vào icon **bánh răng ⚙️** ở góc Studio.
   - Nhập tên Repo mới vào ô `Repo:` và dán GitHub Token mới có quyền ghi vào Repo mới.

---

## 2. QUẢN LÝ & CẤP MÃ ACCESS KEY CHO KHÁCH

Danh sách mã kích hoạt nằm tại file: [`access-keys.json`](file:///d:/VSCODE/PROJECT/APPPRE/access-keys.json)

### Cấu trúc cấp Key mới:
Khi có khách mua gói 500.000đ, mở file `access-keys.json` và thêm 1 dòng vào danh sách `keys`:
```json
{
  "key": "Locket60s-09xxxxxxxxx",
  "owner": "Số điện thoại hoặc tên khách",
  "allowedFeatures": ["all"],
  "maxUses": 9999,
  "usedCount": 0,
  "expiresAt": "2099-12-31"
}
```
- **Master Key quản trị:** `ANHTUAN_ADMIN_2026` (Dùng để kiểm tra hoặc kích hoạt không giới hạn).
- Mỗi khi sửa xong file `access-keys.json`, chỉ cần lưu và đẩy lên GitHub là khách nhập được ngay trên website.

---

## 3. CẤU HÌNH BOT TELEGRAM NHẬN ĐƠN HÀNG & BILL

Khi khách hàng quét QR chuyển khoản và tải ảnh bill lên, website sẽ tự động gửi thông báo kèm ảnh bill về Telegram của bạn.

### Cách lấy thông tin:
1. **Telegram Bot Token:**
   - Chat với [@BotFather](https://t.me/BotFather) trên Telegram.
   - Gõ `/newbot` làm theo hướng dẫn để tạo bot và copy chuỗi Token (dạng `8123456789:AAH_xxxx...`).
2. **Chat ID của bạn:**
   - Chat với [@userinfobot](https://t.me/userinfobot) trên Telegram.
   - Lấy chuỗi số `Id:` của bạn (ví dụ: `123456789`).
3. **Cài đặt vào Web:**
   - Vào website, mở Studio, bấm icon **bánh răng ⚙️**.
   - Dán **Bot Token** và **Chat ID** vào ô $\rightarrow$ bấm Lưu. Cấu hình được lưu tự động trên máy bạn.

---

## 4. CƠ CHẾ CHỐNG SHARE FILE (KHÓA UID MÁY KHÁCH)

Hệ thống được lập trình với cơ chế bảo mật **Độc quyền thiết bị**:
- **Khách hàng thông thường:** Khi khách kích hoạt module trên Shadowrocket lần đầu tiên, hệ thống ghi nhận Firebase App User ID của Locket và khóa cứng vào bộ nhớ máy (`$persistentStore`). Nếu họ gửi file cho bạn bè dùng thử, máy người kia sẽ bị chặn ngay lập tức và hiện thông báo bản quyền.
- **Đặc quyền tài khoản `thaocute`:** Tài khoản người yêu bạn (`thaocute`) được mở quyền tự do tối thượng:
  - File riêng: `locket60s/anhtuaan08-thaocute-expriry-check.js`
  - Đã loại bỏ hoàn toàn cơ chế khóa UID, thoải mái dùng và chia sẻ trên mọi thiết bị.

---

## 5. CỔNG THANH TOÁN QR & BẢNG GIÁ

- **Tên chủ tài khoản:** `TRAN VAN ANH TUAN`
- **Ngân hàng:** Vietcombank - Số tài khoản: `7898376962`
- **Ví MoMo:** `0898376962`
- **Gói Locket 60s VIP:** `500.000đ` (Vĩnh viễn trọn đời).
- **Các gói YouTube / Spotify:** Đang được khóa bảo trì vô thời hạn (`isMaintenance: true`), khách không thể bấm đặt mua nhầm.

---

## 6. LƯU Ý QUAN TRỌNG KHI ĐẨY CODE (GIT PUSH)

Vì website có tính năng **tự động ghi file trực tiếp lên GitHub** mỗi khi khách tạo Caption/Khung viền, nên kho trên GitHub có thể có commit mới trước máy tính của bạn.

👉 **Nếu bạn gõ `git push` bị báo lỗi `[rejected] fetch first`:**
Đừng lo lắng, chỉ cần chạy lệnh sau trên Terminal:
```bash
git pull --rebase origin master
git push origin master
```
Lệnh này sẽ tự động ghép các file mới nhất từ GitHub về máy bạn rồi đẩy lên thành công 100%.

---
*Bản quyền hệ thống thuộc về **Anh Tuấn iOS** - 2026*
