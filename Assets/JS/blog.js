
const postsContainer = document.getElementById('posts-container');
if (postsContainer) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;

        const postContent = document.createElement('p');
        postContent.textContent = post.content;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);

        postsContainer.appendChild(postDiv);
    });
}
