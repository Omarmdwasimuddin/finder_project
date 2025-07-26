"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/dashboard/profile" },
    { name: "Donation History", href: "/dashboard/history" },
    { name: "Nearby Requests", href: "/dashboard/requests" },
    { name: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white p-4 flex justify-between items-center h-16">
        <div className="text-xl font-bold">Blood Donation</div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-64 bg-gray-800 text-gray-200 transform 
          ${isOpen ? "translate-x-0 mt-16 md:mt-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out 
          md:translate-x-0
        `}
      >
        <div className="px-6 py-4 text-2xl font-bold border-b border-gray-700 h-16 flex items-center">
          Blood Donation
        </div>
        <nav className="flex flex-col mt-4 space-y-1">
          {menuItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`block px-6 py-3 text-lg hover:bg-gray-700 transition-colors cursor-pointer ${
                active === name.toLowerCase() ? "bg-gray-700 font-semibold" : ""
              }`}
              onClick={() => {
                setActive(name.toLowerCase());
                setIsOpen(false);
              }}
            >
              {name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}