const request = require('supertest');
const app = require('../../app');

describe('Not Found', () => {
  it('01. Returns a 404 status and message for not found routes', async () => {
    const res = await request(app)
      .get('/this-is-a-bad-route')
      .set('Accept', 'application/json');
    expect(res.status).toBe(404);
    expect(res.body.error).toBe('Path not found: /this-is-a-bad-route');
  });
});
