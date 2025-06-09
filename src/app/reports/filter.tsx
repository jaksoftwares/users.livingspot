"use client";

import { useState } from "react";

const Filters = ({ onFilter }: { onFilter: (filters: unknown) => void }) => {
  const [dateRange, setDateRange] = useState("last30days");
  const [property, setProperty] = useState("all");
  const [reportType, setReportType] = useState("financial");

  const handleFilterChange = () => {
    onFilter({ dateRange, property, reportType });
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md mb-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">Filter Reports</h3>

      <div className="grid grid-cols-3 gap-4">
        {/* Date Range Filter */}
        <div>
          <label className="text-gray-600 text-sm">Date Range</label>
          <select
            className="w-full p-2 border rounded-md"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="last7days">Last 7 Days</option>
            <option value="last30days">Last 30 Days</option>
            <option value="last3months">Last 3 Months</option>
            <option value="lastyear">Last Year</option>
          </select>
        </div>

        {/* Property Filter */}
        <div>
          <label className="text-gray-600 text-sm">Property</label>
          <select
            className="w-full p-2 border rounded-md"
            value={property}
            onChange={(e) => setProperty(e.target.value)}
          >
            <option value="all">All Properties</option>
            <option value="property1">2-Bedroom Apartment</option>
            <option value="property2">Studio Apartment</option>
          </select>
        </div>

        {/* Report Type Filter */}
        <div>
          <label className="text-gray-600 text-sm">Report Type</label>
          <select
            className="w-full p-2 border rounded-md"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="financial">Financial</option>
            <option value="traffic">Traffic</option>
            <option value="engagement">Engagement</option>
            <option value="occupancy">Occupancy</option>
          </select>
        </div>
      </div>

      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
        onClick={handleFilterChange}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
