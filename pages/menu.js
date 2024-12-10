import Home from "./home.js";
import app from "../app.js";
import Detail from "./detail.js";
import Nav from "../component/nav.js";
import Footer from "../component/footer.js";
class Menu {
  constructor() {
    document.title = "Menu";
    this.nav = new Nav();
    this.footer = new Footer();
  }
  async render(mainContainer) {
    this.nav.render(mainContainer);
    // Create the filter container div
    const filterContainer = document.createElement("div");
    filterContainer.className = "filter-container";

    // Create the filter div
    const filterDiv = document.createElement("div");
    filterDiv.className = "filter collapsed";
    filterDiv.id = "filter";

    // Create the toggle button
    const toggleButton = document.createElement("button");
    toggleButton.className = "toggle-btn";
    toggleButton.addEventListener("click", this.toggleFilter.bind(this));

    const toggleImg = document.createElement("img");
    toggleImg.src =
      "https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png";
    toggleImg.alt = "";
    toggleButton.appendChild(toggleImg);
    filterDiv.appendChild(toggleButton);

    // Array of filter buttons
    const filterOptions = [
      { label: "Breakfast", action: "breakfast" },
      { label: "Lunch", action: "lunch" },
      { label: "Dinner", action: "dinner" },
      { label: "Drinks", action: "drinks" },
      { label: "Vegan", action: "vegan" },
      { label: "All", action: "all" },
    ];

    // Create filter buttons dynamically
    filterOptions.forEach((option) => {
      const button = document.createElement("button");
      button.className = "btn";
      button.textContent = option.label;
      button.addEventListener(
        "click",
        this.filterFood.bind(this, option.action)
      );
      filterDiv.appendChild(button);
    });

    // Append the filter div to the filter container
    filterContainer.appendChild(filterDiv);

    // Create the main content section
    const mainContent = document.createElement("main");
    mainContent.className = "main-content";
    mainContent.id = "main-content";

    // Create the dish list div
    const dishList = document.createElement("div");
    dishList.id = "dish-list";

    // Append the dish list to the main content
    mainContent.appendChild(dishList);

    // Append the filter container and main content to the body or another container
    mainContainer.appendChild(filterContainer);
    mainContainer.appendChild(mainContent);
    this.footer.render(mainContainer);
    this.toggleFilter();
    await this.getFoodList();
  }

  toggleFilter() {
    const filter = document.getElementById("filter");
    const mainContent = document.getElementById("main-content");
    filter.classList.toggle("collapsed");
    mainContent.classList.toggle("collapsed");
  }

  async getFoodList(tag = "all") {
    const container = document.getElementById("dish-list");
    container.innerHTML = ""; // Clear previous content
    const _this = this;

    let url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20";
    if (tag !== "all") {
      url += `&tags=${tag}`;
    }

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "fcb9dc4e14msh8e85a2c1001d2f9p1d7118jsn8267b87e811d",
        "x-rapidapi-host": "tasty.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      result.results.forEach((element) => {
        container.appendChild(_this.renderFoodCard(element));
      });
    } catch (error) {
      console.error(error);
    }
  }

  renderFoodCard(food) {
    const _this = this;
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = food.thumbnail_url;
    img.alt = "Card image cap";

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = food.name;

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = food.description;

    const cardLink = document.createElement("a");
    cardLink.href = "#";
    cardLink.className = "btn btn-primary";
    cardLink.textContent = "View details";
    cardLink.onclick = function () {
      localStorage.setItem("foodDetail", JSON.stringify(food));
      _this.goto_detail();
    };

    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardLink);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);

    return cardDiv;
  }

  filterFood(tag) {
    this.getFoodList(tag);
  }

  goto_detail() {
    const detail = new Detail();
    app.renderComponent(detail);
  }
  goto_home() {
    const home = new Home();
    app.renderComponent(home);
  }
}
export default Menu;
