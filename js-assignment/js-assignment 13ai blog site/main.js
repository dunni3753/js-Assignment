document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  // Sample data - replace this with actual data from your backend or API
  const post = { id: 1, 
    title: "The Benefits of Regular Exercise", 
    content: " Regular exercise offers a multitude of benefits for both the body and mind. From improving cardiovascular health and strengthening muscles to boosting mood and reducing stress, physical activity plays a crucial role in overall well-being. Engaging in regular exercise can also help manage weight, increase energy levels, and promote better sleep quality. Whether it's going for a jog, practicing yoga, or hitting the gym, finding activities that you enjoy can make it easier to stick to a consistent exercise routine. Remember, even small amounts of physical activity can make a big difference in your health and quality of life.", 
    image: "post1.jpg" };

  const postContent = document.getElementById("post-content");

  const postElement = document.createElement("div");
  postElement.classList.add("post");

  const postImage = document.createElement("img");
  postImage.src = post.image;
  postImage.alt = "Post Image";

  const postTitle = document.createElement("h2");
  postTitle.textContent = post.title;

  const postContentParagraph = document.createElement("p");
  postContentParagraph.textContent = post.content;

  postElement.appendChild(postImage);
  postElement.appendChild(postTitle);
  postElement.appendChild(postContentParagraph);
  postContent.appendChild(postElement);
});