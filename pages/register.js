import { database, storage, firebaseApp } from "../data/firebase-app.js";
import {
  setDoc,
  doc,
  collection,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import app from "../app.js";
import Footer from "../component/footer.js";
import Nav from "../component/nav.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import Home from "./home.js";
import Login from "./login.js";

class Register {
  constructor() {
    this.nav = new Nav();
    this.footer = new Footer();
    // set title name for web page
    document.title = "Register";
  }

  render(main_container) {
    this.nav.render(main_container);
    const main = document.createElement("main");
    const section = document.createElement("section");
    section.id = "register";
    const container = document.createElement("div");
    container.className = "container";

    const h1 = document.createElement("h1");
    h1.textContent = "Register";

    const form = document.createElement("form");
    form.id = "registerForm";

    const usernameInput = document.createElement("input");
    usernameInput.type = "text";
    usernameInput.id = "username";
    usernameInput.name = "username";
    usernameInput.placeholder = "Username";
    usernameInput.required = true;

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.placeholder = "Email";
    emailInput.required = true;

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "password";
    passwordInput.name = "password";
    passwordInput.placeholder = "Password";
    passwordInput.required = true;

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Register";
    button.addEventListener("click", this.check_register.bind(this));

    const p = document.createElement("p");
    p.textContent = "Already have an account? ";
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = "Login here";
    p.addEventListener("click", this.goto_login.bind(this));
    p.appendChild(a);

    form.appendChild(usernameInput);
    form.appendChild(emailInput);
    form.appendChild(passwordInput);
    form.appendChild(button);
    container.appendChild(h1);
    container.appendChild(form);
    container.appendChild(p);
    section.appendChild(container);
    main.appendChild(section);

    main_container.appendChild(main);

    this.footer.render(main_container);
  }

  goto_login() {
    const login = new Login();
    app.renderComponent(login);
  }

  async check_register(event) {
    event.preventDefault();
    // get data from input form
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const username = document.getElementById("username").value.trim();
    const _this = this;
    // kiem tra thong tin nhap vao
    if (this.validate_registerform(email, username, password)) {
      const auth = getAuth(firebaseApp);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username,
            photoURL:
              "https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg",
          })
            .then(() => {
              console.log("User profile updated");
            })
            .catch((error) => {
              alert("Update profile error:", error);
            });
          // luu them vao database de luu duoc diem 
          const docRef = doc(database, "users", user.uid);
          await setDoc(
            docRef,
            {
              displayName: username,
              photoURL:
                "https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg",
              point: 0,
            },
            { merge: true }
          );
          _this.goto_login();
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  }

  goto_home() {
    const home = new Home();
    app.renderComponent(home);
  }

  validate_registerform(email, username, password, terms) {
    if (!(email && password && username)) {
      // khong nhap du du lieu
      alert("Vui long nhap du thong tin");
      return false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Email khong dung dinh dang!");
      return false;
    }
    if (password.length < 6) {
      alert("Mat khau phai tu 6 chu so tro len!");
      return false;
    }
    return true;
  }
}

export default Register;
