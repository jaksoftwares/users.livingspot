"use client";

const RatingPage = () => {
  const totalReviews = 5;
  const averageRating = 4.5;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">🌟 Average Rating</h1>
      <p className="text-yellow-500 text-3xl">{"⭐".repeat(Math.round(averageRating))}</p>
      <p className="text-gray-600 mt-2">{averageRating} / 5 based on {totalReviews} reviews</p>
    </div>
  );
};

export default RatingPage;
