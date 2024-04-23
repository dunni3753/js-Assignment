   
// Function to convert title to slug
function slugify(title) {
  return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

document.addEventListener("DOMContentLoaded", function() {
  const postsList = document.getElementById("posts-list");

  const post = async function getPost() {
    let post = await fetch(
      "https://6602a2559d7276a75553c80e.mockapi.io/blogpost"
    )
    .then((response) = response.text())
    .then((result) => {
      return JSON.parse(result);
    }).catch(message)
  };
      // Render posts list
      post.forEach(post => {
          const postElement = document.createElement("div");
          postElement.classList.add("post");

          const postImage = document.createElement("img");
          postImage.src = post.image;
          postImage.alt = "Post Image";

          const postTitle = document.createElement("h2");
          const postLink = document.createElement("a");
          const slug = slugify(post.title);
          postLink.href = `post.html?id=${post.id}&slug=${slug}`;
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
