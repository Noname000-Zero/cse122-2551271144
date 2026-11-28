# Đối chiếu sáu bài thực hành — 28/11/2026

## Phạm vi và căn cứ

Đối chiếu trên mã hiện có, không làm lại bài. Repository `Noname000-Zero/cse122-2551271144`, nhánh `main`; phiên bản mã ex10 đã push: `8636e7c`. Quy tắc cá nhân 2.4 và `DuLieuNguon/Chung/README.md` đã đọc.

Đã đọc đủ 18 trang (3 trang/bài) của sáu PDF trong `DuLieuNguon/ex04`, `ex05`, `ex06`, `ex09`, `ex10`, `ex11`, kể cả trang quy chuẩn nộp cuối mỗi PDF. Trang cuối được ưu tiên: `exNN/index.html`, `css/style.css`, `images/` cho bài có ảnh; không sử dụng đường dẫn cũ `baiNN.html` hoặc `Anh/BaiNN/`. ex09/ex10 không yêu cầu thư mục ảnh theo quy chuẩn riêng.

“Đạt” trong bảng dưới chỉ áp dụng tiêu chí được kiểm tra. Bài thiếu ảnh hoặc dữ liệu vẫn **chưa hoàn thành**, kể cả khi bố cục/CSS đã đạt. Chưa có kết quả chấm LMS.

## Kiểm tra chung

- Chrome headless qua Playwright; desktop 1366×900 và mobile 390×900, 12 lượt mở trang; đo computed style và kích thước hiển thị, chụp ảnh trang. Đã xem giao diện, không chỉ kiểm tra mã.
- Sáu bài đều có `index.html`, CSS ngoài `css/style.css` tải được; mã HTML không có thẻ style hoặc thuộc tính style. Thư mục images của ex04/ex05/ex06/ex11 đã có nhưng còn trống.
- Các tài nguyên đang được tham chiếu (CSS, JS) dùng đường dẫn tương đối và có tệp thật. Không liên kết sang DuLieuNguon, ổ đĩa, CDN hoặc bài khác. Vùng chờ ảnh không phải ảnh đã tải thành công.
- Không tràn ngang ở hai kích thước đã thử. Không có lỗi JavaScript. Chưa kiểm tra mọi trình duyệt hoặc mọi độ rộng màn hình.
- ex09/ex10 không có img, ảnh nền bên ngoài, thư viện hoặc font tải từ mạng. Avatar dùng CSS; ex10 dùng JavaScript thuần cho mô phỏng gửi/reset.

## ex04 — Đà Nẵng

| Yêu cầu | Sản phẩm thực tế / bằng chứng | Kết luận |
| --- | --- | --- |
| h1 + span hai dòng, xanh #1565C0, in hoa | Có h1 và span con; span computed display:block, font-size:0.7em; h1 26px, màu rgb(21,101,192), text-transform:uppercase, căn giữa | Đạt |
| Hai đoạn văn đúng nội dung và strong | Hai đoạn bắt đầu Đ / M; Bà Nà Hills và bán đảo Sơn Trà dùng strong; đã đối chiếu văn bản | Đạt |
| Hai drop cap đỏ | Cả hai ::first-letter computed màu rgb(198,40,40), float:left, 48px (3rem), đậm | Đạt |
| Thanh phụ căn phải | h2 đúng “Cầu Rồng – biểu tượng sông Hàn”, nền xanh/chữ trắng, text-align:right | Đạt |
| Banner ảnh, cao tối đa 280px, cover, bo 8px | CSS .banner đã có thông số; hiện là div báo chờ, chưa có img hoặc ảnh gốc | Chưa đạt phần ảnh; chưa kiểm tra cắt/tỷ lệ ảnh thật |

**Trạng thái bài:** chưa hoàn thành, bản local, chưa push.

## ex05 — Hoa tươi Nhân Ái

| Yêu cầu | Sản phẩm thực tế / bằng chứng | Kết luận |
| --- | --- | --- |
| Grid 220px 1fr, gap 24px | Computed desktop 220px 616px, display:grid; mobile xếp một cột | Đạt |
| Tiêu đề #C2185B, 26px, giữa | Đúng nội dung và CSS | Đạt |
| Giới thiệu / liên hệ, nền #FFC0CB | Hai h2 có nền rgb(255,192,203), đậm; đủ 4 dòng giới thiệu và 2 dòng liên hệ, đã đối chiếu nội dung | Đạt |
| square / circle | Hai ul computed list-style-type lần lượt square / circle; line-height:1.9 | Đạt |
| Copyright xanh, gạch chân, giữa | Đúng văn bản, CSS màu #0000EE, text-decoration:underline, text-align:center | Đạt |
| Ảnh hoa hồng Rose.gif | Chưa có ảnh; vùng chờ ghi images/rose.gif, tên sản phẩm chữ thường theo quy chuẩn cuối PDF | Chưa đạt phần ảnh |

