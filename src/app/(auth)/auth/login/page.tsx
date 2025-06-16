"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Invalid credentials");
        setLoading(false);
        return;
      }

      setTimeout(() => {
        router.push("/dashboard"); // Redirect to dashboard
      }, 1000);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    alert(`Login with ${provider} is not implemented yet.`);
  };

  return (
    <div className="w-full md:w-1/2 flex items-center justify-center p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-md">
        {/* Company Branding */}
        <div className="text-center mb-6">
          <div className="flex justify-center">
            <Image
              src="/login/ls-logo.jpg"
              alt="LivingSpot Logo"
              width={60}
              height={60}
              priority
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            Login to LivingSpot
          </h2>
          <p className="text-gray-500 mt-2">
            Find & manage rental properties with ease
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 bg-red-100 border border-red-400 px-4 py-2 rounded-md text-center mb-4">
            {error}
          </p>
        )}

        {/* Email/Password Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-75"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <p className="px-3 text-gray-500 text-sm">or</p>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => handleSocialLogin("Google")}
            className="w-full flex items-center justify-center bg-white text-gray-700 border border-gray-300 py-2.5 rounded-lg shadow-sm hover:bg-gray-100 transition"
          >
            <FaGoogle className="mr-2 text-red-500" /> Login with Google
          </button>

          <button
            onClick={() => handleSocialLogin("Facebook")}
            className="w-full flex items-center justify-center bg-blue-600 text-white py-2.5 rounded-lg shadow-sm hover:bg-blue-700 transition"
          >
            <FaFacebook className="mr-2" /> Login with Facebook
          </button>
        </div>

        {/* Register & Forgot Password Links */}
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-blue-500 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>

        <p className="text-center text-gray-500 mt-2">
          <Link
            href="/auth/reset-password"
            className="text-sm text-blue-400 hover:underline"
          >
            Forgot password?
          </Link>
        </p>
      </div>
    </div>
  );
}