let posts = [];

module.exports = {
    getAllPost(){
        return posts;
    },
    getPostById(id){
        return posts.find(post => post.id === id);
    },
    createPost(post) {
        posts.push(post);
    }, 
    updatePost(id, udatedPost) {
        const index = posts.findIndex(post => post.id === id);
        if (index !== -1) {
            posts[index] = updatedPost;
        }
    },
}