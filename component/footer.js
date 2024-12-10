class Footer {
  constructor() {}
  render(mainContainer) {
    // Create the footer element
    const footer = document.createElement("footer");
    footer.className = "footer";

    // Create the footer content div
    const footerContent = document.createElement("div");
    footerContent.className = "footer-content";

    // Create the footer logo div
    const footerLogo = document.createElement("div");
    footerLogo.className = "footer-logo";

    // Add the logo image
    const logoImg = document.createElement("img");
    logoImg.src =
      "https://thietkewebchuyen.com/images/mau-thiet-ke-logo-chibi-cute/hinh-nen-tra-sua-cute-mau-hong-vang-do-cam-7.jpg";
    logoImg.alt = "Logo";
    footerLogo.appendChild(logoImg);

    // Append footer logo to footer content
    footerContent.appendChild(footerLogo);

    // Create the footer info div
    const footerInfo = document.createElement("div");
    footerInfo.className = "footer-info";

    // Add footer info content
    const footerInfoText = [
      "Hanoi City, Vietnam",
      "info@example.com",
      "+1 234 567 890",
      "Design & Develop by Trong Tue",
    ];

    footerInfoText.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      footerInfo.appendChild(p);
    });

    // Append footer info to footer content
    footerContent.appendChild(footerInfo);

    // Append footer content to footer
    footer.appendChild(footerContent);

    // Create the footer feedback section
    const footerFeedback = document.createElement("div");
    footerFeedback.className = "footer-feedback";

    // Add feedback title
    const feedbackTitle = document.createElement("h4");
    feedbackTitle.textContent = "Your feedback";
    footerFeedback.appendChild(feedbackTitle);

    // Create the feedback form
    const feedbackForm = document.createElement("form");
    feedbackForm.id = "feedbackForm";
    feedbackForm.className = "needs-validation";
    feedbackForm.noValidate = true;

    // Feedback form fields
    const formFields = [
      {
        label: "Name:",
        type: "text",
        id: "name_footer",
        name: "name",
        feedback: "Please enter your name.",
      },
      {
        label: "Email:",
        type: "email",
        id: "email_footer",
        name: "email",
        feedback: "Please enter a valid email address.",
      },
    ];

    // Add form fields
    formFields.forEach((field) => {
      const div = document.createElement("div");
      div.className = "mb-3";

      const label = document.createElement("label");
      label.for = field.id;
      label.className = "form-label";
      label.textContent = field.label;
      div.appendChild(label);

      const input = document.createElement("input");
      input.type = field.type;
      input.id = field.id;
      input.name = field.name;
      input.className = "form-control";
      input.required = true;
      div.appendChild(input);

      const feedback = document.createElement("div");
      feedback.className = "invalid-feedback";
      feedback.textContent = field.feedback;
      div.appendChild(feedback);

      feedbackForm.appendChild(div);
    });

    // Add rating field
    const ratingDiv = document.createElement("div");
    ratingDiv.className = "mb-3";

    const ratingLabel = document.createElement("label");
    ratingLabel.for = "rating";
    ratingLabel.className = "form-label";
    ratingLabel.textContent = "Evaluate:";
    ratingDiv.appendChild(ratingLabel);

    const ratingSelect = document.createElement("select");
    ratingSelect.id = "rating";
    ratingSelect.name = "rating";
    ratingSelect.className = "form-select";
    ratingSelect.required = true;

    const ratingOptions = [
      { value: "", text: "Select review", disabled: true, selected: true },
      { value: "1", text: "1 ☆" },
      { value: "2", text: "2 ☆" },
      { value: "3", text: "3 ☆" },
      { value: "4", text: "4 ☆" },
      { value: "5", text: "5 ☆" },
    ];

    ratingOptions.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option.value;
      opt.textContent = option.text;
      if (option.disabled) opt.disabled = true;
      if (option.selected) opt.selected = true;
      ratingSelect.appendChild(opt);
    });

    ratingDiv.appendChild(ratingSelect);
    feedbackForm.appendChild(ratingDiv);

    // Add comment field
    const commentDiv = document.createElement("div");
    commentDiv.className = "mb-3";

    const commentLabel = document.createElement("label");
    commentLabel.for = "comments";
    commentLabel.className = "form-label";
    commentLabel.textContent = "Comment:";
    commentDiv.appendChild(commentLabel);

    const commentTextarea = document.createElement("textarea");
    commentTextarea.id = "comments";
    commentTextarea.name = "comments";
    commentTextarea.className = "form-control";
    commentTextarea.rows = 3;
    commentTextarea.required = true;
    commentDiv.appendChild(commentTextarea);

    const commentFeedback = document.createElement("div");
    commentFeedback.className = "invalid-feedback";
    commentFeedback.textContent = "Please enter your comment.";
    commentDiv.appendChild(commentFeedback);

    feedbackForm.appendChild(commentDiv);

    // Add submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.className = "btn btn-primary";
    submitButton.textContent = "Send feedback";
    feedbackForm.appendChild(submitButton);

    // Append feedback form to footer feedback
    footerFeedback.appendChild(feedbackForm);

    // Append footer feedback to footer
    footer.appendChild(footerFeedback);

    // Append footer to the body or another container
    mainContainer.appendChild(footer);
  }
}
export default Footer;
