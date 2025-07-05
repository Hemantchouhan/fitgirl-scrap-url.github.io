import request from 'supertest';
import app from '../app';

describe('App', () => {
    it('should enable CORS for the frontend origin', async () => {
        const response = await request(app).options('/api/balance-sheet');
        expect(response.headers['access-control-allow-origin']).toBe('http://localhost:5173');
    });

    it('should use the balanceSheetRouter for /api/balance-sheet', async () => {
        const response = await request(app).get('/api/balance-sheet');
        expect(response.status).not.toBe(404); // Ensure the route exists
    });
});