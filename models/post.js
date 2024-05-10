// posts.js
let posts = [];

module.exports = {
getAllPosts() {
return posts;
},
getPostById(id) {
return posts.find(post => post.id === id);
},
createPost(post) {
posts.push(post);
},
updatePost(id, updatedPost) {
const index = posts.findIndex(post => post.id === id);
if (index !== -1) {
    posts[index] = updatedPost;
}
},
deletePost(id) {
posts = posts.filter(post => post.id !== id);
}
};
