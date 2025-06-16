"use client";

import { useState, useEffect } from "react";
import { FaUserCircle, FaBell, FaSignOutAlt, FaCog } from "react-icons/fa";

const Topbar = () => {
  const [time, setTime] = useState<Date | null>(null);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  // Update time every second after mount
  useEffect(() => {
    const updateTime = () => setTime(new Date());
    updateTime(); // initialize once on mount

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const getGreeting = () => {
    if (!time) return "";
    const hour = time.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center relative">
      {/* Left Side - Greeting & Time */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800">
          {getGreeting()}, Landlord!
        </h1>
        {time && (
          <p className="text-gray-500 text-sm">{time.toLocaleTimeString()}</p>
        )}
      </div>

      {/* Right Side - Notifications & Profile */}
      <div className="flex items-center space-x-6">
        {/* Notifications Bell */}
        <div className="relative">
          <FaBell
            className="text-gray-600 text-2xl cursor-pointer hover:text-blue-500"
            onClick={() => setNotificationsOpen(!isNotificationsOpen)}
          />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            3
          </span>

          {isNotificationsOpen && (
            <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-gray-800 font-semibold">Notifications</h3>
              <ul className="text-sm text-gray-600 mt-2">
                <li className="py-2 border-b">🔔 New message from a tenant</li>
                <li className="py-2 border-b">🏡 Property inquiry received</li>
                <li className="py-2">⭐ New review on your listing</li>
              </ul>
              <button className="text-blue-500 text-sm mt-3 w-full text-center">
                View all notifications
              </button>
            </div>
          )}
        </div>

        {/* User Profile Dropdown */}
        <div className="relative">
          <FaUserCircle
            className="text-gray-600 text-3xl cursor-pointer hover:text-blue-500"
            onClick={() => setProfileOpen(!isProfileOpen)}
          />

          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-lg p-3">
              <h3 className="text-gray-800 font-semibold">John Doe</h3>
              <p className="text-gray-500 text-sm">Landlord</p>
              <hr className="my-2" />
              <button className="flex items-center w-full py-2 text-gray-700 hover:text-blue-500">
                <FaCog className="mr-2" /> Account Settings
              </button>
              <button className="flex items-center w-full py-2 text-gray-700 hover:text-red-500">
                <FaSignOutAlt className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
