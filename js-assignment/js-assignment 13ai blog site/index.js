
document.addEventListener("DOMContentLoaded", function() {
  const postsList = document.getElementById("posts-list");

  // Sample data - replace this with actual data from your backend or API
  const posts = [
      { id: 1,
        title: "The Benefits of Regular Exercise", 
        description: "Discover how incorporating regular exercise into your routine can improve your physical and mental well-being.", 
        image: "asset/blog pic 1.png" 
      },
      { id: 2, 
        title: "The Power of Positive Thinking", 
        description: "Explore the transformative effects of adopting a positive mindset and its impact on mental and emotional health", 
        image: "asset/blog pic 2.png" }
    
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
