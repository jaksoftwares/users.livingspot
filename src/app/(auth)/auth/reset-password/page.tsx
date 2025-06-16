"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!email) {
      setError("Please enter your email address.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      setSuccess("Password reset instructions have been sent to your email.");
      setLoading(false);
      setTimeout(() => {
        router.push("/auth/login");
      }, 3000); // Redirect to login after 3 seconds
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl w-full max-w-md">
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
          <h2 className="text-3xl font-bold text-gray-800 mt-4">Reset Password</h2>
          <p className="text-gray-500 mt-2">
            Enter your email to reset your password.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 bg-red-100 border border-red-400 px-4 py-2 rounded-md text-center mb-4">
            {error}
          </p>
        )}

        {/* Success Message */}
        {success && (
          <p className="text-green-500 bg-green-100 border border-green-400 px-4 py-2 rounded-md text-center mb-4">
            {success}
          </p>
        )}

        {/* Reset Password Form */}
        <form onSubmit={handleResetPassword} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-75"
            disabled={loading}
          >
            {loading ? "Sending Instructions..." : "Reset Password"}
          </button>
        </form>

        {/* Back to Login Link */}
        <p className="text-center text-gray-600 mt-6">
          Remember your password?{" "}
          <Link
            href="/auth/login"
            className="text-blue-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}