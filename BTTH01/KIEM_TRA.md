# Kiểm tra và rà soát BTTH01

Ngày 25/11/2026 (Asia/Saigon). AI đã sửa và kiểm tra tài liệu theo yêu cầu của Hà; **chưa có xác nhận Hà đã giải thích hay nghiệm thu**. Đã commit và push bài lên main; tiếp tục kiểm tra xuất bản theo yêu cầu mới.

## Đối chiếu 15 phần của master prompt

| STT | Đầu ra | Vị trí | Kết quả rà soát tài liệu |
|---|---|---|---|
| 1 | Bản đồ bố cục | README §1 | Giữ đủ header, drawer, hero, mọi section chính, footer và social rail. |
| 2 | Phân tích component | COMPONENTS: 23 mục | Mỗi mục có đủ 7 bước và nội dung minh họa cụ thể. |
| 3 | Layout box + class | Cây mục 1 từng component | Cây được tạo từ chính ví dụ HTML, wrapper và item khớp nhau. |
| 4 | Flex/Grid/Block/Position | Mục 2 và 6 từng component | Phân biệt giải pháp dựng lại với CSS gốc đã đo. |
| 5 | Flex Container + Items | README §5; COMPONENTS | Nêu con trực tiếp, cấp flex lồng, wrap/nowrap và tỷ lệ đề xuất. |
| 6 | Kiểu nội dung | Bảng mục 3 từng component | Thay mô tả chung bằng vai trò của nhãn, ảnh, ngày, liên kết, đoạn văn và dữ liệu. |
| 7 | HTML semantic | Bảng mục 3; code mục 5 | Một main; form có label/input name/submit; ngôn ngữ là nav có link; figcaption ở cuối figure. |
| 8 | Bản chỉ div | Mục 4 từng component | Có nội dung, giữ cùng hệ hộp; ảnh/input chuyển thành nhãn diễn giải, không tuyên bố tương tác. |
| 9 | Bản semantic | Mục 5 từng component | Có heading, nội dung thẻ, danh sách và form phù hợp. Đích link/ảnh minh họa được khai báo. |
| 10 | CSS minh họa | Mục 6 từng component; README §10 | Ba card + list: 4 items/4 cột; gallery span 3 cột × 2 hàng; ngày absolute trong media relative; nested flex có CSS. |
| 11 | Responsive | Mục 7 từng component; README §11 | Giữ kết quả desktop/mobile cũ; media query đề xuất khác carousel gốc được nói rõ. |
| 12 | Hai cây DOM | README §12 | Liệt kê toàn bộ vùng chính riêng biệt, mở rộng các con theo mẫu minh họa; không dùng dấu ba chấm bỏ vùng. |
| 13 | Bảng tổng hợp | README §13 | 23 dòng, cập nhật thẻ và container/item theo HTML/CSS mới. |
| 14 | Checklist sinh viên | README §14 | Giữ các việc chưa kiểm chứng ở trạng thái chưa đạt. |
| 15 | Lỗi tư duy | README §15 | Bao gồm suy đoán CSS từ ảnh, item/container, Position, semantic và báo kiểm thử quá mức. |

## Phép kiểm tra đã chạy

- Markdown: code fence cân bằng, link tệp tương đối tồn tại, đủ 15 anchor mục lục. Đã kiểm tra tĩnh và kiểm tra lại render GitHub không đăng nhập; phần lặp đã sửa, 15 anchor duy nhất và bấm cuộn đúng vùng.
- Cấu trúc: phân tích 23 đoạn HTML minh họa bằng DOMParser trong Edge headless; section có heading, form có input có name và nút submit, input có label, ul có các con li. Đây là kiểm tra có mục tiêu, không thay thế trình kiểm chuẩn HTML toàn diện.
- Cây toàn trang ghép từ ví dụ: đúng 1 main, không có main lồng main, không có id trùng.
- CSS tính toán của ví dụ ở viewport mặc định 1280×720: ba vùng topic-grid đều có 4 items và 4 cột (308px/cột); gallery grid-column `2 / span 3`, grid-row `span 2`; event-date absolute và event-media relative.
- Nested Flexbox của ví dụ: units-content, units-list, units-preview, nav-list và nav-link đều có computed display:flex.
- So sánh SHA-256 trước/sau sửa: toàn bộ 11 tệp trong assets giữ nguyên byte. Không ghi lại ảnh, DOM hay JSON khảo sát gốc.
- Git trước commit: chỉ BTTH01 mới; commit bài 9e3be23 chỉ chứa BTTH01, không sửa bài cũ.

