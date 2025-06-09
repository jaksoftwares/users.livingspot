"use client";

import { useState } from "react";
import { FiMail, FiSmartphone, FiSave } from "react-icons/fi";

const NotificationPreferences = () => {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    accountActivity: true,
    propertyInquiries: true,
    newOffers: false,
    paymentReminders: true,
  });

  // Toggle notification preferences
  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };
  

  // Handle save preferences
  const handleSave = () => {
    console.log("Updated Notification Preferences:", notifications);
    alert("Notification preferences updated successfully!");
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🔔 Notification Preferences</h1>

      {/* Email & SMS Notification Controls */}
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <FiMail className="text-blue-500 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email Notifications</h3>
              <p className="text-gray-600 text-sm">Receive important updates via email</p>
            </div>
          </div>
          <button
            onClick={() => handleToggle("emailNotifications")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              notifications.emailNotifications ? "bg-green-600 text-white" : "bg-gray-300 text-gray-700"
            }`}
          >
            {notifications.emailNotifications ? "Enabled" : "Disabled"}
          </button>
        </div>

        <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <FiSmartphone className="text-blue-500 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">SMS Notifications</h3>
              <p className="text-gray-600 text-sm">Receive alerts via SMS</p>
            </div>
          </div>
          <button
            onClick={() => handleToggle("smsNotifications")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              notifications.smsNotifications ? "bg-green-600 text-white" : "bg-gray-300 text-gray-700"
            }`}
          >
            {notifications.smsNotifications ? "Enabled" : "Disabled"}
          </button>
        </div>
      </div>

      {/* Specific Notification Preferences */}
      <div className="mt-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">🔹 Select Notification Types</h3>
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border">
          <span className="text-gray-700">Account Activity Alerts</span>
          <input
            type="checkbox"
            checked={notifications.accountActivity}
            onChange={() => handleToggle("accountActivity")}
            className="w-5 h-5 text-blue-600 rounded cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border">
          <span className="text-gray-700">Property Inquiries</span>
          <input
            type="checkbox"
            checked={notifications.propertyInquiries}
            onChange={() => handleToggle("propertyInquiries")}
            className="w-5 h-5 text-blue-600 rounded cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border">
          <span className="text-gray-700">New Offers & Promotions</span>
          <input
            type="checkbox"
            checked={notifications.newOffers}
            onChange={() => handleToggle("newOffers")}
            className="w-5 h-5 text-blue-600 rounded cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border">
          <span className="text-gray-700">Payment Reminders</span>
          <input
            type="checkbox"
            checked={notifications.paymentReminders}
            onChange={() => handleToggle("paymentReminders")}
            className="w-5 h-5 text-blue-600 rounded cursor-pointer"
          />
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="mt-6 w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
      >
        <FiSave />
        <span>Save Preferences</span>
      </button>
    </div>
  );
};

export default NotificationPreferences;
