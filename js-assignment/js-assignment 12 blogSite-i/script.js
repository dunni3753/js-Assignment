document.addEventListener("DOMContentLoaded", function() {
  const postsList = document.getElementById("posts-list");

  // Sample data - replace this with actual data from your backend or API
  const posts = [
      { id: 1, title: "Post Title 1", description: "Short description of the first blog post." },
      { id: 2, title: "Post Title 2", description: "Short description of the second blog post." }
      // Add more posts as needed
  ];

  // Render posts list
  posts.forEach(post => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      const postTitle = document.createElement("h2");
      const postLink = document.createElement("a");
      postLink.href = `post.html?id=${post.id}`;
      postLink.textContent = post.title;
      postTitle.appendChild(postLink);

      const postDescription = document.createElement("p");
      postDescription.textContent = post.description;

      postElement.appendChild(postTitle);
      postElement.appendChild(postDescription);
      postsList.appendChild(postElement);
  });
});
