document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch and display blog posts
    function fetchPosts() {
        fetch('/api/posts')
            .then(response => response.json())
            .then(posts => {
                const blogList = document.getElementById('blog-list');
                blogList.innerHTML = '';
                posts.forEach(post => {
                    const listItem = document.createElement('li');
                    listItem.textContent = post.title;
                    blogList.appendChild(listItem);
                });
            });
    }

    // Fetch and display blog posts when the page loads
    fetchPosts();
});