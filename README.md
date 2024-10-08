# Balance Sheet Reports

Shows the balance report in tabular format.

## Available Scripts

In the project directory, you can run:

### `docker-compose up --build`

Runs the app on localhost.\
Open [http://localhost:80](http://localhost:80) to view it in the browser.

Make sure docker is installed.


There are two apps inside:

balance-sheet-reports-backend

balance-sheet-reports-frontend



### balance-sheet-reports-backend

Backend is express server. It will call the xero api to cache the data in redis and serve it to to frontend.



### balance-sheet-reports-frontend

Frontend is create-react-app written in React. It will show you the api data in tabular fromat using mui-table.


Tests run before building the apps.

