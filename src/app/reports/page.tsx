"use client";

import { FaFileDownload, FaFilter, FaChartBar } from "react-icons/fa";
import Link from "next/link";

const ReportsPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Reports & Analytics</h2>

      {/* Filters */}
      <div className="bg-white shadow-md p-4 rounded-md flex justify-between items-center mb-6">
        <span className="text-gray-700">Filter reports by:</span>
        <Link href="/reports/filters" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          <FaFilter className="mr-2" /> Customize Filters
        </Link>
      </div>

      {/* Reports Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ReportCard title="Financial Reports" description="Track your earnings & transactions" link="/reports/financial" />
        <ReportCard title="Traffic Insights" description="See which properties get the most views" link="/reports/traffic" />
        <ReportCard title="Engagement Reports" description="Monitor tenant inquiries & messages" link="/reports/engagement" />
        <ReportCard title="Occupancy Reports" description="Check rented vs. available properties" link="/reports/occupancy" />
      </div>

      {/* Download Reports */}
      <div className="mt-8 flex justify-center">
        <Link href="/reports/downloads" className="flex items-center bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
          <FaFileDownload className="mr-2" /> Download Reports
        </Link>
      </div>
    </div>
  );
};

const ReportCard = ({ title, description, link }: { title: string; description: string; link: string }) => (
  <Link href={link} className="bg-white shadow-md p-6 rounded-md hover:shadow-lg transition-all">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
    <FaChartBar className="text-gray-400 text-3xl mt-4" />
  </Link>
);

export default ReportsPage;
