"use client";

import Link from "next/link";

const tenantApplications = [
  { id: 1, name: "Alice Johnson", property: "Apartment 101", status: "Pending" },
  { id: 2, name: "Mark Davis", property: "Studio 205", status: "Approved" },
  { id: 3, name: "Sarah Lee", property: "Townhouse 12", status: "Pending" },
];

const TenantsPage = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">🏠 Tenant Applications</h1>
      <p className="text-gray-600 mt-2">Review and manage tenant requests.</p>

      <div className="mt-6 space-y-4">
        {tenantApplications.map((tenant) => (
          <div key={tenant.id} className="p-4 bg-gray-100 rounded-lg shadow flex justify-between">
            <div>
              <p className="font-semibold">{tenant.name}</p>
              <p className="text-gray-600">{tenant.property}</p>
            </div>
            <div>
              <span className={`px-3 py-1 rounded-full text-white ${tenant.status === "Pending" ? "bg-yellow-500" : "bg-green-500"}`}>
                {tenant.status}
              </span>
              <Link href={`/${tenant.id}`} className="ml-3 text-blue-600 underline">
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TenantsPage;
