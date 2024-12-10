document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const user_list = JSON.parse(localStorage.getItem("users")) || [];
  if (currentUser && user_list.length) {
    document.getElementById("username").value = currentUser.username;
    document.getElementById("email").value = currentUser.email;
    document.getElementById("avatar").src =
      currentUser.avatar ||
      "https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg";
    document.querySelector("#user-point span").innerHTML = currentUser.point;
  } else {
    window.location.href = "login.html";
  }

  document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
  });

  document
    .getElementById("changeAvatar")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const newAvatar = e.target.result;
          document.getElementById("avatar").src = newAvatar;
          // cap nhat thong tin trong user list
          // loc user => neu la current user => sua point
          const newList = user_list.map(function (user) {
            if (currentUser.username === user.username) {
              // luu lai avatar moi cho current user
              currentUser.avatar = newAvatar;
              return currentUser;
            }
            return user;
          });
          // luu lai list user moi vao local storage
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
          localStorage.setItem("users", JSON.stringify(newList));
        };
        reader.readAsDataURL(file);
      }
    });
});