**Trạng thái bài:** chưa hoàn thành, bản local, chưa push.

## ex06 — Các món ngon Hà Nội

| Yêu cầu | Sản phẩm thực tế / bằng chứng | Kết luận |
| --- | --- | --- |
| Bảng semantic | Có table/thead/tbody/tr/th/td, th scope=col, border-collapse:collapse | Đạt |
| Đúng tám món và thứ tự | So sánh toàn bộ tám hàng và STT 1–8 với đề, không chỉ đếm hàng | Đạt |
| Zebra chỉ trong tbody | Selector tbody tr:nth-child(even); đo dòng lẻ rgb(255,255,255), chẵn rgb(253,248,239) | Đạt |
| Màu nền/trang/tiêu đề và đường kẻ | Body #FAF3E0, h1 #E65100; thead nền #E65100, chữ trắng; border dưới dòng #E0D6C2 | Đạt |
| STT 60px và cột tên căn trái | Đo STT đúng 60px; cột STT giữa, cột tên trái; desktop Grid 220px 616px | Đạt |
| Ảnh Bat.gif ở cột trái | Chưa có ảnh; chỉ vùng chờ images/bat.gif | Chưa đạt phần ảnh |

Thứ tự đã kiểm tra: Bánh cuốn Thanh Trì; Xôi Hà Nội; Chả cá Lã Vọng; Cháo Cóc; Bánh Gai Ninh Giang; Bún Thang Hà Nội; Canh Lằng; Vịt quay Lạng Sơn. Giữ văn bản đề, không tự sửa tên món hoặc địa danh.

**Trạng thái bài:** chưa hoàn thành, bản local, chưa push.

## ex09 — CV Online

