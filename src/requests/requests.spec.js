const request = require('supertest');
const app = require('../app');

describe('Requests', () => {
  it('01. Returns a 200 status for a successful GET request', async () => {
    const res = await request(app)
      .get('/requests')
      .set('Accept', 'application/json');
    expect(res.body.error).toBeUndefined();
    expect(res.status).toEqual(200);
  });
  it('02. Returns a 404 status for a GET request to a non-existent route', async () => {
    const res = await request(app)
      .get('/requests/bad-route')
      .set('Accept', 'application/json');
    expect(res.status).toEqual(404);
    expect(res.body.error).toContain('/requests/bad-route');
  });
  it('03. Returns 400 status if data is missing', async () => {
    const res = await request(app)
      .post('/requests/new')
      .set('Accept', 'application/json')
      .send({data: {}});
    expect(res.body.error).toBeDefined();
    expect(res.status).toEqual(400);
  });
  it('04. Returns a 400 if the name property is missing', async () => {
    const newRequest = {
      email: 'potterharry@hogwarts.com',
      phone: '555-555-5555',
      deliveryDate: '2022-12-31',
    };
    const res = await request(app)
      .post('/requests/new')
      .set('Accept', 'application/json')
      .send({data: newRequest});
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toContain('name');
    expect(res.status).toEqual(400);
  });
  it('05. Returns a 400 if the name property is an empty string', async () => {
    const newRequest = {
      name: '',
      email: 'potterharry@hogwarts.com',
      phone: '555-555-5555',
      deliveryDate: '2022-12-31',
    };
    const res = await request(app)
      .post('/requests/new')
      .set('Accept', 'application/json')
      .send({data: newRequest});
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toContain('name');
    expect(res.status).toEqual(400);
  });
  it('05. Returns a 400 if the email property is missing', async () => {
    const newRequest = {
      name: 'harry potter',
      phone: '555-555-5555',
      deliveryDate: '2022-12-31',
    };
    const res = await request(app)
      .post('/requests/new')
      .set('Accept', 'application/json')
      .send({data: newRequest});
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toContain('email');
    expect(res.status).toEqual(400);
  });
  it('06. Returns a 400 if the email property is an empty string', async () => {
    const newRequest = {
      name: 'harry potter',
      email: '',
      phone: '555-555-5555',
      deliveryDate: '2022-12-31',
    };
    const res = await request(app)
      .post('/requests/new')
      .set('Accept', 'application/json')
      .send({data: newRequest});
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toContain('email');
    expect(res.status).toEqual(400);
  });
  it('07. Returns a 400 if the phone property is missing', async () => {
    const newRequest = {
      name: 'harry potter',
      email: 'potterharry@hogwarts.com',
      deliveryDate: '2022-12-31',
    };
    const res = await request(app)
      .post('/requests/new')
      .set('Accept', 'application/json')
      .send({data: newRequest});
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toContain('phone');
    expect(res.status).toEqual(400);
  });
  it('08. Returns a 400 if the phone property is an empty string', async () => {
    const newRequest = {
      name: 'harry potter',
      email: 'potterharry@hogwarts.com',
      phone: '',
      deliveryDate: '2022-12-31',
    };
    const res = await request(app)
      .post('/requests/new')
      .set('Accept', 'application/json')
      .send({data: newRequest});
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toContain('phone');
    expect(res.status).toEqual(400);
  });
  it('09. Returns a 400 if the delivery date is missing', async () => {
    const newRequest = {
      name: 'harry potter',
      email: 'potterharry@hogwarts.com',
      phone: '555-555-5555',
    };
    const res = await request(app)
      .post('/requests/new')
      .set('Accept', 'application/json')
      .send({data: newRequest});
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toContain('deliveryDate');
    expect(res.status).toEqual(400);
  });
  it('10. Returns a 400 if the delivery date is an empty string', async () => {
    const newRequest = {
      name: 'harry potter',
      email: 'potterharry@hogwarts.com',
      phone: '555-555-5555',
      deliveryDate: '',
    };
    const res = await request(app)
      .post('/requests/new')
      .set('Accept', 'application/json')
      .send({data: newRequest});
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toContain('deliveryDate');
    expect(res.status).toEqual(400);
  });
  it('11. Returns a 400 if the delivery time is missing', async () => {
    const newRequest = {
      name: 'harry potter',
      email: 'potterharry@hogwarts.com',
      phone: '555-555-5555',
      deliveryDate: '2022-12-31',
    };
    const res = await request(app)
      .post('/requests/new')
      .set('Accept', 'application/json')
      .send({data: newRequest});
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toContain('deliveryTime');
    expect(res.status).toEqual(400);
  });
  it('12. Returns a 400 if the delivery time is an empty string', async () => {
    const newRequest = {
      name: 'harry potter',
      email: 'potterharry@hogwarts.com',
      phone: '555-555-5555',
      deliveryDate: '2022-12-31',
      deliveryTime: '',
    };
    const res = await request(app)
      .post('/requests/new')
      .set('Accept', 'application/json')
      .send({data: newRequest});
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toContain('deliveryTime');
    expect(res.status).toEqual(400);
  });
});
