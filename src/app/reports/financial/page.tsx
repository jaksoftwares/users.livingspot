"use client";

import { FaHistory } from "react-icons/fa";

const FinancialReports = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Financial Reports</h2>

      {/* Overview */}
      <div className="bg-white shadow-md p-6 rounded-md mb-6">
        <h3 className="text-lg font-semibold text-gray-700">Total Earnings</h3>
        <p className="text-3xl font-bold text-green-600 mt-2">Ksh 120,500</p>
      </div>

      {/* Transactions */}
      <div className="bg-white shadow-md p-6 rounded-md">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center">
          <FaHistory className="mr-2" /> Recent Transactions
        </h3>

        <table className="w-full mt-4 text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Date</th>
              <th className="p-2">Tenant</th>
              <th className="p-2">Property</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">Feb 20, 2025</td>
              <td className="p-2">John Doe</td>
              <td className="p-2">2-Bedroom Apartment</td>
              <td className="p-2 text-green-600">Ksh 35,000</td>
              <td className="p-2 text-green-500">Completed</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Feb 15, 2025</td>
              <td className="p-2">Jane Smith</td>
              <td className="p-2">Studio Apartment</td>
              <td className="p-2 text-red-600">Ksh 20,000</td>
              <td className="p-2 text-red-500">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialReports;
