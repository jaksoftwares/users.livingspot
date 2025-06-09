"use client";

const trendingProperties = [
  { property: "2-Bedroom Apartment", inquiries: 30 },
  { property: "Studio Apartment", inquiries: 25 },
];

const TrendsPage = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">📈 Property Demand Trends</h1>
      <p className="text-gray-600 mt-2">Find out which properties are in high demand.</p>

      <div className="mt-6">
        {trendingProperties.map(({ property, inquiries }, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow mb-4">
            <h2 className="font-semibold">{property}</h2>
            <p className="text-gray-700">Inquiries: {inquiries}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendsPage;
