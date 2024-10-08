import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import Reports from "../Reports"; // Assuming your component is named Reports
import "@testing-library/jest-dom";
import mockApiResponse from "../../constants/mockApiResponse";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

export const testReportsComponent = () => {
  describe("ReportsComponent", () => {
    beforeEach(() => {
      mockedAxios.get.mockClear(); // Reset any mocks before each test
    });

    it("renders loading state initially", () => {
      render(<Reports />);

      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it("renders data after successful fetch", async () => {
      mockedAxios.get.mockResolvedValueOnce(mockApiResponse);

      // Check if a specific part of the mocked data is rendered
      const reportTitle = mockApiResponse?.data?.Reports?.[0]?.ReportTitles[0];
      const bankAccountValue = mockApiResponse?.data?.Reports?.[0]?.Rows?.[2]?.Rows?.[0]?.Cells?.[0]?.Value;
      render(<Reports />);

      expect(await screen.findByText(reportTitle)).toBeInTheDocument();
      expect(await screen.findByText(bankAccountValue)).toBeInTheDocument();
    });

    it("renders error message when API request fails", async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

      render(<Reports />);

      expect(await screen.findByText("Failed to fetch balance sheet")).toBeInTheDocument();
    });

    it("renders no data message when API response has no reports", async () => {
      const noReportsResponse = { status: 200, data: { Status: "OK", Reports: [] } }
      mockedAxios.get.mockResolvedValueOnce(noReportsResponse);

      render(<Reports />);

      expect(await screen.findByText("No data found")).toBeInTheDocument();
    });
  });
};
testReportsComponent();
