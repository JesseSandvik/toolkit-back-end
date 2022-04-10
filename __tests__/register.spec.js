const app = require('../src/app');
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
      .send(user);
    expect(res.status).toEqual(201);
    expect(res.type).toEqual(expect.stringContaining('json'));
  });
  it('02. Registered user data matches POST request', async () => {
    const res = await await request(app)
      .post('/register')
      .send(user);
    expect(res.body.error).toBeUndefined();
    expect(res.body.data[0].name).toEqual(user.name);
    expect(res.body.data[0].email).toEqual(user.email);
  });
});
