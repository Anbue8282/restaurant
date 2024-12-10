let item = {
    image: "",
    name: "",
    detail: "",
    price: "",
  };
  
  function get_input_data() {
    item.image = document.getElementById("image").value;
    item.name = document.getElementById("name").value;
    item.detail = document.getElementById("detail").value;
    item.price = document.getElementById("price").value;
    const type = document.getElementById("menu_type").value;
    let list = [];
    // validate form
    if (!item.image || !item.name || !item.detail || !item.price) {
      alert("Fill the form");
      return;
    } else {
      // add data in local storage
      switch (type) {
        case "Breakfast":
          list = JSON.parse(localStorage.getItem("bs_list"));
          list.push(item);
          // set lai gia tri cho list trong local storage
          localStorage.setItem("bs_list", JSON.stringify(list));
          break;
        case "Lunch":
          list = JSON.parse(localStorage.getItem("btr_list"));
          list.push(item);
          // set lai gia tri cho list trong local storage
          localStorage.setItem("btr_list", JSON.stringify(list));
          break;
        case "Drink":
          list = JSON.parse(localStorage.getItem("tu_list"));
          list.push(item);
          // set lai gia tri cho list trong local storage
          localStorage.setItem("tu_list", JSON.stringify(list));
          break;
        case "Dinner":
          list = JSON.parse(localStorage.getItem("bt_list"));
          list.push(item);
          // set lai gia tri cho list trong local storage
          localStorage.setItem("bt_list", JSON.stringify(list));
          break;
        case "Dessert":
          list = JSON.parse(localStorage.getItem("tm_list"));
          list.push(item);
          // set lai gia tri cho list trong local storage
          localStorage.setItem("tm_list", JSON.stringify(list));
          break;
      }
      alert("add item successful");
      return;
    }
  }
  
  // bat su kien cho nut submit form
  document.getElementById("add_menu_btn").addEventListener("click", (e) => {
    e.preventDefault();
    get_input_data();
  });