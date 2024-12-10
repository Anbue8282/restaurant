document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // lay lai list tu local storage
    const user_list = JSON.parse(localStorage.getItem("users")) || [];
    // Lấy thông tin từ form
    const user = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      point: 0,
      avatar:
        "https://ibiettuot.com/wp-content/uploads/2021/10/avatar-mac-dinh.png", // Default avatar
    };

    // validate form 
    // ...

    // kiem tra khong duoc trung email hoac username
    const duplicate_users = user_list.filter(function (u) {
      return user.username === u.username || user.email === u.email;
    });

    // neu bi trung => thong bao nhap lai
    if (duplicate_users.length) {
      alert("Tai khoan da ton tai trong he thong, vui long dang nhap!");
      return;
    } else {
      // tao tai khoan moi
      // Lưu thông tin người dùng vào localStorage
      // add user moi vao user list
      user_list.push(user);
      // luu lai danh sach user vao local storage
      localStorage.setItem("users", JSON.stringify(user_list));
      alert("Registration successful!");
      window.location.href = "login.html"; // Redirect to login page
    }
  });

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".nav-menu").classList.toggle("active");
  });
