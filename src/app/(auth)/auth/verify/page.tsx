// app/auth/verify/page.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function VerifyPage() {
  const params = useSearchParams();
  const status = params.get("status");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        {status === "success" ? (
          <>
            <h2 className="text-2xl font-bold text-green-600">Email Verified!</h2>
            <p className="mt-4 text-gray-700">Your account has been successfully verified. You may now log in.</p>
          </>
        ) : status === "already" ? (
          <>
            <h2 className="text-2xl font-bold text-blue-600">Already Verified</h2>
            <p className="mt-4 text-gray-700">Your account is already verified. You can log in anytime.</p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-red-600">Verification Failed</h2>
            <p className="mt-4 text-gray-700">The token is invalid or expired. Please request a new one.</p>
          </>
        )}
      </div>
    </div>
  );
}
