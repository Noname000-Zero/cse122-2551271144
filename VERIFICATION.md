# Đối chiếu sáu bài thực hành — 28/11/2026

## Kết quả hiện hành

Tiếp tục trên bản nháp, không làm lại từ đầu. Đã đọc quy tắc cá nhân 2.4, DuLieuNguon/Chung/README.md, toàn bộ 18 trang của sáu PDF và quy chuẩn cuối từng PDF. Đúng repository Noname000-Zero/cse122-2551271144, nhánh main. Sản phẩm dùng exNN/index.html, CSS ngoài css/style.css, ảnh nội bộ images/; bỏ đường dẫn cũ trong đề.

| Bài | Kết quả kỹ thuật / nội dung | Đồng bộ |
| --- | --- | --- |
| ex04 | Đã kiểm tra, có ảnh thật do Hà bổ sung; khác ảnh gốc PDF | Thuộc đợt commit/push này |
| ex05 | Đã kiểm tra, có ảnh thật do Hà bổ sung; khác Rose.gif gốc | Thuộc đợt commit/push này |
| ex06 | Đã kiểm tra, đủ 8 món và có ảnh thật do Hà bổ sung; khác Bat.gif gốc | Thuộc đợt commit/push này |
| ex09 | Đã cá nhân hóa từ CV và kiểm tra local; chờ duyệt thông tin công khai | Chưa commit/push, vẫn ignore |
| ex10 | Đã kiểm tra đủ yêu cầu HTML5 Form và mô phỏng gửi/reset | Đã có trên GitHub; không sửa mã trong đợt này |
| ex11 | Đã tích hợp và kiểm tra 5 ảnh; còn thiếu ảnh đúng Động Phong Nha | Chưa hoàn thành, chưa commit/push, vẫn ignore |

“Đã kiểm tra” là kết quả kiểm tra sản phẩm; không phải xác nhận chấm đạt hay đã nộp LMS. ex04–ex06 dùng ảnh bổ sung khác ảnh gốc nên không khẳng định khớp từng điểm ảnh của mẫu. Giữ nguyên bố cục và kỹ thuật theo đề, không đổi thiết kế.

## Kiểm kê và bảo toàn tài nguyên

Đã mở đủ 9 ảnh trong BoSung và đọc CV PDF. Sao chép 8 ảnh vào sản phẩm, giữ định dạng thật, không chỉ đổi đuôi tệp. Đã so hash toàn bộ đầu vào hiện hữu trước khi cập nhật tài liệu quản lý: không thay đổi tệp đề, CV, ảnh hoặc README BoSung. Sau đó chỉ cập nhật DuLieuNguon/README.md để phản ánh tài liệu đã nhận; tạo thêm publication-review.md local cho Hà duyệt ex09. Không di chuyển nguồn.

| Đầu vào trong DuLieuNguon | Bản sao trong sản phẩm |
| --- | --- |
| ex04/BoSung/-laho-bSuW.png | ex04/images/da-nang.png |
| ex05/BoSung/e4985ff08447306f943d16bbace60e61.jpg | ex05/images/rose.jpg |
| ex06/BoSung/images.jpg | ex06/images/bowl.jpg |
| ex11/BoSung/Vinh-Ha-Long-1.jpg | ex11/images/1-vinh-ha-long.jpg |
| ex11/BoSung/images.jpg | ex11/images/2-son-doong.jpg |
| ex11/BoSung/images (1).jpg | ex11/images/3-thac-ban-gioc.jpg |
| ex11/BoSung/dinh-nui-fansipan.jpg | ex11/images/4-fansipan.jpg |
| ex11/BoSung/images (2).jpg | ex11/images/5-mekong.jpg |

Tệp 7-cai-nhat-cua-phong-nha-ke-bang-1639936654793597781412.jpg cùng cảnh cửa hang với ảnh Sơn Đoòng; tên Phong Nha–Kẻ Bàng không đủ xác nhận là Động Phong Nha. Không gán nhầm địa danh để đủ sáu ảnh. Cần bổ sung ảnh đúng Động Phong Nha vào H:\HocTap\NhiemVuHeThong\Cac_Bai_Tap\cse122-2551271144\DuLieuNguon\ex11\BoSung. Các ảnh cung cấp được sử dụng trong phạm vi bài học theo yêu cầu Hà; chưa xác minh độc lập bản quyền/nguồn xuất xứ của từng ảnh từ Internet.

## Kiểm tra thực tế

