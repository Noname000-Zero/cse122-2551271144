# Đối chiếu bộ sưu tập thực hành — 28/11/2026

## Kết quả hiện hành

Tiếp tục trên bản nháp, không làm lại từ đầu. Đã đọc quy tắc cá nhân 2.4, DuLieuNguon/Chung/README.md, toàn bộ 24 trang của tám PDF (04–11) và quy chuẩn cuối từng PDF. Đúng repository Noname000-Zero/cse122-2551271144, nhánh main. Sản phẩm dùng exNN/index.html, CSS ngoài css/style.css, ảnh nội bộ images/; bỏ đường dẫn cũ trong đề.

| Bài | Kết quả kỹ thuật / nội dung | Đồng bộ |
| --- | --- | --- |
| ex04 | Đã kiểm tra, có ảnh thật do Hà bổ sung; khác ảnh gốc PDF | Thuộc đợt commit/push này |
| ex05 | Đã kiểm tra, có ảnh thật do Hà bổ sung; khác Rose.gif gốc | Thuộc đợt commit/push này |
| ex06 | Đã kiểm tra, đủ 8 món và có ảnh thật do Hà bổ sung; khác Bat.gif gốc | Thuộc đợt commit/push này |
| ex07 | Đã nhận ảnh Double Rich Hà bổ sung; nội dung, bố cục và ảnh thật đã kiểm tra cuối | Thuộc đợt đồng bộ ex07 hiện tại |
| ex08 | Hoàn thiện 7 bài/7 ảnh thay thế có nguồn, tác giả, giấy phép; Du lịch theo quyết định Hà | Đã kiểm tra desktop/mobile, thuộc đợt đồng bộ này |
| ex09 | Hà đã duyệt công khai; kiểm tra cuối theo đề và nội dung đã duyệt | Được commit/push trong đợt chốt ex09 |
| ex10 | Đã kiểm tra đủ yêu cầu HTML5 Form và mô phỏng gửi/reset | Đã có trên GitHub; không sửa mã trong đợt này |
| ex11 | Đã kiểm tra đủ 6 ảnh theo danh thắng và thứ tự, nguồn ảnh 6 có ghi công | Thuộc đợt commit/push hiện tại |

“Đã kiểm tra” là kết quả kiểm tra sản phẩm; không phải xác nhận chấm đạt hay đã nộp LMS. ex04–ex06 dùng ảnh bổ sung khác ảnh gốc nên không khẳng định khớp từng điểm ảnh của mẫu. Giữ nguyên bố cục và kỹ thuật theo đề, không đổi thiết kế.

## Kiểm kê và bảo toàn tài nguyên

Đã mở đủ 9 ảnh trong BoSung và đọc CV PDF. Sao chép 8 ảnh Hà cung cấp vào sản phẩm, giữ định dạng thật; bổ sung 1 ảnh Động Phong Nha có mô tả tác giả và giấy phép từ Wikimedia Commons. Đã so hash toàn bộ đầu vào hiện hữu trước khi cập nhật tài liệu quản lý: không thay đổi tệp đề, CV, ảnh hoặc README BoSung. Sau đó chỉ cập nhật DuLieuNguon/README.md để phản ánh tài liệu đã nhận; tạo thêm publication-review.md local cho Hà duyệt ex09. Không di chuyển nguồn.

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

Ảnh mới images.jpg trong BoSung đã được mở và kiểm tra; chưa xác minh được địa danh độc lập từ nguồn tệp nên không dùng để gán chú thích Động Phong Nha. Giữ nguyên ảnh mới (đã so SHA-256 trước/sau). Ảnh 6 hiện dùng Phong nha cave.jpg của Tonguc Ozluk, nguồn https://commons.wikimedia.org/wiki/File:Phong_nha_cave.jpg, CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/. Dùng thumbnail 1280×854, không chỉnh sửa nội dung tệp, cắt hiển thị bằng CSS; ghi công và giấy phép ngay dưới gallery và trong ex11/README.md. Không khẳng định ảnh người dùng bổ sung sai địa danh khi chưa có đủ căn cứ. Các ảnh cung cấp được sử dụng trong phạm vi bài học theo yêu cầu Hà; chưa xác minh độc lập bản quyền/nguồn xuất xứ của từng ảnh từ Internet.

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
| Khung và Grid | Đạt bố cục: 860px, desktop 280px / 580px; bo 12px; mobile một cột |
| Avatar CSS / cột trái | Đạt: chữ viết tắt từ tên CV, không ảnh chân dung; 110×110px, flex căn giữa, border-radius:50%, nền trắng/chữ #1565C0; aside gradient #1565C0 → #0D3F7A |
| Năm chip | Đủ 5 chip border-radius:999px, nội dung rút gọn từ năng lực/công cụ ghi trong CV; không lấy năm kỹ năng nhân vật mẫu làm năng lực của Hà |
| Nội dung cá nhân hóa | Đã dùng phần giới thiệu, học vấn, liên hệ và hai URL có trong CV. Không thêm thành tích/chứng chỉ/số liệu; không tự điền địa chỉ, năm nhập học, GitHub/Facebook/LinkedIn còn thiếu |
| Liên kết | mailto/tel đúng cú pháp và giá trị từ CV; không thực hiện gửi thư/gọi điện. URL dự án trả HTTP 200. TryHackMe trả 429, chưa xác minh truy cập thành công trang đích; không coi 429 là link chết |
| Quyền công khai | Hà đã duyệt nội dung publication-review.md ngày 28/11/2026; đã bỏ thông báo chờ duyệt trên trang. Chỉ công khai HTML/CSS sản phẩm; CV gốc và bản duyệt tiếp tục bị Git bỏ qua |

