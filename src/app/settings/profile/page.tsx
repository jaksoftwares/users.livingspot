"use client";

import { useState } from "react";
import Image from "next/image";
import { FiUpload, FiUser, FiMail, FiPhone, FiMapPin, FiBriefcase, FiInfo } from "react-icons/fi";

const EditProfile = () => {
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    phone: "+254712345678",
    businessName: "",
    bio: "",
    location: "",
    profileImage: "",
  });

  const [previewImage, setPreviewImage] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle profile image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setProfile({ ...profile, profileImage: file.name }); // Store the filename or upload it to a server
    }
  };

  const handleSave = () => {
    console.log("Profile updated:", profile);
    alert("Profile updated successfully!");
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🏠 Edit Profile</h1>

      {/* Profile Picture */}
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
          {previewImage ? (
            <Image src={previewImage} alt="Profile Preview" layout="fill" objectFit="cover" />
          ) : (
            <div className="w-32 h-32 flex items-center justify-center bg-gray-200 text-gray-500">
              No Image
            </div>
          )}
        </div>
        <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 mt-3 rounded-lg flex items-center transition hover:bg-blue-700">
          <FiUpload className="mr-2" /> Upload Image
          <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
        </label>
      </div>

      {/* Profile Form */}
      <div className="mt-6 space-y-5">
        <div className="relative">
          <FiUser className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
        </div>

        <div className="relative">
          <FiMail className="absolute left-3 top-3 text-gray-500" />
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
        </div>

        <div className="relative">
          <FiPhone className="absolute left-3 top-3 text-gray-500" />
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
        </div>

        <div className="relative">
          <FiBriefcase className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            name="businessName"
            value={profile.businessName}
            onChange={handleChange}
            placeholder="Business Name (Optional)"
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
        </div>

        <div className="relative">
          <FiInfo className="absolute left-3 top-3 text-gray-500" />
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            placeholder="Bio / Description"
            rows={3}
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
          ></textarea>
        </div>

        <div className="relative">
          <FiMapPin className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleChange}
            placeholder="Location (Optional)"
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="mt-6 w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditProfile;