Chrome headless qua Playwright, desktop 1366×900, tablet 768×900 và mobile 390×900: 18 lượt mở sáu bài. Đo computed style và kích thước thật, chụp ảnh và xem giao diện. Sáu bài không tràn ngang ở các kích thước đã thử, CSS tải được, không lỗi JavaScript. Không có CSS inline trong mã nguồn; không có thư viện/font ngoài. Mọi tài nguyên đang tham chiếu có tệp thật và đường dẫn đúng chữ hoa/thường; không phụ thuộc DuLieuNguon hoặc bài khác.

### ex04

| Tiêu chí theo đề | Bằng chứng / kết luận |
| --- | --- |
| h1 + span hai dòng | Đạt: span display:block, cỡ 0.7em; h1 26px, #1565C0, uppercase, căn giữa |
| Hai drop cap đỏ và nội dung | Đạt: đúng hai đoạn bắt đầu Đ/M; ::first-letter #C62828, float:left, 48px, đậm. Bà Nà Hills / bán đảo Sơn Trà dùng strong; văn bản giữ đúng đề |
| Thanh phụ căn phải | Đạt: đúng nội dung “Cầu Rồng – biểu tượng sông Hàn”, nền #1565C0, chữ trắng, text-align:right |
| Banner thật | Đạt kỹ thuật: PNG 800×418 tải được, desktop 860×280, object-fit:cover, bo 8px. Điểm cắt chỉnh để cân bằng chữ và cầu trong ảnh có sẵn; mobile không méo ảnh |
| So với mẫu | Ảnh mới có chữ ĐÀ NẴNG in sẵn và là cảnh ban ngày; khác ảnh đêm trong PDF. Không xóa/sửa chữ trên nguồn |

### ex05

| Tiêu chí theo đề | Bằng chứng / kết luận |
| --- | --- |
| Grid 220px 1fr, gap 24px | Đạt: desktop đo 220px / 616px; mobile một cột |
| Danh sách và nội dung | Đạt: ul square/circle đúng thứ tự, đủ 4 dòng giới thiệu và 2 dòng liên hệ; line-height:1.9 |
| Tiêu đề / nhãn / copyright | Đạt: h1 #C2185B 26px căn giữa; h2 nền #FFC0CB; copyright #0000EE gạch chân căn giữa |
| Ảnh thật | Đạt tải và tỷ lệ: JPG hoa hồng 236×354, hiển thị 220×330. Không giả đổi JPG thành GIF |
| So với mẫu | Hoa hồng đỏ nền hồng khác Rose.gif hoa hồng nhạt trong PDF; dùng ảnh Hà cung cấp, không khẳng định trùng ảnh gốc |

### ex06

| Tiêu chí theo đề | Bằng chứng / kết luận |
| --- | --- |
| Bảng semantic | Đạt: table/thead/tbody/tr/th/td, th scope=col, border-collapse:collapse |
| Tám món / thứ tự | Đạt so sánh đầy đủ: Bánh cuốn Thanh Trì; Xôi Hà Nội; Chả cá Lã Vọng; Cháo Cóc; Bánh Gai Ninh Giang; Bún Thang Hà Nội; Canh Lằng; Vịt quay Lạng Sơn. STT 1–8 đúng |
| Zebra chỉ trong tbody | Đạt: tbody tr:nth-child(even); đo lẻ #FFFFFF, chẵn #FDF8EF; đường kẻ #E0D6C2 |
| Cột STT / màu / bố cục | Đạt: STT đo 60px và căn giữa; tên món căn trái; body #FAF3E0, h1/thead #E65100; Grid trái 220px |
| Ảnh thật | JPG tô món ăn 554×554 tải được, hiển thị 220×220 không méo. Đây là hình Hà bổ sung, khác Bat.gif trong PDF |

### ex09

