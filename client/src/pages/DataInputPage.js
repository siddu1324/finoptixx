import React, { useState } from 'react';
import SalesChart from '../components/AnalyticsGraph';
import FileUpload from '../components/FileUpload';
import "../styles.css"; 

const DataInputPage = () => {
  const [showGraph, setShowGraph] = useState(false);

  const handleFileUpload = () => {
    setShowGraph(true);
  };

  return (
    <div>
      <div className='csv-upload'>
        <h1>Upload your .CSV File Here</h1>
        <FileUpload onFileUpload={handleFileUpload} />
      </div>
      <div>
        <SalesChart showGraph={showGraph} />
      </div>
    </div>
  );
};

export default DataInputPage;
