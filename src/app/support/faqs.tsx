"use client";

import { useState } from "react";

const faqs = [
  { question: "How do I list a new property?", answer: "Go to the Properties section and click 'Add New Property'." },
  { question: "Can I edit my property details?", answer: "Yes, click 'Edit' on any listed property to update details." },
  { question: "How do I contact a tenant?", answer: "Use the Messages section to chat with tenants in real time." },
  { question: "What do I do if a tenant is not responding?", answer: "Try sending them a message reminder or updating your property status." },
];

const FAQsPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">❓ Frequently Asked Questions</h1>
      <p className="text-gray-600 mt-2">Find answers to common questions landlords have.</p>

      <div className="mt-6 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow">
            <button
              className="w-full text-left font-semibold text-lg flex justify-between"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <span>{openIndex === index ? "🔼" : "🔽"}</span>
            </button>
            {openIndex === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsPage;
