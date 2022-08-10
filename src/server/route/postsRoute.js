const express = require('express');
const router = express.Router();
const postsService = require('../service/postsService');

router.get('/posts', async function (r, rs) {
  const posts = await postsService.getPosts();
  rs.json(posts);
});
router.get('/posts/:id', async function (r, rs) {});
router.post('/posts', async function (r, rs) {
  const post = await postsService.insertPost(r, rs);
  return rs.json(post);
});
router.put('/posts/:id', async function (r, rs) {});
router.delete('/posts/:id', async function (r, rs) {});

module.exports = router;
