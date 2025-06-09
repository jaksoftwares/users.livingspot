"use client";

import { useState } from "react";
import CloudStorageIntegration from "./storage";
import AnalyticsIntegration from "./analytics";
import PropertyAPIIntegration from "./property-api";

const IntegrationsPage = () => {
  const [activeTab, setActiveTab] = useState("cloud");

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🔗 Integrations</h1>
        <p className="text-gray-600 mb-6">Manage your cloud storage, analytics, and property API integrations.</p>

        {/* Tabs for Navigation */}
        <div className="flex border-b mb-6">
          <button
            className={`flex-1 py-2 px-4 text-center ${
              activeTab === "cloud" ? "border-b-4 border-blue-600 font-bold text-blue-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("cloud")}
          >
            ☁️ Cloud Storage
          </button>
          <button
            className={`flex-1 py-2 px-4 text-center ${
              activeTab === "analytics" ? "border-b-4 border-blue-600 font-bold text-blue-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("analytics")}
          >
            📊 Analytics & Tracking
          </button>
          <button
            className={`flex-1 py-2 px-4 text-center ${
              activeTab === "property" ? "border-b-4 border-blue-600 font-bold text-blue-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("property")}
          >
            🏡 Property APIs
          </button>
        </div>

        {/* Render Sections Dynamically */}
        <div className="p-4">
          {activeTab === "cloud" && <CloudStorageIntegration />}
          {activeTab === "analytics" && <AnalyticsIntegration />}
          {activeTab === "property" && <PropertyAPIIntegration/>}
        </div>
      </div>
    </div>
  );
};

export default IntegrationsPage;
