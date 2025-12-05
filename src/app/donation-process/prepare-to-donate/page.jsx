'use client';

import { useState } from 'react';

export default function PrepareToDonatePage() {
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
        {language === 'en' ? 'Prepare to Donate' : 'রক্তদানের প্রস্তুতি'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Eat a healthy meal and drink plenty of water before donating. Get a good night’s sleep and bring a valid ID.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          রক্তদানের আগে স্বাস্থ্যকর খাবার খান এবং প্রচুর পানি পান করুন। ভালো ঘুমান এবং একটি বৈধ পরিচয়পত্র সঙ্গে নিয়ে যান।
        </p>
      )}
    </div>
  );
}