"use client";

const propertyViews = [
  { property: "2-Bedroom Apartment", views: 120, inquiries: 15 },
  { property: "Studio Apartment", views: 85, inquiries: 10 },
];

const TrafficPage = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">👀 Views & Interest Stats</h1>
      <p className="text-gray-600 mt-2">Monitor how many people are interested in your properties.</p>

      <div className="mt-6">
        {propertyViews.map(({ property, views, inquiries }, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow mb-4">
            <h2 className="font-semibold">{property}</h2>
            <p className="text-gray-700">Views: {views}</p>
            <p className="text-gray-700">Inquiries: {inquiries}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficPage;
