'use client';

import { useState } from 'react';

export default function DemandForDifferentBloodType() {
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
        {language === 'en'
          ? 'Demand for Different Blood Types'
          : 'বিভিন্ন রক্তের গ্রুপের চাহিদা'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Blood demand varies by type. O-negative is the universal donor, often in highest demand for emergencies.
          A-positive and B-positive are common, but AB plasma is also crucial. Donating your type helps meet specific
          needs.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          বিভিন্ন রক্তের গ্রুপের চাহিদা ভিন্ন ভিন্ন হয়। O-নেগেটিভ সব ধরনের রোগীর জন্য ব্যবহারযোগ্য হওয়ায় জরুরি অবস্থায় এর চাহিদা সবচেয়ে বেশি। 
          A-পজিটিভ ও B-পজিটিভ সাধারণ হলেও AB গ্রুপের প্লাজমাও অনেক গুরুত্বপূর্ণ। আপনার রক্তের গ্রুপ অনুযায়ী দান করলে নির্দিষ্ট প্রয়োজন পূরণে সাহায্য হয়।
        </p>
      )}
    </div>
  );
}