CV là nguồn tự khai do Hà cung cấp, chưa xác minh độc lập các nhận định trong CV. Không dùng mốc “năm 2” để suy ra năm học hiện tại vì CV chưa cập nhật. Không đưa hoạt động riêng tư ngoài phần bài cần dùng. Hà đã duyệt danh sách công khai; đã bỏ ignore riêng sản phẩm ex09 để commit/push. Không cần bổ sung ảnh.

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
| Ảnh thật | Đạt: 6/6 ảnh tải được, đường dẫn đúng thứ tự 1–6; đo từng ảnh cao 170px, rộng theo cột, object-fit:cover và display:block; không kéo méo. Giữ nguyên chữ/logo có sẵn trên ảnh Fansipan |
| Vị trí thứ sáu | Đạt: ảnh cửa Động Phong Nha có nguồn tác giả mô tả rõ địa danh, có ghi công CC BY-SA 4.0; không còn vùng chờ. object-position:center 70% giữ cửa động trong khung cắt |

## Giới hạn và bước còn lại

- ex04–ex06 đạt kiểm tra mã, nội dung và ảnh mới cung cấp; không đạt mức ảnh trùng tuyệt đối với mẫu PDF. Nếu giảng viên bắt buộc đúng ảnh gốc, cần bộ ảnh gốc tương ứng.
- ex09 đã được Hà duyệt công khai; TryHackMe từng trả HTTP 429 khi kiểm tra, nên chưa xác nhận truy cập thành công trang đích.
- ex11 đã đủ sáu ảnh và được bỏ ignore riêng bài để đồng bộ; nguồn ảnh 6 và giới hạn nhận diện ảnh mới được ghi rõ phía trên.
- Mới kiểm tra Chrome ở ba kích thước nêu trên; chưa thử mọi trình duyệt/thiết bị, chưa có kết quả chấm LMS.
- Đề/CV gốc, README BoSung và ghi chú duyệt cá nhân không nằm trong commit. ex01–ex03, BTTH01, bai01–bai03 giữ nguyên; ex07–ex08 có đề mới và bản nháp, xem kết quả bổ sung phía cuối; không thao tác LMS.

## Bổ sung đã kiểm tra trong đợt cập nhật ex11 và CV

- Mở ảnh mới trong BoSung; dùng ảnh Phong Nha có nguồn địa danh/giấy phép rõ ràng thay vì khẳng định danh tính của ảnh chưa xác minh. Đã xem lại cả sáu ảnh trên trang theo thứ tự Vịnh Hạ Long → Sơn Đoòng → Thác Bản Giốc → Fansipan → Đồng bằng sông Cửu Long → Động Phong Nha.
- Ex11: thử lại Chrome 1366×900, 768×900, 390×900; đủ sáu figure/img/figcaption, không vùng chờ, tất cả ảnh tải được, cao đúng 170px/cover, gap 18px, ba cột desktop và một cột mobile; xem ảnh chụp desktop/mobile, không tràn ngang.
- Ex09: giữ khung 860px, cột trái 280px, avatar CSS và năm chip. Bổ sung một mục dự án gồm đúng năm liên kết repository, vẫn là một trang CV, không thêm thư viện hoặc trang con. Đã kiểm tra ba viewport, không tràn ngang.
- Đã đọc metadata và README công khai: Quangbk47/acid-base-titration-simulator; Noname000-Zero/classical-cryptography-learning-lab; Noname000-Zero/cse122-physicssim; Noname000-Zero/konoha-network-academy; README bộ sưu tập CSE122 hiện hành. URL đều truy xuất được bằng GitHub API; không suy năng lực cá nhân từ ngôn ngữ hoặc chủ sở hữu repo. README là căn cứ mô tả sản phẩm; phần đóng góp cá nhân dựa xác nhận của Hà.
- Giới thiệu CV nêu rõ AI hỗ trợ triển khai, Hà xác định yêu cầu, kiểm tra kết quả và điều chỉnh. Dự án chuẩn độ và PhysicsSim ghi là dự án nhóm; không nhận dự án Quangbk47 là cá nhân. Không thêm thành tích/số người dùng/số liệu mới, không tuyên bố thành thạo ngôn ngữ.
- publication-review.md đã được Hà duyệt trong đợt chốt ex09; chỉ sản phẩm được bỏ ignore và đồng bộ. CV PDF và bản duyệt gốc vẫn ngoài Git.

