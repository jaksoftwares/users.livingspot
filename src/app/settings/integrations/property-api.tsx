"use client";
import { useState } from "react";

const PropertyAPIIntegration = () => {
  const [propertyAPI, setPropertyAPI] = useState({
    zillow: false,
    rentberry: false,
    realtor: false,
    apiKey: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPropertyAPI({ ...propertyAPI, [e.target.name]: e.target.checked });
  };

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPropertyAPI({ ...propertyAPI, apiKey: e.target.value });
  };

  const handleSave = () => {
    console.log("Property API Settings:", propertyAPI);
    alert("Property API integrations updated!");
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800">🏡 Property API Integrations</h1>
      <p className="text-gray-600 mb-4">Enable and configure external property listing services.</p>

      <div className="space-y-3">
        <label className="flex items-center">
          <input type="checkbox" name="zillow" checked={propertyAPI.zillow} onChange={handleChange} className="mr-2" />
          Sync with Zillow
        </label>

        <label className="flex items-center">
          <input type="checkbox" name="rentberry" checked={propertyAPI.rentberry} onChange={handleChange} className="mr-2" />
          Sync with Rentberry
        </label>

        <label className="flex items-center">
          <input type="checkbox" name="realtor" checked={propertyAPI.realtor} onChange={handleChange} className="mr-2" />
          Sync with Realtor API
        </label>

        <div>
          <label className="text-gray-600">API Key</label>
          <input
            type="text"
            name="apiKey"
            value={propertyAPI.apiKey}
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

export default PropertyAPIIntegration;
