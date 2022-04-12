const app = require('../app');
const request = require('supertest');

describe('Register', () => {
  const user = {
    name: 'Harry Potter',
    email: 'hpotter@hogwarts.com',
    password: 'hpotter',
  };
  it('01. POST request is successful', async () => {
    const res = await request(app)
      .post('/register')
      .send({data: user});
    expect(res.status).toEqual(201);
    expect(res.type).toEqual(expect.stringContaining('json'));
  });
  it('02. Registered user data matches POST request', async () => {
    const res = await request(app)
      .post('/register')
      .send({data: user});
    expect(res.body.error).toBeUndefined();
    expect(res.body.data.name).toEqual(user.name);
    expect(res.body.data.email).toEqual(user.email);
  });
  it('03. Returns 400 if data is missing', async () => {
    const res = await request(app)
      .post('/register')
      .set('Accept', 'application/json')
      .send({data: {}});
    expect(res.status).toBe(400);
  });
});
