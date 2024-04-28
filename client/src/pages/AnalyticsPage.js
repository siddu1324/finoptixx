import React from 'react';
import AnalyticsResults from '../components/AnalyticsResults';
import TemplateDemo from '../components/FileUpload';
import "../styles.css"; 

const AnalyticsPage = () => {
  return (
    <div>
      <h1>Analytics Dashboard</h1>
      
      <AnalyticsResults />
    </div>
  );
};

export default AnalyticsPage;