| Tiêu chí theo đề | Bằng chứng / kết luận |
| --- | --- |
| Khung và Grid | Đạt bố cục local: 860px, desktop 280px / 580px; bo 12px; mobile một cột |
| Avatar CSS / cột trái | Đạt: chữ viết tắt từ tên CV, không ảnh chân dung; 110×110px, flex căn giữa, border-radius:50%, nền trắng/chữ #1565C0; aside gradient #1565C0 → #0D3F7A |
| Năm chip | Đủ 5 chip border-radius:999px, nội dung rút gọn từ năng lực/công cụ ghi trong CV; không lấy năm kỹ năng nhân vật mẫu làm năng lực của Hà |
| Nội dung cá nhân hóa | Đã dùng phần giới thiệu, học vấn, liên hệ và hai URL có trong CV. Không thêm thành tích/chứng chỉ/số liệu; không tự điền địa chỉ, năm nhập học, GitHub/Facebook/LinkedIn còn thiếu |
| Liên kết | mailto/tel đúng cú pháp và giá trị từ CV; không thực hiện gửi thư/gọi điện. URL dự án trả HTTP 200. TryHackMe trả 429, chưa xác minh truy cập thành công trang đích; không coi 429 là link chết |
| Quyền công khai | Bản local có thông báo chờ duyệt; danh sách giá trị cụ thể lưu trong DuLieuNguon/ex09/BoSung/publication-review.md. Chưa push ex09; tài liệu báo cáo công khai này không liệt kê giá trị liên hệ riêng tư |

CV là nguồn tự khai do Hà cung cấp, chưa xác minh độc lập các nhận định trong CV. Không dùng mốc “năm 2” để suy ra năm học hiện tại vì CV chưa cập nhật. Không đưa hoạt động riêng tư ngoài phần bài cần dùng. Chờ Hà duyệt danh sách công khai trước khi bỏ ignore/commit/push ex09. Không cần bổ sung ảnh.

### ex10

| Tiêu chí theo đề | Bằng chứng / kết luận |
| --- | --- |
| Khung và header | Đạt: 660px desktop, header #0F766E, đúng tiêu đề/mô tả |
| Hai hàng hai cột | Đạt: desktop mỗi cột 296px, gap 16px; mobile một cột |
| Các control | Đạt: input text/email/tel, 6 control đều có label-for-id tương ứng; select đúng 3 lựa chọn Hỏi về khoá học / Hỗ trợ kỹ thuật / Khác; textarea rows=4; checkbox; submit/reset |
| Tương tác thực tế | Đạt thử required, email sai, nhập hợp lệ, đổi chủ đề, chọn checkbox, submit minh họa và reset xóa dữ liệu/bỏ chọn |
| Gửi demo | Thông báo nói rõ chưa gửi tới máy chủ; không có backend hoặc gửi email thật. Không lưu dữ liệu người dùng, không cần ảnh hoặc thư viện ngoài |

### ex11

| Tiêu chí theo đề | Bằng chứng / kết luận |
| --- | --- |
| Sáu figure/figcaption | Đạt cấu trúc và văn bản: Vịnh Hạ Long, Hang Sơn Đoòng, Thác Bản Giốc, Fansipan, Đồng bằng sông Cửu Long, Động Phong Nha đúng thứ tự, đánh số 1–6 |
| Grid ba cột, gap 18px | Đạt: desktop khung 1000px, ba cột khoảng 321.33px; 3×2 hàng; gap 18px. Mobile một cột |
| Nền và figure | Đạt: body #0F172A, chữ #E2E8F0; figure #1E293B, margin:0, bo 10px |
| Ảnh thật | 5/6 ảnh tải được; đo từng ảnh cao 170px, rộng theo cột, object-fit:cover và display:block; không kéo méo. Ảnh Fansipan đã có chữ/logo trong nguồn, giữ nguyên |
| Vị trí thứ sáu | Chưa đạt: còn vùng chờ Động Phong Nha, không gán nhầm ảnh Sơn Đoòng. Không coi vùng chờ là ảnh hoàn chỉnh |

## Giới hạn và bước còn lại

- ex04–ex06 đạt kiểm tra mã, nội dung và ảnh mới cung cấp; không đạt mức ảnh trùng tuyệt đối với mẫu PDF. Nếu giảng viên bắt buộc đúng ảnh gốc, cần bộ ảnh gốc tương ứng.
- ex09 chờ duyệt thông tin công khai; TryHackMe đang giới hạn truy cập kiểm tra (HTTP 429). Bản local đã sẵn để xem.
- ex11 chờ một ảnh đúng Động Phong Nha; các phần độc lập và 5 ảnh đã hoàn thiện local. Khi có ảnh, thay vùng chờ, kiểm tra lại cả desktop/mobile rồi mới bỏ ignore và push.
- Mới kiểm tra Chrome ở ba kích thước nêu trên; chưa thử mọi trình duyệt/thiết bị, chưa có kết quả chấm LMS.
- Đề/CV gốc, README BoSung và ghi chú duyệt cá nhân không nằm trong commit. ex01–ex03, BTTH01, bai01–bai03 giữ nguyên; ex07–ex08 chưa có đề, không thực hiện; không thao tác LMS.
