"use client";

import { useSearchParams, useRouter } from "next/navigation";

const DeletePropertyPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const propertyId = searchParams.get("id");

  const handleDelete = () => {
    alert(`Property ${propertyId} deleted successfully!`);
    router.push("/properties");
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-red-600">Confirm Deletion</h1>
      <p className="text-gray-600 mt-2">Are you sure you want to delete this property? This action cannot be undone.</p>

      <div className="flex gap-4 mt-6">
        <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded-lg">Yes, Delete</button>
        <button onClick={() => router.back()} className="bg-gray-400 text-white px-4 py-2 rounded-lg">Cancel</button>
      </div>
    </div>
  );
};

export default DeletePropertyPage;
