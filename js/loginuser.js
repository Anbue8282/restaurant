// Đoạn mã trong login.js
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user_list = JSON.parse(localStorage.getItem("users")) || [];

    // kiem tra user co trong list khong
    const registeredUser = user_list.filter(function (u) {
      return u.username === username && u.password === password;
    });
    if (registeredUser.length) {
      // Lưu thông tin nguoi dung hien tai trong local storage
      localStorage.setItem("currentUser", JSON.stringify(registeredUser[0]));

      // chuyen huong den trang account
      window.location.href = "./account.html"; // Redirect to account page
    } else {
      alert("Invalid credentials!");
    }
  });
