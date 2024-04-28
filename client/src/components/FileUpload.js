import React, { useState } from 'react';
import { UploadWidget } from '@bytescale/upload-widget';

const FileUpload = ({ onFileUpload }) => {
  const handleUpload = () => {
    const options = {
      apiKey: "free",  // Make sure to replace "free" with your actual API key
      maxFileCount: 1,
      // mimeTypes: ["image/*"], // Uncomment if you need to restrict to images
    };

    UploadWidget.open(options).then(
      files => {
        if (files.length > 0) {
          onFileUpload();
        }
      },
      error => {
        alert(error);
      }
    );
  };

  return (
    <div>
      <button onClick={handleUpload}>Upload File</button>
    </div>
  );
};

export default FileUpload;
