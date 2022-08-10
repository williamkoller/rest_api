const postsData = require('../data/postsData');

exports.getPosts = function () {
  return postsData.getPosts();
};

exports.insertPost = async function (r, rs) {
  return await postsData.insertPosts(r, rs);
};