| Yêu cầu | Sản phẩm thực tế / bằng chứng | Kết luận |
| --- | --- | --- |
| Khung 860px, Grid 280px 1fr | Đo desktop 860px, hai cột 280px 580px, bo góc 12px; mobile một cột | Đạt phần bố cục |
| Avatar chữ bằng CSS | Div 110×110px, display:flex, căn giữa, border-radius:50%, nền trắng/chữ #1565C0; không có ảnh chân dung | Đạt kỹ thuật tạo hình; nội dung chữ viết tắt còn chờ (hiện “?”) |
| Cột trái gradient | Computed linear-gradient(#1565C0,#0D3F7A), chữ trắng | Đạt |
| Năm chip viên thuốc | Đúng 5 li, border-radius:999px; đều ghi “Chờ kỹ năng” | Đạt kỹ thuật/số lượng; chưa đạt nội dung kỹ năng |
| Giới thiệu, học vấn, liên hệ và liên kết | Có đủ vùng nội dung; tất cả là chờ bổ sung; không có URL thật để thử | Chưa hoàn thành dữ liệu và tương tác liên kết |
| Cá nhân hóa có căn cứ | Đã tìm cả thư mục con ex09, chưa thấy CV. Không lấy Nguyễn Văn An hoặc năm kỹ năng HTML5/CSS3/JavaScript/Bootstrap/Git trong mẫu làm hồ sơ/năng lực của Hà | Đúng giới hạn dữ liệu; chờ CV và duyệt thông tin công khai |

**Trạng thái bài:** chỉ bản bố cục local, chưa push. Không cần bổ sung ảnh. Chờ Hà xác nhận họ tên/chữ viết tắt, ngành/khóa, email, điện thoại, địa chỉ ở mức muốn công khai, GitHub, giới thiệu/định hướng, kỹ năng, thời gian/trường/ngành học và URL Portfolio/Facebook/LinkedIn. CV gốc không được đưa lên GitHub.

## ex10 — Biểu mẫu liên hệ

| Yêu cầu | Sản phẩm thực tế / bằng chứng | Kết luận |
| --- | --- | --- |
| Khung form 660px, header xanh #0F766E, đúng tiêu đề/mô tả | Đo khung 660px desktop; đúng văn bản và màu, bo 12px | Đạt |
| Hai hàng ngắn 2 cột bằng nhau, gap 16px | Đo desktop mỗi cột 296px, gap 16px; mobile một cột | Đạt |
| text/email/tel và label-for-id | Đúng type của từng ô; cả 6 control đều có label trỏ đúng id duy nhất | Đạt |
| Select ba chủ đề | Hỏi về khoá học / Hỗ trợ kỹ thuật / Khác đúng thứ tự; đã đổi lựa chọn thử | Đạt |
| Textarea rows=4 | Thuộc tính DOM rows đúng 4; nhập thử được | Đạt |
| Checkbox và submit/reset | Checkbox đổi trạng thái được; button.type đúng submit/reset; reset xóa giá trị và bỏ chọn checkbox | Đạt |
| Validation và mô phỏng gửi | Required ngăn gửi khi trống; email sai không hợp lệ; dữ liệu hợp lệ hiển thị rõ “Thông tin chưa được gửi tới máy chủ.” | Đạt phần demo; không gửi email thật |
| Không dùng ảnh ngoài/thư viện | Không có ảnh; CSS + JS thuần nằm trong bài | Đạt |

**Trạng thái bài:** đã kiểm tra yêu cầu bài HTML5 Form, đã push. Không có backend/email service; không coi demo là dịch vụ gửi email thật. Chưa nộp LMS.

## ex11 — Thư viện ảnh Việt Nam

| Yêu cầu | Sản phẩm thực tế / bằng chứng | Kết luận |
| --- | --- | --- |
| Sáu figure/figcaption, đúng thứ tự | Đo đúng 6 figure có figcaption trực tiếp; so sánh đủ văn bản, xem danh sách dưới | Đạt cấu trúc và chú thích |
| Grid ba cột desktop, gap 18px | Computed 321.328px / 321.328px / 321.344px, gap 18px; khung 1000px, 3 cột × 2 hàng | Đạt bố cục |
| Nền tối, figure bo 10px, margin 0 | Body #0F172A, chữ #E2E8F0; figure #1E293B, margin:0, bo 10px | Đạt |
| Ảnh thật cao 170px, object-fit:cover, không méo | CSS figure img có height:170px, width:100%, object-fit:cover, display:block. Hiện imgCount=0; chỉ 6 div chờ cao 170px | Chưa đạt phần ảnh; chưa thể kiểm tra tải/cắt/tỷ lệ ảnh thật |
| Mobile | Một cột tại 390px, không tràn ngang; không thay đổi cấu trúc desktop | Đạt phần bố cục |

Thứ tự chú thích đã kiểm tra: Hình 1. Vịnh Hạ Long; Hình 2. Hang Sơn Đoòng; Hình 3. Thác Bản Giốc; Hình 4. Fansipan; Hình 5. Đồng bằng sông Cửu Long; Hình 6. Động Phong Nha.

**Trạng thái bài:** chưa hoàn thành, bản local, chưa push.

## Tài nguyên còn thiếu và nơi bổ sung

Đã kiểm kê đệ quy toàn bộ DuLieuNguon của repository hiện hành và tìm ảnh trong bản repository cũ `H:\Projects\NhiemVuHeThong\cse122-2551271144`. Chưa tìm thấy các ảnh gốc được chỉ định cho bốn bài. Bản cũ có ảnh của ex02/ex03 và ảnh chụp kiểm tra BTTH01; chưa có căn cứ coi chúng là bộ ảnh đúng của sáu đề nên không tự thay thế.

Thư mục gốc đầu vào: `H:\HocTap\NhiemVuHeThong\Cac_Bai_Tap\cse122-2551271144\DuLieuNguon`.

| Đường dẫn nhận tài liệu đầy đủ | Tệp cần bổ sung |
| --- | --- |
| H:\HocTap\NhiemVuHeThong\Cac_Bai_Tap\cse122-2551271144\DuLieuNguon\ex04\ | da-nang.jpg |
| H:\HocTap\NhiemVuHeThong\Cac_Bai_Tap\cse122-2551271144\DuLieuNguon\ex05\ | Rose.gif (sản phẩm sẽ dùng rose.gif) |
| H:\HocTap\NhiemVuHeThong\Cac_Bai_Tap\cse122-2551271144\DuLieuNguon\ex06\ | Bat.gif (sản phẩm sẽ dùng bat.gif) |
| H:\HocTap\NhiemVuHeThong\Cac_Bai_Tap\cse122-2551271144\DuLieuNguon\ex11\ | 1-vinh-ha-long.jpg, 2-son-doong.jpg, 3-thac-ban-gioc.jpg, 4-fansipan.jpg, 5-mekong.jpg, 6-phong-nha.jpg |
| H:\HocTap\NhiemVuHeThong\Cac_Bai_Tap\cse122-2551271144\DuLieuNguon\ex09\ | CV tham khảo; có thể đặt trong thư mục con |

Khi có ảnh: sao chép vào images của sản phẩm, thay vùng chờ bằng img có alt, kiểm tra tải ảnh và so mẫu desktop/mobile trước khi bỏ ignore riêng bài rồi commit/push. Khi có CV: chọn thông tin cần thiết, liệt kê giá trị dự kiến công khai để Hà duyệt trước push ex09. Không lấy ảnh trong PDF mẫu làm ảnh gốc hoặc đưa PDF/CV lên GitHub.

## Trạng thái Git và phạm vi giữ nguyên

Chỉ ex10 và tài liệu quản lý đã có trên GitHub; năm bản nháp đang bị ignore có chủ đích, vẫn còn đầy đủ trên máy. Đợt đối chiếu này bổ sung bằng chứng kiểm tra, không đổi thiết kế hoặc viết lại mã bài. ex01–ex03, BTTH01, bai01–bai03 giữ nguyên. ex07–ex08 chưa có đề, chưa thực hiện. Không thao tác nộp LMS.
