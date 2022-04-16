const request = require('supertest');
const app = require('../app');

describe('Commitments', () => {
    it('01. Returns a 200 for a successful GET request', async () => {
        const res = await request(app).get('/commitments').set('Accept', 'application/json');
        expect(res.body.error).toBeUndefined();
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
    });
});