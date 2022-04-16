const request = require('supertest');
const app = require('../app');

describe('Requests', () => {
    it('01. Returns a 200 status for a successful GET request', async () => {
        const res = await request(app).get('/requests').set('Accept', "application/json");
        expect(res.status).toEqual(200);
    });
});