"use client";
import { useState } from "react";

const AnalyticsIntegration = () => {
  const [analytics, setAnalytics] = useState({
    googleAnalytics: false,
    facebookPixel: false,
    hotjar: false,
    trackingID: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnalytics({ ...analytics, [e.target.name]: e.target.checked });
  };

  const handleTrackingIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnalytics({ ...analytics, trackingID: e.target.value });
  };

  const handleSave = () => {
    console.log("Analytics Settings:", analytics);
    alert("Analytics integrations updated!");
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800">📊 Analytics & Tracking</h1>
      <p className="text-gray-600 mb-4">Enable and configure analytics tools for tracking user activity.</p>

      <div className="space-y-3">
        <label className="flex items-center">
          <input type="checkbox" name="googleAnalytics" checked={analytics.googleAnalytics} onChange={handleChange} className="mr-2" />
          Enable Google Analytics
        </label>

        <label className="flex items-center">
          <input type="checkbox" name="facebookPixel" checked={analytics.facebookPixel} onChange={handleChange} className="mr-2" />
          Enable Facebook Pixel
        </label>

        <label className="flex items-center">
          <input type="checkbox" name="hotjar" checked={analytics.hotjar} onChange={handleChange} className="mr-2" />
          Enable Hotjar
        </label>

        <div>
          <label className="text-gray-600">Tracking ID</label>
          <input
            type="text"
            name="trackingID"
            value={analytics.trackingID}
            onChange={handleTrackingIDChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter Tracking ID"
          />
        </div>
      </div>

      <button onClick={handleSave} className="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Save Changes
      </button>
    </div>
  );
};

export default AnalyticsIntegration;
