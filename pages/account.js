import Login from "./login.js";
import Register from "./register.js";
import app from "../app.js";
import {
  getAuth,
  signOut,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import Home from "./home.js";
import { database, storage, firebaseApp } from "../data/firebase-app.js";
import {
  updateDoc,
  getDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";
import Nav from "../component/nav.js";
import Footer from "../component/footer.js";
class Account {
  constructor() {
    document.title = "Account";
    this.nav = new Nav();
    this.footer = new Footer();
  }
  async render(mainContainer) {
    this.nav.render(mainContainer);
    // Tạo phần tử main và section
    const main = document.createElement("main");
    const section = document.createElement("section");
    section.id = "account";

    // Tạo phần tử container
    const container = document.createElement("div");
    container.classList.add("container");

    // Tạo tiêu đề Account Information
    const h1 = document.createElement("h1");
    h1.textContent = "Account Information";
    container.appendChild(h1);

    // Tạo phần avatar container và ảnh
    const avatarContainer = document.createElement("div");
    avatarContainer.classList.add("avatar-container");
    const avatarImg = document.createElement("img");
    avatarImg.id = "avatar";
    avatarImg.alt = "Avatar";
    avatarContainer.appendChild(avatarImg);
    container.appendChild(avatarContainer);

    // Tạo phần hiển thị điểm người dùng
    const userPointDiv = document.createElement("div");
    const userPointH1 = document.createElement("h1");
    userPointH1.innerHTML = `Your point: <span id="user-point">100</span>`;
    userPointDiv.appendChild(userPointH1);
    container.appendChild(userPointDiv);

    // Tạo form để thay đổi thông tin tài khoản
    const accountForm = document.createElement("form");
    accountForm.id = "accountForm";
    accountForm.enctype = "multipart/form-data";

    // Tạo input file upload
    const fileLabel = document.createElement("label");
    fileLabel.textContent = "Select image to upload:";
    accountForm.appendChild(fileLabel);

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.name = "fileToUpload";
    fileInput.id = "fileToUpload";
    accountForm.appendChild(fileInput);

    // Tạo các input cho username, phonenumber, email
    const usernameInput = document.createElement("input");
    usernameInput.type = "text";
    usernameInput.id = "username";
    usernameInput.name = "username";
    usernameInput.placeholder = "Username";
    // usernameInput.disabled = true;
    accountForm.appendChild(usernameInput);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.placeholder = "Email";
    emailInput.disabled = true;
    accountForm.appendChild(emailInput);

    // Tạo nút Save
    const saveButton = document.createElement("button");
    saveButton.type = "button";
    saveButton.id = "save_profile_button";
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", this.handleUpdateBtn.bind(this));
    accountForm.appendChild(saveButton);

    // Tạo nút Logout
    const logoutButton = document.createElement("button");
    logoutButton.type = "button"; // Chắc chắn là type="button" nếu không muốn form tự động submit
    logoutButton.id = "logoutBtn";
    logoutButton.textContent = "Logout";
    logoutButton.addEventListener("click", this.logout.bind(this));
    accountForm.appendChild(logoutButton);

    // Thêm form vào container
    container.appendChild(accountForm);

    // Thêm container vào section
    section.appendChild(container);

    // Thêm section vào main
    main.appendChild(section);

    // Thêm phần tử main vào body của trang
    mainContainer.appendChild(main);

    // Append the main element to the body or another container
    this.footer.render(mainContainer);

    // load du lieu cho giao dien
    this.loadInfo();
  }
  async uploadimg(file) {
    // Create a reference
    const imageRef = ref(storage, file.name);
    try {
      // Upload file
      const snapshot = await uploadBytes(imageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      this.$imageURL = downloadURL;
      console.log("File available at", downloadURL);
    } catch (error) {
      console.error("Upload failed", error);
    }
  }
  async updateProfile(username) {
    try {
      const auth = getAuth(firebaseApp);
      const user = auth.currentUser;
      const _this = this;
      // Reference the document you want to update
      const docRef = doc(database, "users", user.uid);
      updateProfile(user, {
        displayName: username.value,
        photoURL: _this.$imageURL,
      });
      // Update the document
      await updateDoc(docRef, {
        displayName: username.value,
        photoURL: _this.$imageURL,
      });
      alert("Update info successfully");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  async handleUpdateBtn(event, mainContainer) {
    event.preventDefault();
    // get input dataa
    const user_name = document.getElementById("username");
    const img = document.getElementById("fileToUpload");

    //validateform
    if (!user_name.value) {
      alert("pls fill username");
      return;
    }
    const file = img.files[0];

    //update
    if (file) {
      await this.uploadimg(file);
    }
    await this.updateProfile(user_name);
    this.loadInfo();
  }

  loadInfo() {
    this.userInfo = {};
    try {
      const auth = getAuth(firebaseApp);
      const user = auth.currentUser;
      // Reference the document you want to update
      const docRef = doc(database, "users", user.uid);
      // Fetch the document data
      getDoc(docRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            // Extract data from the document
            const userData = docSnap.data();

            // Update the UI elements with the fetched data
            const ava = document.getElementById("avatar");
            ava.src = userData.photoURL; // Assuming photoURL exists in the document

            const point = document.getElementById("user-point");
            point.innerText = userData.point; // Assuming point exists in the document

            const username = document.getElementById("username");
            username.value = userData.displayName; // Assuming displayName exists in the document

            const email = document.getElementById("email");
            email.value = user.email; // Assuming email exists in the document
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error("Error fetching document: ", error);
        });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  logout() {
    const auth = getAuth(firebaseApp);
    const _this = this;
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        _this.goto_home();
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  }

  goto_home() {
    const home = new Home();
    app.renderComponent(home);
  }
  goto_login() {
    const login = new Login();
    app.renderComponent(login);
  }
  goto_register() {
    const register = new Register();
    app.renderComponent(register);
  }
}
export default Account;
