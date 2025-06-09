"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const RespondPage = () => {
  const searchParams = useSearchParams();
  const tenant = searchParams.get("tenant");
  const [response, setResponse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Response sent to ${tenant}: ${response}`);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">💬 Respond to {tenant}</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          placeholder="Write your response..."
          className="w-full p-3 border rounded-lg"
        />
        <button type="submit" className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Send Response
        </button>
      </form>
    </div>
  );
};

export default RespondPage;
