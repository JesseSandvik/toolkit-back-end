const request = require('supertest');
const server = require('../src/app');

describe('Server', () => {
  it('01. Renders "Hello World!" message', async () => {
    const res = await request(server).get('/');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toEqual({message: 'Hello World!'});
  });
});
