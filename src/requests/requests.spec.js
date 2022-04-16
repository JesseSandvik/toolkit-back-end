const request = require('supertest');
const app = require('../app');

describe('Requests', () => {
    it('01. Returns a 200 status for a successful GET request', async () => {
        const res = await request(app).get('/requests').set('Accept', "application/json");
        expect(res.body.error).toBeUndefined();
        expect(res.status).toEqual(200);
    });
    it('02. Returns a 404 status for a non-existent route', async () => {
        const res = await request(app).get('/requests/bad-route').set('Accept', 'application/json');
        expect(res.status).toEqual(404);
        expect(res.body.error).toContain('/requests/bad-route');
    });
});