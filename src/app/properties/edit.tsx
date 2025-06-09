"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const EditPropertyPage = () => {
  const searchParams = useSearchParams();
  const propertyId = searchParams.get("id");

  const [form, setForm] = useState({
    name: "Luxury Apartment",
    location: "Nairobi, Kenya",
    price: "$500",
    status: "Available",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Property ${propertyId} updated successfully!`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Edit Property</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg">
        {/* Name */}
        <label className="block text-gray-600 font-medium">Property Name</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded-lg mt-1" />

        {/* Location */}
        <label className="block text-gray-600 font-medium mt-2">Location</label>
        <input type="text" name="location" value={form.location} onChange={handleChange} className="w-full p-2 border rounded-lg mt-1" />

        {/* Submit */}
        <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPropertyPage;
