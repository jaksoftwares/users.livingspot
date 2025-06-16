"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function VerifyEmailPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!code) {
      toast.error("Please enter the verification code.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Email verified successfully!");
        router.push("/dashboard");
      } else {
        toast.error(data.message || "Invalid verification code.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/resend-code", { method: "POST" });
      const data = await res.json();
      if (res.ok) {
        toast.success("Verification code resent to your email.");
      } else {
        toast.error(data.message || "Failed to resend code.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl">Verify Your Email</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 text-center mb-4">
            Enter the verification code sent to your email.
          </p>
          <Input
            type="text"
            placeholder="Enter verification code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="mb-4"
          />
          <Button
            className="w-full"
            onClick={handleVerify}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify Email"}
          </Button>
          <p className="text-sm text-gray-600 text-center mt-4">
            Didn&apos;t receive a code?{" "}
            <Button
              variant="link"
              className="text-blue-500"
              onClick={handleResendCode}
              disabled={loading}
            >
              Resend Code
            </Button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
