'use client';

import { useState } from 'react';

export default function HowBloodIsUsedPage() {
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
        {language === 'en' ? 'How Blood is Used' : 'রক্ত কীভাবে ব্যবহার হয়'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Blood is used in surgeries, trauma care, childbirth complications, cancer treatments, and chronic conditions.
          It can be separated into red cells, platelets, and plasma to treat specific issues.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          রক্ত অপারেশন, দুর্ঘটনা, সন্তান জন্মের জটিলতা, ক্যানসারের চিকিৎসা এবং দীর্ঘস্থায়ী রোগে ব্যবহার হয়। 
          এটি লাল রক্তকণিকা, প্লাজমা ও প্লেটলেটে ভাগ করে নির্দিষ্ট চিকিৎসায় ব্যবহার করা হয়।
        </p>
      )}
    </div>
  );
}
