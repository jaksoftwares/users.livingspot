"use client";

import Link from "next/link";

const AnalyticsPage = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">Analytics & Insights 📊</h1>
      <p className="text-gray-600 mt-2">Track your property performance and engagement metrics.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <Link href="/analytics/traffic" className="bg-blue-100 p-4 rounded-lg shadow hover:bg-blue-200 transition">
          <h2 className="font-semibold text-blue-800">👀 Views & Interest Stats</h2>
          <p className="text-gray-700">Check how many people are viewing your properties.</p>
        </Link>
        <Link href="/analytics/earnings" className="bg-green-100 p-4 rounded-lg shadow hover:bg-green-200 transition">
          <h2 className="font-semibold text-green-800">💰 Earnings & Revenue</h2>
          <p className="text-gray-700">Track your rental earnings.</p>
        </Link>
        <Link href="/analytics/trends" className="bg-purple-100 p-4 rounded-lg shadow hover:bg-purple-200 transition">
          <h2 className="font-semibold text-purple-800">📈 Demand Trends</h2>
          <p className="text-gray-700">See which properties are in high demand.</p>
        </Link>
      </div>
    </div>
  );
};

export default AnalyticsPage;
