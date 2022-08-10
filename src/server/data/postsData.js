const database = require('../infra/database');

exports.getPosts = function () {
  return database.query('select * from blog.post;');
};

exports.insertPosts = async function (r, rs) {
  const { title, content } = r.body;
  return await database.one(
    'insert into blog.post (title, content) values ($1, $2) returning id, title, content',
    [title, content]
  );
};
