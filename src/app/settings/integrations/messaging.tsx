"use client";
import { useState } from "react";

const MessagingIntegration = () => {
  const [messaging, setMessaging] = useState({
    whatsapp: false,
    twilio: false,
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessaging({ ...messaging, [e.target.name]: e.target.checked });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessaging({ ...messaging, email: e.target.value });
  };

  const handleSave = () => {
    console.log("Messaging Settings:", messaging);
    alert("Messaging integrations updated!");
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800">📩 Messaging Services</h1>
      <p className="text-gray-600 mb-4">Enable and configure messaging services.</p>

      <div className="space-y-3">
        <label className="flex items-center">
          <input type="checkbox" name="whatsapp" checked={messaging.whatsapp} onChange={handleChange} className="mr-2" />
          Enable WhatsApp Notifications
        </label>

        <label className="flex items-center">
          <input type="checkbox" name="twilio" checked={messaging.twilio} onChange={handleChange} className="mr-2" />
          Enable SMS (Twilio)
        </label>

        <div>
          <label className="text-gray-600">Email for Notifications</label>
          <input
            type="email"
            name="email"
            value={messaging.email}
            onChange={handleEmailChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <button onClick={handleSave} className="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Save Changes
      </button>
    </div>
  );
};

export default MessagingIntegration;
