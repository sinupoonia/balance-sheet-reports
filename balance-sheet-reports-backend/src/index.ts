import express, { Request, Response } from 'express';
import reportsRoutes from './routes/reports';
import Redis from 'ioredis';
import cron from "node-cron";
import axios from "axios";
import cors from 'cors';

const app = express();


const PORT = process.env.PORT || 3007;
const CACHE_KEY = process.env.CACHE_KEY || "balance_sheet";
const CACHE_EXPIRATION_TIME = process.env.CACHE_EXPIRATION_TIME || 60 * 60; // Cache for 1 hour

app.use(cors({
  origin: 'http://localhost',
}));



const redisClient = new Redis({
  host: process.env.REDIS_URL || "redis",
  port: parseInt(process.env.REDIS_PORT || '6379', 10),
});

app.use(express.json());

// Pass redisClient to routes
app.use('/api.xro/2.0/Reports/BalanceSheet', reportsRoutes(redisClient));

// Error handling middleware
app.use((err: any, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});

// Cron to run every hour to sync the data from api to redis
cron.schedule("0 * * * *", async () => {
  try {
    const response = await axios.get(process.env.MOCK_XERO_URL!);
    await redisClient.set(CACHE_KEY, JSON.stringify(response.data), "EX", CACHE_EXPIRATION_TIME);
    console.log("Cache updated at:", new Date());
  } catch (error) {
    console.error("Error updating cache", error);
  }
});
export default app;