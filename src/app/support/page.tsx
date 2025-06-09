"use client";

import Link from "next/link";

const SupportPage = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">🆘 Support Center</h1>
      <p className="text-gray-600 mt-2">Find help and support for managing your properties.</p>

      <div className="mt-6 space-y-4">
        <Link href="/dashboard/landlord/support/faqs" className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition">
          <h2 className="font-semibold text-lg">❓ Frequently Asked Questions</h2>
          <p className="text-gray-600 text-sm">Common questions and answers about property management.</p>
        </Link>

        <Link href="/dashboard/landlord/support/contact" className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition">
          <h2 className="font-semibold text-lg">📩 Contact Support</h2>
          <p className="text-gray-600 text-sm">Need help? Reach out to our support team.</p>
        </Link>
      </div>
    </div>
  );
};

export default SupportPage;
