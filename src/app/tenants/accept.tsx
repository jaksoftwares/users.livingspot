"use client";

import { useSearchParams } from "next/navigation";

const AcceptTenant = () => {
  const searchParams = useSearchParams();
  const tenantId = searchParams.get("id");

  if (!tenantId) {
    return <div className="p-6 text-red-500">Tenant ID missing.</div>;
  }

  return (
    <div className="bg-white p-6 shadow-md rounded-lg text-center">
      <h1 className="text-2xl font-bold text-green-600">✅ Tenant Approved</h1>
      <p className="mt-2">You have successfully approved the tenant.</p>
    </div>
  );
};

export default AcceptTenant;
