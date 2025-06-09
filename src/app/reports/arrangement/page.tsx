"use client";

import { FaEnvelopeOpenText } from "react-icons/fa";

const EngagementReports = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Tenant Engagement</h2>

      {/* Overview */}
      <div className="bg-white shadow-md p-6 rounded-md mb-6">
        <h3 className="text-lg font-semibold text-gray-700">Total Inquiries</h3>
        <p className="text-3xl font-bold text-yellow-600 mt-2">1,230</p>
      </div>

      {/* Messages */}
      <div className="bg-white shadow-md p-6 rounded-md">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center">
          <FaEnvelopeOpenText className="mr-2" /> Messages Received
        </h3>

        <ul className="mt-4 space-y-2">
          <li className="p-3 bg-gray-200 rounded-md">&quot;Is the 2-bedroom still available?&quot; - John Doe</li>
          <li className="p-3 bg-gray-200 rounded-md">&quot;Can I visit the studio apartment?&quot; - Jane Smith</li>
        </ul>
      </div>
    </div>
  );
};

export default EngagementReports;
