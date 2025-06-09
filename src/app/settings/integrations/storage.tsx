"use client";
import { useState } from "react";

const CloudStorageIntegration = () => {
  const [storage, setStorage] = useState({
    firebase: false,
    cloudinary: false,
    aws: false,
    apiKey: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStorage({ ...storage, [e.target.name]: e.target.checked });
  };

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStorage({ ...storage, apiKey: e.target.value });
  };

  const handleSave = () => {
    console.log("Cloud Storage Settings:", storage);
    alert("Cloud storage integrations updated!");
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800">☁️ Cloud Storage</h1>
      <p className="text-gray-600 mb-4">Enable and configure cloud storage services.</p>

      <div className="space-y-3">
        <label className="flex items-center">
          <input type="checkbox" name="firebase" checked={storage.firebase} onChange={handleChange} className="mr-2" />
          Enable Firebase Storage
        </label>

        <label className="flex items-center">
          <input type="checkbox" name="cloudinary" checked={storage.cloudinary} onChange={handleChange} className="mr-2" />
          Enable Cloudinary
        </label>

        <label className="flex items-center">
          <input type="checkbox" name="aws" checked={storage.aws} onChange={handleChange} className="mr-2" />
          Enable AWS S3
        </label>

        <div>
          <label className="text-gray-600">API Key</label>
          <input
            type="text"
            name="apiKey"
            value={storage.apiKey}
            onChange={handleApiKeyChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter API Key"
          />
        </div>
      </div>

      <button onClick={handleSave} className="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Save Changes
      </button>
    </div>
  );
};

export default CloudStorageIntegration;
