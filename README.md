# FinOptiX :chart_with_upwards_trend:

**FinOptiX** is a state-of-the-art financial analytics platform specifically designed to empower small to medium-sized enterprises (SMEs) with advanced financial decision-making tools. Using machine learning techniques, FinOptiX delivers predictive insights and prescriptive recommendations, enabling businesses to navigate financial complexities with precision and insight.

## Features :sparkles:

- **Predictive Financial Analytics**: Leverages deep learning and statistical models to forecast future financial trends and conditions.
- **Prescriptive Insights**: Provides data-driven strategies and actions to improve financial outcomes and operational efficiency.
- **Interactive Dashboards**: Features dynamic and intuitive dashboards that present financial data and analytics in real-time.
- **Custom Scenario Planning**: Allows users to simulate different financial scenarios to predict outcomes and plan accordingly.

## Project Structure :file_folder:

- `/client`: Contains all the front-end code built with React, responsible for rendering interactive UI components and visualizations.
- `/`: The root directory contains the back-end code, utilizing Node.js with Express to handle API requests, data processing, and integration with Python machine learning models.

## Technologies :computer:

- **Backend**: Node.js with Express for handling API services, situated in the root directory.
- **Frontend**: React, located in the `client` folder, to create a responsive and interactive user interface.
- **Machine Learning**: Python, used to build and run sophisticated financial models.

## Getting Started :rocket:

These instructions will guide you through setting up the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following software installed:
- Node.js
- npm (comes with Node.js)
- Python 3
- React.js

### Installation

Follow these steps to get your development environment running:

1. Clone the repository:
```bash
git clone https://github.com/yourusername/FinOptiX.git
cd FinOptiX
```

Install backend dependencies:
```bash
Copy code
npm install
```
Navigate to the client directory and install frontend dependencies:
```bash
cd client
npm install
cd ..
```
Install Python dependencies:
```bash
pip install -r requirements.txt
Running the Application
To run both frontend and backend servers simultaneously:
```
Start the backend server from the root directory:
```bash
node server.mjs
```
In another terminal, navigate to the client directory and start the React application:
```bash
cd client
npm start
```
Both services will run concurrently, with the frontend accessible through http://localhost:3000 and the backend handling API requests(http://localhost:5001).

Contributing :handshake:
We encourage contributions from the community. Here are our main contributors:

Medhani Kalal
Kashish Tandon
Kunal Singh
Siddhartha Reddy Pullanmagari
Omair Syed
Venkat Sai Manikanta Grandhe

Project Link: https://github.com/siddu1324/finoptixx