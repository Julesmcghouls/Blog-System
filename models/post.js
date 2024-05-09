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
    }
}