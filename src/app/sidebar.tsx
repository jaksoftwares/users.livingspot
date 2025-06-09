"use client";

import Link from "next/link";
import { JSX, useState } from "react";
import {
  FaHome,
  FaBuilding,
  FaEnvelope,
  FaStar,
  FaCog,
  FaFileAlt,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

/* Define TypeScript Interface for Sidebar Link Props */
interface SidebarLinkProps {
  href: string;
  icon: JSX.Element;
  text: string;
  expanded: boolean;
}

const Sidebar = () => {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <div className={`h-screen bg-white shadow-lg border-r transition-all duration-300 ${expanded ? "w-64" : "w-20"}`}>
      {/* Sidebar Header */}
      <div className="p-4 flex justify-between items-center">
        <h1 className={`text-xl font-bold text-gray-800 transition-all ${expanded ? "block" : "hidden"}`}>LivingSpot</h1>
        <button onClick={() => setExpanded(!expanded)} className="text-gray-600 focus:outline-none">
          <FaBars className="text-xl" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-6 space-y-2">
        <SidebarLink href="/" icon={<FaHome />} text="Dashboard" expanded={expanded} />
        <SidebarLink href="/properties" icon={<FaBuilding />} text="Properties" expanded={expanded} />
        <SidebarLink href="/messages" icon={<FaEnvelope />} text="Messages" expanded={expanded} />
        <SidebarLink href="/reviews" icon={<FaStar />} text="Reviews" expanded={expanded} />
        <SidebarLink href="/reports" icon={<FaFileAlt />} text="Reports" expanded={expanded} />
        <SidebarLink href="/settings" icon={<FaCog />} text="Settings" expanded={expanded} />

        {/* Logout Button */}
        <button className="flex items-center px-4 py-3 text-gray-700 hover:bg-red-500 hover:text-white w-full rounded transition">
          <FaSignOutAlt className="text-xl" />
          {expanded && <span className="ml-3">Logout</span>}
        </button>
      </nav>
    </div>
  );
};

/* ✅ SidebarLink Component with TypeScript Types */
const SidebarLink: React.FC<SidebarLinkProps> = ({ href, icon, text, expanded }) => {
  return (
    <Link href={href} className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200 rounded transition">
      <span className="text-xl">{icon}</span>
      {expanded && <span className="ml-3">{text}</span>}
    </Link>
  );
};

export default Sidebar;
