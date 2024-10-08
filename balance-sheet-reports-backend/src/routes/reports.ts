import { Router, Request, Response, RequestHandler } from "express";
import axios from "axios";
import { Redis } from "ioredis";

const router = Router();

const CACHE_KEY = process.env.CACHE_KEY || "balance_sheet";
const CACHE_EXPIRATION_TIME = process.env.CACHE_EXPIRATION_TIME || 60 * 60; // Cache for 1 hour

// Define the structure of the Xero API response
interface BalanceSheetReport {
  ReportID: string;
  ReportName: string;
  ReportTitles: string[];
  ReportDate: string;
  UpdatedDateUTC: string;
  Rows: Array<{
    RowType: string;
    Cells: Array<{ Value: string; Attributes?: Array<{ Value: string; Id: string }> }>;
    Title?: string;
    Rows?: any[];
  }>;
}

// Define the structure of the full response from Xero API
interface XeroApiResponse {
  Status: string;
  Reports: BalanceSheetReport[];
}

export default (redisClient: Redis) => {
  const getBalanceSheet: any = async (req: Request, res: Response) => {
    try {
      // Check if data is cached in Redis otherwise get it from api and cache it in redis
      const cachedData: string | null = await redisClient.get(CACHE_KEY);

      if (cachedData) {
        // Parse cached data (JSON string) and return
        const parsedData: XeroApiResponse = JSON.parse(cachedData);
        console.log("Serving cached data");
        return res.json(parsedData);
      }

      // Fetch data from the Xero API if cache is not available
      const response = await axios.get<XeroApiResponse>(process.env.MOCK_XERO_URL!);
      const responseData = response.data;

      // Store the API response in Redis with an expiration time
      await redisClient.set(CACHE_KEY, JSON.stringify(responseData), "EX", CACHE_EXPIRATION_TIME);

      // Return the fresh data
      return res.json(responseData);
    } catch (error) {
      console.error("Error fetching balance sheet data", error);
      res.status(500).json({ error: "Failed to fetch balance sheet data" });
    }
  };

  // Attach the request handler to the router
  router.get("/", getBalanceSheet);
  // Schedule cache refresh every hour

  return router;
};
