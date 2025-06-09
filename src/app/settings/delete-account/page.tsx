"use client";

import { useState } from "react";

const DeleteAccount = () => {
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleDeleteRequest = () => {
    if (!password) {
      alert("Please enter your password to confirm deletion.");
      return;
    }
    setShowModal(true);
  };

  const confirmDeletion = () => {
    console.log("Account deleted");
    alert("Your account has been deleted.");
    // Here, you'd call an API to delete the account
    setShowModal(false);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-red-600 mb-4">🚨 Delete Account</h1>
      <p className="text-gray-600 mb-4">
        Deleting your account is permanent. All your data, properties, and settings will be lost. This action <b>cannot be undone.</b>
      </p>

      {/* Password Confirmation */}
      <label className="text-gray-600">Confirm your password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg mt-2"
        placeholder="Enter your password"
      />

      {/* Delete Account Button */}
      <button
        onClick={handleDeleteRequest}
        className="mt-6 w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
      >
        🗑️ Delete Account
      </button>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-semibold text-red-600">Are you sure?</h2>
            <p className="text-gray-600 my-3">This action cannot be undone.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeletion}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;
