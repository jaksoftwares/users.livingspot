"use client";

import Link from "next/link";

const reviews = [
  { tenant: "Alice Johnson", rating: 5, comment: "Great landlord, very responsive!" },
  { tenant: "David Smith", rating: 4, comment: "Nice place, but minor maintenance delays." },
];

const ReviewsPage = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">⭐ Tenant Reviews</h1>
      <p className="text-gray-600 mt-2">Check feedback from your tenants.</p>

      <div className="mt-6">
        {reviews.map(({ tenant, rating, comment }, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow mb-4">
            <h2 className="font-semibold">{tenant}</h2>
            <p className="text-yellow-500">{"⭐".repeat(rating)}</p>
            <p className="text-gray-700">{comment}</p>
            <Link href={`/dashboard/landlord/reviews/respond?tenant=${tenant}`} className="text-blue-600 hover:underline mt-2 inline-block">
              Respond
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
