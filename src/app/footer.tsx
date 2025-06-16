"use client";
import React from 'react';
const Footer = () => {
    return (
      <footer className="bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        {/* Left Section - Copyright */}
        <p>&copy; {new Date().getFullYear()} LivingSpot. All rights reserved.</p>
  
        {/* Right Section - Quick Links */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-500 transition">Terms of Service</a>
          <a href="#" className="hover:text-blue-500 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500 transition">Help Center</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  