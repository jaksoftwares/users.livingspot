"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FiSend } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";

type Message = {
  sender: "tenant" | "landlord";  // Explicitly restrict sender type
  text: string;
};

type ChatData = {
  tenant: string;
  property: string;
  messages: Message[];
};

// Correctly typed mock chats
const mockChats: Record<number, ChatData> = {
  1: {
    tenant: "Alice Johnson",
    property: "Apartment 101",
    messages: [{ sender: "tenant", text: "Is the house still available?" }],
  },
  2: {
    tenant: "Mark Davis",
    property: "Studio 205",
    messages: [{ sender: "tenant", text: "Thank you for accepting my request." }],
  },
  3: {
    tenant: "Sarah Lee",
    property: "Townhouse 12",
    messages: [{ sender: "tenant", text: "Can I view the house this weekend?" }],
  },
};

const ChatInterface= () => {
  const searchParams = useSearchParams();
  const chatIdString = searchParams.get("id");

  // Convert chatId to a number
  const chatId = chatIdString ? parseInt(chatIdString, 10) : null;
  const chatData = chatId !== null && mockChats[chatId] ? mockChats[chatId] : null;

  const [messages, setMessages] = useState<Message[]>(chatData ? chatData.messages : []);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (chatData) {
      setMessages(chatData.messages);
    }
  }, [chatData]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const updatedMessages: Message[] = [
      ...messages,
      { sender: "landlord", text: newMessage }, // Ensure 'sender' matches Message type
    ];

    setMessages(updatedMessages);
    setNewMessage("");
  };

  if (!chatData) {
    return (
      
      <div className="p-6 bg-white shadow-md rounded-lg text-center">
        <p className="text-gray-600">No conversation selected.</p>
        <Link href="/dashboard/landlord/messages">
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Go Back</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 shadow-md rounded-lg h-[80vh] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <Link href="/dashboard/landlord/messages" className="flex items-center text-blue-600">
          <IoArrowBack size={24} />
          <span className="ml-2">Back</span>
        </Link>
        <h2 className="text-xl font-bold text-gray-800">
          {chatData.tenant} – {chatData.property}
        </h2>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4 rounded-lg">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "landlord" ? "justify-end" : "justify-start"} mb-2`}>
            <div className={`px-4 py-2 rounded-lg shadow ${msg.sender === "landlord" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="mt-4 flex items-center border-t pt-4">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button onClick={handleSendMessage} className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
          <FiSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
