"use client";
import { useState } from "react";

const PaymentIntegration = () => {
  const [payments, setPayments] = useState({
    mpesa: false,
    paypal: false,
    stripe: false,
    apiKey: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayments({ ...payments, [e.target.name]: e.target.checked });
  };

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayments({ ...payments, apiKey: e.target.value });
  };

  const handleSave = () => {
    console.log("Payment Settings:", payments);
    alert("Payment integrations updated!");
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800">💳 Payment Gateways</h1>
      <p className="text-gray-600 mb-4">Enable and configure payment gateways.</p>

      <div className="space-y-3">
        <label className="flex items-center">
          <input type="checkbox" name="mpesa" checked={payments.mpesa} onChange={handleChange} className="mr-2" />
          Enable M-Pesa
        </label>

        <label className="flex items-center">
          <input type="checkbox" name="paypal" checked={payments.paypal} onChange={handleChange} className="mr-2" />
          Enable PayPal
        </label>

        <label className="flex items-center">
          <input type="checkbox" name="stripe" checked={payments.stripe} onChange={handleChange} className="mr-2" />
          Enable Stripe
        </label>

        <div>
          <label className="text-gray-600">API Key</label>
          <input
            type="text"
            name="apiKey"
            value={payments.apiKey}
            onChange={handleApiKeyChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter API Key"
          />
        </div>
      </div>

      <button onClick={handleSave} className="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Save Changes
      </button>
    </div>
  );
};

export default PaymentIntegration;
