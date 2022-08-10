const axios = require('axios');

describe('Get Posts', () => {
  it('should get posts', async function () {
    const rs = await axios({
      url: 'http://localhost:3000/posts',
      method: 'GET',
    });
    const posts = rs.data;
    expect(posts).toHaveLength(3);
    const [firstPost] = posts;
    expect(firstPost.id).toBe(1);
    expect(firstPost.title).toBe('Rest API: Metodos');
  });
});
