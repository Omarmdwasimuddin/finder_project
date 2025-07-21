'use client';

import { useState } from 'react';

export default function TravelConsiderationsPage() {
  const [language, setLanguage] = useState('en');
  const toggleLanguage = () => setLanguage(prev => (prev === 'en' ? 'bn' : 'en'));

  return (
    <div className="bg-red-300 min-h-[400px] p-6">
      <button
        onClick={toggleLanguage}
        className="mb-4 px-4 py-2 bg-white text-red-600 font-semibold rounded shadow hover:bg-gray-100 transition"
      >
        {language === 'en' ? 'বাংলায় দেখুন' : 'See in English'}
      </button>

      <h2 className="text-2xl font-bold text-red-700 mb-4">
        {language === 'en' ? 'Travel considerations' : 'ভ্রমণের বিবেচনা'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Recent travel to certain countries may affect your ability to donate. This is to ensure safety from
          infectious diseases. Always inform staff about your travel history.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          কিছু নির্দিষ্ট দেশে সাম্প্রতিক ভ্রমণ করলে আপনার রক্তদানের যোগ্যতা প্রভাবিত হতে পারে। এটি সংক্রামক রোগ প্রতিরোধে গুরুত্বপূর্ণ।
          আপনার ভ্রমণের ইতিহাস কর্মীদের জানানো অপরিহার্য।
        </p>
      )}
    </div>
  );
}