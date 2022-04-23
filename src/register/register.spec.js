const request = require('supertest');
const app = require('../app');

describe('Register', () => {
  it('01. Return a 201 status for a successful POST request', async () => {
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
    expect(res.body.data).toEqual(expect.objectContaining({name: user.name, email: user.email}));
  });
  it('02. Return a 404 status for a POST request to a non-existent route', async () => {
    const user = {
      name: 'Harry Potter',
      email: 'hpotter@hogwarts.com',
      password: 'hpotter',
    };
    const res = await request(app)
      .post('/register/bad-route')
      .send({data: user});
    expect(res.body.error).toBeDefined();
    expect(res.status).toEqual(404);
    expect(res.body.error).toContain('/register/bad-route');
  });
  it('03. Returns a 400 status if registration data is missing', async () => {
    const res = await request(app)
      .post('/register')
      .set('Accept', 'application/json')
      .send({data: {}});
    expect(res.body.error).toBeDefined();
    expect(res.status).toEqual(400);
  });
  it('04. Returns a 400 status if the name property is missing', async () => {
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
  it('05. Returns a 400 status if the name property is an empty string', async () => {
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
  it('06. Returns a 400 status if the email property is missing', async () => {
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
  it('07. Returns a 400 status if the email property is an empty string', async () => {
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
  it('08. Returns a 400 status if the password property is missing', async () => {
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
  it('09. Returns a 400 status if the password property is an empty string', async () => {
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
