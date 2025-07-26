'use client';

import { Search, LogIn } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function MidHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-2 sm:py-0 sm:h-16 md:h-20 gap-2 sm:gap-0">
          
          {/* Logo + Give Blood - Stacked on mobile */}
          <Link 
            href="/" 
            className="flex items-center w-full sm:w-auto justify-center sm:justify-start order-first sm:order-none"
            aria-label="Go to homepage"
          >
            <div className="flex items-center">
              <Image 
                src="/Img/FinderLogo2.png" 
                alt="Blood Donation Organization Logo"
                width={48}
                height={48}
                className="mr-2 md:mr-3 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                priority
              />
              <span className="text-lg md:text-xl font-bold text-red-600 hover:text-red-700 transition-colors">
                Give Blood
              </span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="relative w-full sm:w-auto sm:flex-1 sm:max-w-md order-last sm:order-none mx-0 sm:mx-2 md:mx-4">
            <label htmlFor="header-search" className="sr-only">Search</label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 md:h-5 md:w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              id="header-search"
              type="text"
              placeholder="Search"
              className="block w-full pl-8 md:pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
            />
          </div>

          {/* Login Link with Icon */}
          <div className="w-full sm:w-auto flex justify-center sm:justify-end order-2 sm:order-none ml-0 sm:ml-2 md:ml-6">
            <Link
              href="/donor/login"
              className="inline-flex items-center space-x-2 text-sm font-medium text-red-600 hover:text-red-700 focus:outline-none transition-colors whitespace-nowrap"
            >
              <LogIn className="w-5 h-5 text-red-600" />
              <span>LogIn / Book an appointment</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
