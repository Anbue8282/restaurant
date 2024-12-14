import Nav from "../component/nav.js";
import Footer from "../component/footer.js";
import Login from "./login.js";
import app from "../app.js";
import { database, firebaseApp } from "../data/firebase-app.js";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import Menu from "./menu.js";

export default class Home {
  constructor() {
    document.title = "Home";
    this.nav = new Nav();
    this.footer = new Footer();
  }
  async render(mainContainer) {
    // add nav
    this.nav.render(mainContainer);
    const main = document.createElement("main");

    // Create section element
    const section1 = document.createElement("section");
    section1.id = "home";

    // Create div element
    const div = document.createElement("div");

    // Create image container div
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    // Create img element
    const img = document.createElement("img");
    img.src =
      "https://vcdn-suckhoe.vnecdn.net/2022/03/07/thuc-pham-ung-thu-vu-5176-1646638824.jpg";
    img.alt = "...";
    img.style.width = "100%";
    img.style.height = "auto";

    // Create h1 element
    const h1 = document.createElement("h1");
    h1.classList.add("m1");
    h1.textContent = "Fooday";

    // Append img and h1 to image container
    imageContainer.appendChild(img);
    imageContainer.appendChild(h1);

    // Append image container to div
    div.appendChild(imageContainer);

    // Append div to section
    section1.appendChild(div);

    // Append section to the body (or another container element)
    main.appendChild(section1);

    //-----------------------------------------------------------------
    // Create the section element
    const aboutSection_2 = document.createElement("section");
    aboutSection_2.id = "about";

    // Create and append the title div
    const titleDiv_2 = document.createElement("div");
    titleDiv_2.className = "title";
    titleDiv_2.textContent = "About";
    aboutSection_2.appendChild(titleDiv_2);

    // Create and append the content div
    const contentDiv_2 = document.createElement("div");
    contentDiv_2.className = "content";
    contentDiv_2.textContent =
      "We bring you unforgettable moments with the most delicious dishes.";
    aboutSection_2.appendChild(contentDiv_2);

    // Create the carousel div ----------------
    const carouselDiv_2 = document.createElement("div");
    carouselDiv_2.id = "carouselExampleAutoplaying";
    carouselDiv_2.className = "carousel slide";
    carouselDiv_2.setAttribute("data-bs-ride", "carousel");

    // Create the carousel-inner div
    const carouselInner_2 = document.createElement("div");
    carouselInner_2.className = "carousel-inner";

    // Create the first carousel item (active)
    const carouselItem1_2 = document.createElement("div");
    carouselItem1_2.className = "carousel-item active";
    const img1_2 = document.createElement("img");
    img1_2.src =
      "https://duopig.com/wp-content/uploads/2020/11/bánh-xèo-JP-delivery-1-scaled.jpg";
    img1_2.className = "d-block w-100";
    img1_2.alt = "...";
    carouselItem1_2.appendChild(img1_2);
    carouselInner_2.appendChild(carouselItem1_2);

    // Create the second carousel item
    const carouselItem2_2 = document.createElement("div");
    carouselItem2_2.className = "carousel-item";
    const img2_2 = document.createElement("img");
    img2_2.src =
      "https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/ngtnnn/2022_07_27/2707banhxeo.jpg.webp";
    img2_2.className = "d-block w-100";
    img2_2.alt = "...";
    carouselItem2_2.appendChild(img2_2);
    carouselInner_2.appendChild(carouselItem2_2);

    // Create the third carousel item
    const carouselItem3_2 = document.createElement("div");
    carouselItem3_2.className = "carousel-item";
    const img3_2 = document.createElement("img");
    img3_2.src =
      "https://bizweb.dktcdn.net/100/339/225/files/thuc-an-nhanh.jpg?v=1627638748869";
    img3_2.className = "d-block w-100";
    img3_2.alt = "...";
    carouselItem3_2.appendChild(img3_2);
    carouselInner_2.appendChild(carouselItem3_2);

    // Append carousel-inner to the carousel div
    carouselDiv_2.appendChild(carouselInner_2);

    // Create and append the previous button
    const prevButton_2 = document.createElement("button");
    prevButton_2.className = "carousel-control-prev";
    prevButton_2.type = "button";
    prevButton_2.setAttribute("data-bs-target", "#carouselExampleAutoplaying");
    prevButton_2.setAttribute("data-bs-slide", "prev");

    const prevIcon_2 = document.createElement("span");
    prevIcon_2.className = "carousel-control-prev-icon";
    prevIcon_2.setAttribute("aria-hidden", "true");
    prevButton_2.appendChild(prevIcon_2);

    const prevText_2 = document.createElement("span");
    prevText_2.className = "visually-hidden";
    prevText_2.textContent = "Previous";
    prevButton_2.appendChild(prevText_2);

    carouselDiv_2.appendChild(prevButton_2);

    // Create and append the next button
    const nextButton_2 = document.createElement("button");
    nextButton_2.className = "carousel-control-next";
    nextButton_2.type = "button";
    nextButton_2.setAttribute("data-bs-target", "#carouselExampleAutoplaying");
    nextButton_2.setAttribute("data-bs-slide", "next");

    const nextIcon_2 = document.createElement("span");
    nextIcon_2.className = "carousel-control-next-icon";
    nextIcon_2.setAttribute("aria-hidden", "true");
    nextButton_2.appendChild(nextIcon_2);

    const nextText_2 = document.createElement("span");
    nextText_2.className = "visually-hidden";
    nextText_2.textContent = "Next";
    nextButton_2.appendChild(nextText_2);

    carouselDiv_2.appendChild(nextButton_2);

    // Append the carousel div to the section
    aboutSection_2.appendChild(carouselDiv_2);

    // Append the section to the body
    main.appendChild(aboutSection_2);

    //--------------------------------------------------------------------------------
    // Create section element
    const section_3 = document.createElement("section");
    section_3.id = "customer-feedback";

    // Create title div
    const titleDiv_3 = document.createElement("div");
    titleDiv_3.className = "title";
    titleDiv_3.textContent = "our customer's feedback";

    // Create feedback list div
    const feedbackList_3 = document.createElement("div");
    feedbackList_3.className = "feedback-list";

    // Create carousel div
    const carousel_3 = document.createElement("div");
    carousel_3.id = "carouselExampleIndicators";
    carousel_3.className = "carousel slide";

    // Create carousel indicators
    const indicators_3 = document.createElement("div");
    indicators_3.className = "carousel-indicators";

    const button1_3 = document.createElement("button");
    button1_3.type = "button";
    button1_3.setAttribute("data-bs-target", "#carouselExampleIndicators");
    button1_3.setAttribute("data-bs-slide-to", "0");
    button1_3.className = "active";
    button1_3.setAttribute("aria-current", "true");
    button1_3.setAttribute("aria-label", "Slide 1");

    const button2_3 = document.createElement("button");
    button2_3.type = "button";
    button2_3.setAttribute("data-bs-target", "#carouselExampleIndicators");
    button2_3.setAttribute("data-bs-slide-to", "1");
    button2_3.setAttribute("aria-label", "Slide 2");

    const button3_3 = document.createElement("button");
    button3_3.type = "button";
    button3_3.setAttribute("data-bs-target", "#carouselExampleIndicators");
    button3_3.setAttribute("data-bs-slide-to", "2");
    button3_3.setAttribute("aria-label", "Slide 3");

    // Append buttons to indicators
    indicators_3.appendChild(button1_3);
    indicators_3.appendChild(button2_3);
    indicators_3.appendChild(button3_3);

    // Create carousel inner
    const carouselInner_3 = document.createElement("div");
    carouselInner_3.className = "carousel-inner";

    // Create carousel items
    const carouselItem1_3 = document.createElement("div");
    carouselItem1_3.className = "carousel-item active";
    const cards1_3 = document.createElement("div");
    cards1_3.className = "cards";

    // Create cards for the first carousel item
    const card1_3 = this.createCard(
      "https://images.immediate.co.uk/production/volatile/sites/30/2013/12/Christmas-dinner-plate-962317a.jpg",
      "abc-anc",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    );
    const card2_3 = this.createCard(
      "https://images.immediate.co.uk/production/volatile/sites/30/2013/12/Christmas-dinner-plate-962317a.jpg",
      "abc-anc",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    );
    const card3_3 = this.createCard(
      "https://images.immediate.co.uk/production/volatile/sites/30/2013/12/Christmas-dinner-plate-962317a.jpg",
      "abc-anc",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    );

    // Append cards to the first carousel item
    cards1_3.appendChild(card1_3);
    cards1_3.appendChild(card2_3);
    cards1_3.appendChild(card3_3);
    carouselItem1_3.appendChild(cards1_3);
    carouselInner_3.appendChild(carouselItem1_3);

    // Create second carousel item
    const carouselItem2_3 = document.createElement("div");
    carouselItem2_3.className = "carousel-item";
    const cards2_3 = document.createElement("div");
    cards2_3.className = "cards";

    // Create cards for the second carousel item
    const card4_3 = this.createCard(
      "https://static.vecteezy.com/system/resources/previews/027/572/366/non_2x/restaurant-food-restaurant-food-top-view-ai-generative-free-png.png",
      "abc-anc",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    );
    const card5_3 = this.createCard(
      "https://static.vecteezy.com/system/resources/previews/027/572/366/non_2x/restaurant-food-restaurant-food-top-view-ai-generative-free-png.png",
      "abc-anc",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    );
    const card6_3 = this.createCard(
      "https://static.vecteezy.com/system/resources/previews/027/572/366/non_2x/restaurant-food-restaurant-food-top-view-ai-generative-free-png.png",
      "abc-anc",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    );

    // Append cards to the second carousel item
    cards2_3.appendChild(card4_3);
    cards2_3.appendChild(card5_3);
    cards2_3.appendChild(card6_3);
    carouselItem2_3.appendChild(cards2_3);
    carouselInner_3.appendChild(carouselItem2_3);

    // Create third carousel item
    const carouselItem3_3 = document.createElement("div");
    carouselItem3_3.className = "carousel-item";
    const cards3_3 = document.createElement("div");
    cards3_3.className = "cards";

    // Create cards for the third carousel item
    const card7_3 = this.createCard(
      "https://static.vecteezy.com/system/resources/previews/029/071/752/non_2x/com-tam-vietnamese-broken-rice-top-view-vietnamese-food-illustration-vector.jpg",
      "abc-anc",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    );
    const card8_3 = this.createCard(
      "https://static.vecteezy.com/system/resources/previews/029/071/752/non_2x/com-tam-vietnamese-broken-rice-top-view-vietnamese-food-illustration-vector.jpg",
      "abc-anc",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    );
    const card9_3 = this.createCard(
      "https://static.vecteezy.com/system/resources/previews/029/071/752/non_2x/com-tam-vietnamese-broken-rice-top-view-vietnamese-food-illustration-vector.jpg",
      "abc-anc",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    );

    // Append cards to the third carousel item
    cards3_3.appendChild(card7_3);
    cards3_3.appendChild(card8_3);
    cards3_3.appendChild(card9_3);
    carouselItem3_3.appendChild(cards3_3);
    carouselInner_3.appendChild(carouselItem3_3);

    // Append carousel inner to carousel
    carousel_3.appendChild(indicators_3);
    carousel_3.appendChild(carouselInner_3);

    // Create carousel controls
    const prevButton_3 = document.createElement("button");
    prevButton_3.className = "carousel-control-prev";
    prevButton_3.type = "button";
    prevButton_3.setAttribute("data-bs-target", "#carouselExampleIndicators");
    prevButton_3.setAttribute("data-bs-slide", "prev");

    const prevIcon_3 = document.createElement("span");
    prevIcon_3.className = "carousel-control-prev-icon";
    prevIcon_3.setAttribute("aria-hidden", "true");
    // Append prev icon to prev button
    prevButton_3.appendChild(prevIcon_3);

    // Create prev button text
    const prevButtonText_3 = document.createElement("span");
    prevButtonText_3.className = "visually-hidden";
    prevButtonText_3.textContent = "Previous";

    // Append prev button text to prev button
    prevButton_3.appendChild(prevButtonText_3);

    // Append prev button to carousel
    carousel_3.appendChild(prevButton_3);

    // Create next button
    const nextButton_3 = document.createElement("button");
    nextButton_3.className = "carousel-control-next";
    nextButton_3.type = "button";
    nextButton_3.setAttribute("data-bs-target", "#carouselExampleIndicators");
    nextButton_3.setAttribute("data-bs-slide", "next");

    // Create next icon
    const nextIcon_3 = document.createElement("span");
    nextIcon_3.className = "carousel-control-next-icon";
    nextIcon_3.setAttribute("aria-hidden", "true");

    // Append next icon to next button
    nextButton_3.appendChild(nextIcon_3);

    // Create next button text
    const nextButtonText_3 = document.createElement("span");
    nextButtonText_3.className = "visually-hidden";
    nextButtonText_3.textContent = "Next";

    // Append next button text to next button
    nextButton_3.appendChild(nextButtonText_3);

    // Append next button to carousel
    carousel_3.appendChild(nextButton_3);

    // Append carousel to feedback list
    feedbackList_3.appendChild(carousel_3);

    // Append feedback list to section
    section_3.appendChild(titleDiv_3);
    section_3.appendChild(feedbackList_3);

    // Append section to body
    main.appendChild(section_3);
    //---------------------------------------------------------------------------------------------
    // Create section element
    const section4 = document.createElement("section");
    section4.id = "book";

    // Create container
    const container = document.createElement("div");
    container.className = "container-mt-5";

    // Create and append title
    const title1 = document.createElement("h1");
    title1.className = "text-center reservation-title mb-4";
    title1.textContent = "Book a table online";
    container.appendChild(title1);

    // Create and append booking message
    const bookingMessage = document.createElement("div");
    bookingMessage.className = "booking-message hide";
    bookingMessage.id = "booking-message";
    bookingMessage.innerHTML = `
    You need to log in first when booking so you can earn member points!
    <span>Login <a href="#">here</a></span>
`;
    bookingMessage.addEventListener("click", this.goto_login.bind(this));
    container.appendChild(bookingMessage);

    // Create form
    const form = document.createElement("form");
    form.id = "reservationForm";
    form.className = "needs-validation";
    form.setAttribute("novalidate", "");

    // Create form elements
    const createRow = () => document.createElement("div");
    const createInput = (type, id, name, className, required = true) => {
      const input = document.createElement("input");
      input.type = type;
      input.id = id;
      input.name = name;
      input.className = className;
      if (required) input.setAttribute("required", "");
      return input;
    };
    const createLabel = (text, htmlFor) => {
      const label = document.createElement("label");
      label.className = "form-label";
      label.htmlFor = htmlFor;
      label.textContent = text;
      return label;
    };
    const createInvalidFeedback = (message) => {
      const div = document.createElement("div");
      div.className = "invalid-feedback";
      div.textContent = message;
      return div;
    };

    // Add name field
    const row1 = createRow();
    row1.className = "row";
    const nameDiv = document.createElement("div");
    nameDiv.className = "col-md-6 mb-3";
    nameDiv.appendChild(createLabel("Name:", "name"));
    nameDiv.appendChild(createInput("text", "name", "name", "form-control"));
    nameDiv.appendChild(createInvalidFeedback("Please enter your name."));
    row1.appendChild(nameDiv);

    // Add email field
    const emailDiv = document.createElement("div");
    emailDiv.className = "col-md-6 mb-3";
    emailDiv.appendChild(createLabel("Email:", "email"));
    emailDiv.appendChild(
      createInput("email", "email", "email", "form-control")
    );
    emailDiv.appendChild(
      createInvalidFeedback("Please enter a valid email address.")
    );
    row1.appendChild(emailDiv);
    form.appendChild(row1);

    // Add phone field
    const phoneDiv = document.createElement("div");
    phoneDiv.className = "mb-3";
    phoneDiv.appendChild(createLabel("Phone number:", "phone"));
    const phoneInputGroup = document.createElement("div");
    phoneInputGroup.className = "input-group";
    const phonePrefix = document.createElement("span");
    phonePrefix.className = "input-group-text";
    phonePrefix.textContent = "+84";
    phoneInputGroup.appendChild(phonePrefix);
    phoneInputGroup.appendChild(
      createInput("tel", "phone", "phone", "form-control")
    );
    phoneDiv.appendChild(phoneInputGroup);
    phoneDiv.appendChild(
      createInvalidFeedback("Please enter a valid phone number.")
    );
    form.appendChild(phoneDiv);

    // Add date and time fields
    const row2 = createRow();
    row2.className = "row";
    const dateDiv = document.createElement("div");
    dateDiv.className = "col-md-6 mb-3";
    dateDiv.appendChild(createLabel("Date:", "date"));
    dateDiv.appendChild(createInput("date", "date", "date", "form-control"));
    dateDiv.appendChild(createInvalidFeedback("Please select a date."));
    row2.appendChild(dateDiv);

    const timeDiv = document.createElement("div");
    timeDiv.className = "col-md-6 mb-3";
    timeDiv.appendChild(createLabel("Hour:", "time"));
    timeDiv.appendChild(createInput("time", "time", "time", "form-control"));
    timeDiv.appendChild(createInvalidFeedback("Please select a time."));
    row2.appendChild(timeDiv);
    form.appendChild(row2);

    // Add guests field
    const guestsDiv = document.createElement("div");
    guestsDiv.className = "mb-3";
    guestsDiv.appendChild(createLabel("The number of guests:", "guests"));
    const guestsInput = createInput(
      "number",
      "guests",
      "guests",
      "form-control"
    );
    guestsInput.min = "1";
    guestsDiv.appendChild(guestsInput);
    guestsDiv.appendChild(
      createInvalidFeedback("Please enter number of guests.")
    );
    form.appendChild(guestsDiv);

    // Add note field
    const noteDiv = document.createElement("div");
    noteDiv.className = "mb-3";
    noteDiv.appendChild(createLabel("Take notes:", "note"));
    const noteTextarea = document.createElement("textarea");
    noteTextarea.id = "note";
    noteTextarea.name = "note";
    noteTextarea.className = "form-control";
    noteDiv.appendChild(noteTextarea);
    form.appendChild(noteDiv);

    // Add submit button
    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.className = "btn btn-primary";
    submitButton.textContent = "Book";
    submitButton.addEventListener("click", this.booktable.bind(this));
    form.appendChild(submitButton);

    // Append form to container
    container.appendChild(form);

    // Append container to section
    section4.appendChild(container);

    // Append section to body
    main.appendChild(section4);

    mainContainer.appendChild(main);

    // add footer
    this.footer.render(mainContainer);
    this.check_signed_in(mainContainer);
  }
  // kiem tra neu chua co account => khong cho dat ban
  check_signed_in(mainContainer) {
    // Reference the document
    try {
      const auth = getAuth(firebaseApp);
      const user = auth.currentUser;
      if (!user) {
        // xoa form book => doi thanh dong chu can dang nhap
        const book_form = document.getElementById("reservationForm");
        book_form.style.display = "none";
        // hien thi message yeu cau dang nhap
        const book_msg = document.getElementById("booking-message");
        book_msg.style.display = "block";
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async booktable(event) {
    event.preventDefault();
    //get input data
    const name = document.getElementById("name").value;
    const phonenumber = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const hour = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;
    const note = document.getElementById("note").value;
    const _this = this;
    // validate form
    if (!name || !phonenumber || !email || !date || !hour || !guests || !note) {
      alert("pls fill all form");
      return;
    } else {
      // confirm co chac chan dat ban khong
      const confirm_book = confirm(
        `Confirm your booking here:\n
        name: ${name},
        email: ${email},
        phonenumber: ${phonenumber},
        hour: ${hour},
        date: ${date},
        guests: ${guests},
        note: ${note},
        `
      );
      if (!confirm_book) {
        // neu confirm no => khong lam gi them
        return;
      } else {
        // yes => luu du lieu vao firestore
        try {
          const auth = getAuth(firebaseApp);
          const user = auth.currentUser;
          await _this.updatepoint();
          const docRef = await addDoc(collection(database, "books"), {
            name: name,
            email: email,
            phonenumber: phonenumber,
            hour: hour,
            date: date,
            guests: guests,
            note: note,
            created_by: user.uid,
          });
          console.log("Document written with ID: ", docRef.id);
          alert("Book successfully!");
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    }
  }
  async updatepoint() {
    // Reference the document
    const auth = getAuth(firebaseApp);
    const user = auth.currentUser;
    const docRef1 = doc(database, "users", user.uid);

    // Fetch the document
    const docSnap = await getDoc(docRef1);
    const newpoint = docSnap.data().point + 100;

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }

    // Reference the document you want to update
    const docRef2 = doc(database, "users", user.uid);

    // Update the document
    await updateDoc(docRef2, {
      point: newpoint,
    });
  }
  goto_login() {
    const login = new Login();
    app.renderComponent(login);
  }
  goto_menu() {
    const menu = new Menu();
    app.renderComponent(menu);
  }
  scrollto_home() {
    const target_section = document.getElementById("home");
    target_section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  scrollto_about() {
    const target_section = document.getElementById("about");
    target_section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  scrollto_book() {
    const target_section = document.getElementById("book");
    target_section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // Define this.createCard function
  createCard(imageUrl, cardName, cardText) {
    const card = document.createElement("div");
    card.className = "card";

    const cardImage_container = document.createElement("div");
    cardImage_container.classList.add("card-img");

    const cardImage = document.createElement("img");
    cardImage.src = imageUrl;
    cardImage.alt = "Card image";
    cardImage_container.appendChild(cardImage);

    const cardBody = document.createElement("div");
    cardBody.className = "feedback-content";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "feedback-username";
    cardTitle.textContent = cardName;

    const cardTextElement = document.createElement("p");
    cardTextElement.className = "feedback-content";
    cardTextElement.textContent = cardText;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardTextElement);

    card.appendChild(cardImage_container);
    card.appendChild(cardBody);

    return card;
  }
}
