'use client';

import { useState } from 'react';

export default function WhereToDonatePlasma() {
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
        {language === 'en' ? 'Where to Donate Plasma' : 'প্লাজমা কোথায় দান করবেন'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          You can donate plasma at certified donation centers, blood banks, or during plasma donation
          campaigns conducted by hospitals or NGOs.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          আপনি স্বীকৃত দান কেন্দ্র, ব্লাড ব্যাংক অথবা হাসপাতাল ও এনজিও পরিচালিত প্লাজমা দান ক্যাম্পেইনে
          প্লাজমা দান করতে পারেন।
        </p>
      )}
    </div>
  );
}

