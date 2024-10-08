const mockApiResponse = {
  "Status": "OK",
  "Reports": [
      {
          "ReportID": "BalanceSheet",
          "ReportName": "Balance Sheet",
          "ReportType": "BalanceSheet",
          "ReportTitles": [
              "Balance Sheet",
              "Demo Org",
              "As at 08 October 2024"
          ],
          "ReportDate": "08 October 2024",
          "UpdatedDateUTC": "/Date(1728374524079)/",
          "Fields": [],
          "Rows": [
              {
                  "RowType": "Header",
                  "Cells": [
                      {
                          "Value": ""
                      },
                      {
                          "Value": "08 October 2024"
                      },
                      {
                          "Value": "09 October 2023"
                      }
                  ]
              },
              {
                  "RowType": "Section",
                  "Title": "Assets",
                  "Rows": []
              },
              {
                  "RowType": "Section",
                  "Title": "Bank",
                  "Rows": [
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "My Bank Account",
                                  "Attributes": [
                                      {
                                          "Value": "d2e3044e-2fb8-42fa-be17-64c8956d5f57",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "126.70",
                                  "Attributes": [
                                      {
                                          "Value": "d2e3044e-2fb8-42fa-be17-64c8956d5f57",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "99.60",
                                  "Attributes": [
                                      {
                                          "Value": "d2e3044e-2fb8-42fa-be17-64c8956d5f57",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Sample Business",
                                  "Attributes": [
                                      {
                                          "Value": "84110043-a296-4fb0-aa97-34a45a5d9fc5",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "92911.00",
                                  "Attributes": [
                                      {
                                          "Value": "84110043-a296-4fb0-aa97-34a45a5d9fc5",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "92911.00",
                                  "Attributes": [
                                      {
                                          "Value": "84110043-a296-4fb0-aa97-34a45a5d9fc5",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Sample Business 1",
                                  "Attributes": [
                                      {
                                          "Value": "38c1c989-0b15-4203-854f-49682610d56a",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "11039.00",
                                  "Attributes": [
                                      {
                                          "Value": "38c1c989-0b15-4203-854f-49682610d56a",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "11039.00",
                                  "Attributes": [
                                      {
                                          "Value": "38c1c989-0b15-4203-854f-49682610d56a",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "SummaryRow",
                          "Cells": [
                              {
                                  "Value": "Total Bank"
                              },
                              {
                                  "Value": "104076.70"
                              },
                              {
                                  "Value": "104049.60"
                              }
                          ]
                      }
                  ]
              },
              {
                  "RowType": "Section",
                  "Title": "Current Assets",
                  "Rows": [
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Accounts Receivable",
                                  "Attributes": [
                                      {
                                          "Value": "2193c682-087f-4215-a251-a3dd7b94f6b6",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "1008657.64",
                                  "Attributes": [
                                      {
                                          "Value": "2193c682-087f-4215-a251-a3dd7b94f6b6",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "783134.03",
                                  "Attributes": [
                                      {
                                          "Value": "2193c682-087f-4215-a251-a3dd7b94f6b6",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "prepayment",
                                  "Attributes": [
                                      {
                                          "Value": "4f5503c5-9766-4ff8-b6af-2e8c392fbc7c",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "950000.00",
                                  "Attributes": [
                                      {
                                          "Value": "4f5503c5-9766-4ff8-b6af-2e8c392fbc7c",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "550000.00",
                                  "Attributes": [
                                      {
                                          "Value": "4f5503c5-9766-4ff8-b6af-2e8c392fbc7c",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Provisions for Bad Debt",
                                  "Attributes": [
                                      {
                                          "Value": "40e86f78-0a30-4711-bc9d-5088f9e353d5",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "-1000.00",
                                  "Attributes": [
                                      {
                                          "Value": "40e86f78-0a30-4711-bc9d-5088f9e353d5",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "-1000.00",
                                  "Attributes": [
                                      {
                                          "Value": "40e86f78-0a30-4711-bc9d-5088f9e353d5",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Short Term Director Loan",
                                  "Attributes": [
                                      {
                                          "Value": "78c8119f-3d08-486f-99e1-be8cbb54c64a",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "5000.00",
                                  "Attributes": [
                                      {
                                          "Value": "78c8119f-3d08-486f-99e1-be8cbb54c64a",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "5000.00",
                                  "Attributes": [
                                      {
                                          "Value": "78c8119f-3d08-486f-99e1-be8cbb54c64a",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Stock in Hand",
                                  "Attributes": [
                                      {
                                          "Value": "e11eeec8-e95c-42c5-9f87-93d92ce7f0e6",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "71000.00",
                                  "Attributes": [
                                      {
                                          "Value": "e11eeec8-e95c-42c5-9f87-93d92ce7f0e6",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "71000.00",
                                  "Attributes": [
                                      {
                                          "Value": "e11eeec8-e95c-42c5-9f87-93d92ce7f0e6",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Trade Receivables",
                                  "Attributes": [
                                      {
                                          "Value": "4e6a9af5-b0cb-4f5b-a7ce-885026e3badf",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "109500.00",
                                  "Attributes": [
                                      {
                                          "Value": "4e6a9af5-b0cb-4f5b-a7ce-885026e3badf",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "110000.00",
                                  "Attributes": [
                                      {
                                          "Value": "4e6a9af5-b0cb-4f5b-a7ce-885026e3badf",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Transaction account",
                                  "Attributes": [
                                      {
                                          "Value": "d87d4ef8-7d78-4bca-a836-2fcca9025646",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "0.00",
                                  "Attributes": [
                                      {
                                          "Value": "d87d4ef8-7d78-4bca-a836-2fcca9025646",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "193800.00",
                                  "Attributes": [
                                      {
                                          "Value": "d87d4ef8-7d78-4bca-a836-2fcca9025646",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "SummaryRow",
                          "Cells": [
                              {
                                  "Value": "Total Current Assets"
                              },
                              {
                                  "Value": "2143157.64"
                              },
                              {
                                  "Value": "1711934.03"
                              }
                          ]
                      }
                  ]
              },
              {
                  "RowType": "Section",
                  "Title": "Fixed Assets",
                  "Rows": [
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Office Equipment",
                                  "Attributes": [
                                      {
                                          "Value": "193bd666-2b0d-48f9-8364-77a339a1b9b2",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "20000.00",
                                  "Attributes": [
                                      {
                                          "Value": "193bd666-2b0d-48f9-8364-77a339a1b9b2",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "20000.00",
                                  "Attributes": [
                                      {
                                          "Value": "193bd666-2b0d-48f9-8364-77a339a1b9b2",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Less Accumulated Depreciation on Office Equipment",
                                  "Attributes": [
                                      {
                                          "Value": "a2f00c3f-ed99-431d-b138-6eae641bc336",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "2000.00",
                                  "Attributes": [
                                      {
                                          "Value": "a2f00c3f-ed99-431d-b138-6eae641bc336",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "2000.00",
                                  "Attributes": [
                                      {
                                          "Value": "a2f00c3f-ed99-431d-b138-6eae641bc336",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "SummaryRow",
                          "Cells": [
                              {
                                  "Value": "Total Fixed Assets"
                              },
                              {
                                  "Value": "22000.00"
                              },
                              {
                                  "Value": "22000.00"
                              }
                          ]
                      }
                  ]
              },
              {
                  "RowType": "Section",
                  "Title": "Non-current Assets",
                  "Rows": [
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Long Term Director Loan",
                                  "Attributes": [
                                      {
                                          "Value": "9e2877b9-a7cf-44bf-b60c-558c8bc26233",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "50000.00",
                                  "Attributes": [
                                      {
                                          "Value": "9e2877b9-a7cf-44bf-b60c-558c8bc26233",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "50000.00",
                                  "Attributes": [
                                      {
                                          "Value": "9e2877b9-a7cf-44bf-b60c-558c8bc26233",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Toyota Hilux Car",
                                  "Attributes": [
                                      {
                                          "Value": "6bd2abf8-c606-4e1c-98b8-881fa19863bb",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "28000.00",
                                  "Attributes": [
                                      {
                                          "Value": "6bd2abf8-c606-4e1c-98b8-881fa19863bb",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "28000.00",
                                  "Attributes": [
                                      {
                                          "Value": "6bd2abf8-c606-4e1c-98b8-881fa19863bb",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Warehouse Equipments",
                                  "Attributes": [
                                      {
                                          "Value": "afc41221-8334-4cfe-b485-625238d920c0",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "10000.00",
                                  "Attributes": [
                                      {
                                          "Value": "afc41221-8334-4cfe-b485-625238d920c0",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "10000.00",
                                  "Attributes": [
                                      {
                                          "Value": "afc41221-8334-4cfe-b485-625238d920c0",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "SummaryRow",
                          "Cells": [
                              {
                                  "Value": "Total Non-current Assets"
                              },
                              {
                                  "Value": "88000.00"
                              },
                              {
                                  "Value": "88000.00"
                              }
                          ]
                      }
                  ]
              },
              {
                  "RowType": "Section",
                  "Title": "",
                  "Rows": [
                      {
                          "RowType": "SummaryRow",
                          "Cells": [
                              {
                                  "Value": "Total Assets"
                              },
                              {
                                  "Value": "2357234.34"
                              },
                              {
                                  "Value": "1925983.63"
                              }
                          ]
                      }
                  ]
              },
              {
                  "RowType": "Section",
                  "Title": "Liabilities",
                  "Rows": []
              },
              {
                  "RowType": "Section",
                  "Title": "Current Liabilities",
                  "Rows": [
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Accounts Payable",
                                  "Attributes": [
                                      {
                                          "Value": "cdb3312e-c925-4313-9f7b-be4bcd283e5e",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "90700.00",
                                  "Attributes": [
                                      {
                                          "Value": "cdb3312e-c925-4313-9f7b-be4bcd283e5e",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "90700.00",
                                  "Attributes": [
                                      {
                                          "Value": "cdb3312e-c925-4313-9f7b-be4bcd283e5e",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "ANZ Credit Card",
                                  "Attributes": [
                                      {
                                          "Value": "3e970e21-ddf5-4c6c-86df-7a76f827b018",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "10000.00",
                                  "Attributes": [
                                      {
                                          "Value": "3e970e21-ddf5-4c6c-86df-7a76f827b018",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "10000.00",
                                  "Attributes": [
                                      {
                                          "Value": "3e970e21-ddf5-4c6c-86df-7a76f827b018",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Car Loan",
                                  "Attributes": [
                                      {
                                          "Value": "0e72d9db-0ba6-446d-9b51-ce9f89ebf5d9",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "8000.00",
                                  "Attributes": [
                                      {
                                          "Value": "0e72d9db-0ba6-446d-9b51-ce9f89ebf5d9",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "8000.00",
                                  "Attributes": [
                                      {
                                          "Value": "0e72d9db-0ba6-446d-9b51-ce9f89ebf5d9",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "CBA Loan",
                                  "Attributes": [
                                      {
                                          "Value": "b086a02a-bbac-430f-ac5d-69179d72379e",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "12000.00",
                                  "Attributes": [
                                      {
                                          "Value": "b086a02a-bbac-430f-ac5d-69179d72379e",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "12000.00",
                                  "Attributes": [
                                      {
                                          "Value": "b086a02a-bbac-430f-ac5d-69179d72379e",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "GST",
                                  "Attributes": [
                                      {
                                          "Value": "00d5acf1-dbae-40a9-a68d-3899e37d11ee",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "81488.19",
                                  "Attributes": [
                                      {
                                          "Value": "00d5acf1-dbae-40a9-a68d-3899e37d11ee",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "60984.74",
                                  "Attributes": [
                                      {
                                          "Value": "00d5acf1-dbae-40a9-a68d-3899e37d11ee",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Historical Adjustment",
                                  "Attributes": [
                                      {
                                          "Value": "be6a512a-9d26-42d8-9070-abde4ef91937",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "10000.00",
                                  "Attributes": [
                                      {
                                          "Value": "be6a512a-9d26-42d8-9070-abde4ef91937",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "10000.00",
                                  "Attributes": [
                                      {
                                          "Value": "be6a512a-9d26-42d8-9070-abde4ef91937",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Owner A Drawings",
                                  "Attributes": [
                                      {
                                          "Value": "adfb81c2-a610-4852-b894-24e67c23808f",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "-1111.00",
                                  "Attributes": [
                                      {
                                          "Value": "adfb81c2-a610-4852-b894-24e67c23808f",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "-1111.00",
                                  "Attributes": [
                                      {
                                          "Value": "adfb81c2-a610-4852-b894-24e67c23808f",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "PAYG Withholdings",
                                  "Attributes": [
                                      {
                                          "Value": "2a5fff59-22bb-4b41-9d4b-c1f969fddf9a",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "-2000.00",
                                  "Attributes": [
                                      {
                                          "Value": "2a5fff59-22bb-4b41-9d4b-c1f969fddf9a",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "-2000.00",
                                  "Attributes": [
                                      {
                                          "Value": "2a5fff59-22bb-4b41-9d4b-c1f969fddf9a",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Superannuation Payable",
                                  "Attributes": [
                                      {
                                          "Value": "a9980667-5aa2-4e98-952c-3a3cec400e15",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "-2000.00",
                                  "Attributes": [
                                      {
                                          "Value": "a9980667-5aa2-4e98-952c-3a3cec400e15",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "-2000.00",
                                  "Attributes": [
                                      {
                                          "Value": "a9980667-5aa2-4e98-952c-3a3cec400e15",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Suspense",
                                  "Attributes": [
                                      {
                                          "Value": "61899c5c-242f-4feb-96e5-da230e649185",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "-100.00",
                                  "Attributes": [
                                      {
                                          "Value": "61899c5c-242f-4feb-96e5-da230e649185",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "-100.00",
                                  "Attributes": [
                                      {
                                          "Value": "61899c5c-242f-4feb-96e5-da230e649185",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Wages Payable - Payroll",
                                  "Attributes": [
                                      {
                                          "Value": "090da58e-ac14-42ae-9c3a-55dfa206928d",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "167995.00",
                                  "Attributes": [
                                      {
                                          "Value": "090da58e-ac14-42ae-9c3a-55dfa206928d",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "167995.00",
                                  "Attributes": [
                                      {
                                          "Value": "090da58e-ac14-42ae-9c3a-55dfa206928d",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "SummaryRow",
                          "Cells": [
                              {
                                  "Value": "Total Current Liabilities"
                              },
                              {
                                  "Value": "374972.19"
                              },
                              {
                                  "Value": "354468.74"
                              }
                          ]
                      }
                  ]
              },
              {
                  "RowType": "Section",
                  "Title": "Non-Current Liabilities",
                  "Rows": [
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Loan",
                                  "Attributes": [
                                      {
                                          "Value": "047b6931-3920-44f7-b124-096f5e06328f",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "84000.00",
                                  "Attributes": [
                                      {
                                          "Value": "047b6931-3920-44f7-b124-096f5e06328f",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "84000.00",
                                  "Attributes": [
                                      {
                                          "Value": "047b6931-3920-44f7-b124-096f5e06328f",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Loan to company",
                                  "Attributes": [
                                      {
                                          "Value": "18dfb8aa-c23d-4356-9f30-3236e6b442f7",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "20000.00",
                                  "Attributes": [
                                      {
                                          "Value": "18dfb8aa-c23d-4356-9f30-3236e6b442f7",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "20000.00",
                                  "Attributes": [
                                      {
                                          "Value": "18dfb8aa-c23d-4356-9f30-3236e6b442f7",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Westpac Loan",
                                  "Attributes": [
                                      {
                                          "Value": "5833f2ca-7e62-4edc-b4af-32a79161d311",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "30000.00",
                                  "Attributes": [
                                      {
                                          "Value": "5833f2ca-7e62-4edc-b4af-32a79161d311",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "30000.00",
                                  "Attributes": [
                                      {
                                          "Value": "5833f2ca-7e62-4edc-b4af-32a79161d311",
                                          "Id": "account"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "SummaryRow",
                          "Cells": [
                              {
                                  "Value": "Total Non-Current Liabilities"
                              },
                              {
                                  "Value": "134000.00"
                              },
                              {
                                  "Value": "134000.00"
                              }
                          ]
                      }
                  ]
              },
              {
                  "RowType": "Section",
                  "Title": "",
                  "Rows": [
                      {
                          "RowType": "SummaryRow",
                          "Cells": [
                              {
                                  "Value": "Total Liabilities"
                              },
                              {
                                  "Value": "508972.19"
                              },
                              {
                                  "Value": "488468.74"
                              }
                          ]
                      }
                  ]
              },
              {
                  "RowType": "Section",
                  "Title": "",
                  "Rows": [
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Net Assets"
                              },
                              {
                                  "Value": "1848262.15"
                              },
                              {
                                  "Value": "1437514.89"
                              }
                          ]
                      }
                  ]
              },
              {
                  "RowType": "Section",
                  "Title": "Equity",
                  "Rows": [
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Current Year Earnings",
                                  "Attributes": [
                                      {
                                          "Value": "abababab-abab-abab-abab-abababababab",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "445169.48",
                                  "Attributes": [
                                      {
                                          "Value": "abababab-abab-abab-abab-abababababab",
                                          "Id": "account"
                                      },
                                      {
                                          "Value": "7/1/2023",
                                          "Id": "fromDate"
                                      },
                                      {
                                          "Value": "10/31/2023",
                                          "Id": "toDate"
                                      }
                                  ]
                              },
                              {
                                  "Value": "402254.50",
                                  "Attributes": [
                                      {
                                          "Value": "abababab-abab-abab-abab-abababababab",
                                          "Id": "account"
                                      },
                                      {
                                          "Value": "7/1/2022",
                                          "Id": "fromDate"
                                      },
                                      {
                                          "Value": "10/31/2022",
                                          "Id": "toDate"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "Row",
                          "Cells": [
                              {
                                  "Value": "Retained Earnings",
                                  "Attributes": [
                                      {
                                          "Value": "3e0024e1-1b14-448e-aab2-834f0ea13087",
                                          "Id": "account"
                                      }
                                  ]
                              },
                              {
                                  "Value": "1403092.67",
                                  "Attributes": [
                                      {
                                          "Value": "3e0024e1-1b14-448e-aab2-834f0ea13087",
                                          "Id": "account"
                                      },
                                      {
                                          "Value": "",
                                          "Id": "fromDate"
                                      },
                                      {
                                          "Value": "10/31/2023",
                                          "Id": "toDate"
                                      }
                                  ]
                              },
                              {
                                  "Value": "1035260.39",
                                  "Attributes": [
                                      {
                                          "Value": "3e0024e1-1b14-448e-aab2-834f0ea13087",
                                          "Id": "account"
                                      },
                                      {
                                          "Value": "",
                                          "Id": "fromDate"
                                      },
                                      {
                                          "Value": "10/31/2022",
                                          "Id": "toDate"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "RowType": "SummaryRow",
                          "Cells": [
                              {
                                  "Value": "Total Equity"
                              },
                              {
                                  "Value": "1848262.15"
                              },
                              {
                                  "Value": "1437514.89"
                              }
                          ]
                      }
                  ]
              }
          ]
      }
  ]
};
export default mockApiResponse;