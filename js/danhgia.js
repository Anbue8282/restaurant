document.addEventListener('DOMContentLoaded', function () {
    if (typeof emailjs === 'undefined') {
        // console.error('EmailJS script not loaded.');
        return;
    }

    // Khởi tạo EmailJS 
    emailjs.init('EjMBRbBQiAP596ju4'); 

    document.getElementById('feedbackForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Ngăn chặn việc gửi form truyền thống

        // Lấy dữ liệu từ form
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            rating: formData.get('rating'),
            comments: formData.get('comments')
        };

        // Gửi dữ liệu đến EmailJS
        emailjs.send('service_4gr6oqj', 'template_x3fpch9', data)
            .then(function(response) {
                // Hiển thị thông báo thành công
                alert('Phản hồi của bạn đã được gửi thành công!');
                document.getElementById('feedbackForm').reset(); // Reset form
            }, function(error) {
                // Hiển thị thông báo lỗi
                console.error('Lỗi:', error);
                alert('Đã xảy ra lỗi. Vui lòng thử lại.');
            });
    });
});

