import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const salesData = [
  { month: 'Jan', sales: 601230, forecast: 65120 },
  { month: 'Feb', sales: 701230, forecast: 711120 },
  { month: 'Mar', sales: 712320, forecast: 781220 },
  { month: 'Apr', sales: 82130, forecast: 85120 },
  { month: 'May', sales: 90130, forecast: 95120 },
  { month: 'Jun', sales: 105310, forecast: 111200 },
  { month: 'Jul', sales: 122130, forecast: 121250 },
  { month: 'Aug', sales: 130130, forecast: 131250 },
  { month: 'Sep', sales: 133180, forecast: 142100 },
  { month: 'Oct', sales: 141350, forecast: 141280 },
  { month: 'Nov', sales: 150130, forecast: 152120 },
  { month: 'Dec', sales: 155130, forecast: 160220 },
];

const expensesData = [
  { month: 'Jan', expenses: 400000 },
  { month: 'Feb', expenses: 450070 },
  { month: 'Mar', expenses: 480232 },
  { month: 'Apr', expenses: 500123 },
  { month: 'May', expenses: 550234 },
  { month: 'Jun', expenses: 600223 },
  { month: 'Jul', expenses: 621320 },
  { month: 'Aug', expenses: 651210 },
  { month: 'Sep', expenses: 682130 },
  { month: 'Oct', expenses: 700123 },
  { month: 'Nov', expenses: 722330 },
  { month: 'Dec', expenses: 712250 },
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
