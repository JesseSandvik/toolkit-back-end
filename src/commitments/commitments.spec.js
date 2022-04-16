const request = require('supertest');
const app = require('../app');

describe('Commitments', () => {
    it('01. Returns a 200 for a successful GET request', async () => {
        const res = await request(app).get('/commitments').set('Accept', 'application/json');
        expect(res.body.error).toBeUndefined();
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
    });
    it('02. Returns a 404 for a missing route', async () => {
        const res = await request(app).get('/commitments/bad-route').set('Accept', 'application/json');
        expect(res.status).toEqual(404);
        expect(res.body.error).toEqual('Path not found: /commitments/bad-route');
    });
});