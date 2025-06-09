"use client";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const OccupancyReports = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Occupancy Report</h2>

      {/* Overview */}
      <div className="bg-white shadow-md p-6 rounded-md mb-6">
        <h3 className="text-lg font-semibold text-gray-700">Total Properties</h3>
        <p className="text-3xl font-bold text-gray-800 mt-2">10</p>
      </div>

      {/* Availability */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-6 rounded-md flex items-center">
          <FaCheckCircle className="text-green-600 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Occupied</h3>
            <p className="text-2xl font-bold text-green-600">7</p>
          </div>
        </div>
        <div className="bg-white shadow-md p-6 rounded-md flex items-center">
          <FaTimesCircle className="text-red-600 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Available</h3>
            <p className="text-2xl font-bold text-red-600">3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccupancyReports;
