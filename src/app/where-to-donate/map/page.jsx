'use client';

import { useState } from 'react';

export default function MapPage() {
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
        {language === 'en' ? 'Donation Center Map' : 'রক্তদান কেন্দ্রের মানচিত্র'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Use our interactive map to locate donation centers near you. Zoom in to explore areas and find center addresses, hours, and contact details.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          আমাদের ইন্টার‌্যাকটিভ মানচিত্র ব্যবহার করে আপনার নিকটবর্তী রক্তদান কেন্দ্র খুঁজুন। এলাকা অনুসন্ধান করতে জুম করুন এবং কেন্দ্রের ঠিকানা, সময়সূচি ও যোগাযোগের তথ্য জেনে নিন।
        </p>
      )}
    </div>
  );
}
