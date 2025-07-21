'use client';

import { useState } from 'react';

export default function DonationVenuesPage() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  return (
    <div className="bg-red-300 min-h-[400px] p-6">
      <button
        onClick={toggleLanguage}
        className="mb-4 px-4 py-2 bg-white text-red-600 font-semibold rounded shadow hover:bg-gray-100 transition"
      >
        {language === 'en' ? 'বাংলায় দেখুন' : 'See in English'}
      </button>

      <h2 className="text-2xl font-bold text-red-700 mb-4">
        {language === 'en' ? 'Where to Donate Blood' : 'রক্ত কোথায় দিতে পারবেন'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Blood donation venues include mobile camps, hospitals, and community centers. Choose a location that's convenient and meets safety standards.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          রক্তদান কেন্দ্র হতে পারে মোবাইল ক্যাম্প, হাসপাতাল বা কমিউনিটি সেন্টার। এমন একটি স্থান বেছে নিন যা নিরাপদ এবং আপনার জন্য সুবিধাজনক।
        </p>
      )}
    </div>
  );
}