import React from 'react';
import SalesChart from '../components/AnalyticsGraph';
import FileUpload from '../components/FileUpload';
import "../styles.css"; 

const DataInputPage = () => {
  return (
    <div>
      <div className='csv-upload'>
      <h1>Upload your .CSV File Here</h1>
      < FileUpload />
      </div>
      <div>
        <SalesChart />

      </div>

  
    </div>
  );
};

export default DataInputPage;
