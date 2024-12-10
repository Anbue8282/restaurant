import app from "../app.js";
import Account from "../pages/account.js";
import Admin from "../pages/admin.js";
import Detail from "../pages/detail.js";
import Home from "../pages/home.js";
import Login from "../pages/login.js";
import Menu from "../pages/menu.js";
import Register from "../pages/register.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { firebaseApp } from "../data/firebase-app.js";

class Nav {
  constructor() {}
  render(mainContainer) {
    // Create the nav element
    const nav = document.createElement("nav");

    // Create the hamburger menu div
    const hamburgerMenu = document.createElement("div");
    hamburgerMenu.classList.add("hamburger-menu");

    // Add the Font Awesome icon
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-bars");
    hamburgerMenu.appendChild(icon);

    // Append the hamburger menu to the nav
    nav.appendChild(hamburgerMenu);

    // Create the nav-menu ul
    const navMenu = document.createElement("ul");
    navMenu.classList.add("nav-menu");

    // Create the first li with avatar
    const liAvatar = document.createElement("li");
    const avatarLink = document.createElement("a");
    avatarLink.id = "avatarLink";
    const avatarImg = document.createElement("img");
    avatarImg.id = "navAvatar";
    avatarImg.alt = "";
    avatarLink.appendChild(avatarImg);
    liAvatar.appendChild(avatarLink);
    navMenu.appendChild(liAvatar);

    // Create and append the first menu item
    const li1 = document.createElement("li");
    const link1 = document.createElement("a");
    li1.addEventListener("click", this.goto_home.bind(this));
    link1.textContent = "Home";
    li1.appendChild(link1);
    navMenu.appendChild(li1);

    // Create and append the second menu item
    const li2 = document.createElement("li");
    const link2 = document.createElement("a");
    li2.addEventListener("click", this.goto_about.bind(this));
    link2.textContent = "About";
    li2.appendChild(link2);
    navMenu.appendChild(li2);

    // Create and append the third menu item
    const li3 = document.createElement("li");
    const link3 = document.createElement("a");
    li3.addEventListener("click", this.goto_menu.bind(this));
    link3.textContent = "Menu";
    li3.appendChild(link3);
    navMenu.appendChild(li3);

    // Create and append the fourth menu item
    const li4 = document.createElement("li");
    const link4 = document.createElement("a");
    li4.addEventListener("click", this.goto_book.bind(this));
    link4.textContent = "Book a table online";
    li4.appendChild(link4);
    navMenu.appendChild(li4);

    // Append the nav-menu to the nav
    nav.appendChild(navMenu);

    // Append the nav to the body or a specific container
    mainContainer.appendChild(nav);
    this.check_signed_in();
  }
  goto_login() {
    const login = new Login();
    app.renderComponent(login);
  }
  goto_register() {
    const register = new Register();
    app.renderComponent(register);
  }
  goto_home() {
    const home = new Home();
    app.renderComponent(home);
  }
  goto_admin() {
    const admin = new Admin();
    app.renderComponent(admin);
  }
  goto_detail() {
    const detail = new Detail();
    app.renderComponent(detail);
  }
  goto_menu() {
    const menu = new Menu();
    app.renderComponent(menu);
  }
  goto_account() {
    const account = new Account();
    app.renderComponent(account);
  }
  goto_about() {
    const home = new Home();
    app.renderComponent(home);
    home.scrollto_about();
  }
  goto_book() {
    const home = new Home();
    app.renderComponent(home);
    home.scrollto_book();
  }
  check_signed_in() {
    // Reference the document
    try {
      const auth = getAuth(firebaseApp);
      const user = auth.currentUser;
      const avaImg = document.getElementById("navAvatar");
      if (!user) {
        // hien thi icon login
        avaImg.src =
          "https://static-00.iconduck.com/assets.00/login-icon-2048x2048-cafqaoiq.png";
        // bat su kien button account => login
        avaImg.addEventListener("click", this.goto_login.bind(this));
      } else {
        // co user => hien thi hinh avatar
        avaImg.src = user.photoURL;
        // bat su kien chuyen sang account
        avaImg.addEventListener("click", this.goto_account.bind(this));
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}
export default Nav;
