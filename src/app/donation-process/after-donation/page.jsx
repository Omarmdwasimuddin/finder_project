'use client';

import { useState } from 'react';

export default function AfterDonationPage() {
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
        {language === 'en' ? 'After Donation Care' : 'রক্তদানের পর করণীয়'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          After donating blood, rest for a few minutes, drink fluids, and avoid strenuous activity for the rest of the day.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          রক্তদান করার পর কিছুক্ষণ বিশ্রাম নিন, তরল পান করুন এবং দিনটির বাকি সময় অতিরিক্ত শারীরিক পরিশ্রম এড়িয়ে চলুন।
        </p>
      )}
    </div>
  );
}