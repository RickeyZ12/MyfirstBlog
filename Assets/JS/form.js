
const blogForm = document.getElementById('blog-form');
if (blogForm) {
    blogForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push({ title, content });

        localStorage.setItem('posts', JSON.stringify(posts));

        alert('Blog post submitted!');
        blogForm.reset();
    });
}
