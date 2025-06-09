"use client";

import { useState } from "react";
import { FiLock, FiEye, FiEyeOff, FiShield, FiLogOut } from "react-icons/fi";

const SecuritySettings = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  // Handle password field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  // Toggle password visibility
  const togglePasswordVisibility = (field: keyof typeof showPassword) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  // Toggle Two-Factor Authentication
  const toggleTwoFactorAuth = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  // Handle password update
  const handleSave = () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    console.log("Password updated:", passwords);
    alert("Password updated successfully!");
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🔒 Security & Password</h1>

      {/* Change Password Section */}
      <div className="space-y-5">
        <div className="relative">
          <FiLock className="absolute left-3 top-3 text-gray-500" />
          <input
            type={showPassword.current ? "text" : "password"}
            name="currentPassword"
            value={passwords.currentPassword}
            onChange={handleChange}
            placeholder="Current Password"
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility("current")}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPassword.current ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>

        <div className="relative">
          <FiLock className="absolute left-3 top-3 text-gray-500" />
          <input
            type={showPassword.new ? "text" : "password"}
            name="newPassword"
            value={passwords.newPassword}
            onChange={handleChange}
            placeholder="New Password"
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility("new")}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPassword.new ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>

        <div className="relative">
          <FiLock className="absolute left-3 top-3 text-gray-500" />
          <input
            type={showPassword.confirm ? "text" : "password"}
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm New Password"
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility("confirm")}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPassword.confirm ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="mt-6 w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Update Password
      </button>

      {/* Two-Factor Authentication */}
      <div className="mt-8 flex items-center justify-between bg-gray-100 p-4 rounded-lg">
        <div className="flex items-center space-x-3">
          <FiShield className="text-blue-500 text-2xl" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Two-Factor Authentication</h3>
            <p className="text-gray-600 text-sm">Enhance account security with 2FA</p>
          </div>
        </div>
        <button
          onClick={toggleTwoFactorAuth}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            twoFactorEnabled ? "bg-red-500 text-white" : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {twoFactorEnabled ? "Disable" : "Enable"}
        </button>
      </div>

      {/* Log Out of All Devices */}
      <div className="mt-8 bg-red-100 p-4 rounded-lg flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Log Out of All Devices</h3>
          <p className="text-gray-600 text-sm">Ensure your account is secure by logging out everywhere</p>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition flex items-center">
          <FiLogOut className="mr-2" /> Log Out
        </button>
      </div>
    </div>
  );
};

export default SecuritySettings;
