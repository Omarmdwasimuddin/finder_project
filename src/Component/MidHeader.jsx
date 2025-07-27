"use client";

import { useEffect, useState } from "react";
import { Search, LogIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export default function MidHeader() {
  const [query, setQuery] = useState("");
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() !== "") {
        const encoded = encodeURIComponent(query);
        axios
          .get(`/api/bloodGroup?bloodGroup=${encoded}`)
          .then((res) => {
            setDonors(res.data.data || []);
          })
          .catch(() => setDonors([]));
      } else {
        setDonors([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <>
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-3 sm:py-4 md:h-20 gap-3 sm:gap-0">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center justify-center sm:justify-start"
              aria-label="Go to homepage"
            >
              <Image
                src="/Img/FinderLogo2.png"
                alt="Blood Donation Logo"
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12"
                priority
              />
              <span className="ml-2 text-xl font-bold text-red-600 hover:text-red-700 transition-colors">
                Give Blood
              </span>
            </Link>

            {/* Search */}
            <div className="w-full sm:w-auto sm:flex-1 sm:max-w-md mt-2 sm:mt-0">
              <label htmlFor="header-search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="header-search"
                  type="text"
                  placeholder="Search by Blood Group (e.g., O+)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            {/* Login */}
            <div className="mt-2 sm:mt-0">
              <Link
                href="/donor/login"
                className="inline-flex items-center space-x-2 text-sm font-medium text-red-600 hover:text-red-700 focus:outline-none transition-colors"
              >
                <LogIn className="w-5 h-5" />
                <span>LogIn / Book</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Donor Results */}
      {donors.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {donors.map((donor, index) => (
            <div
              key={index}
              className="p-4 border rounded-xl shadow hover:shadow-md transition bg-white"
            >
              <h3 className="text-lg font-semibold text-red-600 mb-1">{donor.name}</h3>
              <p className="text-sm text-gray-700"><strong>Phone:</strong> {donor.phone}</p>
              <p className="text-sm text-gray-700"><strong>Blood:</strong> {donor.bloodGroup}</p>
              <p className="text-sm text-gray-700">
                <strong>Location:</strong> {donor.city}, {donor.upazila}, {donor.district}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
