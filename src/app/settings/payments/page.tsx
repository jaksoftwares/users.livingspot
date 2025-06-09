"use client";

import router from "next/router";
import { useState } from "react";
import { FiCreditCard, FiArrowUp, FiFileText } from "react-icons/fi";

const PaymentSubscriptions = () => {
  const [subscription] = useState({
    plan: "Basic",
    price: "$19.99/month",
    renewalDate: "March 25, 2025",
  });

  const [paymentMethods] = useState([
    { id: 1, type: "Visa", last4: "4242" },
    { id: 2, type: "PayPal", email: "user@example.com" },
  ]);

  const [billingHistory] = useState([
    { id: 1, date: "Jan 25, 2025", amount: "$19.99", status: "Paid" },
    { id: 2, date: "Feb 25, 2025", amount: "$19.99", status: "Paid" },
  ]);

  const handleUpgrade = () => {
    router.push("/
  };

  const handleAddPaymentMethod = () => {
    alert("Add Payment Method functionality coming soon!");
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">💳 Payment & Subscriptions</h1>

      {/* Current Subscription */}
      <div className="bg-blue-100 p-5 rounded-lg flex justify-between items-center shadow">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Current Plan</h3>
          <p className="text-gray-700">{subscription.plan} - <span className="font-semibold">{subscription.price}</span></p>
          <p className="text-gray-600 text-sm">Renews on: {subscription.renewalDate}</p>
        </div>
        <button
          onClick={handleUpgrade}
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700 transition"
        >
          <FiArrowUp className="mr-2" /> Upgrade Plan
        </button>
      </div>

      {/* Payment Methods */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center"><FiCreditCard className="mr-2 text-blue-500" /> Payment Methods</h3>
        <div className="space-y-3 mt-3">
          {paymentMethods.map((method) => (
            <div key={method.id} className="bg-gray-100 p-4 rounded-lg flex justify-between items-center border">
              <span className="text-gray-700">{method.type} - {method.last4 ? `**** ${method.last4}` : method.email}</span>
              <button className="text-red-600 hover:text-red-800 text-sm">Remove</button>
            </div>
          ))}
          <button
            onClick={handleAddPaymentMethod}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-blue-700 transition mt-2"
          >
            <FiCreditCard className="mr-2" /> Add Payment Method
          </button>
        </div>
      </div>

      {/* Billing History */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center"><FiFileText className="mr-2 text-blue-500" /> Billing History</h3>
        <div className="bg-gray-50 p-4 rounded-lg mt-3 border">
          {billingHistory.length > 0 ? (
            <table className="w-full text-gray-700">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Date</th>
                  <th className="py-2 text-left">Amount</th>
                  <th className="py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((bill) => (
                  <tr key={bill.id} className="border-b">
                    <td className="py-2">{bill.date}</td>
                    <td className="py-2">{bill.amount}</td>
                    <td className={`py-2 font-semibold ${bill.status === "Paid" ? "text-green-600" : "text-red-600"}`}>
                      {bill.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-600">No billing history available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentSubscriptions;
