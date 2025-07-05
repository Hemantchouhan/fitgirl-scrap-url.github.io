import request from 'supertest';
import express from 'express';
import balanceSheetRouter from '../../routes/balanceSheet';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const app = express();
app.use('/api/balance-sheet', balanceSheetRouter);

describe('BalanceSheet Router', () => {
    it('should return data when the external API call is successful', async () => {
        const mockData = { report: 'Balance Sheet Data' };
        mockedAxios.get.mockResolvedValueOnce({ data: mockData });

        const response = await request(app).get('/api/balance-sheet');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockData);
    });

    it('should return an error when the external API call fails', async () => {
        mockedAxios.get.mockRejectedValueOnce(new Error('API Error'));

        const response = await request(app).get('/api/balance-sheet');
        expect(response.status).toBe(500);
        expect(response.body).toEqual({
            error: 'Failed to fetch balance sheet',
            details: 'API Error',
        });
    });
});