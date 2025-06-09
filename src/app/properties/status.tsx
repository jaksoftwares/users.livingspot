"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const StatusPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const propertyId = searchParams.get("id");

  const [status, setStatus] = useState("Available");

  const handleUpdate = () => {
    alert(`Property ${propertyId} status updated to ${status}!`);
    router.push("/dashboard/landlord/properties");
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">Update Property Status</h1>
      
      <label className="block text-gray-600 font-medium mt-4">Select Status</label>
      <select className="w-full p-2 border rounded-lg mt-1" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Available">Available</option>
        <option value="Booked">Booked</option>
        <option value="Occupied">Occupied</option>
      </select>

      <button onClick={handleUpdate} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
        Update Status
      </button>
    </div>
  );
};

export default StatusPage;
