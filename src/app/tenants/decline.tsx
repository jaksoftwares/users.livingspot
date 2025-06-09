"use client";

import { useSearchParams } from "next/navigation";

const DeclineTenant = () => {
  const searchParams = useSearchParams();
  const tenantId = searchParams.get("id");

  if (!tenantId) {
    return <div className="p-6 text-red-500">Tenant ID missing.</div>;
  }

  return (
    <div className="bg-white p-6 shadow-md rounded-lg text-center">
      <h1 className="text-2xl font-bold text-red-600">❌ Tenant Declined</h1>
      <p className="mt-2">You have declined this tenant request.</p>
    </div>
  );
};

export default DeclineTenant;
