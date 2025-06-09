"use client";

const earnings = [
  { month: "January", amount: "$1,200" },
  { month: "February", amount: "$1,500" },
];

const EarningsPage = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">💰 Earnings & Revenue</h1>
      <p className="text-gray-600 mt-2">Track your income from rented properties.</p>

      <div className="mt-6">
        {earnings.map(({ month, amount }, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow mb-4">
            <h2 className="font-semibold">{month}</h2>
            <p className="text-gray-700">Earnings: {amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningsPage;
