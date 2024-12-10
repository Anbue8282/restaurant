document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".nav-menu").classList.toggle("active");
  });


//thay đổi avarta ở thanh nav 
document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser && currentUser.avatar) {
    document.getElementById("navAvatar").src = currentUser.avatar;
  }
});
