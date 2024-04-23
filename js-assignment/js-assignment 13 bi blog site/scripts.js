document.addEventListener("DOMContentLoaded", function() {
  const postsList = document.getElementById("posts-list");

  const posts = [
      { id: 1, 
        title: "The Benefits of Regular Exercise", 
        description: "Discover how incorporating regular exercise into your routine can improve your physical and mental well-being.",
        image: "asset/exercise 3.jpeg" },
      { id: 2, 
        title: "The Art of Mindful Eating", 
        description: " Learn how practicing mindfulness during meals can help you develop a healthier relationship with food and enhance your eating experience.", 
        image: "asset/healthy food.jpg" }
  ];

  // Render posts list
  posts.forEach(post => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      const postImage = document.createElement("img");
      postImage.src = post.image;
      postImage.alt = "Post Image";

      const postTitle = document.createElement("h2");
      const postLink = document.createElement("a");
      postLink.href = `post.html?id=${post.id}`;
      postLink.textContent = post.title;
      postTitle.appendChild(postLink);

      const postDescription = document.createElement("p");
      postDescription.textContent = post.description;

      postElement.appendChild(postImage);
      postElement.appendChild(postTitle);
      postElement.appendChild(postDescription);
      postsList.appendChild(postElement);
  });
});