## Chốt công khai ex09 sau khi Hà duyệt

- Hà đã cho phép công khai nội dung bản duyệt; không cần cấp quyền lại. Bỏ thông báo chờ duyệt trên trang, không thêm thông tin cá nhân mới.
- Kiểm tra cuối Chrome ở 1366×900, 768×900, 390×900: khung 860px và cột 280px/580px ở desktop; avatar CSS 110×110px/flex/50%; đúng 5 chip, đúng 5 URL dự án được đối chiếu; không ảnh chân dung, không thư viện ngoài, không CSS inline; không tràn ngang. Đã xem ảnh chụp desktop/mobile sau khi bỏ thông báo chờ duyệt.
- Giữ nội dung cá nhân hóa Hà duyệt thay nhân vật mẫu; không tự suy ra năm học, địa chỉ hoặc năng lực ngôn ngữ. Chuẩn độ và PhysicsSim được ghi rõ dự án nhóm; phần phối hợp AI được mô tả đúng xác nhận.
- Mục lục có liên kết ex09; các đường dẫn local tồn tại. CV PDF gốc giữ nguyên hash và bị ignore; commit không chứa PDF, publication-review.md hoặc thư mục nguồn riêng tư.
- Các bài mới đã hoàn thiện và có mã nguồn local/GitHub: ex04, ex05, ex06, ex09, ex10, ex11. ex01–ex03 giữ nguyên và Hà đã xác nhận nộp lại trước đó. BTTH01 giữ nguyên; ex07–ex08 đã có đề mới, hiện là bản nháp thiếu tài nguyên. Không thao tác nộp LMS, không xác nhận chấm đạt.

## Ex07 và ex08 — triển khai theo hai PDF mới

Đã đọc đủ 6 trang (mỗi bài 3 trang), gồm ảnh mẫu và trang quy chuẩn cuối. Sản phẩm local có exNN/index.html, exNN/css/style.css, exNN/images/. ex07/images có ảnh Double Rich mới Hà cung cấp; ex08/images có 7 tệp ảnh thật được cấp phép; không hotlink hoặc img lỗi. Không sửa các bài khác hoặc BTTH01.

### ex07 — kết quả từng tiêu chí

| Tiêu chí | Bằng chứng / trạng thái |
| --- | --- |
| Khung và hai dải tiêu đề | Đã kiểm tra phần có thể thực hiện: khung 860px, nền trắng, shadow 0 12px 30px rgba(0,0,0,.15); header #C8102E, chữ trắng, padding 14px; dải phụ #FBE3E8/#C8102E, font-weight 700, padding 7px; đúng văn bản |
| Kỹ thuật chia cột | Grid 1fr 1px 1fr, desktop đo 381.5px / 1px / 381.5px; vạch giữa rõ. Mobile xếp dọc, vạch ngang phân cách. Làm theo đặc tả chữ, không lặp lỗi vị trí cột bị rơi trong ảnh mẫu |
| Nội dung | Đủ Sản phẩm khuyến mãi / Đối tượng tham gia ở trái, Cách thức nhận giải ở phải; đúng 200ml/400ml, hai điều kiện đối tượng, các mốc 15/06/2005, 17h ngày 12/08/2005, trước 31/07/2005 và dấu bưu điện |
| Ảnh nổi góc phải | Đạt kiểm tra thực tế: ảnh JPEG Double Rich 400×400, hiển thị 140×140 desktop/mobile 390px và 110×110 tại 320px; float:right, đo đúng góc phải/trên cột trái, không méo; không còn vùng chờ |

**Ex07 đã hoàn thiện với tài nguyên mới Hà cung cấp**: đã nhận double-rich.jpg, mở ảnh thực tế nhận diện sản phẩm đúng thương hiệu, sao chép nguyên byte sang images/double-rich.jpg và kiểm tra desktop/mobile. Không khẳng định ảnh trùng tuyệt đối ảnh gốc PDF.

