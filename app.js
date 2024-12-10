import Account from "./pages/account.js";
import Detail from "./pages/detail.js";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import Menu from "./pages/menu.js";
import Register from "./pages/register.js";

class App {
  constructor() {
    this.mainContainer = document.getElementById("app");
  }

  renderComponent(component) {
    // xoa du lieu cu -> add component moi
    this.mainContainer.innerHTML = "";
    component.render(this.mainContainer);
  }
}

// 1 project = 1 app
const app = new App();
// render giao dien

  const login = new Detail();
  app.renderComponent(login);


export default app;