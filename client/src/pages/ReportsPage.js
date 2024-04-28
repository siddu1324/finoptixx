import React, { useState } from 'react';
import "../styles.css"; 

const ReportsPage = () => {
  const [reports, setReports] = useState([
    { id: 1, title: 'Annual Financial Report 2023' },
    { id: 2, title: 'Expense Report Q1 2023' }
  ]);

  const handleGenerateReport = () => {
    // Function to generate a new report
    const newReport = { id: reports.length + 1, title: `New Report ${reports.length + 1}` };
    setReports([...reports, newReport]);
    console.log('Generating new report...');
  };

  // Replace your current handleDownload function with this one
  const handleDownload = (reportId) => {
    const report = reports.find(r => r.id === reportId);
    fetch(`/path-to-reports/${reportId}`) // Make sure to have the correct server endpoint here
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `${report.title}.pdf`; // Set the file name for the download
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        alert(`${report.title} downloaded.`);
      })
      .catch(() => alert('Error in downloading the report'));
  };

  return (
    <div className="reports-container">
      <h1>Reports</h1>
      <button onClick={handleGenerateReport}>Generate New Report</button>
      <ul>
        {reports.map(report => (
          <li key={report.id}>
            {report.title} <button onClick={() => handleDownload(report.id)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportsPage;
