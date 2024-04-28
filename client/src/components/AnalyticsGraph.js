import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const salesData = [
  { month: 'Jan', sales: 600, forecast: 650 },
  { month: 'Feb', sales: 700, forecast: 710 },
  { month: 'Mar', sales: 720, forecast: 780 },
  { month: 'Apr', sales: 820, forecast: 850 },
  { month: 'May', sales: 900, forecast: 950 },
  { month: 'Jun', sales: 1050, forecast: 1100 },
  { month: 'Jul', sales: 1220, forecast: 1250 },
  { month: 'Aug', sales: 1300, forecast: 1350 },
  { month: 'Sep', sales: 1380, forecast: 1400 },
  { month: 'Oct', sales: 1450, forecast: 1480 },
  { month: 'Nov', sales: 1500, forecast: 1520 },
  { month: 'Dec', sales: 1550, forecast: 1600 },
];

const expensesData = [
  { month: 'Jan', expenses: 400 },
  { month: 'Feb', expenses: 450 },
  { month: 'Mar', expenses: 480 },
  { month: 'Apr', expenses: 500 },
  { month: 'May', expenses: 550 },
  { month: 'Jun', expenses: 600 },
  { month: 'Jul', expenses: 620 },
  { month: 'Aug', expenses: 650 },
  { month: 'Sep', expenses: 680 },
  { month: 'Oct', expenses: 700 },
  { month: 'Nov', expenses: 720 },
  { month: 'Dec', expenses: 750 },
];

const profitData = [
  { month: 'Jan', profit: 200 },
  { month: 'Feb', profit: 250 },
  { month: 'Mar', profit: 240 },
  { month: 'Apr', profit: 320 },
  { month: 'May', profit: 350 },
  { month: 'Jun', profit: 450 },
  { month: 'Jul', profit: 600 },
  { month: 'Aug', profit: 650 },
  { month: 'Sep', profit: 700 },
  { month: 'Oct', profit: 750 },
  { month: 'Nov', profit: 780 },
  { month: 'Dec', profit: 800 },
];

const investmentData = [
  { name: 'Stocks', value: 600 },
  { name: 'Bonds', value: 300 },
  { name: 'Real Estate', value: 400 },
  { name: 'Cash', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SalesChart = ({ showGraph }) => {
  return (
    <div>
      {showGraph && (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div style={{ width: '48%' }}>
              <h2>Sales and Forecast</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="forecast" stroke="#82ca9d" strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
              <div className="summary">
                <h3>Sales Summary</h3>
                <p>Total sales for the past 12 months: $14,690</p>
                <p>Average monthly sales: $1,224</p>
                <p>Projected sales for the next 6 months: $9,820</p>
              </div>
            </div>

            <div style={{ width: '48%' }}>
              <h2>Expenses</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={expensesData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="expenses" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
              <div className="summary">
                <h3>Expenses Summary</h3>
                <p>Total expenses for the past 12 months: $5,760</p>
                <p>Average monthly expenses: $480</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '20px' }}>
            <div style={{ width: '48%' }}>
              <h2>Profit</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={profitData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
              <div className="summary">
                <h3>Profit Summary</h3>
                <p>Total profit for the past 12 months: $8,930</p>
                <p>Average monthly profit: $744</p>
              </div>
            </div>

            <div style={{ width: '48%' }}>
              <h2>Investment Portfolio</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={investmentData} dataKey="value" outerRadius={100} fill="#8884d8" label>
                    {investmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <div className="summary">
                <h3>Investment Summary</h3>
                <p>Total investment: $1,500</p>
                <p>Stocks: $600 (40%)</p>
                <p>Bonds: $300 (20%)</p>
                <p>Real Estate: $400 (27%)</p>
                <p>Cash: $200 (13%)</p>
              </div>
            </div>
          </div>

          <button style={{ marginTop: '20px' }}>Download Report</button>
        </div>
      )}
    </div>
  );
};

export default SalesChart;
