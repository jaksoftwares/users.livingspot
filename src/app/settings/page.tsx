"use client";

import Link from "next/link";
import { FiUser, FiLock, FiBell, FiCreditCard, FiHome, FiGlobe, FiSettings } from "react-icons/fi";

const SettingsPage = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 flex items-center">
        ⚙️ Account Settings
      </h1>
      <p className="text-gray-600 mt-2">Manage your account and preferences.</p>

      {/* Account Settings Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">🛠 General Settings</h2>
        <div className="space-y-3">
          <Link href="/settings/profile" className="flex items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition">
            <FiUser className="mr-3 text-blue-600" size={20} />
            <div>
              <p className="font-semibold">Edit Profile</p>
              <p className="text-sm text-gray-600">Update personal details, email, and phone number.</p>
            </div>
          </Link>
          <Link href="/settings/security" className="flex items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition">
            <FiLock className="mr-3 text-red-600" size={20} />
            <div>
              <p className="font-semibold">Security & Password</p>
              <p className="text-sm text-gray-600">Change your password and enable 2FA.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Preferences Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">🔔 Preferences</h2>
        <div className="space-y-3">
          <Link href="/settings/preferences" className="flex items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition">
            <FiBell className="mr-3 text-yellow-600" size={20} />
            <div>
              <p className="font-semibold">Notification Preferences</p>
              <p className="text-sm text-gray-600">Manage email and in-app notifications.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Financial Settings */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">💳 Payment & Subscription</h2>
        <div className="space-y-3">
          <Link href="/settings/payments" className="flex items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition">
            <FiCreditCard className="mr-3 text-green-600" size={20} />
            <div>
              <p className="font-semibold">Payment Methods</p>
              <p className="text-sm text-gray-600">Add or update your payment details.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Property Management Settings */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">🏠 Property Settings</h2>
        <div className="space-y-3">
          <Link href="/settings/property" className="flex items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition">
            <FiHome className="mr-3 text-purple-600" size={20} />
            <div>
              <p className="font-semibold">Property Visibility</p>
              <p className="text-sm text-gray-600">Control who can view your listings.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Integrations & API */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">🌐 Integrations</h2>
        <div className="space-y-3">
          <Link href="/settings/integrations" className="flex items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition">
            <FiGlobe className="mr-3 text-indigo-600" size={20} />
            <div>
              <p className="font-semibold">API & Third-Party Integrations</p>
              <p className="text-sm text-gray-600">Connect Cloudinary, Firebase, or other services.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Advanced Settings */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">⚠️ Advanced Settings</h2>
        <div className="space-y-3">
          <Link href="/settings/delete-account" className="flex items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition">
            <FiSettings className="mr-3 text-gray-600" size={20} />
            <div>
              <p className="font-semibold text-red-600">Delete Account</p>
              <p className="text-sm text-gray-600">Permanently delete your account and data.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
