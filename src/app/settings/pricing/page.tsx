"use client";

import { useState } from "react";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "$19.99/month",
    features: ["List up to 5 properties", "Basic support", "Standard listing visibility"],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$39.99/month",
    features: ["List up to 15 properties", "Priority support", "Higher listing visibility", "Featured property badge"],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$69.99/month",
    features: [
      "Unlimited property listings",
      "24/7 dedicated support",
      "Top-tier listing visibility",
      "Premium property promotion",
      "Exclusive marketing insights",
    ],
  },
];

const PlansPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("basic");

  const handleUpgrade = (planId: string) => {
    setSelectedPlan(planId);
    alert(`You have selected the ${planId} plan. Upgrade functionality coming soon!`);
  };

  return (
    <div className="bg-white p-8 shadow-lg rounded-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">📦 Choose Your Plan</h1>
      <p className="text-gray-600 text-center mb-8">Select a plan that best suits your needs and upgrade anytime.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`border rounded-lg p-6 shadow-md transition hover:shadow-xl ${
              selectedPlan === plan.id ? "border-green-500" : "border-gray-300"
            }`}
          >
            <h2 className="text-xl font-semibold text-gray-800">{plan.name}</h2>
            <p className="text-2xl font-bold text-green-600 mt-2">{plan.price}</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <FiCheckCircle className="text-green-500 mr-2" /> {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleUpgrade(plan.id)}
              className="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-green-700 transition"
            >
              Upgrade to {plan.name} <FiArrowRight className="ml-2" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansPage;
