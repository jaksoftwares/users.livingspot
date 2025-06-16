"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type UserRole = "rental_owner" | "land_seller";

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState<UserRole | "">("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    idNumber: "",
    propertyName: "",
    agencyName: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, role }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error);
        setLoading(false);
        return;
      }

      // Redirect after registration
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg">
      <div className="flex justify-center mb-4">
        <Image src="/login/ls-logo.jpg" alt="LivingSpot Logo" width={60} height={60} priority />
      </div>
      <h2 className="text-3xl font-bold text-center text-gray-800">Create Your Account</h2>
      <p className="text-center text-gray-500 mb-6">
        Sign up as a Rental Owner or Land Seller
      </p>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleRegister} className="space-y-4">
        {/* User Role Selection */}
        <div>
          <label className="block text-gray-700 font-medium">I am a</label>
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value as UserRole)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Role</option>
            <option value="rental_owner">Rental Owner</option>
            <option value="land_seller">Land Seller (Individual or Agency)</option>
          </select>
        </div>

        {/* Common Fields */}
        <div>
          <label className="block text-gray-700 font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">ID Number</label>
          <input
            type="text"
            name="idNumber"
            placeholder="National ID Number"
            value={formData.idNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {role === "rental_owner" && (
          <div>
            <label className="block text-gray-700 font-medium">Property Name</label>
            <input
              type="text"
              name="propertyName"
              placeholder="Your rental property name"
              value={formData.propertyName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        )}

        {role === "land_seller" && (
          <div>
            <label className="block text-gray-700 font-medium">Agency Name (Optional)</label>
            <input
              type="text"
              name="agencyName"
              placeholder="Agency or business name"
              value={formData.agencyName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        )}

        {/* Password Fields */}
        <div>
          <label className="block text-gray-700 font-medium">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter a strong password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>

      <p className="text-center text-gray-600 mt-4">
        Already have an account?
        <Link href="/auth/login" className="text-blue-500 font-semibold ml-1">
          Login
        </Link>
      </p>
    </div>
  );
}
