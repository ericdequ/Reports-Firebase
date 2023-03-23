# React Government Spending Data App

This React application allows users to search and explore government spending data with a keyword search and advanced filtering options. With an intuitive interface, users can gain detailed insights into agency, state, federal accounts, and recipient profiles. The app also includes a glossary and data dictionary to better understand government contracting data.

### Installation ⏬
To install the application, run the following command:
`npm install --legacy-peer-deps`

### Running the App 💨
To start the application in development mode, run:
`npm start`

### Building the DEV App 👨‍💻
To build the application for development, run:
`npm run dev`

### Building the PROD App 🎥
To Build the application for production, run:
`npm run prod`

## IFrame Connection 🪟
- The application communicates with breadgetter via an iframe found in src/js/components/IFrame/
- The Iframe validates if token is valid and then either serves the app container or The Invalid Token Page

## Features ➕
- Search government spending data with keyword search
- Advanced search with multiple filters
- Detailed insights into agency, state, federal accounts, and recipient profiles
- Access to a glossary and data dictionary of government contracting data

### Advanced Filters 🔍🔍🔍
- Keyword
- Time Period
- Award Type
- Agency
- Treasury Account Symbol (TAS)
- Location
- Recipient
- Recipient Type
- Award Amount
- Award ID
- Assistance Listing (CFDA Program)
- Disaster Emergency Fund Code (DEFC)
- North American Industry Classification System (NAICS)
- Product or Service Code (PSC)
- Type of Contract Pricing
- Type of Set Aside
- Extent Competed

Users can submit their search with the "Submit Search" button and reset the search parameters with the "Reset Search" button.

## Learn More 📚
For more information about the React Government Spending Data App, please explore the following sections:
- Detailed Insights and Profiles
- Glossary and Data Dictionary

