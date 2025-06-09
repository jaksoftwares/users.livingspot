"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const tenants: Record<number, { name: string; age: number; email: string; phone: string; property: string; status: string }> = {
  1: { name: "Alice Johnson", age: 27, email: "alice@example.com", phone: "123-456-7890", property: "Apartment 101", status: "Pending" },
  2: { name: "Mark Davis", age: 30, email: "mark@example.com", phone: "987-654-3210", property: "Studio 205", status: "Approved" },
  3: { name: "Sarah Lee", age: 25, email: "sarah@example.com", phone: "555-666-7777", property: "Townhouse 12", status: "Pending" },
};

const TenantDetails = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get tenant ID from query params and convert to number
  const tenantId = Number(searchParams.get("id"));

  // Ensure `tenantId` is a valid number and exists in `tenants`
  const tenant = tenants[tenantId];

  // Use state correctly (outside conditional checks)
  const [status, setStatus] = useState(tenant?.status || "");

  if (!tenant) {
    return <div className="p-6 text-red-500">Tenant not found.</div>;
  }

  const handleAccept = () => {
    setStatus("Approved");
    alert(`Tenant ${tenant.name} approved!`);
  };

  const handleDecline = () => {
    setStatus("Declined");
    alert(`Tenant ${tenant.name} declined.`);
    router.push("/dashboard/landlord/tenants");
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">Tenant Details</h1>
      <p className="text-gray-600 mt-2">Review tenant details before approving.</p>

      <div className="mt-4 space-y-3">
        <p><strong>Name:</strong> {tenant.name}</p>
        <p><strong>Age:</strong> {tenant.age}</p>
        <p><strong>Email:</strong> {tenant.email}</p>
        <p><strong>Phone:</strong> {tenant.phone}</p>
        <p><strong>Property:</strong> {tenant.property}</p>
        <p><strong>Status:</strong> <span className={`px-3 py-1 rounded-full text-white ${status === "Pending" ? "bg-yellow-500" : status === "Approved" ? "bg-green-500" : "bg-red-500"}`}>{status}</span></p>
      </div>

      {status === "Pending" && (
        <div className="mt-6 flex space-x-4">
          <button onClick={handleAccept} className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">Approve</button>
          <button onClick={handleDecline} className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">Decline</button>
        </div>
      )}
    </div>
  );
};

export default TenantDetails;
