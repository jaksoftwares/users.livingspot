"use client";

import { FaEye } from "react-icons/fa";

const TrafficReports = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Traffic Insights</h2>

      {/* Overview */}
      <div className="bg-white shadow-md p-6 rounded-md mb-6">
        <h3 className="text-lg font-semibold text-gray-700">Total Views</h3>
        <p className="text-3xl font-bold text-blue-600 mt-2">8,450</p>
      </div>

      {/* Most Viewed Properties */}
      <div className="bg-white shadow-md p-6 rounded-md">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center">
          <FaEye className="mr-2" /> Most Viewed Properties
        </h3>

        <table className="w-full mt-4 text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Property</th>
              <th className="p-2">Views</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">2-Bedroom Apartment</td>
              <td className="p-2 text-blue-600">3,200</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Studio Apartment</td>
              <td className="p-2 text-blue-600">2,500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrafficReports;
