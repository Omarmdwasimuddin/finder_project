'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion'; // animation-এর জন্য

const topics = [
  { slug: '', label: 'What is Plasma' },
  { slug: 'who-can-donate-plasma', label: 'Who can donate plasma' },
  { slug: 'where-to-donate-plasma', label: 'Where to donate plasma' },
  { slug: 'how-to-donate-plasma', label: 'How to donate plasma' },
  { slug: 'change-to-plasma-donation', label: 'Change to plasma donation' },
  { slug: 'why-we-need-plasma-donors', label: 'Why we need plasma donors' },
  { slug: 'the-journey-of-plasma', label: 'The journey of plasma' },
];

export default function PlasmaLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-red-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-red-800 mb-8"
        >
          Plasma Donation
        </motion.h1>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {/* Home Button */}
          <Link
            href="/"
            className="flex items-center gap-1 px-4 py-2 text-sm font-medium bg-white text-red-700 border border-red-700 rounded-full hover:bg-red-100 transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>

          {/* Plasma Topic Links */}
          {topics.map(({ slug, label }) => {
            const fullPath = `/plasma/${slug}`;
            const isActive = pathname === fullPath;

            return (
              <Link
                key={slug}
                href={fullPath}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                  isActive
                    ? 'bg-red-700 text-white border-red-700 shadow-md'
                    : 'bg-white text-red-700 border-red-700 hover:bg-red-100'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </motion.nav>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
