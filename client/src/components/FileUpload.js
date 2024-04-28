import React, { useState } from 'react';
import { UploadWidget } from '@bytescale/upload-widget';

const FileUpload = () => {
  const [fileUrl, setFileUrl] = useState('');

  const handleUpload = () => {
    const options = {
      apiKey: "free",  // Make sure to replace "free" with your actual API key
      maxFileCount: 1,
      // mimeTypes: ["image/*"], // Uncomment if you need to restrict to images
    };

    UploadWidget.open(options).then(
      files => {
        if (files.length === 0) {
        } else {
          setFileUrl(files.map(x => x.fileUrl).join("\n"));
          alert(`File uploaded:\n\n${fileUrl}`);
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
      {fileUrl && <div>Uploaded File URL: {fileUrl}</div>}
    </div>
  );
};

export default FileUpload;
