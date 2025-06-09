"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Pencil, Trash2, Search, Filter } from "lucide-react";

// Define the Property interface
interface Property {
  id: number;
  name: string;
  location: string;
  status: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
}

const PropertiesPage = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setProperties([
        {
          id: 1,
          name: "Luxury Apartment",
          location: "Nairobi, Kenya",
          status: "Available",
          price: "$500/month",
          bedrooms: 3,
          bathrooms: 2,
          image: "/house4.jpg",
        },
        {
          id: 2,
          name: "Studio Apartment",
          location: "Mombasa, Kenya",
          status: "Occupied",
          price: "$300/month",
          bedrooms: 1,
          bathrooms: 1,
          image: "/house3.jpg",
        },
        {
          id: 3,
          name: "Furnished House",
          location: "Kisumu, Kenya",
          status: "Booked",
          price: "$700/month",
          bedrooms: 4,
          bathrooms: 3,
          image: "/house.jpg",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">🏠 My Properties</h1>
        <Link
          href="/properties/add"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition"
        >
          <Plus size={18} className="mr-2" /> Add Property
        </Link>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex items-center bg-white p-2 rounded-lg shadow-md w-full">
          <Search size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full outline-none bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-800 transition">
          <Filter size={18} className="mr-2" /> Filter
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-600 animate-pulse">Loading properties...</p>
      ) : filteredProperties.length === 0 ? (
        <p className="text-center text-gray-600">No properties found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition">
              <Image
                src={property.image}
                alt={property.name}
                width={400}
                height={160}
                className="w-full h-40 object-cover rounded-lg mb-4"
                sizes="(max-width: 768px) 100vw, 400px"
                unoptimized
              />
              <h2 className="text-xl font-semibold">{property.name}</h2>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-blue-600 font-semibold">{property.price}</p>
              <p className="text-gray-500 text-sm">{property.bedrooms} Beds | {property.bathrooms} Baths</p>
              <p
                className={`text-sm font-bold mt-1 px-2 py-1 rounded ${
                  property.status === "Available"
                    ? "bg-green-100 text-green-700"
                    : property.status === "Booked"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {property.status}
              </p>

              <div className="flex justify-between mt-4">
                <Link
                  href={`/properties/edit?id=${property.id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg flex items-center hover:bg-blue-600 transition"
                >
                  <Pencil size={16} className="mr-1" /> Edit
                </Link>
                <button
                  onClick={() => confirm("Are you sure you want to delete this property?")}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg flex items-center hover:bg-red-600 transition"
                >
                  <Trash2 size={16} className="mr-1" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertiesPage;