### ex08 — kết quả từng tiêu chí

| Tiêu chí | Bằng chứng / trạng thái |
| --- | --- |
| Sidebar + nội dung | Grid 210px 1fr; desktop đo 210px / 790px. Tiêu đề Ai? Cái gì? Ở đâu? …; màu thanh chuyên mục #1668C1, chữ trắng |
| 7 bài đúng thứ tự | Trầu cau; Xây dựng hạnh phúc gia đình qua những bữa cơm hàng ngày; 10 lời khuyên trong dinh dưỡng; Làm sao để bỏ thuốc lá?; Các món ăn dân dã; Nhạc thiếu nhi; Dân ca. Đoạn tóm tắt chép từ ảnh mẫu, không tự tạo bài viết dài hoặc thêm dữ kiện |
| Lưới từng bài | Đã kiểm tra: nội dung trái, 7 ảnh thật rộng 140px bên phải desktop, height:auto đúng tỷ lệ; mobile xếp dọc; không còn vùng chờ ảnh |
| Neo và cuộn mượt | Có đủ 5 nav link trỏ id tồn tại, mỗi chuyên mục có Về đầu trang trỏ #top. html scroll-behavior:smooth; có tôn trọng prefers-reduced-motion. Đã bấm thật cả 5 link và 5 lần quay về đầu trang ở desktop/mobile, hash và vị trí cuộn đúng |
| Du lịch — quyết định Hà | Giữ neo hoạt động và thông báo ngắn “Chuyên mục Du lịch chưa có nội dung trong đề.” Không thêm article, không tính thành bài thứ tám; không còn chờ hướng dẫn bổ sung |

**Ex08 đã hoàn thiện theo phạm vi Hà chốt**: tự tìm và lưu 7 ảnh thay thế vào BoSung, sao chép sang images với tên tiếng Anh chữ thường. Nguồn, tác giả, giấy phép và URL tải ghi ở ex08/assets.md (public), DuLieuNguon/ex08/BoSung/sources.md và assets.json (local). Không khẳng định khớp tuyệt đối ảnh mẫu.

### Phép thử và giới hạn hiện tại

Chrome headless/Playwright: 1366×900, 768×900, 390×900, 320×900, đã chụp và xem desktop/mobile. Không tràn ngang, không lỗi JavaScript; CSS ngoài nạp được, HTML không CSS inline; tham chiếu tệp CSS tương đối có thật, không dùng CDN/thư viện ngoài hoặc phụ thuộc bài khác. Đã đo thông số nêu trên và thử neo thực tế. Hai PDF nguồn giữ nguyên hash SHA-256.

Ex07 đã nhận ảnh mới và hoàn tất kiểm tra tải ảnh/tỷ lệ, không còn giữ ở trạng thái thiếu ảnh. Ex08 đã được bổ sung ảnh và thử lại theo kết quả dưới đây; được bỏ ignore để commit/push riêng. Không thao tác nộp LMS.

## Hoàn thiện ex08 với tài nguyên tự tìm theo yêu cầu Hà

- Đã kiểm kê repository và bản repository cũ; không có bộ ảnh/ZIP bài 07–08. ZIP local PhysicsSim_KhoDuLieu_ChoCodex.zip không có entry phù hợp tên tài nguyên của đề; không trích xuất hoặc sửa nguồn.
- Đã dùng Commons API để đọc mô tả, tác giả, giấy phép và URL tệp; tải ảnh vào BoSung, kiểm tra Content-Type image/jpeg hoặc image/png, giải mã kích thước và mở từng ảnh để xem nội dung. Chọn 7 ảnh đúng chủ đề. Ứng viên ảnh thiếu nhi mờ bị loại khỏi sản phẩm và được giữ nguyên trong nguồn.
- Tác giả/giấy phép: Eraheem (CC BY-SA 3.0), BigBrotherMouse (CC BY-SA 3.0), juliette.dnl (CC BY 4.0), AIGA (Public domain theo trang nguồn), Christophe95 (CC BY-SA 4.0), ashbrookeMEDIA (CC BY 2.0), Chrisvomberg (CC BY-SA 3.0). URL nguồn và tải trực tiếp ghi trong ex08/assets.md; trang có mục ghi công mở rộng bằng details/summary.
- Ảnh minh họa theo chủ đề: ảnh trầu/cau theo văn hóa Nam Á; ảnh gia đình tại Lào; ảnh thiếu nhi là dàn hợp xướng Watoto. Không nhận là nhân vật/địa điểm Việt Nam hoặc ảnh đúng bài hát. Ảnh dân ca là biểu diễn Quan họ. Không khẳng định trùng ảnh gốc của đề.
- Không chỉnh nội dung tệp; dùng bản thumbnail do Wikimedia cung cấp và sao chép nguyên byte từ BoSung sang images. SHA-256 nguồn/bản sao của cả 7 ảnh khớp. Không ảnh nào tải từ website bên ngoài khi chạy trang; liên kết ngoài chỉ dành cho nguồn và giấy phép.
- Đã kiểm tra Chrome 1366×900, 768×900, 390×900, 320×900: tất cả 7 ảnh tải được, rộng đúng 140px, tỷ lệ hiển thị khớp tỷ lệ gốc; đủ 7 article và đúng thứ tự tiêu đề. Sidebar 210px desktop; menu 5 neo; 5 link về đầu trang; cuộn mượt. Đã bấm mọi neo và link về đầu trang ở cả bốn kích thước. Ghi công mở/đóng được, nội dung không tràn ngang kể cả khi mở. Đã xem ảnh chụp desktop/mobile, không lỗi JavaScript hoặc CSS inline.
- Hai PDF gốc giữ nguyên hash. Không sửa ex01–ex06, ex09–ex11 hoặc BTTH01. Mục lục công khai đã bổ sung link ex07 khi sản phẩm được đưa vào đợt đồng bộ hiện tại.

