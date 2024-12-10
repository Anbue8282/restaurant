const admin = JSON.parse(localStorage.getItem("admin"));
/// check neu da login => qua thang form add menu
if (admin) {
  // da login
  document.getElementById("login").classList.add("hidden");
  document.getElementById("add_menu").classList.remove("hidden");
  document.getElementById("delete_menu").classList.remove("hidden");


} else {
  // chua login
  document.getElementById("login").classList.remove("hidden");
  document.getElementById("add_menu").classList.add("hidden");
  document.getElementById("delete_menu").classList.add("hidden");

}

function validate_form() {
  const admin_name = "abc";
  const admin_password = "123";

  const input_admin_name = document.getElementById("admin_name").value;
  const input_admin_pass = document.getElementById("admin_password").value;
  if (!input_admin_name || !input_admin_pass) {
    alert("please fill form");
    return;
  } else if (
    input_admin_name != admin_name ||
    input_admin_pass != admin_password
  ) {
    alert("username or password is not correct");
    return;
  } else {
    alert("Sign in successful!");
    // set lai thuoc tinh login trong admin
    localStorage.setItem(
      "admin",
      JSON.stringify({ admin_name: "abc", admin_password: "123" })
    );

    document.getElementById("login").classList.add("hidden");
    document.getElementById("add_menu").classList.remove("hidden");
    return;
  }
}

// bat su kien cho button login
document.getElementById("login-submit").addEventListener("click", (e) => {
  e.preventDefault();
  validate_form();
});

