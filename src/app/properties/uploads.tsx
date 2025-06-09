"use client";

import { useState } from "react";

const UploadPropertyImages = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    alert(`Image "${selectedFile.name}" uploaded successfully!`);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">Upload Property Images</h1>

      <input type="file" onChange={handleFileChange} className="w-full p-2 border rounded-lg mt-4" />

      <button onClick={handleUpload} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
        Upload
      </button>
    </div>
  );
};

export default UploadPropertyImages;
