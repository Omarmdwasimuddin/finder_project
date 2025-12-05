'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function TopHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Navigation items
  const navItems = [
    { name: 'Who we are', href: '/About' },
    { name: 'What we do', href: '/services' },
    { name: 'How we help', href: '/help' },
    { name: 'How you can help', href: '/get-involved' }
  ];

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [pathname]);

  return (
    <header className="z-50 border-b border-gray-300 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-red-600 transition-colors">
            Blood & Transplant
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            {navItems.map((item, index) => (
              <div key={item.href} className="flex items-center">
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:text-red-600 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                </Link>
                {/* Add border after each item except the last one */}
                {index !== navItems.length - 1 && (
                  <span className="h-5 w-px bg-gray-400 mx-1"></span>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile dropdown toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-blue-50 focus:outline-none flex items-center gap-1 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-label="Toggle dropdown"
          >
            <svg
              className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isDropdownOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-xs font-medium ${
                    pathname === item.href
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:text-red-600 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                </Link>
                {/* Add border after each item except the last one */}
                {index !== navItems.length - 1 && (
                  <div className="h-px bg-gray-200 mx-3"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}