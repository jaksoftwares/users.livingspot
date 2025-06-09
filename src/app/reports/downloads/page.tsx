"use client";

import { FaDownload } from "react-icons/fa";

const Downloads = () => {
  const handleDownload = (format: string) => {
    alert(`Downloading report as ${format.toUpperCase()}`);
    // TODO: Implement actual CSV/PDF generation
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">Download Reports</h3>

      <div className="flex space-x-4">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center"
          onClick={() => handleDownload("csv")}
        >
          <FaDownload className="mr-2" /> Download CSV
        </button>

        <button
          className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center"
          onClick={() => handleDownload("pdf")}
        >
          <FaDownload className="mr-2" /> Download PDF
        </button>
      </div>
    </div>
  );
};

export default Downloads;
