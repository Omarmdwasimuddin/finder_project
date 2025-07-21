'use client';

import { useState } from 'react';

export default function DonationProcessPage() {
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
        {language === 'en' ? 'The Donation Process' : 'রক্তদানের প্রক্রিয়া'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Giving blood is simple and safe. Learn about each step of the process, from preparing to donate to what happens after.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          রক্তদান একটি সহজ ও নিরাপদ প্রক্রিয়া। প্রস্তুতি থেকে শুরু করে দানের পরবর্তী ধাপগুলো সম্পর্কে জানুন।
        </p>
      )}
    </div>
  );
}