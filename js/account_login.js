const user = JSON.parse(localStorage.getItem("user"));
/// check neu da login => qua thang form add menu
if (user) {
  // da login
  document.getElementById("add_menu").classList.remove("hidden");
} else {
  // chua login
  window.location.href = 'login.html';
  document.getElementById("add_menu").classList.add("hidden");
}
//------------------------------------------------------------------------------------------------------------------------------