### Lịch sử tìm ảnh ex07 — đã được giải quyết bằng nguồn mới

Trước khi Hà bổ sung, ứng viên Flickr https://www.flickr.com/photos/21158869@N06/5234049409 ghi All rights reserved / license:0 nên không sử dụng. Kết quả này không phải trạng thái tài nguyên mới. Không tải hoặc thay đổi ảnh Flickr đó.

## Hoàn thiện ex07 sau kiểm kê tài nguyên mới

- Kiểm kê mới toàn bộ tệp đệ quy (không lọc tên hoặc định dạng): H:\HocTap\NhiemVuHeThong\Cac_Bai_Tap\cse122-2551271144\DuLieuNguon\ex07\BoSung có double-rich.jpg, README.md, resource-search.md; không có tệp ảnh khác trong các thư mục con.
- Đã mở double-rich.jpg để xem: hai sản phẩm Double Rich màu đỏ, có chai dầu gội. Xác minh chữ ký JPEG, kích thước 400×400, 16.592 byte. Giữ nguyên bản nguồn; bản sao ex07/images/double-rich.jpg có cùng SHA-256 trước/sau.
- Ảnh do Hà cung cấp và yêu cầu sử dụng để hoàn thiện/commit/push. Không có URL tác giả/giấy phép mở đi kèm nên không tự gán giấy phép CC; hồ sơ nguồn ở ex07/assets.md. Không tuyên bố trùng tuyệt đối ảnh gốc PDF.
- Thay đúng vùng chờ bằng img có alt; xóa CSS chỉ dành cho vùng chờ. Giữ toàn bộ văn bản theo đề, cấu trúc HTML/CSS ngoài và Grid 1fr 1px 1fr; bỏ ignore riêng sản phẩm ex07, tiếp tục ignore DuLieuNguon.
- Chrome/Playwright tại 1366×900, 768×900, 390×900, 320×900: ảnh local tải được, đúng tỷ lệ vuông; float:right, cạnh trên/phải ảnh trùng cạnh trên/phải cột trái; khung desktop 860px, Grid đo 381.5px / 1px / 381.5px. Mobile chuyển một cột; không tràn ngang hoặc lỗi JavaScript. Đã xem ảnh chụp desktop/mobile.
- Đã đối chiếu h1 và dải phụ, màu #C8102E/#FBE3E8, padding 14px/7px, chữ trắng/đỏ và font-weight:700. Đủ ba mục và nội dung 200ml/400ml, điều kiện đối tượng, thời hạn 15/06/2005 → 17h ngày 12/08/2005, trước 31/07/2005 theo dấu bưu điện. Không thay ngày tháng bằng dữ liệu mới.
- Mục lục có link ex07, mọi link local tồn tại. Chỉ commit sản phẩm ex07 và tài liệu quản lý; không đưa PDF đề, CV hoặc BoSung gốc lên Git, không sửa mã các bài khác, không thao tác nộp LMS.
- Hiện không còn tài nguyên bắt buộc đang thiếu cho ex07. Các bài ex04–ex11 đã có sản phẩm hoàn thiện theo phạm vi đã chốt; ex01–ex03 giữ nguyên và đã được Hà xác nhận nộp lại trước đó.
