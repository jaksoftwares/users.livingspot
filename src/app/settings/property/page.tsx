"use client";
import { useState } from "react";

const PropertySettings = () => {
  const [settings, setSettings] = useState({
    allowListings: true,
    featuredProperties: false,
    autoReply: "",
    rentalTerms: "",
  });

  // Handle input changes properly
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value } = e.target;
    
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  // Save settings
  const handleSave = () => {
    console.log("Updated Property Settings:", settings);
    alert("Property settings updated successfully!");
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">🏡 Property Settings</h1>
      <p className="text-gray-600 mb-6">Manage property settings and default configurations.</p>

      {/* Allow Property Listings */}
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
        <span className="text-gray-800">Allow property listings</span>
        <input
          type="checkbox"
          name="allowListings"
          checked={settings.allowListings}
          onChange={handleChange}
          className="h-5 w-5 accent-blue-600"
        />
      </div>

      {/* Featured Properties */}
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
        <span className="text-gray-800">Mark properties as featured</span>
        <input
          type="checkbox"
          name="featuredProperties"
          checked={settings.featuredProperties}
          onChange={handleChange}
          className="h-5 w-5 accent-blue-600"
        />
      </div>

      {/* Default Rental Terms */}
      <div className="mb-4">
        <label className="text-gray-600">Default Rental Terms</label>
        <textarea
          name="rentalTerms"
          value={settings.rentalTerms}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          rows={3}
          placeholder="E.g., Rent is due on the 1st of every month..."
        ></textarea>
      </div>

      {/* Auto-Reply for Tenant Inquiries */}
      <div className="mb-4">
        <label className="text-gray-600">Auto-Reply for Inquiries</label>
        <textarea
          name="autoReply"
          value={settings.autoReply}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          rows={2}
          placeholder="E.g., 'Thank you for your inquiry. I will respond shortly.'"
        ></textarea>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Save Changes
      </button>
    </div>
  );
};

export default PropertySettings;
