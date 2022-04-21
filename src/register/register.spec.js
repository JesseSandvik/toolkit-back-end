const request = require('supertest');
const app = require('../app');

describe('Register', () => {
  it('01. POST request is successful', async () => {
    const user = {
      name: 'Harry Potter',
      email: 'hpotter@hogwarts.com',
      password: 'hpotter',
    };
    const res = await request(app)
      .post('/register')
      .send({data: user});
    expect(res.body.error).toBeUndefined();
    expect(res.status).toEqual(201);
    expect(res.type).toEqual(expect.stringContaining('json'));
  });
  it('02. Registered user data matches POST request', async () => {
    const user = {
      name: 'Harry Potter',
      email: 'hpotter@hogwarts.com',
      password: 'hpotter',
    };
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
    expect(res.body.error).toBeDefined();
    expect(res.status).toEqual(400);
  });
  it('04. Returns 400 if name is missing', async () => {
    const user = {
      email: 'hpotter@hogwarts.com',
      password: 'hpotter@@',
    };
    const res = await request(app)
      .post('/register')
      .set('Accept', 'application/json')
      .send({data: user});
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toContain('name');
    expect(res.status).toEqual(400);
  });
  it('05. Returns 400 if name is empty', async () => {
    const user = {
      name: '',
      email: 'hpotter@hogwarts.com',
      password: 'hpotter@@',
    };
    const res = await request(app)
      .post('/register')
      .set('Accept', 'application/json')
      .send({data: user});
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toContain('name');
    expect(res.status).toEqual(400);
  });
  it('06. Returns 400 if email is missing', async () => {
    const user = {
      name: 'Harry Potter',
      password: 'hpotter@@',
    };
    const res = await request(app)
      .post('/register')
      .set('Accept', 'application/json')
      .send({data: user});
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toContain('email');
    expect(res.status).toEqual(400);
  });
  it('07. Returns 400 if email is empty', async () => {
    const user = {
      name: 'Harry Potter',
      email: '',
      password: 'hpotter@@',
    };
    const res = await request(app)
      .post('/register')
      .set('Accept', 'application/json')
      .send({data: user});
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toContain('email');
    expect(res.status).toEqual(400);
  });
  it('08. Returns 400 if password is missing', async () => {
    const user = {
      name: 'Harry Potter',
      email: 'hpotter@hogwarts.com',
    };
    const res = await request(app)
      .post('/register')
      .set('Accept', 'application/json')
      .send({data: user});
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toContain('password');
    expect(res.status).toEqual(400);
  });
  it('09. Returns 400 if password is empty', async () => {
    const user = {
      name: 'Harry Potter',
      email: 'hpotter@hogwarts.com',
      password: '',
    };
    const res = await request(app)
      .post('/register')
      .set('Accept', 'application/json')
      .send({data: user});
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toContain('password');
    expect(res.status).toEqual(400);
  });
});
