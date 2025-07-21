'use client';

import { useState } from 'react';

export default function DonationFAQ() {
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
        {language === 'en' ? 'Donation FAQs' : 'রক্তদানের সাধারণ প্রশ্ন'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Get answers to frequently asked questions about blood donation.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          রক্তদান নিয়ে প্রায়শই জিজ্ঞাসিত প্রশ্নগুলোর উত্তর এখানে পাবেন।
        </p>
      )}
    </div>
  );
}
