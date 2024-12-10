document.addEventListener("DOMContentLoaded", function () {
  const foodDetail = JSON.parse(localStorage.getItem("foodDetail"));
  var video = document.getElementById("food-video");
  if (foodDetail) {
    document.getElementById("food-name").textContent = foodDetail.name;
    if (foodDetail.original_video_url) {
      document.getElementById("food-image").style.display = "none";
      document.getElementById("food-video").style.display = "block";
      
      var source = document.createElement("source");
      source.setAttribute("src", foodDetail.original_video_url);
      source.setAttribute("type", "video/mp4");
      video.appendChild(source);
    } else {
      document.getElementById("food-video").style.display = "none";
      document.getElementById("food-image").style.display = "block";
      document.getElementById("food-image").src = foodDetail.thumbnail_url;
    }
    document.getElementById("food-description").innerText =
      foodDetail.description;
    // document.getElementById("food-rating").innerHTML = `Rating: ${
    //   foodDetail.rating || "N/A"
    // }`;
    document.getElementById("food-nutrients").innerHTML +=
      `<li>Calories: ${foodDetail.nutrition.calories}</li>` +
      `<li>Carbohydrates: ${foodDetail.nutrition.carbohydrates}</li>` +
      `<li>Fat: ${foodDetail.nutrition.fat}</li>` +
      `<li>Fiber: ${foodDetail.nutrition.fiber}</li>` +
      `<li>Protein: ${foodDetail.nutrition.protein}</li>` +
      `<li>Sugar: ${foodDetail.nutrition.sugar}</li>`;

    const commentsList = document.getElementById("comments-list");
    let storedComments = JSON.parse(localStorage.getItem("comments")) || [];

    storedComments.forEach((comment) => {
      const commentItem = document.createElement("li");
      commentItem.className = "comment-item";
      commentItem.textContent = comment;
      commentsList.appendChild(commentItem);
    });

    document
      .getElementById("add-comment-btn")
      .addEventListener("click", function () {
        const newComment = document.getElementById("new-comment").value;
        if (newComment.trim()) {
          // Kiểm tra bình luận không chỉ là khoảng trắng
          const commentItem = document.createElement("li");
          commentItem.className = "comment-item";
          commentItem.textContent = newComment;
          commentsList.appendChild(commentItem);
          document.getElementById("new-comment").value = "";

          // Lưu bình luận vào localStorage
          storedComments.push(newComment);
          localStorage.setItem("comments", JSON.stringify(storedComments));
        }
      });
  }
});
