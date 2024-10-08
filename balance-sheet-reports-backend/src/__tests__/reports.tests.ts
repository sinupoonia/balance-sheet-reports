import request from 'supertest';
import express from 'express';
import reportsRoutes from '../routes/reports';
import Redis from 'ioredis';
import mockApiResponse from '../constants/mockApiResponse';


const redisClient = new Redis({
  host: process.env.REDIS_URL || "redis",
  port: parseInt(process.env.REDIS_PORT || '6379', 10),
});
jest.mock('ioredis');

describe('GET /reports', () => {
  let app: express.Application;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/reports', reportsRoutes(redisClient));
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return balance sheet data with correct structure and dynamic values', async () => {
    // Mock Redis Client to return null (i.e., no cached data)
    (redisClient.get as jest.Mock).mockResolvedValue(null);

    // Mock Axios to return the dynamic API response
    jest.mock('axios', () => ({
      get: jest.fn(() => Promise.resolve({ data: mockApiResponse }))
    }));

    const response:any = await request(app).get('/reports');

    const data = response.body || response?._body

    expect(data).toMatchObject({
      Reports: expect.any(Array),
      Status: 'OK',
    });

    // Check specific structure within the reports data
    const report = data?.Reports?.[0];
    expect(report.ReportID).toBe('BalanceSheet');
    expect(report.Rows[0].RowType).toBe('Header');
    expect(report.Rows[2].Title).toBe('Bank');
    //And so on
  });

  it('should handle API or Redis error gracefully', async () => {
    // Simulate Redis error
    (redisClient.get as jest.Mock).mockRejectedValue(new Error('Redis connection error'));

    const response:any = await request(app).get('/reports');
    const data = response?._body
    expect(data.error).toEqual('Failed to fetch balance sheet data');
  });
});
