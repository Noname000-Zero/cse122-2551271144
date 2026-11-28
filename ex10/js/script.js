const form = document.querySelector('form');
const status = document.querySelector('#form-status');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Biểu mẫu thực hành: dữ liệu hợp lệ. Thông tin chưa được gửi tới máy chủ.';
});
form.addEventListener('reset', () => { status.textContent = ''; });