## Giới hạn giữ nguyên

Không chạy lại khảo sát TLU trong lần rà soát tài liệu này. Log cũ vẫn chỉ xác nhận hover dropdown, mở drawer và details.open; click nút đóng chưa xác nhận trạng thái cuối, click chuyển tin chưa đo slide đổi. Chưa kiểm chứng gửi tìm kiếm, chuyển ngôn ngữ, lightbox, bản đồ, đích liên kết ngoài, bàn phím, tablet và trình đọc màn hình. Một số ảnh mobile chưa tải; chưa rõ nguyên nhân.

Code là ví dụ cấu trúc, không phải website hoàn chỉnh: chưa có JS cho menu/slider/lightbox; action, query parameter, link tiếng Anh và link nội dung là minh họa, không phải endpoint TLU đã kiểm chứng. Ảnh dùng screenshot khảo sát để minh họa vị trí, không phải ảnh riêng của từng bài/logo.

## Tệp thay đổi trong lần rà soát

- README.md: khai báo AI/trạng thái chờ xem xét; bản đồ flex, CSS chung, hai cây DOM đầy đủ, bảng tổng hợp.
- COMPONENTS.md: rà cả 23 component; semantic, vai trò nội dung, code div/semantic/CSS, quan hệ hộp và responsive.
- KIEM_TRA.md: đối chiếu 15 phần và ghi kết quả kiểm tra thực tế.

Bằng chứng assets giữ nguyên. Chưa coi những giới hạn trên là đã hoàn thành kiểm thử.

## Kiểm tra xuất bản GitHub thực tế

Ngày 25/11/2026, Edge headless không đăng nhập, viewport 1440×1000. Nội dung được kiểm tra lại tại commit `d5e2413`, sau commit bài `9e3be23`. Repository Public được xác nhận bằng GitHub CLI; ba trang dưới trả HTTP 200 trong phiên không có cookie đăng nhập, nên người có link có thể đọc mà không cần được mời vào repository.

- [README trên GitHub](https://github.com/Noname000-Zero/cse122-2551271144/blob/main/BTTH01/README.md): đủ 15 phần, 2 bảng, 5 code block; hai cây DOM được render thành pre, lần lượt 9.831 và 9.843 ký tự, đều có hero, community và footer.
- Mục lục: đã bấm cả 15 mục, mỗi anchor tồn tại đúng một lần; đợi 1,8 giây cho cuộn hoàn tất, vị trí phần đích khoảng 125px từ đỉnh (phần 15 khoảng 271px do cuối trang).
- [COMPONENTS](https://github.com/Noname000-Zero/cse122-2551271144/blob/main/BTTH01/COMPONENTS.md): 23 tiêu đề component, 23 bảng, 92 code block.
- [KIEM_TRA](https://github.com/Noname000-Zero/cse122-2551271144/blob/main/BTTH01/KIEM_TRA.md): mở công khai và bảng đối chiếu được render.
- Liên kết tương đối sang hai tài liệu được GitHub chuyển tới đúng đường dẫn BTTH01. Ảnh menu nhúng có naturalWidth > 0; bốn ảnh desktop/mobile/menu/dropdown tại raw.githubusercontent.com trả HTTP 200, Content-Type image/png.
- Đã xem ảnh chụp vùng bản đồ bố cục, bảng tổng hợp và vùng cây DOM để kiểm tra khả năng đọc. Lần mở đầu phát hiện phần 14–15 và tiêu đề DOM bị lặp; đã sửa và kiểm tra lại trước khi lưu bộ bằng chứng này.

Bằng chứng mới: [log kiểm tra](assets/github-render.json), [bản đồ bố cục](assets/github-part-1.png), [cây DOM](assets/github-part-12.png), [bảng tổng hợp](assets/github-part-13.png). Các ảnh/DOM/JSON khảo sát TLU cũ giữ nguyên. Bộ bằng chứng ghi commit nội dung đã kiểm tra; commit bổ sung hồ sơ xuất bản tiếp theo chỉ thêm bằng chứng và cập nhật mục này.

Giới hạn: chưa kiểm tra render GitHub trên mobile hoặc mọi browser; không kiểm tra mọi link ngoài. Việc xuất bản không bổ sung kết quả khảo sát tương tác TLU còn thiếu ở phần Giới hạn giữ nguyên. Hà chưa xác nhận nghiệm thu.
