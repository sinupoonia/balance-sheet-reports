import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import axios from "axios";

// Types for the API response
interface Cell {
  Value: string;
  Attributes?: { Value: string; Id: string }[];
}

interface Row {
  RowType: 'Header' | 'Section' | 'Row';
  Title?: string;
  Cells?: Cell[];
  Rows?: Row[];
}

interface Report {
  ReportID: string;
  ReportName: string;
  ReportType: string;
  ReportTitles: string[];
  ReportDate: string;
  UpdatedDateUTC: string;
  Fields: any[];
  Rows: Row[];
}

interface ReportsData {
  Status: string;
  Reports: Report[];
}

const Reports: React.FC = () => {
  const [reports, setReports] = useState<ReportsData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response: any = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api.xro/2.0/Reports/BalanceSheet`);
        if (response?.status !== 200) {
          setError("Failed to fetch balance sheet");
        } else if (!response?.data?.Reports?.length) {
          setError("No data found");
        } else {
          setReports(response?.data);
        }       
      } catch (error) {
        setError("Failed to fetch balance sheet");
      }
    };

    fetchReports();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!reports) {
    return <div>Loading...</div>;
  }
  const report = reports?.Reports?.[0]; // Assuming only one report

  const renderRows = (rows: Row[]) => {
    return rows.map((row, index) => {
      if (row.RowType === 'Header' && row.Cells) {
        return (
          <TableRow key={index}>
            {row.Cells.map((cell, idx) => (
              <TableCell key={idx}>{cell.Value}</TableCell>
            ))}
          </TableRow>
        );
      } else if (row.RowType === 'Row' && row.Cells) {
        return (
          <TableRow key={index}>
            {row.Cells.map((cell, idx) => (
              <TableCell key={idx}>{cell.Value}</TableCell>
            ))}
          </TableRow>
        );
      } else if (row.RowType === 'Section' && row.Rows) {
        return (
          <React.Fragment key={index}>
            <TableRow>
              <TableCell colSpan={3} style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
                {row.Title}
              </TableCell>
            </TableRow>
            {renderRows(row.Rows)}
          </React.Fragment>
        );
      }
      return null;
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{report?.ReportTitles?.[0]}</TableCell>
            <TableCell>{report?.ReportTitles?.[1]}</TableCell>
            <TableCell>{report?.ReportTitles?.[2]}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderRows(report?.Rows)}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default Reports;
