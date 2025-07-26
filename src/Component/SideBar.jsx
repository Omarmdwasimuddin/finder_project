"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");

  const menuItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/dashboard/profile" },
    { name: "Donation History", href: "/dashboard/history" },
    { name: "Nearby Requests", href: "/dashboard/requests" },
    { name: "Settings", href: "/dashboard/settings" }
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-gray-200 fixed top-0 left-0 flex flex-col">
      <div className="px-6 py-4 text-2xl font-bold border-b border-gray-700">
        Blood Donation
      </div>
      <nav className="flex flex-col mt-4 space-y-1 flex-grow">
        {menuItems.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className={`block px-6 py-3 text-lg hover:bg-gray-700 transition-colors cursor-pointer ${
              active === name.toLowerCase() ? "bg-gray-700 font-semibold" : ""
            }`}
            onClick={() => setActive(name.toLowerCase())}
          >
            {name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
